import React from "react";
import PaySlipValues from "./PaySlipValues";
export interface IPayslipprops {
  basicPay: number;
  hra: number;
  lta: number;
  medical: number;
  conveyanceallow: number;
  specialallow: number;
  professionalTax: number;
  providentFund: number;
}
const PaySlip: React.FC<IPayslipprops> = ({
  basicPay,
  hra,
  lta,
  medical,
  conveyanceallow,
  specialallow,
  providentFund,
  professionalTax,
}) => {
  const date = new Date();
  const fullYear = date.getFullYear();
  const monthName = date.toLocaleString("default", {
    month: "long",
  });
  const grossEarnings =
    basicPay + hra + lta + medical + conveyanceallow + specialallow;
  const grossDeductions = providentFund + professionalTax;
  const netPay = grossEarnings - grossDeductions;
  return (
    <div className="container w-4/5 mx-auto my-10 text-black bg-gray-200 rounded-lg shadow-lg">
      <h2 className="p-4 text-lg font-semibold text-center text-white rounded-t-lg bg-slate-500">
        Pay Slip for the Month of {monthName} {fullYear}
      </h2>
      <div className="p-4 md:flex">
        <div className="w-full p-2 border-2 border-black ">
          <PaySlipValues title="Basic Pay" value={basicPay} />
          <PaySlipValues title="House Rent Allowance" value={hra} />
          <PaySlipValues title="LTA" value={lta} />
          <PaySlipValues title="Medical" value={medical} />
          <PaySlipValues title="Conveyance Allowance" value={conveyanceallow} />
          <PaySlipValues title="Special Allowance" value={specialallow} />

          <div className="border-t-2 border-black">
            <PaySlipValues title="GROSS EARNINGS" value={grossEarnings} />
          </div>
        </div>
        <div className="w-full p-2 mt-4 border-2 border-black md:border-l-0 md:mt-0">
          <PaySlipValues title="Provident fund" value={providentFund} />
          <PaySlipValues title="Professional Tax" value={professionalTax} />
          <div className="border-t-2 border-black md:mt-24">
            <PaySlipValues title="GROSS DEDUCTIONS" value={grossDeductions} />
          </div>
        </div>
      </div>
      <div className="px-4 pb-4 ">
        <div className="p-2 space-x-3 text-lg font-semibold border-2 border-black">
          <span>NET IN-HAND PAY (approx.):</span>
          <span>{netPay}</span>
        </div>
      </div>
    </div>
  );
};
export default PaySlip;
