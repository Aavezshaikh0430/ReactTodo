import { useEffect, useState } from "react";
import "./EffectTask.css";
export const EffectTask = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");

  const Tabchanger = () => {
    document.title = counter
  } 

  useEffect(()=> {
    document.title = counter
  },[counter])

  useEffect(() => {
    console.log( name);
  }, [name]);

  return (
    <>
      <div className="main-content">
        <h1>useEffect Challenge</h1>
        <p>count : {counter}</p>
        <button
          className="btn1"
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          Increment
        </button>

        <p>Name :{name}</p>
        <input
          type="text"
          className="inputcl"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </>
  );
};
