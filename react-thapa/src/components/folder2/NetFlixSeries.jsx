 const NetFlixSeries = () =>{

  const Name = 'Queen of Tears';
  const Rating = '8.2';
  const Summary = "Queen of Tears is a South Korean romantic comedy-drama that explores the tumultuous relationship between a chaebol heiress and her lawyer husband, highlighting themes of love, illness, and redemption.";

const addGenre =()=>{
    const Genre = 'RomCom';
    return Genre;
}

let age = 9;

// let canWatch = 'Not Available';

// if(age>=18) 
//   {
//   canWatch ='watch Now';
//   }

const canWatch = ()=>{
  if (age>= 18){
    return 'Watch Now'
  }
  else{
    return 'Not Available'
  }
}

// if(age< 18){
//   return(
//      <div>
//     <div>
//       <img src="qot.webp" alt="qot.webp" width='40%' height='40%' />
//     </div>
//   <h2>Name: {Name}</h2>
//   <h3>Rating:{Rating}</h3>
//   <p>Summary: {Summary}</p>
//   <p>Genre: {addGenre()}</p>
//   <button>Not Available</button>
//   </div>
//   )

// }

  return(
 <div>
    <div>
      <img src="qot.webp" alt="qot.webp" width='40%' height='40%' />
    </div>
  <h2>Name: {Name}</h2>
  <h3>Rating:{Rating}</h3>
  <p>Summary: {Summary}</p>
  <p>Genre: {addGenre()}</p>
  {/* <button>{age>=18 ? 'Watch Now' : 'Not Available'}</button> */}
  {/* <button>{canWatch}</button> */}
  <button>{canWatch()}</button>

  </div>
  );
}
export default NetFlixSeries;

{/* <button id='btn'></button>
const elem=document.getElementById('btn');
if(age>=18){
  elem.textContent = 'Watch Now'
}else{
  elem.textContent = 'Not Available'
} */}

export const Header = () =>{
    return <p>This is header </p>
}

export const Footer = () =>{
    return <p>copywrite @AavezTechnical</p>
}