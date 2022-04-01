import React from "react";
export interface IValueProps {
  title: string;
  value?: number;
}
const PaySlipValues: React.FC<IValueProps> = ({ title, value }) => {
  return (
    <div className="flex justify-between">
      <div>{title}</div>
      <div>{value}</div>
    </div>
  );
};
export default PaySlipValues;
