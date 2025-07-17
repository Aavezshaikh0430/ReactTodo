import { useState } from "react";

export function HowToNotFetchApi() {

  const [apiData, setApiData] = useState([]);

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => setApiData(data))
    .catch((error)=>console.log(error));


  return (
    <>
  <ul>data :
    {
        apiData.map((elemData)=>{
            return <li key={elemData.id}>{elemData.title}</li>
        })
    }
  </ul>
    </>
  );
}
