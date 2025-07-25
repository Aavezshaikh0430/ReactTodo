import React, { useMemo, useState } from "react";
import { ReactMemoEx } from "./ReactMemoEx";

export const ReactMemoVsuseMemo = () => {
  const [counter, setCounter] = useState(0);

//   const BioData = {
//     name : 'Aavez',
//     age: 30,
//   }

const BioData = useMemo(()=>{
    return{
        name: 'Aavez',
        age : 30
    }
},[])

// const xyz = BioData 
// xyz.name = 'Muzzamil';

  return (
    <>
      <div className="flex p-4 flex-col justify-center items-center h-lvh">
        <h1 className="text-3xl">{counter}</h1>
        <button
          onClick={() => setCounter((pre) => pre + 1)}
          className="px-4 py-3 bg-blue-900 text-white rounded mt-4"
        >
          {" "}
          Incress Value
        </button>

        {/* <ReactMemoEx Data = 'Aavez'/> */}
        <ReactMemoEx Data = {BioData}/>
      </div>
    </>
  );
};
