import Button from "@/components/elements/Button";
import Input from "@/components/elements/Input";
import SelectInput from "@/components/elements/SelectInput";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  bloodGroupOptions,
  genderOptions,
  govtIdTypeOptions,
  guardianRelationOptions,
  maritalStatusOptions,
  religionOptions,
} from "@/utils/formOptions";
// import { FormData } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import userFormSchema from "@/validators/userForm.validator";
import * as yup from "yup";
import { addDoc } from "firebase/firestore";
import { UserCollection } from "@/firebase/db";
import { toast } from "react-toastify";
import Backdrop from "@/components/shared/Backdrop";
import { useRouter } from "next/router";
import { Country, State } from "country-state-city";

type Props = {};

type FormData = yup.InferType<typeof userFormSchema>;

function AddUser({}: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const {
    register,
    setValue,
    reset,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(userFormSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    // console.log(data);
    setLoading(true);
    try {
      const docRef = await addDoc(UserCollection, data);

      if (docRef.id) {
        toast("User Added Successfully😁");
        router.push("/users");
        reset();
      }
    } catch (e) {
      console.error("Error adding document: ", e);
      toast("Error adding user!!!😓");
    } finally {
      setLoading(false);
    }
  });
  // const [country, setCountry] = useState("");
  const [stateOptions, setStateOptions] = useState<
    {
      value: string;
      label: string;
    }[]
  >([
    {
      value: "",
      label: "Select State",
    },
  ]);

  const countryOptions = Country.getAllCountries().map((country) => ({
    value: country.isoCode,
    label: `${country.name} - ${country.isoCode}`,
  }));

  const country = watch("country");

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {});
    if (country) {
      const newOptions = State.getStatesOfCountry(country).map((state) => ({
        value: state.name,
        label: state.name,
      }));

      setStateOptions(newOptions);
    }

    return () => subscription.unsubscribe();
  }, [watch, country]);

  // const [stateOptions, setStateOptions] = useState()

  return (
    <>
      <Backdrop loading={loading} />
      <div className="px-10 py-5 lg:px-24 lg:py-10 min-h-screen ">
        <form onSubmit={onSubmit}>
          <FormSection col={3} title="Personal Details">
            <Input
              label="Name"
              placeholder="Enter Name"
              register={register("name")}
              error={errors.name?.message}
              required
            />
            <Input
              label="Age"
              placeholder="Age in Years"
              register={register("age")}
              error={errors.age?.message}
              required
            />
            <SelectInput
              error={errors.sex?.message}
              register={register("sex")}
              label="Sex"
              defaultValue="Enter Sex"
              required
            >
              {genderOptions.map((option, i) => (
                <option key={`gender_option_${i}`} value={option.value}>
                  {option.label}
                </option>
              ))}
            </SelectInput>
            <Input
              register={register("mobile")}
              error={errors.mobile?.message}
              label="Mobile"
              placeholder="Enter Mobile"
            />
            <div className="lg:col-span-2 flex gap-6">
              <SelectInput
                className="w-[40%]"
                label="Govt Issued Id"
                defaultValue="Id Type"
                register={register("govtIdType")}
                error={errors.govtIdType?.message}
              >
                {govtIdTypeOptions.map((option, i) => (
                  <option
                    key={`govt_id_option_${i}`}
                    value={option.value}
                    disabled={option.value === ""}
                  >
                    {option.label}
                  </option>
                ))}
              </SelectInput>
              <Input
                register={register("govtId")}
                error={errors.govtId?.message}
                placeholder="Enter Govt Id"
              />
            </div>
          </FormSection>
          <FormSection title="Contact Details">
            <div className="flex items-center gap-6">
              <SelectInput
                register={register("guardianRelation")}
                error={errors.guardianRelation?.message}
                label="Guardian Details"
                defaultValue="Enter label"
              >
                {guardianRelationOptions.map((option, i) => (
                  <option key={`guardian_option_${i}`} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </SelectInput>
              <Input
                register={register("guardianName")}
                error={errors.guardianName?.message}
                placeholder="Enter Guardian Name"
              />
            </div>
            <Input
              register={register("email")}
              error={errors.email?.message}
              label="Email"
              placeholder="Enter Email"
              type="email"
            />
            <Input
              register={register("emergencyContactNumber")}
              error={errors.emergencyContactNumber?.message}
              label="Emergency Contact Number"
              placeholder="Enter Emergency Contact Number"
            />
          </FormSection>
          <FormSection title="Address Details">
            <Input
              placeholder="Enter Address"
              register={register("address")}
              label="Address"
            />
            <SelectInput
              register={register("country")}
              label="Country"
              defaultValue=""
            >
              <>
                <option disabled value="">
                  Select Country
                </option>
                {countryOptions.map((option, i) => (
                  <option key={`country_option_${i}`} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </>
            </SelectInput>
            <SelectInput
              register={register("state")}
              label="State"
              defaultValue="Select State"
            >
              {stateOptions.map((option, i) => (
                <option key={`country_option_${i}`} value={option.value}>
                  {option.label}
                </option>
              ))}
            </SelectInput>
            <Input
              register={register("city")}
              placeholder="Enter City"
              label="City"
            />
            <Input
              register={register("pincode")}
              placeholder="Enter Pincode"
              label="Pincode"
            />
          </FormSection>
          <FormSection title="Other Details" col={4}>
            <Input
              register={register("occupation")}
              error={errors.occupation?.message}
              label="Occupation"
              placeholder="Enter Occupation"
            />
            <SelectInput
              register={register("religion")}
              error={errors.religion?.message}
              label="Religion"
              defaultValue="Enter Religion"
            >
              {religionOptions.map((option, i) => (
                <option key={`religion_option_${i}`} value={option.value}>
                  {option.label}
                </option>
              ))}
            </SelectInput>
            <SelectInput
              register={register("maritalStatus")}
              error={errors.maritalStatus?.message}
              label="Marital Status"
              defaultValue="Enter Marital Status"
            >
              {maritalStatusOptions.map((option, i) => (
                <option key={`mariatal_option_${i}`} value={option.value}>
                  {option.label}
                </option>
              ))}
            </SelectInput>
            <SelectInput
              register={register("bloodGroup")}
              error={errors.bloodGroup?.message}
              label="Blood Group"
              defaultValue="Enter Blood Group"
            >
              {bloodGroupOptions.map((option, i) => (
                <option key={`mariatal_option_${i}`} value={option.value}>
                  {option.label}
                </option>
              ))}
            </SelectInput>
            <Input
              register={register("nationality")}
              error={errors.nationality?.message}
              label="Nationality"
              placeholder="Enter Nationality"
            />
          </FormSection>
          <div className="mt-5 w-full flex flex-1 items-center justify-end gap-6">
            <Button
              onClick={() => router.back()}
              text="Cancel"
              color="secondary"
            />

            <Button type="submit" text="Submit" color="green" />
          </div>
        </form>
      </div>
    </>
  );
}

export default AddUser;

type FormSectionProps = {
  title: string;
  children?: JSX.Element | JSX.Element[] | null;
  col?: number;
};

function FormSection({ title, col = 3, children }: FormSectionProps) {
  return (
    <div className="my-5">
      <h4 className="font-semibold underline underline-offset-4 mb-5 text-lg">
        {title}
      </h4>
      <div className={`grid grid-cols-1 md:grid-cols-3 gap-8`}>{children}</div>
    </div>
  );
}
