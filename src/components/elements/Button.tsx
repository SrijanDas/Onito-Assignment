import React from "react";

type Props = {
  text?: string;
  textUpperCase?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  outlined?: boolean;
  color?: "primary" | "secondary";
};

function Button({
  text = "Button",
  onClick = () => {},
  type = "button",
  textUpperCase = true,
  color = "primary",
}: Props) {
  const btnColorClass =
    color === "primary"
      ? "text-white bg-green-700 hover:bg-green-800 focus:ring-green-300"
      : "text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-red-300";
  return (
    <button
      onClick={onClick}
      type={type ?? "button"}
      className={`${btnColorClass} focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ${
        textUpperCase && "uppercase"
      }`}
    >
      {text}
    </button>
  );
}

export default Button;
