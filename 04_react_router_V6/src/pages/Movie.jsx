import React from "react";
import { useLoaderData } from "react-router-dom";
import { Card } from "../components/UI/Card";

function Movie() {
  const moviesData = useLoaderData();
  console.log(moviesData);

  return (
    <>
      <ul className="container grid grid-four--cols">
        {moviesData && moviesData.Search.map((elemval)=>{
          return<Card key={elemval.imdbID} currData={elemval}/>
        })}
      </ul>
    </>
  );
}

export default Movie;
