import  auth  from "next-auth/middleware";

export const middleware = auth;

export const config = {
    // *: zero or more parameters
    // +: one or more parameters
    // ?: zero or one parameters

    matcher: ['/dashboard/:path*'],
};