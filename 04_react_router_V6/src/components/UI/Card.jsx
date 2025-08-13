import { NavLink } from 'react-router-dom';
import './Card.css'

export const Card = ({currData}) => {
    const {Poster, imdbID} = currData;
    return <>
    <li className="hero-container">
        <div className="main-container">
            <div className="poster-container">
                <img src={Poster} alt={imdbID} className="poster" />
            </div>
            <div className="ticket-container">
                <div className="ticket__content ">
                    <NavLink to={`/movie/${imdbID}`}>  
                     <button className="ticket__buy-btn">Watch Now</button>
                    </NavLink>
                </div>
            </div>
        </div>
    </li>
    </>
}