import * as React from "react";
import Modal from "./Modal/Modal";

const TnC: React.FC = () => {
  const heading = <div className='pb-2 text-center underline'> Terms and Conditions</div>
  
  return (
    <Modal header={heading}>
    <div className='flex flex-col items-center justify-start'>
      <div className='py-2 text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
      <div className='py-2 text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
      <div className='py-2 text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
      <div className='py-2 text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
      <div className='py-2 text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
      <div className='py-2 text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
    </div>
    </Modal>
  );
};
export default TnC;
