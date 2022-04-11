import type { NextPage } from "next";
import React from "react";
import Annualpackage from "../components/Annualpackage";
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import Variablepay from "../components/Variablepay";
import PaySlip from "../components/PaySlip";
import ProfessionalTax from "../components/ProfessionalTax";
import { stateContext } from "./_app";
export interface IHomeProps { }
const Home: NextPage<IHomeProps> = () => {
  const [isCTC, setCTC] = React.useState(false);
  const [isGross, setGross] = React.useState(false);
  const [variable, setVariable] = React.useState("");
  const [annualPackage, setAnnualPackage] = React.useState("");
  const [isPaySlip, setIsPaySlip] = React.useState(false);
  const selectedState = React.useContext(stateContext);
  const [
    [
      Basic_Salary,
      HRA,
      Medical,
      Conveyance_Allowances,
      Special_Allowances,
      LTA,
      Net_Package,
      ProfessionTax,
      Provident_Fund,
    ],
    setPayValues,
  ] = React.useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

  const CTCHandler = () => {
    selectedState !== "" ? setCTC(true) : alert("Please choose your city!");
    setGross(false);
    annualPackage!=="" && clickHandler();
  };

  const GrossHandler = () => {
    selectedState !== "" ? setGross(true) : alert("Please choose your city!");
    setCTC(false);
    annualPackage!=="" && clickHandler();
  };

  React.useEffect(() => {
    if (selectedState === "") {
      setCTC(false);
      setGross(false);
    }
  }, [selectedState]);

  const variableHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      setVariable('0');
    }
    setVariable(e.target.value);
  };

  const packageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnnualPackage(e.target.value);
  };
  const disable = isCTC || isGross ? false : true;

  const clickHandler = () => {
    console.log('triggered');
    let GrossPackage =
      isCTC
        ? +annualPackage - (+annualPackage * (+variable / 100))
        : +annualPackage;
    let Annual_Basic_Salary = Math.round(GrossPackage * (40 / 100)); //Annual basic salary is 40% of gross
    let Annual_HRA = Math.round(Annual_Basic_Salary * (40 / 100)); // Annual HRA is 40% of  annual basic salary
    let Annual_Provident_Fund = Math.round(Annual_Basic_Salary * (12 / 100)); // Annual PF is 12% of annual basic salary
    let Annual_Gratuity = Math.round(Annual_Basic_Salary * (4.81 / 100)); // Annual Gratuity is 4.81% of annual basic salary
    let Annual_Net_Package =
      GrossPackage - (Annual_Provident_Fund + Annual_Gratuity);
    let Annual_Medical = 1250 * 12; // Medical is rs.1250/- per month fixed
    let Annual_Conveyance_Allowances = 1600 * 12; // ConvAllow is rs.1600/month fixed
    let Annual_LTA = 1500 * 12; // LTA is 1500/month fixed
    let Annual_Special_Allowances =
      Annual_Net_Package -
      (Annual_Basic_Salary +
        Annual_HRA +
        Annual_Medical +
        Annual_Conveyance_Allowances);

    //Conversion to each month
    let Basic_Salary = Math.round(Annual_Basic_Salary / 12);
    let HRA = Math.round(Annual_HRA / 12);
    let Provident_Fund = Math.round(Annual_Provident_Fund / 12);
    let Medical = Math.round(Annual_Medical / 12);
    let Conveyance_Allowances = Math.round(Annual_Conveyance_Allowances / 12);
    let Special_Allowances = Math.round(Annual_Special_Allowances / 12);
    let LTA = Math.round(Annual_LTA / 12);

    const profTax = ProfessionalTax.bind(null, selectedState, Basic_Salary);
    let ProfessionTax = profTax();
    ProfessionTax = Math.round(ProfessionTax);

    setPayValues([
      Basic_Salary,
      HRA,
      Medical,
      Conveyance_Allowances,
      Special_Allowances,
      LTA,
      Net_Package,
      ProfessionTax,
      Provident_Fund,
    ]);
    Basic_Salary && HRA && Provident_Fund && setIsPaySlip(true);
  };
  return (
    <>
      <div className="container w-4/5 mx-auto my-10 text-center rounded-md shadow-lg md:w-1/2 bg-zinc-800">
        <h2 className="p-3 text-2xl font-medium underline shadow-sm">
          Choose One:
        </h2>
        <div className="flex items-center justify-center space-x-3 p-2.5  text-lg">
          <Checkbox
            label="CTC {Cost-To-Company}"
            isChecked={isCTC}
            onCheck={CTCHandler}
          />
          <Checkbox
            label="Gross Salary"
            isChecked={isGross}
            onCheck={GrossHandler}
          />
        </div>
        {/* Input */}
        <Variablepay
          payValue={variable}
          changeHandler={variableHandler}
          isCTCChecked={isCTC}
        />
        <Annualpackage pack={annualPackage} changePackage={packageHandler} isCTCChecked={isCTC}
          isGrossChecked={isGross}/>
        {/* Submit button */}
        <Button
          onClick={clickHandler}
          isCTCChecked={isCTC}
          isGrossChecked={isGross}
          btnText='Show PaySlip'
          disabled={disable}
        />
      </div>
      <div>
        {isPaySlip && (
          <PaySlip
            basicPay={Basic_Salary}
            hra={HRA}
            lta={LTA}
            medical={Medical}
            conveyanceallow={Conveyance_Allowances}
            specialallow={Special_Allowances}
            professionalTax={ProfessionTax}
            providentFund={Provident_Fund}
          />
        )}
      </div>
    </>
  );
};

export default Home;
