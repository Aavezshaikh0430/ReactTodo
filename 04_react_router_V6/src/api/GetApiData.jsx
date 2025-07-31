export const getMovieData = async() => {
    try {
        const response = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=13e8f41&s=titanic&page=1');
        const Data = response.json();
        return Data;
    } catch (error) {
        console.log(error);
        
    }
} 