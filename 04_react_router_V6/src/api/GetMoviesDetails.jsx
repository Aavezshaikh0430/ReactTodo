
//useparams ko function ke under call nhi karsakte react hooks ko ham component ke 
// top par hi call karte hai.
//kisi function me hooks call nhi karsakte.
//getMovieDetails ye aapka componenet nhi hai. ye aapka function hai. 
//isliye ham use param ko function ke under ya conditional ke under call hi nhi kar sakte.
// getmovieDetails me call nhi karsakte.

export const getMovieDetails = async({params}) => {
    // const params = useParams()
    const Id = params.movieId
    
    
    try {
        const response =await fetch(`https://www.omdbapi.com/?i=${Id}&apikey=${import.meta.env.VITE_API_KEY}`);
        const data = response.json()
        return data;
    } catch (error) {
        console.log(error);
        
    }
}