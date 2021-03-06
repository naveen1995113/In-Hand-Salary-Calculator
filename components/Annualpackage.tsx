import React from "react";
export interface IAnnualprops {
  isCTCChecked?: boolean;
  isGrossChecked?: boolean;
  pack: string;
  changePackage: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Annualpackage: React.FC<IAnnualprops> = ({
  pack,
  changePackage,
  isCTCChecked,
  isGrossChecked,
}) => {
  return (
    <>
      {isCTCChecked || isGrossChecked ? (
        <div className="my-6">
          <label className="pr-2 text-lg tracking-wide">Annual Package: </label>
          <input
            type="text"
            value={pack}
            onChange={changePackage}
            className="p-1 rounded-md outline-none text-mb1"
            placeholder="Enter Package"
          />
        </div>
      ) : null}
    </>
  );
};
export default Annualpackage;
