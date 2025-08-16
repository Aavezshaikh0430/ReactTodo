import { useEffect, useState } from "react";
import faq from "../API/faq.json";
import "../App.css";
import { Card } from "../UI/Card";

export const Accordian = () => {
  const [data, setData] = useState([]);
  const [activeId, setActiveId] = useState(false);

  useEffect(() => {
    setData(faq);
  }, []);
  // console.log(data);

  
  //handleButton
  const handleButton = (id) => {
    setActiveId((prevId)=>(prevId === id) ? false : id);
  } 


  return (
    <>
      <h1>The Accordian</h1>
      <ul className="section-accordion">
        {data.map((curElem) => {
          return (
            <Card
              data={curElem}
              key={curElem.id}
              onToggle={() => handleButton(curElem.id)}
              isActive={activeId === curElem.id}
            />
          );
        })}
      </ul>
    </>
  );
};
