import seriesData from "../Api/seriesData.json";
import { SeriesCard } from "./SeriesCard";

const NetFlixCom = () => {
  return (
    <ul className="grid grid-three-cols">
      {seriesData.map((elemData) => {

        return(
        <SeriesCard Data={elemData} key={elemData.id}/>
        );
      })}
    </ul>
  );
};
export default NetFlixCom;
