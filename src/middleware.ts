import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow the auth endpoint itself
  if (pathname === "/api/admin/auth") {
    return NextResponse.next();
  }

  // Check for admin token cookie
  const token = request.cookies.get("admin_token")?.value;

  if (!token) {
    // For API routes, return 401
    if (pathname.startsWith("/api/blog")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    // For admin pages (except login), redirect to login
    if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
      const loginUrl = new URL("/admin/login", request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/blog/:path*"],
};
