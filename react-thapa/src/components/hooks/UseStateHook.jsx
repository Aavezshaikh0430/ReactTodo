import { useState } from "react";
import "../EV.css";
export const UseStateHooks = () => {
  // let value = 0;
  // const handleButtonIncrement = () => {
  //     value = value + 1
  //     console.log(value);
  // }

  // let arry = useState()
  // console.log(arry);

  const [count, setCout] = useState(0);

  const handleButtonIncrement = () => {
    setCout(() => count + 1);
  };

  // console.log(Math.floor(Math.random() * 10), "parent component rendered.");

  return (
    <>
      <div className="main-div">
        <h1>{count}</h1>
        <button onClick={handleButtonIncrement}>Increment</button>
      </div>

      <ChildComponent counter={count} />
    </>
  );
};

function ChildComponent(props) {
  console.log(Math.floor(Math.random() * 10), "Child component rendered.");

  return (
    <>
      <div className="main-div">
        <h1>Child Component - {props.counter}</h1>
      </div>
    </>
  );
}

export function SiblingComponent() {
  console.log(Math.floor(Math.random() * 10), "sibling component rendered.");

  return (
    <>
      <div className="main-div">
        <h1>Sibling Component </h1>
      </div>
    </>
  );
}
