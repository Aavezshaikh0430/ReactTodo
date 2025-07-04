
import styles from './Netflix.module.css';
// import "./Netflix.css";
import styled from 'styled-components';

export const SeriesCard = ({ Data }) => {
  // console.log(Data);
  let age = 18;

  const { img_url, name, rating, description, genre, cast, watch_url } = Data;

  
 /* const btn_style = {
    padding: "1.2rem 2.4rem",
    border: "none",
    fontSize: "1.6rem",
    backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
    color: "black",
    cursor: "pointer",
    fontWeight: "bold",
    borderRadius: "100rem",
  };

  const StyleButton = styled.button({
    padding: "1.2rem 2.4rem",
    border: "none",
    fontSize: "1.6rem",
    backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
    color: "black",
    cursor: "pointer",
    fontWeight: "bold",
    borderRadius: "100rem",
  }); 
*/
   const StyleButton = styled.button `
    padding: 1.2rem 2.4rem;
    border: none;
    font-size: 1.6rem;
    background-color: ${(props)=>props.rat >= 8.5 ? "#7dcea0" : "#f7dc6f"};
    color: black;
    cursor: pointer;
    font-weight: bold;
   
    
  `
  const BtnDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items : center;
  `
  

  const rating_disgn = {
    fontSize: "1.8rem",
  };

  const Rating = styled.h3`
      font-size : 1.6rem;
      color : #7dcea0;
      text-transform : capitalize;
  `

  const ratingClass = rating >= 8.5 ? styles.super_hit : styles.averge;

  const color = {
    // color: "black",
  };

  return (
    <li className={styles.card}>
      <div>
        <img src={img_url} alt={name} width="40%" height="40%" />
      </div>

      {/* <div className={styles["card-content"]}> */}
        <div className='flex flex-col gap-6 mt-4 py-[3.2rem] px-[1.2rem]'>
        <h2>Name: {name}</h2>
        <Rating style={rating_disgn}>
          Rating:
          {/* <span className={`rating ${rating >=8.5 ? 'super_hit' : 'averge'}`}>{rating}</span></h3> */}
          <span className={`${styles.rating} ${ratingClass}`}>{rating}</span>
        </Rating>
        <p style={color} className="text-3xl font-bold text-golden-900">
          <b>Summary</b>: {description}
        </p>
        <p >
          <b>Genre</b>: {genre.join(",")}
        </p>
        <p>
          <b>Cast</b>: {cast.join(",")}
        </p>

        <BtnDiv className='mt-2 flex flex-col justify-center items-center'>
          {age >= 18 ? (
            <a href={watch_url} target="_blank">
              <StyleButton rat ={rating}>Watch Now</StyleButton>
            </a>
          ) : (
            <a href="" target="_blank">
              <StyleButton rat ={rating}>Not Available</StyleButton>
            </a>
          )}
        </BtnDiv>
      </div>
    </li>
  );
};
