/** @format */

// /** @format */
// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
// import Heading from "./components/heading";
// import About from "./components/about";

// const user = {
//   name: "ABC",
//   rollno: 12,
//   stream: "Science",
// };
// export default function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </BrowserRouter>
//       <Heading />
//       <h4
//         style={{
//           color: "blue",
//           backgroundColor: "Yellow",
//           margin: 5,
//           padding: 5,
//         }}
//       >
//         Name is: {user.name}
//       </h4>
//       <h4 className="rollno">Roll no is: {user.rollno}</h4>
//       <h4 className="stream">Stream is: {user.stream}</h4>
//     </>
//   );
// }

// !---------------------------------------

/** @format */
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Heading from "./components/heading";
import About from "./components/about";
import List from "./components/list";
import Forms from "./components/forms";

const user = {
  name: "ABC",
  rollno: 12,
  stream: "Science",
};

export default function App() {
  const [color, setColor] = useState("Red");

  const change_to_pink = () => setColor("Pink");

  return (
    <>
      <BrowserRouter>
        <Heading /> {/* Heading is now inside BrowserRouter */}
        <nav>
          <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/about" element={<About />} />
          {/* If you want the user data to show on all pages, include it here, or make layout component.*/}
          <Route
            path="/"
            element={
              <>
                <h4
                  style={{
                    color: "blue",
                    backgroundColor: "Yellow",
                    margin: 5,
                    padding: 5,
                  }}
                >
                  Name is: {user.name}
                </h4>
                <h4 className="rollno">Roll no is: {user.rollno}</h4>
                <h4 className="stream">Stream is: {user.stream}</h4>
                <hr />
                <hr />
                <h3>Color : {color}</h3>
                <br />
                <button
                  type="button"
                  onClick={() => {
                    setColor("Blue");
                  }}
                >
                  Blue
                </button>
                <br />
                <button type="button" onClick={() => setColor("Green")}>
                  Green
                </button>
                <br />
                <button type="button" onClick={change_to_pink}>
                  Pink
                </button>
              </>
            }
          />
        </Routes>
        <About />
        <hr
          style={{
            width: "100%",
            height: 5,
            color: "red",
            backgroundColor: "red",
          }}
        />
        <h1>List in React</h1>
        <List />
        <hr
          style={{
            color: "blue",
            backgroundColor: "blue",
            widht: "100%",
            height: "10px",
          }}
        />
        <h1
          style={{
            backgroundColor: "yellow",
            color: "red",
            fontSize: "bolder",
            textAlign: "center",
            margin: 10,
            padding: 10,
            border: "2px solid black",
            borderRadius: "10px",
          }}
        >
          USING FORMS IN REACT
        </h1>
        <Forms />
      </BrowserRouter>
    </>
  );
}
