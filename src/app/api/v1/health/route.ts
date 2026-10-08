import { NextResponse } from "next/server";
export function GET() {
  return NextResponse.json({ status: "ok", service: "hana", databaseConfigured: Boolean(process.env.NEXT_PUBLIC_CONVEX_URL) }, {
    headers: { "Cache-Control": "no-store" },
  });
}
