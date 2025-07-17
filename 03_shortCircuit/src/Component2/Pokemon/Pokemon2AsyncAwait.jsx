import { useEffect, useState } from "react";
import "./Pokemon.css";

export const Pokemon2AsyncAwait = () => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const ApiKey = "https://pokeapi.co/api/v2/pokemon/pikachu";

//1]promis method
//   const pokemonFun =  () => {
//      fetch(ApiKey)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setPokemon(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.log(error);
//         setLoading(false);
//         setError(error);
//       });
//   };

// 2] async method.

const pokemonFun = async () =>{
    try {
       const res = await fetch(ApiKey);
       const data = await res.json();
       setPokemon(data);
       setLoading(false)
    } catch (error) {
        console.log(error);
        setError(error)
        
    }
   finally{
    setLoading(false)
   }
}
  useEffect(() => {
    pokemonFun();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>error: {error.message}</h1>;
  }
console.log(pokemon);

  return (
    <>
      <div className="container">
        <header>
          <h1>Let's catch Pokemon</h1>
        </header>
        <ul className="card-demo">
          <li className="pokemon-card">
            <figure>
              <img
                src={pokemon.sprites.other.dream_world.front_default}
                alt={pokemon.name}
              />
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
      </div>
    </>
  );
};
