import { useRef } from "react";
import "./index.css";

export const UseRef = () => {
  // const name = document.getElementById('name')
  // const password = document.getElementById('password')

      


  
  const name = useRef(null);
  const password = useRef(null);
  console.log(name);
  

  const handleSubmitButton = (e) => {
    e.preventDefault();
  console.log(name.current.value, password.current.value);
    
  };

  return (
    <div className="container">
      <div className="content-container">
        <h1>welcome to the useRef Hook.</h1>

        <br />
        <form onSubmit={handleSubmitButton}>
          <label>Name : </label>
          <input
            type="text"
            placeholder="name"
            className="text"
            id="name"
            ref={name}
          />
          <br />
          <br />
          <label>password : </label>
          <input
            type="password"
            placeholder="password"
            className="text"
            id="password"
            ref={password}
          />
          <br />
          <br />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};
