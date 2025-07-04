import { useState } from "react";

export const LiftStateUp = () => {
  const [InputVal, setInputVal] = useState("");

  return (
    <>
      <InputeComponent Inputvalue={InputVal} setInputValue={setInputVal} />
      <DisplayComponent Inputvalue2={InputVal} />
    </>
  );
};

const InputeComponent = (props) => {
  return (
    <>
      <h1>
        {" "}
        <input
          type="text"
          placeholder="Enter your name"
          value={props.InputeValue}
          onChange={(e) => props.setInputValue(e.target.value)}
        />
      </h1>
    </>
  );
};

const DisplayComponent = (props) => {
  return <h1><i>The Current Input Value is : {props.Inputvalue2}</i></h1>;
};
