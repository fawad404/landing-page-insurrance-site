const { NextResponse } = require("next/server")


export function middleware(req){
    const res = NextResponse.next();
    res.headers.append('ACCESS-CONTROL-ALLOW-ORIGIN', '*');
    return res;
}

export const config = {
    matcher: ['/api/:path*']
}