import { ProfileCard } from "./ProfileCard";

function Profile  (){
    return(
        <>
        <h1>profile Card challenge.</h1>

        <ProfileCard 
        fullName='Alice parker'
        age={22} 
    //     greting = {
    //     <div>
    //         <strong>Hello Alice, have a nice day!</strong>
    //     </div>
    //    }
        >
            <p>Hobbies: Reading, Hiking</p>
            <button>Contact</button>
        </ProfileCard>

        <h1>profile Card challenge.</h1>

        <ProfileCard 
        fullName='Chris Bobby'
        age={28} 
    //    greting = {
    //     <div>
    //         <strong>Hello Bobby, keep up the great work!</strong>
    //     </div>
    //    }
        >
            <p>Hobbies: Reading, Hiking</p>
            <button>Contact</button>
        </ProfileCard>
        
        </>
    )
}

export default Profile;




//export function ProfileCard(props){
//     const {name,age, greting,children} =props
//     return(
//         <>
//         <h1>name: {name}</h1>
//         <p>age: {age}</p>
//         <p>{greting}</p>
//         <div>{children}</div>
//         </>
//     )
// }


//export function ProfileCard({name,age, greting,children}){
//   
//     return(
//         <>
//         <h1>name: {name}</h1>
//         <p>age: {age}</p>
//         <p>{greting}</p>
//         <div>{children}</div>
//         </>
//     )
// }