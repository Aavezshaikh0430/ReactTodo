import { useState } from "react";
import "./UseStateChallenge.css";
export const UseStateChallenge = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  const handleIncrementButton = () => {
    setCount(count + input);
  };

  const handleDecrementButton = () => {
    setCount(count - input);
  };

  const handleResetButton = () => {
    setCount(0);
  };

  return (
    <>
      <div className="main-container3">
        <div className="content-container">
          <h2 className="heading">Counter</h2>

          <h4 className="counterValue">{count}</h4>

         <label>Step : 
            
             <input
            type="text"
            value={input}
            onChange={(e) => setInput(Number(e.target.value))}
            className="input"
          />
          </label>

          <div className="btn-container">
            <button className="btn" onClick={() => handleIncrementButton()} disabled={count>=100}>
              Increment
            </button>
            <button className="btn" onClick={() => handleDecrementButton()} disabled={count<=0}>
              Decrement
            </button>
            <button className="btn" onClick={() => handleResetButton()}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
