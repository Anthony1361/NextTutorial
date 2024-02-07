import {NextResponse} from "next/server"

export function middleware(request){

    return NextResponse.redirect(new URL("/login", request.url))

    // if (request.nextUrl.pathname != '/login'){
    //     return NextResponse.redirect(new URL('/login', request.url))
    // }
    
    // return NextResponse.json({success : "successfully ran"})
}

// The Direction u want the middleware to run .... //
export const config = {
    matcher : ['/userslist/:path*']
}