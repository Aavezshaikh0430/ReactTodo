import { NavLink, useLoaderData } from "react-router-dom"

export const MovieDetails = () => {
   
    const movieData =useLoaderData();
    console.log(movieData);

    const {Poster,Title,  Year, Plot, BoxOffice, imdbRating,} = movieData;
    
    return(
        <li className="hero-container hero-movie-container">
            <div className="main-container main-container2 ">
                <div className="poster-container poster-container2">
                        <img src={Poster} alt={Title} className="poster poster2"/>
                </div>
                <div className="ticket-container t-container">
                    <div className="ticket__content">
                        <h4 className="ticket__movie-title">{Title}</h4>
                        <p className="ticket__current-price">Type:{Plot}</p>
                        <p className="ticket__current-price" >ImdbRating: {imdbRating}*</p>
                        <button className="ticket__buy-btn">Watch Now</button>

                    </div>
                </div>
            </div>
        </li>
    )
} 