import React, { useEffect, useState } from "react";
import "./Index.css";

export function UseEffectTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      const updateTime = new Date();
      setTime(updateTime.toLocaleString());
    }, 1000);
  }, []);

  

  return (
    <>
      <div className="div-content">
        <h1>Time : {time}</h1>
      </div>
    </>
  );
}
