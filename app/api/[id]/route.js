import { NextResponse } from "next/server"

// name(request,response) but _, was to ignore the request .. //
export function GET(_, response){
    // To get the specific id from the path ..///
    const {id} = response.params;

    return NextResponse.json({id})

    // console.log(response.params.id)

    // return NextResponse.json({result: 'hello'})
}