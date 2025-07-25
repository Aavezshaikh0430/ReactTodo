
import React, { useReducer } from "react"
export const UseReducerHooks = () => {

    const reducer = (state, action) => {
        // console.log(state, action);

        if(action.type === 'Increment'){
            return state + 1
        }
        if (action.type === 'Decrement'){
            return state - 1
        }

    }

    const [count, dispatch] = useReducer(reducer, 1)
   
    


    return (
        <div className="flex flex-col justify-center items-center h-lvh">
            <h1 className="text-4xl my-4 text-center">{count}</h1>
            <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-md mt-4 p-4 text-2xl" onClick={() => {dispatch({type : 'Increment'})}}>Increment</button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-md mt-4 p-4 text-2xl" onClick={()=>{dispatch({type: 'Decrement'})}}>Decrement</button>
        </div>
    )
}