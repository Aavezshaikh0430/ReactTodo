
import { useState } from 'react';
import './Counter.css'
export const Counter = () => {
    const [count, setCount] = useState(0)

    const handleIncrementButton = () => {
        setCount (count + 1)
        // console.log(count);
        }
        console.log(count);
        
    
  return (
    <>
      <div className="main-container1">
        <h1 className='h1'>Counter</h1>
        <h3 className='h3'>{count}</h3>
        <button onClick={() => handleIncrementButton()} className='button'>Increment</button>
      </div>
    </>
  );
};
