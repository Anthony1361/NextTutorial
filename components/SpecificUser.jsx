"use client";

import { Button, Card, Input, List, ListItem } from "@material-tailwind/react";
import { useState } from "react";

const SpecificUser = () => {
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState(null);

  const fetchUserData = async () => {
    const response = await fetch(`/api/users-again/${userId}`);

    if (response.ok) {
      const res = await response.json();
      setUserData(res.user);
    } else {
      console.log("Error fetching user data");
      setUserData(null);
    }
  };

  return (
    <div>
      <div className="flex">
        <div className="w-60">
          <Input
            label="Enter User Id"
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          ></Input>

        </div>
        <Button onClick={fetchUserData} className="ml-8">Fetch User</Button>
      </div>

        {/* If u have the user data */}
        {userData ? (
            userData.map((d) => (
                <>
                <Card className="w-96 mt-5">
                    <List>
                        <ListItem>ID: {d.id}</ListItem>
                        <ListItem>Name: {d.name}</ListItem>
                        <ListItem>Age: {d.age}</ListItem>
                        <ListItem>Email: {d.email}</ListItem>
                        <ListItem>Password: {d.password}</ListItem>
                    </List>
                </Card>
                </>
            ))
        ): (
            <p className="mt-2">Search for a specific user</p>
        )}
    </div>
  );
};

export default SpecificUser;
