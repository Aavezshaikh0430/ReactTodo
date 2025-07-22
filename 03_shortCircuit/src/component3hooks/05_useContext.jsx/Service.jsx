import { useBioContext } from "./Index"

export function Service (){
    const {Username2, UserAddress2} = useBioContext()
    return(
        <>
        <h1>This is a Service Page.</h1>
        <h2>Hello my Name is {Username2}</h2>
        <p>Address : {UserAddress2}</p>
        </>
    )
} 