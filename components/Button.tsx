import React from "react";
export interface IButtonprops {
  onClick?: () => void;
  btnText: string;
  disabled?: boolean;
  width?: string;
}

const Button: React.FC<IButtonprops> = ({
  onClick,
  btnText,
  disabled,
  width,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{ width:`${width}`,}}
      className="mb-4 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out disabled:opacity-25 disabled:cursor-not-allowed"
    >
      {btnText}
    </button>
  );
};
export default Button;
