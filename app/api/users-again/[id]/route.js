import { users } from "@/app/util/db"
import { NextResponse } from "next/server" 

import fs from 'fs'

// 2 Get Specific User ... //
export async function GET(_, res){
    const {id} = await res.params;
    const user = users.filter((u) => u.id === id)
    return NextResponse.json({user, ok: true})
}

// 3 Login .. //
export async function POST(req, res){
    let {name, email, password} = await req.json();
    const {id} = await res.params;

    const {name: userName, email: userEmail, password: userPassword} = users.find((u) => u.id === id)

    if (userName === name && userEmail === email && userPassword === password){
        return NextResponse.json({result: "Successfully Logged In"})
    } else if (!name || !email || !password){
        return NextResponse.json({result: "Please Fill All The Input Feilds"})
    } else {
        return NextResponse.json({result: "Invalid Credentials"})
    }
}

// 6 Delete User ... //
export async function DELETE(req, res){
    const {id} = await res.params;

    // Find the index of the user to delete in the users array ... //
    const userIndex = users.findIndex((user) => user.id === id)

    if(userIndex === -1){
        return NextResponse.json({result: "User not found"}, {status: 404})
    }

    // Remove the user from the users array .... //
    users.splice(userIndex, 1)

    // Extract Just The user Array From The Updated Data ... //
    const updatedUserArray = users;

    // Convert The Updated Users Array To A Json string ... //
    const updatedData = JSON.stringify(updatedUserArray, null, 2)

    // Write the updated user array to a json string .. //
    fs.writeFileSync('./app/util/db.js', `export const users = ${updatedData};`,"utf-8");

    return NextResponse.json({success: 'User Successfully Deleted.'})
}