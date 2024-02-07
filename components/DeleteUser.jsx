"use client";

import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";

const DeleteUser = () => {
  const [id, setId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(!id){
        alert('Please provide id to delete the user')
        return;
    }

    try {
        const response = await fetch(`/api/users-again/${id}`, {
            method: "DELETE",
        });

        if(response.ok){
            alert('User deleted')
        } else{
            const data = await response.json()
            alert(data.result || 'Something went wrong with deleting user')
        }

    } catch (error) {
        alert(error)
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          label="User ID"
          type="text"
          placeholder="User ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        ></Input>

        <Button className="mt-2" type="submit">Delete User</Button>
      </form>
    </div>
  );
};

export default DeleteUser;
