import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";
import { IoCallSharp } from "react-icons/io5";


import footerApi from "../../api/footerApi.json";
import { NavLink } from "react-router-dom";

export const Footer = () => {
    const metarialIcon = {

        MdPlace: <MdPlace/>,
        IoCallSharp : <IoCallSharp />,
        TbMailPlus : <TbMailPlus />
    }
  return (
    <footer className="footer-section">
      <div className="container grid grid-three-cols">
        {footerApi.map((curData, index) => {
          const { icon, title, details } = curData;

          return (
            <div className="footer-contact" key={index}>
              <div className="icon">{metarialIcon[icon]}</div>
              <div className="footer-contact-text">
                <p>{title}</p>
                <p>{details}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="copyright-area">
        <div className="container">
            <div className="grid grid-two-cols">
                <div className="copyright-text">
                    <p>
                        Copyright &copy; 2025, All Right Reserved
                        <NavLink to={'https://moviescr7.netlify.app'}>Cr7Developer</NavLink>
                    </p>
                </div>
                <div className="footer-menu">
                  <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/country'>country</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};
