/** @format */

import React from "react";

export default function List() {
  const list = ["Item 1", "Item 2", "Item 3", "Item 4"];

  const student = [
    { id: 1, name: "Jay", age: 20, stream: "Science" },
    { id: 2, name: "Ajay", age: 21, stream: "Commerce" },
    { id: 3, name: "Vijay", age: 22, stream: "Arts" },
    { id: 4, name: "Rohan", age: 23, stream: "Science" },
  ];

  return (
    <div>
      {/* 
        The .map() function loops over the items array.
Each item is rendered inside an <li> tag.
The key prop should be added to uniquely identify each list item.
        */}
      <h2>My List</h2>
      <ul>
        {list.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      {/* when not using return inside map use map(()=>(statements)) 
         when using return inside map use map(()=>{return statements}) 
      
      */}
      {/*
      ! Note ----------------------------
      ! Use a unique identifier like id when available.
      Avoid using array indexes as keys unless necessary (e.g., static lists without reordering).
      const users = [
      { id: 1, name: "Jay" },
      { id: 2, name: "Ajay" },
      { id: 3, name: "Vijay" }
      ];
      */}
      <hr />
      <h1>FETCHING STUDENTS DETAILS</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Stream</th>
          </tr>
        </thead>
        <tbody>
          {student.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.stream}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <hr />
      using id as indexes
      <ul>
        {student.map((item) => (
          <li key={item.id}>
            Name: {item.name}-- Age: {item.age} -- {item.stream}
          </li>
        ))}
      </ul>
      <hr />
      <hr />
      {/* 
Directly Rendering List Inside <h2>
jsx
Copy
Edit
<h2>list ={list}</h2>
❌ Issue:
This tries to directly render the list array inside <h2>.

JavaScript cannot directly display an array inside HTML like this.

The output would look like a raw string:

list = Apple,Banana,Cherry
This is not the desired output.

It doesn't iterate through the list properly.
*/}
      <h2>list ={list}</h2>
      {/* 
       Correct Alternative:
If you want to display the list as a string, use .join():

jsx
Copy
Edit
<h2>list = {list.join(", ")}</h2>
🔹 Output:

ini
Copy
Edit
list = Apple, Banana, Cherry
      */}
      <h2>
        using list.join(',' comma or anything else used to separate the string)
        = ------- {list.join(", ")}
      </h2>
    </div>
  );
}
