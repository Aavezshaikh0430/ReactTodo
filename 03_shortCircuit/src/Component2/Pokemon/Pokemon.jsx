import { useEffect, useState } from "react";
import "./Pokemon.css";

export const Pokemon = () => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)


  const ApiKey = "https://pokeapi.co/api/v2/pokemon/pikachu";

  //   useEffect(()=>{
  //     fetch("http://pokeapi.co/api/v2/pokemon/pikachu")
  //     .then((res) => res.json())
  //     .then((data) => setApiData(data))
  //     .catch((error) => console.log(error));
  //   },[])

  //   useEffect(()=>{
  //     fetch(ApiKey)
  //     .then((res) => res.json())
  //     .then((data) => setApiData(data))
  //     .catch((error) => console.log(error));
  //   },[])

  const fetchPokemon = () => {
    fetch(ApiKey)
      .then((res) => res.json())
      .then((data) =>{ 
        setPokemon(data);
        setLoading(false)
        
      })
   
    
    .catch((error) => {
      console.log(error);
      setError(error)
      setLoading(false)
      
    });
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  console.log(pokemon);

  //   if(pokemon){
  //   return (
  //     <>
  //      <section className="container">
  //         <header>
  //             <h1>Lets Catch Pokemon.</h1>
  //         </header>
  //         <ul className="card-demo">
  //             <li className="pokemon-card">
  //                 <figure>
  //                     <img
  //                     src={pokemon.sprites.other.dream_world.front_default}
  //                     />
  //                 </figure>
  //                 <h1>{pokemon.name}</h1>
  //             </li>
  //         </ul>
  //      </section>
  //     </>
  //   );
  // }
  // };

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error){
    return(
      <div>
        <h1>Error: </h1><p style={{textAlign:'center', fontSize:'25px'}}>{error.message}</p>
      </div>
    )
  }


  return (
    <>
      <section className="container">
        <header>
          <h1>Lets Catch Pokemon.</h1>
        </header>
        <ul className="card-demo">
          <li className="pokemon-card">
            <figure>
              <img src={pokemon.sprites.other.dream_world.front_default} />
            </figure>
            <h1>{pokemon.name}</h1>
                  <div className="grid-three-cols">
                <p className="pokimon-info">
                    Height : <span>{pokemon.height}</span>
                </p>
                <p className="pokimon-info">
                    Weight : <span>{pokemon.weight}</span>
                </p>
                 <p className="pokimon-info">
                    speed : <span>{pokemon.stats[5].base_stat}</span>
                </p>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};
