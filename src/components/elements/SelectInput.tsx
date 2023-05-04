import React from "react";

type Props = {
  children?: JSX.Element | JSX.Element[] | null;
  label?: string;
  defaultValue?: string;
  className?: string;
};

function SelectInput({ label, defaultValue, className, children }: Props) {
  return (
    <div className={`flex items-center gap-6 w-full ${className}`}>
      {label && (
        <label className="block mb-2 text-sm font-medium text-gray-900">
          {label}
        </label>
      )}
      <select
        defaultValue={defaultValue}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option disabled>{defaultValue}</option>
        {children}
      </select>
    </div>
  );
}

export default SelectInput;
