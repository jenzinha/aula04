'use server'
import { NextResponse } from "next/server";
import { validateToken } from "./app/functions/validateToken";

export const middleware = (request) => {

    const token = request.cookies.get('token')?.value;
    const urlLogin = new URL('/', request.url);
    const isTokenValidated = validateToken(token);

    if (!isTokenValidated || !token) {
        if (request.nextUrl.pathname === '/pages/dashboard') {
            return NextResponse.redirect(urlLogin);
        }    
 
        if (request.nextUrl.pathname === '/' && token){
         return NextResponse.redirect('/pages/dashboard');     
        }
        if (request.nextUrl.pathname === '/pages/alter/alter' || request.nextUrl.pathname === '/pages/register/register'){
            return NextResponse.redirect(urlLogin);
        }
    }
        
    NextResponse.next();
};
export const config = {
    matcher: ['/', '/pages/dashboard', '/pages/alter/alter', '/pages/register/register']
};

