import React, { useState } from "react";
import { Counts } from "./ReactMemos";
export const ReactMemo = () => {
  const [count, setCount] = useState(0);



  return (
    <>
      <div className="p-4 flex flex-col justify-center items-center h-dvhvh">
        <h1 className="text-3xl">{count}</h1>
        <button
          className="px-4 py-3 bg-blue-900 text-white rounded mt-4"
          onClick={() => setCount((pre) => pre + 1)}
        >
          Incress Value
        </button>
      </div>
      
      <Counts  />
    </>
  );
};
