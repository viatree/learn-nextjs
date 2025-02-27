import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    // return NextResponse.next();
    return NextResponse.redirect(new URL("/", req.url));
}

export const config = {
    // halaman mana yang mau di redirect
    matcher: "/",
};

export default middleware;


