import Button from "@/components/elements/Button";
import Input from "@/components/elements/Input";
import SelectInput from "@/components/elements/SelectInput";
import Link from "next/link";
import React from "react";

type Props = {};
type FormSectionProps = {
  title: string;
  children?: JSX.Element | JSX.Element[] | null;
};

function FormSection({ title, children }: FormSectionProps) {
  return (
    <div className="my-5">
      <h4 className="font-semibold underline underline-offset-4 mb-5 text-lg">
        {title}
      </h4>
      {children}
    </div>
  );
}

function AddUser({}: Props) {
  return (
    <div className="m-24 min-h-screen ">
      <form>
        <FormSection title="Personal Details">
          <div className="grid grid-cols-3 gap-8">
            <Input label="Name" placeholder="Enter Name" required />
            <Input
              label="Date of Birth or Age"
              placeholder="DD/MM/YYYY or Age in Years"
              required
            />
            <SelectInput label="Sex" defaultValue="Enter Sex">
              <option value="M">Male</option>
              <option value="F">Female</option>
              <option value="O">Others</option>
            </SelectInput>
            <Input label="Mobile" placeholder="Enter Mobile" />
            <div className="col-span-2 flex gap-6">
              <SelectInput
                className="w-[40%]"
                label="Govt Issued Id"
                defaultValue="Id Type"
              >
                <option value="PAN">Pan</option>
                <option value="AADHAR">Aadhar</option>
              </SelectInput>
              <Input placeholder="Enter Govt Id" />
            </div>
          </div>
        </FormSection>
        <FormSection title="Contact Details">
          <div className="grid grid-cols-3 gap-8">
            <div className="flex items-center gap-6">
              <SelectInput label="Guardian Details" defaultValue="Enter label">
                <option value="FATHER">Father</option>
                <option value="MOTHER">Mother</option>
                <option value="OTHER">Other</option>
              </SelectInput>
              <Input placeholder="Enter Guardian Name" />
            </div>
            <Input label="Email" placeholder="Enter Email" type="email" />
            <Input
              label="Emergency Contact Number"
              placeholder="Enter Emergency Contact Number"
            />
          </div>
        </FormSection>
        <FormSection title="Other Details">
          <div className="grid grid-cols-4 gap-8">
            <Input label="Occupation" placeholder="Enter Occupation" />
            <SelectInput label="Religion" defaultValue="Enter Religion">
              <option value="HINDU">Hindu</option>
              <option value="SIKH">Sikh</option>
              <option value="MUSLIM">Muslim</option>
              <option value="CHRISTIAN">Christian</option>
            </SelectInput>
            <SelectInput
              label="Marital Status"
              defaultValue="Enter Marital Status"
            >
              <option value="SINGLE">Single</option>
              <option value="MARRIED">Married</option>
              <option value="DIVORCED">Divorced</option>
            </SelectInput>
            <SelectInput label="Blood Group" defaultValue="Enter Blood Group">
              <option value="A+">A+</option>
              <option value="B+">B+</option>
              <option value="O+">O+</option>
            </SelectInput>
            <Input label="Nationality" placeholder="Enter Nationality" />
          </div>
        </FormSection>
        <div className="mt-5 w-full flex flex-1 items-center justify-end gap-6">
          <Link href="/">
            <Button text="Cancel" color="secondary" />
          </Link>
          <Button text="Submit" color="primary" />
        </div>
      </form>
    </div>
  );
}

export default AddUser;
