import { useState } from "react";

// const users = [
//      {name : 'Hardik' , age : 32},
//      {name : 'Abhishek' , age : 27},
//      {name : 'Suriya' , age : 39},
//      {name : 'Ms Dhoni' , age : 43},
// ];

export function DrivedState() {
  const [users, setUsers] = useState([
    { name: "Baber", age: 32 },
    { name: "Smith", age: 27 },
    { name: "Root", age: 39 },
    { name: "Stark", age: 43 },
  ]);

//   console.log(users);

  const userCount = users.length;
//   console.log(userCount, "users in arry");

const ageRatio = users.reduce((acc, elemData)=>acc + elemData.age , 0)/users.length ;
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
      <p>No of player is : {userCount}</p>
      <p>Age ratio is : {ageRatio}</p>
    </>
  );
}
