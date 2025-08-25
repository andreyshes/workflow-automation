"use client";

import { signIn } from "next-auth/react";
import { useState, useEffect } from "react";

export default function LoginForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	useEffect(() => {
		setEmail("");
		setPassword("");
	}, []);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const result = await signIn("credentials", {
			redirect: false,
			email,
			password,
			callbackUrl: "/dashboard",
		});

		if (result?.error) {
			// Show error message to the user
			alert("Login failed: " + result.error);
		} else if (result?.ok) {
			if (result?.ok && result.url) {
				window.location.href = result.url;
			}
		}
	};

	const handleForgotPassword = () => {
		// Implement forgot password logic here
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<form
				onSubmit={handleSubmit}
				className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl space-y-6"
			>
				<h2 className="text-3xl font-bold text-center text-gray-800">
					Sign In
				</h2>

				{/* Email */}
				<div className="flex flex-col space-y-1">
					<label htmlFor="email" className="text-sm font-medium text-gray-700">
						Email
					</label>
					<input
						type="email"
						autoComplete="off"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="you@example.com"
						required
						className="border border-gray-300 rounded-xl px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</div>

				{/* Password */}
				<div className="flex flex-col space-y-1">
					<label
						htmlFor="password"
						className="text-sm font-medium text-gray-700"
					>
						Password
					</label>
					<input
						type="password"
						autoComplete="new-password"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="••••••••"
						required
						className="border border-gray-300 rounded-xl px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</div>

				{/* Forgot Password */}
				<div className="text-right text-sm">
					<a href="/forgot-password" className="text-blue-600 hover:underline">
						Forgot password?
					</a>
				</div>

				{/* Sign In Button */}
				<button
					type="submit"
					className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-900 transition-colors font-semibold"
				>
					Sign In
				</button>

				{/* Divider */}
				<div className="flex items-center justify-center space-x-2">
					<hr className="w-full border-gray-300" />
					<span className="text-sm text-gray-500">or</span>
					<hr className="w-full border-gray-300" />
				</div>

				{/* OAuth Buttons */}
				<div className="space-y-3">
					<button
						type="button"
						onClick={() => signIn("github")}
						className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-xl hover:bg-gray-100 transition"
					>
						<img
							src="/images/github-mark.svg"
							alt="GitHub"
							className="w-5 h-5"
						/>
						<span className="text-sm font-medium text-gray-800">
							Sign in with GitHub
						</span>
					</button>

					<button
						type="button"
						onClick={() => signIn("google")}
						className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-xl hover:bg-gray-100 transition"
					>
						<img
							src="/images/google-icon.svg"
							alt="Google"
							className="w-5 h-5"
						/>
						<span className="text-sm font-medium text-gray-800">
							Sign in with Google
						</span>
					</button>
				</div>
			</form>
		</div>
	);
}
