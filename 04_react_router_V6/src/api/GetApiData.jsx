export const getMovieData = async() => {
    try {
        const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY}&s=titanic&page=1`);
        const Data = response.json();
        return Data;
    } catch (error) {
        console.log(error);
        
    }
} 