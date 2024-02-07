'use client'

import { Card, List, ListItem } from "@material-tailwind/react"
import { useEffect, useState } from "react"

const AllUsers = () => {
    const [users, setUsers] = useState('')

    useEffect(() => {
        const fetchAllUsers = async () => {
            const response = await fetch('/api/users-again')
            const userInfo = await response.json()
            setUsers(userInfo.data);
        };
        fetchAllUsers()
    }, [])

  return (
    <div>
        {/* if we have the users */}
        {users && users.map((user) =>(
            <Card key={user.id} className="mb-4">
               <List>
                 <ListItem>{user.name}</ListItem>
               </List>
            </Card>
        ))}
    </div>
  )
}

export default AllUsers