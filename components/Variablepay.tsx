import React from "react";
export interface IVariableprops {
  isCTCChecked?: boolean;
  payValue: string;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Variablepay: React.FC<IVariableprops> = ({
  isCTCChecked,
  changeHandler,
  payValue,
}) => {
  return (
    <>
      {isCTCChecked && (
        <div className="my-6">
          <label className="pr-2 text-lg tracking-wide">Variable Pay %: </label>
          <input
            type="text"
            value={payValue}
            onChange={changeHandler}
            placeholder="0%"
            className="p-1 rounded-md outline-none text-mb1"
          />
        </div>
      )}
    </>
  );
};
export default Variablepay;
