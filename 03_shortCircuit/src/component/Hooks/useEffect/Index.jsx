
import { useEffect, useState } from 'react'
import './Index.css'
export const Index = () => {
    const [counter, setCounter] = useState(16)

    const handleIncremtButton = () => {
        setCounter(counter+1)
        console.log('handleIncremtButton',counter);
        
    }
    console.log('outer',counter);
    
    useEffect(()=>{
        console.log('Render UseEffect Hooks.', counter);
        
    }, [counter])
    return(
        <>
        <div className='div-content'>
           <h1>counter</h1>
           <p>{counter}</p>
           <button className='button1' onClick={()=> handleIncremtButton()}>Increment</button>

        </div>
        </>
    )
}