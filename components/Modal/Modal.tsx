import * as React from 'react';
import clsx from 'clsx';
import classes from './Modalstyle.module.css'
import Button from '../Button';
export interface Imodal{
    header?:React.ReactNode;
    children?:React.ReactNode;
}
const Modal:React.FC<Imodal>=({header,children})=>{
    const [show,setShow]=React.useState(false);
    React.useEffect(()=>{
        setTimeout(()=>{
            setShow(true)
        },100)
    },[])
    return(
        <div className={clsx({[classes.root]:true,[classes.show]:show})}>
            <div className={classes.modal}>
            {header}
            <hr />
            <div className='px-4 py-2'>{children}</div>
            <hr />
            <div className='flex justify-end mt-2'><Button btnText='Agree' width='100%' onClick={()=>setShow(false)} disabled={false}/></div>
            </div>
        </div>
    );
}
export default Modal;