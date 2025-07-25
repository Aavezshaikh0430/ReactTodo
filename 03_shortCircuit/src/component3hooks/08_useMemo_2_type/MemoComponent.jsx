import React, { useMemo, useState } from "react";

//  const ExpensiveComp = memo(() => {
//   const sum = () => {
//     console.log('calcultaing sum ...');

//       let i = 0;
//     for ( i = 0; i <= 100000000; i++) {
//       i = i + 1;
//     }
//     return i;
//   };
//   const total = sum();

//   return(
//     <>
//     <p>Sum : {total}</p>
//     </>
//   )
//   });
///-----------------------------------------------

const ExpensiveComp = () => {
  const sum = () => {
    console.log("calcultaing sum ...");

    let i = 0;
    for (i = 0; i <= 100000000; i++) {
      i = i + 1;
    }
    return i;
  };

  //useMemo syntex.
  // useMemo(()=>{

  // }, []);

  const total = useMemo(() => {
    return sum();
  }, []);

  return (
    <>
      <p>Sum : {total}</p>
    </>
  );
};

export const MemoComponent = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div className="flex flex-col justify-center items-center h-lvh gap-2 bg-gray-800 text-white">
        <ExpensiveComp />
        <button
          onClick={() => setCounter(counter + 1)}
          className="text-2xl bg-cyan-600 text-white px-4 py-3 rounded-sm"
        >
          Re-render Parenet
        </button>
        <h1 className="text-2xl">Parent re-renders: {counter}</h1>
      </div>
    </>
  );
};
