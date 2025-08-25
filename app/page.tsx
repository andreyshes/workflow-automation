"use client";
import Button from "./components/Button";
import Link from "next/link";

export default function HomePage() {
	return (
		<main className="container mx-auto py-8">
			<h1 className="text-5xl font-bold flex justify-center ">
				Welcome to Workflow Automation
			</h1>
			<h2 className="font-bold flex justify-center pt-5 text-2xl">
				Automation for business and home
			</h2>
			<p className="mt-4 text-lg text-gray-600 flex justify-center	">
				Build and automate your workflows efficiently.
			</p>
			<Link href={"/signup"} className="flex justify-center">
				<Button className="mt-6 mx-auto block bg-black text-white px-6 py-4 rounded-full text-4xl font-semibold	">
					Start Today
				</Button>
			</Link>
		</main>
	);
}
