"use client";
import Link from "next/link";
import Button from "./Button";
import Image from "next/image";
const Navbar = () => {
	return (
		<>
			<nav className="sticky">
				<div className="container mx-auto flex justify-between items-center">
					<div className=" font-bold">
						<Link href={"/"}>
							<Image
								src="/images/workflow-logo-transparent.png"
								alt="logo image"
								width={140}
								height={100}
								style={{ width: "100%", height: "auto" }}
								priority
							/>
						</Link>
					</div>
					<div className="space-x-10">
						<Link
							href={"/"}
							className="text-black font-bold hover:text-gray-300 text-2xl"
						>
							Home
						</Link>
						<Link
							href="/pricing"
							className="text-black hover:text-gray-300 font-bold text-2xl"
						>
							Plans
						</Link>
						<Link
							href="/login"
							className="text-black font-bold hover:text-gray-300 text-2xl"
						>
							Login
						</Link>

						<Link
							href={"/signup"}
							className=" font-bold hover:text-gray-300 text-2xl"
						>
							<Button className="mt-6 mx-auto  bg-black text-white px-6 py-3 rounded-full text-lg font-semibold ">
								Get Started
							</Button>
						</Link>
					</div>
				</div>
			</nav>
		</>
	);
};
export default Navbar;
