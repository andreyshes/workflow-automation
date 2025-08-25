import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();

export const authConfig = {
	adapter: PrismaAdapter(prisma),
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
		}),
		GitHubProvider({
			clientId: process.env.GITHUB_ID!,
			clientSecret: process.env.GITHUB_SECRET!,
		}),
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: { label: "Email", type: "email" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials) {
				if (!credentials?.email || !credentials?.password) {
					throw new Error("Invalid credentials");
				}

				const user = await prisma.user.findUnique({
					where: { email: credentials.email },
				});

				if (!user || !user.hashedPassword) {
					throw new Error("No user found or password is missing");
				}

				const isValidPassword = await bcrypt.compare(
					credentials.password,
					user.hashedPassword
				);

				if (!isValidPassword) {
					return null; // invalid password
				}

				return user; // authenticated successfully
			},
		}),
	],

	debug: true,
	pages: {
		signIn: "/login",
		newUser: "/dashboard",
	},
	callbacks: {
		async jwt({ token, user }) {
			if (user) token.user = user;
			return token;
		},

		async session({ session, token }) {
			if (token?.user) {
				session.user = token.user as any;
			}
			return session;
		},
	},

	secret: process.env.NEXTAUTH_SECRET,
} satisfies import("next-auth").NextAuthOptions;
