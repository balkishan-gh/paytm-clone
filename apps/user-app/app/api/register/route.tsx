import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import { PrismaClient } from "@repo/db/client";

const client = new PrismaClient();

export async function POST(request: Request) {
  const body = await request.json();
  const { name, number, password } = body;

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await client.user.create({
    data: {
      name,
      number,
      hashedPassword,
    },
  });

  return NextResponse.json(user);
}
