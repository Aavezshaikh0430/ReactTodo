// import { createContext, useContext } from "react";
import { createContext, use } from "react";

export const BioContext = createContext(null);

export const BioProvider = ({children}) => {

    const Name = 'Hitesh Choudhari';
    const Address = 'Taigor Nagar vikhroli west Mumbai.'

    const Username = 'Thapa Vinod'
    const UserAddress = 'Ballimaran chandni Chowk Delhi.'

     const Username2 = 'Hardik Sharma'
    const UserAddress2 = 'Mahalaxmi Road Near Sea Face Mumbai.'

    return(
        <BioContext.Provider value={{Name, Address, Username, UserAddress, Username2, UserAddress2}}>
            {children}
        </BioContext.Provider>
    )
}


//custom hooks in react. 

//custom hook ko start ham   [use] keyword se karna hota hai.

//custom hooks me ham react ke buil-in-hooks bhi use karsakte hai.  
//jaise [useState, useContext, ] karsakte hai.

//magar ham sideEffect jaise hooks nhi use karna hai jaise [useEffect] jis se ham Api call ho
//ye hooks nhi use karna hai. 


export const useBioContext = () => {
    // const context = useContext(BioContext)

    //useContext() aur use() hook same hai.

    const context = use(BioContext)

    if(context === null || context === undefined){
       throw new Error ('something went wrong in app component. ')
    }

    return context;

}