// app/dashboard/page.tsx
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authConfig } from "../auth.config";
import Image from "next/image";

export default async function DashboardPage() {
	const session = await getServerSession(authConfig);

	if (!session) {
		redirect("/signup");
	}

	const { name, email, image } = session.user || {};
	console.log("User session:", session);

	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<h1 className="text-2xl">Welcome, {name?.toUpperCase()}</h1>
			<p className="py-2 font-bold">Email: {email}</p>
			{image && (
				<Image
					src={image}
					alt="Profile Image"
					width={100}
					height={100}
					className="rounded-full"
				/>
			)}
		</div>
	);
}
