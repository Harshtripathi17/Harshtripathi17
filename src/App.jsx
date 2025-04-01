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
import reactpic from "./assets/react.svg";
import Userboard from "./components/Userboard";
import image1 from "./assets/harsh.jpg";
import image2 from "./assets/harsh1.jpg";
import image3 from "./assets/harsh2.png";
import Button from "./components/button";

const user = {
  name: "ABC",
  rollno: 12,
  stream: "Science",
};

export default function App() {
  const [color, setColor] = useState("Red");

  const change_to_pink = () => setColor("Pink");

  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

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
        <h1
          style={{
            color: "yellow",
            backgroundColor: "black",
            margin: 10,
            padding: 10,
            textAlign: "center",
            fontSize: 40,
          }}
        >
          --------------importing iamge and use {} to use it i.e. img src=
          {reactpic}------------------
        </h1>
        <img
          src={reactpic}
          alt=""
          style={{
            margin: 10,
            padding: 10,
            width: 40,
            height: 40,
            backgroundColor: "black",
            display: "flex",
            // textAlign: "center",
            marginLeft: "50%",
          }}
        />
        {/* !--------------USING PROPS------------------ */}
        <h1
          style={{
            color: "yellow",
            backgroundColor: "black",
            margin: 10,
            padding: 10,
            textAlign: "center",
            fontSize: 40,
          }}
        >
          --------------USING PROPS------------------
        </h1>
        <div className="userboard">
          <Userboard
            name="Harsh Tripathi"
            details="This is details for Harsh Tripathi"
            image={image1}
            style={{ borderRadius: "10px", border: "1px solid black" }}
          />
          {/*  in html the data passed are called attribuites */}
          {/*  in jsx the data passed are called props */}
          <Userboard
            name="Sunny Tripathi"
            details="This is details for Sunny Tripathi"
            image={image2}
            style={{ "border-radius": "10px", border: "3px solid black" }}
          />
          <Userboard
            name="Tripathi ji"
            details="This is details for Tripathi ji"
            image={image3}
            // style={{ "border-radius": "10px", border: "1px solid black" }} and below is same
            style={{ borderRadius: "10px", border: "1px solid black" }}
          />
          <Userboard
            name="Tripathi"
            details="This is details for Tripathi"
            image={image3}
            // style={{ "border-radius": "10px", border: "1px solid black" }} and below is same
            style={{ borderRadius: "10px", border: "1px solid black" }}
          >
            <h1>HELLO I AM HARSH TRIPATHI</h1>
            <h2>I AM 23 YEARS OLD</h2>
          </Userboard>
          {/* 
          //! passing handleClick function as props   
          */}
          <hr />
          <Button handleClick={handleClick} text="Click Me">
            <h1>{count}</h1>
          </Button>
        </div>
      </BrowserRouter>
    </>
  );
}
