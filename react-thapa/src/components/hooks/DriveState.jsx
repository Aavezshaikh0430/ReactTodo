import { useState } from "react";

// const users = [
//      {name : 'Hardik' , age : 32},
//      {name : 'Abhishek' , age : 27},
//      {name : 'Suriya' , age : 39},
//      {name : 'Ms Dhoni' , age : 43},
// ];

export function DriveState() {
  const [users, setUsers] = useState([
    { name: "Hardik", age: 32 },
    { name: "Abhishek", age: 27 },
    { name: "Suriya", age: 39 },
    { name: "Ms Dhoni", age: 43 },
  ]);

  console.log(users);

  return (
    <>
      <h1>Indian Cricket team </h1>
      <ul>
        {users.map((elemData, index) => {
          return (
            <li key={index}>
              {elemData.name} - {elemData.age} Years Old
            </li>
          );
        })}
      </ul>
    </>
  );
}
