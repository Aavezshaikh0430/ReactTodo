// import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "../component/UI/Card";
import '../component/UI/Card.css'
import { getMovie } from "../servicese/GetService";

export const Movies = () => {
    const [data , setData] = useState([])
// //   const Api ="https://www.omdbapi.com/?i=tt3896198&apikey=13e8f41&s=titanic&page=1"

    
//     const getAxiosApi = async() => {
//         try {
//             const res = await axios.get(Api);
//             console.log(res.data.Search);
//             setData(res.data.Search)
            
            
//         } catch (error) {
//             console.log('Error message',error.message);
//             console.log('Error status',error.response.status);
//             console.log('Error data',error.response.data);
            
//         }
//   }

 const getAxiosApi = async() => {
        try {
            const res = await getMovie();
            console.log(res.data.Search);
            setData(res.data.Search)
            
            
        } catch (error) {
            console.log('Error message',error.message);
            console.log('Error status',error.response.status);
            console.log('Error data',error.response.data);
            
        }
  }

  useEffect(() => {
    getAxiosApi(); 
  }, []);

  return (
    <>
      <ul className="grid">
        {data.map((movieData)=> {
            return( <Card key={movieData.imdbID} movieData={movieData}/>)
        })}
      </ul>
    </>
  );
};
