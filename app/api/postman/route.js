import { NextResponse } from "next/server";

export async function POST(request, response){

    // Destructuring the email and password .. //
    // let {email, password} = await request.json();
    // console.log(email, password);

    // if(!email || !password){
        // return NextResponse.json({error: "required field not found"}, {status: 400});
        // the Status will display 400 bad request if one of the required field is not met .. //
    // }

    // let data = await request.json();
    // console.log(data);

    let {name, age, email} = await request.json();

    if(!name || !age || !email){
        return NextResponse.json({error: "required field not found", ok: false}, {status: 400})
    }

    return NextResponse.json({response: "data sent successfully", ok: true}, {status: 201});
}