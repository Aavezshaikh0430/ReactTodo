import "./index1.css";
export const PropDrilling = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "sans-serif",
        fontSize: '1rem',
        backgroundColor: 'darkblue',
        color:'wheat',
        height: '100vh',
        width: '100vw'
      }}
    >
      <h1>Welcome to Users in PropDrilling Concept.</h1>

      <ChildComp data='ReactJs.' />
    </div>
  );
};


const ChildComp = (props) => {
    return(
        <>
        <h1>Child Component A</h1>
        <GrandChild data1 = {props.data}/>
        </>
    )
}

const GrandChild = (props) => {
    return(
        <>
        <h1>GrandChild Component B</h1>
        <GrandGrandChild data2 = {props.data1}/>
        </>
    )
}

const GrandGrandChild = (props) => {
    return(
        <>
        <h1>GrandGrandChild Component C</h1>
        <h1>I love {props.data2}</h1>
        </>
    )
}