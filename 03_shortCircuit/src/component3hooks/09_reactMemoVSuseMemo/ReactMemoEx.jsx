import React, { useRef } from "react";

export const ReactMemoEx = React.memo(({Data}) => {
    console.log('hello react-memo');
 const useRenderRef = useRef(0)
    
    return(
        <div className="mt-4">
            <p className="text-3xl">Nothing changed here but I've now rendered:  <span className="text-red-600">{useRenderRef.current++}time(s)</span> </p>
            <p className="text-3xl text-center">my name is {Data.name} and my age is {Data.age}.</p>
        </div>
    )
});