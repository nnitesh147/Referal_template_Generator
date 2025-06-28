import { auth } from "@clerk/nextjs/server";
import { db } from "../../../../db/index";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET() {
  const { userId, isAuthenticated } = await auth();

  if (!isAuthenticated) {
    return NextResponse.json("Not Authenticated", { status: 403 });
  }
  try {
    const data = await db
      .select({
        applying_company: users.applying_company,
        applying_role: users.applying_role,
        cgpa: users.cgpa,
        college: users.college,
        contact: users.contact,
        current_company: users.current_company,
        current_role: users.current_role,
        email: users.email,
        first_name: users.first_name,
        resume_link: users.resume_link,
        short_description: users.short_description,
      })
      .from(users)
      .where(eq(users.external_id, userId));
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(`Internal Server Error ${error}`, { status: 500 });
  }
}

export async function POST(req: Request) {
  const { userId, isAuthenticated } = await auth();
  if (!isAuthenticated) {
    return NextResponse.json("Not Authenticated", { status: 403 });
  }
  try {
    const data = await req.json();

    await db
      .update(users)
      .set({
        cgpa: data.cgpa,
        college: data.college,
        contact: data.contact,
        current_company: data.current_company,
        current_role: data.current_role,
        email: data.email,
        resume_link: data.resume_link,
        short_description: data.short_description,
      })
      .where(eq(users.external_id, userId));

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(`Internal Server Error ${error}`, { status: 500 });
  }
}
