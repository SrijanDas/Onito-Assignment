import {
  bloodGroupOptions,
  genderOptions,
  govtIdTypeOptions,
  guardianRelationOptions,
  maritalStatusOptions,
  religionOptions,
} from "@/utils/formOptions";
import * as yup from "yup";

const userFormSchema = yup
  .object({
    name: yup.string().required("Name is required"),
    age: yup
      .number()
      .typeError("Age must be a number")
      .positive("Enter a valid age")
      .integer("Enter a valid age")
      .required("Age is required"),
    sex: yup
      .string()
      .oneOf(
        genderOptions.map((o) => o.value),
        "Select gender"
      )
      .required("Sex is required"),
    mobile: yup
      .string()
      .default(null)
      .max(12)
      .min(10, "Phone Number must be 10 digits long")
      .notRequired(),
    govtIdType: yup
      .string()
      .oneOf(
        govtIdTypeOptions.map((o) => o.value),
        "Select Id Type"
      )

      .notRequired(),

    // Regex for pan numbers
    // https://stackoverflow.com/questions/37251151/pancard-structure-validation-in-javascript-and-php-also
    govtId: yup
      .string()
      .when("govtIdType", {
        is: "pan",
        then: (schema) =>
          schema
            .length(10, "Enter a valid PAN number")
            .matches(
              /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/,
              "Enter a valid PAN number"
            ),
        otherwise: (schema) =>
          schema.length(12, "Enter a valid Aadhar number").notRequired(),
      })
      .notRequired(),
    guardianRelation: yup
      .string()
      .oneOf(
        guardianRelationOptions.map((o) => o.value),
        "Select relation"
      )
      .optional()
      .nullable()
      .default(null),
    guardianName: yup.string(),
    email: yup.string().email("Enter a valid email address"),
    emergencyContactNumber: yup.string(),

    address: yup.string().notRequired(),
    country: yup.string().notRequired(),
    state: yup.string().notRequired(),
    city: yup.string().notRequired(),
    pincode: yup.string().notRequired(),
    occupation: yup.string(),
    religion: yup.string().oneOf(
      religionOptions.map((o) => o.value),
      "Select religion"
    ),
    maritalStatus: yup.string().oneOf(
      maritalStatusOptions.map((o) => o.value),
      "Select marital status"
    ),
    bloodGroup: yup.string().oneOf(
      bloodGroupOptions.map((o) => o.value),
      "Select blood group"
    ),
    nationality: yup.string(),
  })
  .required();

export default userFormSchema;
