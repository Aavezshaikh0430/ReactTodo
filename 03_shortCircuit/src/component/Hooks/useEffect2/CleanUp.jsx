
import { useEffect, useState } from 'react'
import './CleanUp.css'
export function CleanUp () {
const[count, setCount]= useState(0)

useEffect(()=>{
    const Clear =setInterval(() => {
    setCount((pre)=> pre + 1)
}, 1000);

return()=> clearInterval(Clear)
}, [])

    return(
        <>
        <div className="container">
            <div className="counter">
                <p>My Subscriber on Youtube.</p>
                <div className="odometer" id="odometer">
                 {count}
                </div>
                <h3 className="title">
                    Subscribers <br/>Realtime Counter
                </h3>
            </div>
        </div>
        </>
    )
}