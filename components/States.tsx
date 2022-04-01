import React from "react";
export interface IStateprops {
  selectedLocation: (s: string) => void;
}
const States: React.FC<IStateprops> = ({ selectedLocation }) => {
  const [selectState, setSelectedState] = React.useState("");
  const [isHighlight, setIsHighlight] = React.useState(false);
  //  https://taxadda.com/professional-tax-in-india/

  const states = [
    "",
    "Andhra Pradesh",
    "Assam",
    "Bihar",
    "Goa",
    "Gujarat",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Maharashtra",
    "Madhya Pradesh",
    "Meghalaya",
    "Orissa",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "West Bengal",
  ];
  const selectionHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("is: " + e.target.value);
    if (e.target.value !== "") {
      setSelectedState(e.target.value);
      selectedLocation(e.target.value);
      setIsHighlight(false);
    } else if (e.target.value === "") {
      setSelectedState("Select a city");
      setIsHighlight(true);
    }
  };
  return (
    <form>
      <label>
        <select
          className="relative p-1 text-black rounded-md outline-none"
          value={selectState}
          onChange={selectionHandler}
          // style={{outline:isHighlight?'2px solid red':'none'}}
        >
          {states.map((state, idx) => {
            return (
              <option
                key={`${state}-${idx}`}
                value={state}
                className="bg-slate-200"
              >
                {state !== "" ? state : "Select a city"}
              </option>
            );
          })}
        </select>
      </label>
    </form>
  );
};
export default States;
