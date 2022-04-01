import React from "react";
export interface ICheckboxprops {
  isChecked?: boolean;
  label?: string;
  onCheck?: () => void;
}
const Checkbox: React.FC<ICheckboxprops> = ({ label, isChecked, onCheck }) => {
  return (
    <div className="flex items-center justify-start ">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onCheck}
        className="w-4 h-4 mr-2 text-orange-400 hover:cursor-pointer"
      />
      <label>{label}</label>
    </div>
  );
};

export default Checkbox;
