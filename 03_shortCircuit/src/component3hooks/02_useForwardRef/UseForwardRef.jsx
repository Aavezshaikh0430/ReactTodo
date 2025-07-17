import { useRef } from "react";
import { UseForward } from "./UseForward";
import "./index.css";
import { UsePassword } from "./UsePassword";
export const UseForwardRef = () => {
  const username = useRef(null);
  const password = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(username.current.value, password.current.value);
  };

  return (
    <div className="container">
      <div className="content-container">
        <h1>welcome back ko the UseForward Hooks.</h1>

        <form onSubmit={handleFormSubmit}>
          <UseForward labels="username" ref={username} />
          <UsePassword labels='password' ref={password} /> <br />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};
