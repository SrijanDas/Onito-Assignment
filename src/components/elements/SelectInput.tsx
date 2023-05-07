import React from "react";

type Props = {
  children?: JSX.Element | JSX.Element[] | null;
  label?: string;
  defaultValue?: string;
  className?: string;
  required?: boolean;
  error?: string | null | undefined;
  register?: any;
};

function SelectInput({
  label,
  defaultValue,
  className,
  required,
  register,
  error,
  children,
}: Props) {
  return (
    <div className={`flex items-center gap-6 w-full ${className}`}>
      {label && (
        <label className="mb-2 text-sm font-medium text-gray-900 flex gap-1">
          {label}
          {required && <span className="text-red-600">*</span>}
        </label>
      )}
      <div className="space-y-1 w-full">
        <select
          {...register}
          defaultValue={defaultValue}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option disabled>{defaultValue}</option>
          {children}
        </select>
        <div className="h-3">
          <p className="text-sm text-red-700">{error}</p>
        </div>
      </div>
    </div>
  );
}

export default SelectInput;
