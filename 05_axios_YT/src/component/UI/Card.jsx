
// import './Card.css'
export const Card = ({movieData}) =>{
    const{imdbID,Poster, Title} = movieData
    return(
        <>
        <li className="hero-container">
            <div className="main-container">
                <div className="poster-container">
                    <img src={Poster} alt={imdbID} />
                </div>
             <div className="ticket-container">
                <button className="ticket__buy-btn">Watch now</button>
             </div>
            </div>
        </li>
        </>
    )
}