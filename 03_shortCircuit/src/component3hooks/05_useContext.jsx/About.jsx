
// import { use, useContext } from "react"
// import { BioContext, useBioContext } from "./Index"
import {use, useContext} from 'react'
import { BioContext } from './Index'

export function About (){
    //custom hooks
    // const {Username, UserAddress}=useBioContext() ye bhi karsakte aur niche ka bhi kar sakte.


    // const {Username, UserAddress} = useContext(BioContext)

    //useContext() ki jagaha ham use() hook bhi use kar sakte hai.
    // let newHook= true;
    // if(newHook){
    //     const {Username, UserAddress}=useContext(BioContext)

    // }

    const newHook= true;

    let Username, UserAddress;
    if(newHook){
       ({Username, UserAddress}= use(BioContext));

    }

    return(
        <>
        <h1>This is a About Page.</h1>
        <h2>Hello my Name is {Username}</h2>
        <p>Address : {UserAddress}</p>
        </>
    )
} 