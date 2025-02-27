import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    // jika ingin membuka halaman product harus melakukan login terlebih dahulu
    const islogin = false;
    if (islogin) {
        return NextResponse.next();
    } else {
        return NextResponse.redirect(new URL("/auth/login", req.url));
    }
    // tidak melkukan apa2/tidak mendirect
    // return NextResponse.next();
    // jika menggunakan redirect middleware tidak akan mengglicth halaman
    return NextResponse.redirect(new URL("/", req.url));
}

export const config = {
    // halaman mana yang mau di redirect
    matcher: "/product",
};

export default middleware;


