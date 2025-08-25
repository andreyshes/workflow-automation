// /app/api/auth/signup/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function POST(req: Request) {
	try {
		const { name, email, password } = await req.json();

		if (!name || !email || !password) {
			return NextResponse.json({ error: "Missing fields" }, { status: 400 });
		}
		// Check if user already exists
		const existingUser = await prisma.user.findUnique({ where: { email } });
		if (existingUser) {
			return NextResponse.json(
				{ error: "Email already in use" },
				{ status: 400 }
			);
		}
		const hashedPassword = await bcrypt.hash(password, 10);

		const user = await prisma.user.create({
			data: {
				name,
				email,
				hashedPassword,
			},
		});

		return NextResponse.json(
			{ message: "User created", user },
			{ status: 201 }
		);
	} catch (error) {
		console.error("Signup error:", error);
		return NextResponse.json({ error: "Server error" }, { status: 500 });
	}
}
