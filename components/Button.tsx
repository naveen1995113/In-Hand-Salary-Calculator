import React from "react";
export interface IButtonprops {
  onClick: () => void;
  isCTCChecked: boolean;
  isGrossChecked: boolean;
}
const Button: React.FC<IButtonprops> = ({
  onClick,
  isCTCChecked,
  isGrossChecked,
}) => {
  const disable = isCTCChecked || isGrossChecked ? false : true;
  return (
    <button
      onClick={onClick}
      disabled={disable}
      className="mb-4 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out disabled:bg-blue-900 disabled:cursor-not-allowed"
    >
      Show PaySlip
    </button>
  );
};
export default Button;
