// import React from "react";
// fetch('https://jsonplaceholder.typicode.com/todos/')
//       .then(response => response.json())
//       .then(json => console.log(json))
// function ChiamataTest(json) {
//     return (
// <table>
    
//     <tr><td>{json.title}</td></tr>
//     <tr><td>{json.userId}</td></tr>
//     <tr><td>{json.completed}</td></tr>
// </table>
//     ) 
// }

// export default ChiamataTest;
import { useState, useEffect } from 'react';
const Fetch = () => {
  const [user, setData] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <div>
      
      {user.map((user) => (
      <table>
    
      <tr><td>{user.id}</td>
     <td>{user.title} </td>
        <td>{user.completed}</td></tr>
     </table>
       // <img key={user.id} src={user.url} alt={user.title} width={100} />
      ))}
    </div>
  );
};
export default Fetch