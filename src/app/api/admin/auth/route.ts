import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import crypto from "crypto";

function getToken() {
  const password = process.env.ADMIN_PASSWORD || "";
  return crypto.createHash("sha256").update(password).digest("hex");
}

export async function POST(req: Request) {
  const { password } = await req.json();
  const expected = process.env.ADMIN_PASSWORD || "";

  if (!expected) {
    return NextResponse.json({ error: "ADMIN_PASSWORD not configured" }, { status: 500 });
  }

  if (password !== expected) {
    return NextResponse.json({ error: "Wrong password" }, { status: 401 });
  }

  const token = getToken();
  const jar = await cookies();
  jar.set("admin_token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  return NextResponse.json({ ok: true });
}

export async function DELETE() {
  const jar = await cookies();
  jar.delete("admin_token");
  return NextResponse.json({ ok: true });
}
