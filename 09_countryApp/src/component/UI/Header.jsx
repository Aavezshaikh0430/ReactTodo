import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export const Header = () => {
  const [showMenu , setShowMenu] = useState(false);
  
  const handleButtonToggle = () => {
    setShowMenu(!showMenu)
  }
  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          <div className="logo">
            <NavLink>
              <h1>WorldAtlas</h1>
            </NavLink>
          </div>
          <nav className={showMenu ? 'menu-mobile' : 'menu-web'}>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/country'>country</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
          </nav>
          <div className="ham-menu">
            <button onClick={handleButtonToggle}><GiHamburgerMenu /></button>
          </div>
        </div>
      </div>
    </header>
  );
};
