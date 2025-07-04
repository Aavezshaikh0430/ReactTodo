export function ProfileCard(props){
 return(
        <>
        <h1>name: {props.fullName}</h1>
        <p>age: {props.age}</p>
        <p>{props.greting}</p>
        <div>{props.children}</div>
        </>
    )
}


