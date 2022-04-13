import * as React from "react";
import Modal from "./Modal/Modal";

const TnC: React.FC = () => {
  const heading = (
    <div className="pb-2 text-2xl text-center underline">
      Terms & Conditions
    </div>
  );

  return (
    <Modal header={heading}>
      <div className="flex flex-col items-center justify-center tracking-wide">
        <div className="py-2 text-md">
          The generated <span className="font-medium">payslip</span> is based on
          certain industrial standards, it may or may not replicate
          employee&apos;s exact salary slip provided by the employer.
        </div>
        <div className="py-2 text-md">
          These industrial standards of
          <span className="font-medium"> payslip</span> usually includes
          components like <span className="font-medium">Basic</span>,
          <span className="font-medium"> HRA</span>,
          <span className="font-medium"> LTA</span>,
          <span className="font-medium"> MedicalAllowance</span>,
          <span className="font-medium"> ConveyanceAllowance</span>,
          <span className="font-medium"> Speical/OtherAllowance</span> which are
          used to calculate employee&apos;s
          <span className="font-medium"> NetSalary</span>.Whilst the other
          components like
          <span className="font-medium"> ProvidentFund</span> and
          <span className="font-medium"> Gratuity</span> are calculated to
          derive the <span className="font-medium">GrossSalary</span>
        </div>
        <div className="py-2 text-md">
          Inaddition to the above mentioned components, Individual state govt.
          in India impose
          <span className="font-medium"> Professional Taxes</span> which has
          been taken into consideration while generating the
          <span className="font-medium"> payslip</span>.Hence, to calculate this
          tax, you need to select your <span className="font-medium">city </span>
          from the dropdown menu before proceeding furthure.
        </div>
      </div>
    </Modal>
  );
};
export default TnC;
