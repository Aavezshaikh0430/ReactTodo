import React from "react";
import { NavLink } from "react-router-dom";

function Header() {

  const changeColor = ({isActive})=>{return{
                  color: isActive ? 'blue' : 'black'
                }}
  return (
    <>
      <header className="section-navbar">
        <section className="top_txt">
          <div className="head container">
            <div className="head_txt">
              <p>Get thapa Membership, 30-day return or refund guarntee.</p>
            </div>
            <div className="sing_in_up">
              <NavLink to="#">Sign in</NavLink>
              <NavLink to="#">Sign Up</NavLink>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="navbar-brand">
            <NavLink>MovieFlix</NavLink>
          </div>

          <nav className="navbar">
            <ul>
              <li className="nav-item">
                <NavLink to='/' className={({isActive})=>
                  isActive ? 'nav-link active-link' : 'nav-link' 
                  }>Home</NavLink>
              </li>

              <li className="nav-item">
                <NavLink to='/about' style={({isActive})=>{return{
                  color: isActive ? 'blue' : 'black'
                }}}>About</NavLink>
              </li>

              <li className="nav-item">
                <NavLink to='/movie'  style={changeColor}>Movie</NavLink>
              </li>

              <li className="nav-item">
                <NavLink to='/contact'  >contact</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
