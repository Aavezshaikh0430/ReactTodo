import { useState } from "react";
import "./Login.css";

export const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const Data = {
        user,
        password
    }
    console.log(Data);
    
  }
  return (
    <form onSubmit={handleFormSubmit}>
    <div className="main-container">
      <div className="content-container">
        <div className="heading">
          <h1>Login Form</h1>
        </div>
        <div className="label-div">
          <label className="label">Username</label> 
          <input
            type="text"
            className="password-input"
            placeholder="Username"
            value={user}
            onChange={(e)=>setUser(e.target.value)}
          />
        </div>
        <div className="label-div">
          <label className="label">Password</label> 

          <input
            type="text"
            className="password-input"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}

          />
        </div>
        <div className="btn-div">
          <button className="btn">Login</button>
        </div>
      </div>
    </div>
    </form>
  );
};
