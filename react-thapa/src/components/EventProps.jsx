import './EV.css'
export const EventProps = () => {

  const handleButonClick = (user) => {
    alert(`hello ${user}`);
  };

  const handleHower = () => {
    alert("Hey, Thanks for Hovering me");
  };
  
  return (
    <>
      <WelcomeUser onButonClick={() => handleButonClick("Aavez")} onMouseEnterClick={handleHower}/>
    </>
  );
};


export const WelcomeUser = (props) => {
    
    const handleButonClicked = () => {
        console.log('Button Clicked')
        props.onButonClick()
    }
    return(
        <>
        <button onClick={props.onButonClick}>Clicked</button>
        <button onMouseEnter={props.onMouseEnterClick}>Hover me</button>
        <button onClick={handleButonClicked}>Greeting</button>
        </>
    )
}