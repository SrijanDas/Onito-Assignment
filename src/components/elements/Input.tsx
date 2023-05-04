import React from "react";

type Props = {
  label?: string;
  placeholder: string;
  required?: boolean;
  type?: string;
};

function Input({ label, placeholder, required, type = "text" }: Props) {
  return (
    <div className="flex items-center gap-6 w-full">
      {label && (
        <label className="mb-2 text-sm font-medium text-gray-900 flex gap-1">
          {label} {required && <span className="text-red-600">*</span>}
        </label>
      )}
      <input
        type={type}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
