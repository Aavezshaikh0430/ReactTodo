import {  useBioContext } from "./Index"

export function Home () {
    const {Name,Address} = useBioContext();
    return(
<>
<h1>Welcome to Context Api. my Name is {Name}  </h1>
<p>Address: {Address}</p>
</>   
 )
} 