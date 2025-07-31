import React, { memo, useCallback, useState } from "react";

const Button = memo(({ onclick, children }) => {
  console.log("rendering button" , children);

  return (
    <>
      <button
        className={`text-black mt-4 mb-4 py-2 px-5 text-2xl ${
          children === "Increment" ? "bg-green-400 " : " bg-red-600"
        } rounded-lg`}
        onClick={onclick}
      >
        {children}
      </button>
    </>
  );
});

export const UseCallbackHooks = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = useCallback(() => {
    console.log("increment");
    setCounter((prevVal) => prevVal + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCounter((prev) => prev - 1);
    console.log("Decrement");
  }, []);

  return (
    <div className="p-4 flex flex-col justify-center items-center h-lvh font-display tracking-wider bg-black text-white">
      <h1 className="text-4xl mb-4">Counter : {counter}</h1>
      <Button onclick={handleIncrement}>Increment</Button>
      <Button onclick={handleDecrement}>Decrement</Button>
    </div>
  );
};
