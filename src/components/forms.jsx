/** @format */
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function Forms() {
  const [name, setName] = useState(""); // State variable to store the name 1. controlled form

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
  }); // State variable to store the form data 2. multiple inputs in a form

  const [error, setError] = useState(""); // State variable to store the error message

  const handleControlledFormChange = (event) => {
    setName(event.target.value);
  };
  const handleControlledFormSubmit = (event) => {
    event.preventDefault(); // Prevents page reload
    alert(`Name is: ${name}`);
    alert(`Name is:` + name);
  };

  const handleMultipleDataSubmit = (event) => {
    event.preventDefault(); // Prevents page reload
    if (!formData.email.includes("@")) {
      setError("Email is not valid");
      return;
    }
    alert(
      `Name is: ${formData.name} -- Email is: ${formData.email} -- Password is: ${formData.password} -- Address is: ${formData.address}`
    );
  };
  const handleMultipleDataChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <>
      <h3
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
        1.-----------------CONTROLLED FORM-----------------------
        <br />
      </h3>
      <form onSubmit={handleControlledFormSubmit}>
        <label> Enter Name: </label> <br />
        <input type="text" value={name} onChange={handleControlledFormChange} />
        <br />
        entered name is : {name}
        <br />
      </form>

      <h3
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
        2. Handling Multiple Inputs in a Form -- Instead of creating separate
        state variables for each input, we can use a single state object.
        <br />
        also adding validation
      </h3>
      <form onSubmit={handleMultipleDataSubmit}>
        <label>Name: {formData.name}</label>
        <br />
        <input
          type="text"
          name="name"
          // name is used to identify the input field in the formData object
          //  if name is not used then it will not work(will not be able to handle anything)
          value={formData.name}
          onChange={handleMultipleDataChange}
        />
        <br />
        <label>Email: {formData.email}</label>
        <br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleMultipleDataChange}
        />
        <br />
        <label>Password: {formData.password}</label>
        <br />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleMultipleDataChange}
        />
        <br />
        <label>Address: {formData.address}</label>
        <br />
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleMultipleDataChange}
        />
        <br />
        <button type="submit">Submit</button>
        <br />
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </>
  );
}
