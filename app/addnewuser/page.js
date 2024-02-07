"use client";

import { useState } from "react";

const AddNewUser = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const addNewUserHandler = async () => {
    let response = await fetch('api/postman', {
        method: 'POST',
        body: JSON.stringify({name, age, email})
    })

    response = await response.json()

    if (response.ok){
        alert('User successfully Created')
    } else {
        alert('An Error Occured While Creating The New User')
    }
    // console.log(name ,age ,email)
  }

  return (
    <div>
      <h2>AddNewUser</h2>

      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
        placeholder="Please Enter Your Name"
        className="mt-4"
      ></input>

       <br></br>
      <input
        type="number"
        onChange={(e) => setAge(e.target.value)}
        value={age}
        placeholder="Please Enter Your Age"
        className="mt-4"
      ></input>

        <br></br>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder="Please Enter Your Email"
        className="mt-4"
      ></input>

        <br></br> 
      <button className="mt-4" onClick={addNewUserHandler}>Add New User</button>

    </div>
  );
};

export default AddNewUser;
