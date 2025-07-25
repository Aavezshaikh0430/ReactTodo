import React, { useReducer } from "react";
export const UseReducer = () => {
  const intialState = {
    count: 0,
    inc: 2,
    dec: 2,
  };

  const reducer = (state, action) => {
    // console.log(action);

    switch (action.type) {
      case "INCREMENT":
        return {
          ...state,
          count: state.count + state.inc > 20 ? 20 : state.count + state.inc,
        };

      case "DECREMENT":
        return {
          ...state,
          count: state.count - state.dec < 0 ? 0 : state.count - state.dec,
        };

      case "RESET":
        return intialState;

      default:
        break;
    }
  };
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <>
      <div className="flex flex-col justify-center items-center h-lvh">
        <h1>Welcome to the UseReducer Hooks.</h1>
        <h2>{state.count}</h2>
        <button onClick={() => dispatch({ type: "INCREMENT" })} className="bg-blue-500 hover:bg-blue-600 text-white rounded-md mt-4 p-4 text-2xl">
          Increment
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })} className="bg-blue-500 hover:bg-blue-600 text-white rounded-md mt-4 p-4 text-2xl">
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "RESET" })} className="bg-blue-500 hover:bg-blue-600 text-white rounded-md mt-4 p-4 text-2xl">Reset</button>
      </div>
    </>
  );
};
