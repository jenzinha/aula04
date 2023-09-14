'use server'
import { NextResponse } from "next/server";
import { validateToken } from "./app/functions/validateToken";

export const middleware = (request) => {

    const token = request.cookies.get('token')?.value;
    const urlLogin = new URL('/', request.url);
    const urlRegister = new URL('/pages/dashboard/register', request.url)
    const isTokenValidated = validateToken(token);

    if (!isTokenValidated || !token) {
        if (request.nextUrl.pathname === '/pages/dashboard') {
            return NextResponse.redirect(urlLogin);
        }    
        if (request.nextUrl.pathname === '/' && token){
         return NextResponse.redirect('/pages/dashboard');     
        }

        if (request.nextUrl.pathname === '/pages/dashboard/register' || request.nextUrl.pathname ==='/pages/dashboard/alter'){
            return NextResponse.redirect(urlLogin);
        } 
        if (isTokenValidated) {
            return NextResponse.redirect(urlRegister);
        }
    }
        
    NextResponse.next();
};
export const config = {
    matcher: ['/', '/pages/dashboard', '/pages/dashboard/register', '/pages/dashboard/alter']
};

