import { useEffect } from "react";

export const TodoDateAndTime = ({ date, setDate }) => {
  useEffect(() => {
    const interVal = setInterval(() => {
      const now = new Date();
      const formatedDate = now.toLocaleDateString();
      const fomatedTime = now.toLocaleTimeString();

      setDate(`${formatedDate} - ${fomatedTime}`);
    }, 1000);

    return () => clearInterval(interVal);
  });

  return <h2 className="date-time">{date}</h2>;
};
