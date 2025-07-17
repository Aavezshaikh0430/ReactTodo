import { useState } from "react";
import "./ShortCircuit.css";
export const ShortCircuit = () => {
const [isLogIn, setIsLogIn] = useState(false);
const [user, setUser] = useState(false);

const handleToggleLoginbtn = () => {
  setIsLogIn(!isLogIn)
}

const LoggedInFunctionality = isLogIn && `You'er Logged in!` 
const LoggedInFunctionality2 = isLogIn ? '' : 'paraRed';
  return (
    <>
      <div className="main-container">
        <div className='content-container'>
          <div className="main-section">
            <h1 className="heading">Welcome to the ShortCircuit Evaluation!</h1>
          </div>

            <p className={LoggedInFunctionality2}>{LoggedInFunctionality}</p>

            <p>{user ? `Hello ${user}` : 'Please Logged in.'}</p>

          <div className="btn-coll">
            <button className="btn" onClick={()=>handleToggleLoginbtn()}>Login Button</button>
            <button className="btn" onClick={()=>setUser('Aavez shaikh')}>Set User</button>
            <button className="btn" onClick={()=> setUser('')}>Clear User</button>
          </div>
        </div>
      </div>
    </>
  );
};
