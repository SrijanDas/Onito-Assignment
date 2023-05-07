import React from "react";

type Props = {
  label?: string;
  placeholder: string;
  required?: boolean;
  type?: string;
  register?: any;
  error?: string | null | undefined;
};

function Input({
  label,
  placeholder,
  required,
  type = "text",
  register,
  error,
}: Props) {
  return (
    <div className="flex items-center gap-6 w-full">
      {label && (
        <label className="mb-2 text-sm font-medium text-gray-900 flex gap-1">
          {label} {required && <span className="text-red-600">*</span>}
        </label>
      )}
      <div className="space-y-1 w-full">
        <input
          {...register}
          type={type}
          className={`bg-gray-50 border ${
            error ? "border-red-700" : "border-gray-300"
          } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
          placeholder={placeholder}
        />
        <div className="h-3">
          <p className="text-sm text-red-700">{error}</p>
        </div>
      </div>
    </div>
  );
}

export default Input;
