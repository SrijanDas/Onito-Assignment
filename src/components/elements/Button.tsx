import React from "react";

type Props = {
  text?: string;
  textUpperCase?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => any;
  outlined?: boolean;
  className?: string;
  color?: "primary" | "secondary" | "green" | "light";
};

function Button({
  text = "Button",
  onClick = () => {},
  type = "button",
  textUpperCase = false,
  className,
  color = "primary",
}: Props) {
  const btnColorClass =
    color === "primary"
      ? "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
      : color === "green"
      ? "text-white bg-green-700 hover:bg-green-800 focus:ring-green-300"
      : color === "light"
      ? "text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
      : "text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-red-300";
  return (
    <button
      onClick={onClick}
      type={type ?? "button"}
      className={`${btnColorClass} ${className} focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center ${
        textUpperCase && "uppercase"
      }`}
    >
      {text}
    </button>
  );
}

export default Button;
