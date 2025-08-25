"use client";
import React, { useState } from "react";

const SignupPage: React.FC = () => {
	const [form, setForm] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value });
		setError("");
		setSuccess("");
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!form.name || !form.email || !form.password || !form.confirmPassword) {
			setError("Please fill in all fields.");
			return;
		}
		if (form.password !== form.confirmPassword) {
			setError("Passwords do not match.");
			return;
		}

		try {
			const res = await fetch("/api/auth/signUp", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					name: form.name,
					email: form.email,
					password: form.password,
				}),
			});

			const data = await res.json();

			if (!res.ok) {
				setError(data.error || "Something went wrong");
				return;
			}

			setSuccess("Signup successful! You can now log in.");
			setForm({
				name: "",
				email: "",
				password: "",
				confirmPassword: "",
			});
		} catch (err) {
			console.error(err);
			setError("Server error. Please try again.");
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 w-full">
			<div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
				<h2 className="text-3xl font-bold text-center text-black mb-6">
					Create your account
				</h2>
				<form onSubmit={handleSubmit} className="space-y-5">
					<div>
						<label className="block text-sm font-medium text-gray-700 mb-1">
							Name
						</label>
						<input
							type="text"
							name="name"
							value={form.name}
							onChange={handleChange}
							className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
							autoComplete="name"
						/>
					</div>
					<div>
						<label className="block text-sm font-medium text-gray-700 mb-1">
							Email
						</label>
						<input
							type="email"
							name="email"
							value={form.email}
							onChange={handleChange}
							className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
							autoComplete="email"
						/>
					</div>
					<div>
						<label className="block text-sm font-medium text-gray-700 mb-1">
							Password
						</label>
						<input
							type="password"
							name="password"
							value={form.password}
							onChange={handleChange}
							className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
							autoComplete="new-password"
						/>
					</div>
					<div>
						<label className="block text-sm font-medium text-gray-700 mb-1">
							Confirm Password
						</label>
						<input
							type="password"
							name="confirmPassword"
							value={form.confirmPassword}
							onChange={handleChange}
							className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
							autoComplete="new-password"
						/>
					</div>
					{error && (
						<div className="text-red-500 text-sm text-center">{error}</div>
					)}
					{success && (
						<div className="text-green-500 text-sm text-center">{success}</div>
					)}
					<button
						type="submit"
						className="w-full py-2 bg-black text-white font-semibold rounded-lg hover:bg-purple-700 transition"
					>
						Sign Up
					</button>
				</form>
				<p className="mt-6 text-center text-gray-500 text-sm">
					Already have an account?{" "}
					<a
						href="/login"
						className="text-purple-600 font-medium hover:underline"
					>
						Log in
					</a>
				</p>
			</div>
		</div>
	);
};

export default SignupPage;
