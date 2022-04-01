import React from "react";
import { BiRupee } from "react-icons/bi";
import States from "./States";
export interface INavbarprops {
  setState: (selectState: string) => void;
}
const Navbar: React.FC<INavbarprops> = ({ setState }) => {
  return (
    <div className="flex items-center justify-between w-full h-20 p-4 shadow-sm bg-zinc-700">
      <div className="flex items-center text-3xl ">
        <span className="pr-1 font-bold text-blue-400">IN</span>han
        <span className="font-bold text-blue-400">D</span>
        <span className="font-medium text-blue-400">
          <BiRupee />
        </span>
      </div>
      <States selectedLocation={(s: string) => setState(s)} />
    </div>
  );
};
export default Navbar;
