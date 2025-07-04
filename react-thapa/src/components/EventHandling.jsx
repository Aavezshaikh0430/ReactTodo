
import './EV.css'
export const EventHandling = () => {

    // function handleButtonClick(){
    //    alert('Hey I am onClick Event.')
        
    // }
    console.log();
    
    const handleButtonClick = (event) => {
        console.log(event);
        console.log(event.target);
        console.log(event.type);
        alert('Hey I am handleButtonClick Event')
    }

    const handleWelcomeUsers = (user) => {
        console.log(`Hey ${user}, welcome`);
        
    }
    return(
        <>
        {/* funtion component with a named funtions. */}
        {/* Remeber how we havent called this funtion, if you call this function here then it will run without even clicking. You just need to pass refrence and not call here. */}

        {/* <button onClick={handleButtonClick()}>click Me</button> XXX not allowed this method*/}

        <button onClick={handleButtonClick}>click Me</button>

       <br />
       <br />

       {/* In react, event handlers receive the event object as an argument by default. However, when you use an arrow function directly in the onClick attribute without passing the event explicitly, react doesn't pass the event object to your handler function. this is because the arrow fucntion creates a new function and calls your handler without passing any arguments. */} 

        {/* <button onClick={()=>handleButtonClick()}>click Me 2</button> XXX not allowed this method */}

        <button onClick={(event)=>handleButtonClick(event)}>click Me 2</button>

        <br/>
        <br/> 

        {/* Inline Event Handlers. */}

        <button onClick={(event) => {console.log(event)}}>Inline Function</button>

        {/* Funtion Component with inline Arrow Funtion */}

        <br/>
        <br/> 

        <button onClick={()=>{alert('Hey I am inline Arrow funtion event.')}}>Inline Arrow Funtion.</button>

        {/* Passing arguments to Event Handlers */}
        <br/>
        <br/>

        {/* <button onClick={handleWelcomeUsers('aavez')}>Click Me</button> XXX not allowed  */}
        <button onClick={()=>handleWelcomeUsers('aavez')}>Click Me</button> 
        <button onClick={()=>handleWelcomeUsers('Brother')}>Click Me</button> 

        </>
    )
}