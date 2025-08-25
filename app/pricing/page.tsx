"use client";

import Link from "next/link";
import { CheckIcon } from "@heroicons/react/20/solid";

const pricing = {
	tiers: [
		{
			name: "Hobby",
			id: "hobby",
			price: { monthly: "$19", annually: "$199" },
			description: "The essentials to provide your best work for clients.",
			features: ["5 products", "Up to 1,000 subscribers", "Basic analytics"],
			featured: false,
			href: "/plans/hobby",
		},
		{
			name: "Freelancer",
			id: "freelancer",
			price: { monthly: "$29", annually: "$299" },
			description: "The essentials to provide your best work for clients.",
			features: [
				"5 products",
				"Up to 1,000 subscribers",
				"Basic analytics",
				"48-hour support response time",
			],
			featured: false,
			href: "/plans/freelancer",
		},
		{
			name: "Startup",
			id: "startup",
			price: { monthly: "$59", annually: "$599" },
			description: "A plan that scales with your rapidly growing business.",
			features: [
				"25 products",
				"Up to 10,000 subscribers",
				"Advanced analytics",
				"24-hour support response time",
				"Marketing automations",
			],
			featured: true,
			href: "/plans/startup",
		},
		{
			name: "Enterprise",
			id: "enterprise",
			price: { monthly: "$99", annually: "$999" },
			description: "Dedicated support and infrastructure for your company.",
			features: [
				"Unlimited products",
				"Unlimited subscribers",
				"Advanced analytics",
				"1-hour, dedicated support response time",
				"Marketing automations",
				"Custom reporting tools",
			],
			featured: false,
			href: "/plans/enterprise",
		},
	],
};

export default function Example() {
	return (
		<div className="bg-white dark:bg-gray-900">
			<main>
				{/* Pricing section */}
				<form className="group/tiers bg-white pt-24 sm:pt-32 dark:bg-gray-900">
					<div className="mx-auto max-w-7xl px-6 lg:px-8">
						<div className="mx-auto max-w-4xl text-center">
							<p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl dark:text-white">
								Pricing that grows with you
							</p>
						</div>
						<p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8 dark:text-gray-400">
							Choose an affordable plan that’s packed with the best features for
							engaging your audience, creating customer loyalty, and driving
							sales.
						</p>
						<div className="mt-16 flex justify-center">
							<fieldset aria-label="Payment frequency">
								<div className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs/5 font-semibold inset-ring inset-ring-gray-200 dark:inset-ring-white/10">
									<label className="group relative rounded-full px-2.5 py-1 has-checked:bg-black dark:has-checked:bg-black">
										<input
											defaultValue="monthly"
											defaultChecked
											name="frequency"
											type="radio"
											className="absolute inset-0 appearance-none rounded-full"
										/>
										<span className="text-gray-500 group-has-checked:text-white dark:text-gray-400">
											Monthly
										</span>
									</label>
									<label className="group relative rounded-full px-2.5 py-1 has-checked:bg-black dark:has-checked:bg-black">
										<input
											defaultValue="annually"
											name="frequency"
											type="radio"
											className="absolute inset-0 appearance-none rounded-full"
										/>
										<span className="text-gray-500 group-has-checked:text-white dark:text-gray-400">
											Annually
										</span>
									</label>
								</div>
							</fieldset>
						</div>
						<div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
							{pricing.tiers.map((tier) => (
								<div
									key={tier.id}
									data-featured={tier.featured ? "true" : undefined}
									className="group/tier rounded-3xl p-8 ring-1 ring-gray-200 data-featured:ring-2 data-featured:ring-indigo-600 dark:bg-gray-800/50 dark:ring-white/15 dark:data-featured:ring-indigo-400"
								>
									<div className="flex items-center justify-between gap-x-4">
										<h3
											id={`tier-${tier.id}`}
											className="text-lg/8 font-semibold text-gray-900 group-data-featured/tier:text-indigo-600 dark:text-white dark:group-data-featured/tier:text-indigo-400"
										>
											{tier.name}
										</h3>
										<p className="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs/5 font-semibold text-indigo-600 group-not-data-featured/tier:hidden dark:bg-indigo-500 dark:text-white">
											Most popular
										</p>
									</div>
									<p className="mt-4 text-sm/6 text-gray-600 dark:text-gray-300">
										{tier.description}
									</p>
									<p className="mt-6 flex items-baseline gap-x-1 group-not-has-[[name=frequency][value=monthly]:checked]/tiers:hidden">
										<span className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
											{tier.price.monthly}
										</span>
										<span className="text-sm/6 font-semibold text-gray-600 dark:text-gray-400">
											/month
										</span>
									</p>
									<p className="mt-6 flex items-baseline gap-x-1 group-not-has-[[name=frequency][value=annually]:checked]/tiers:hidden">
										<span className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
											{tier.price.annually}
										</span>
										<span className="text-sm/6 font-semibold text-gray-600 dark:text-gray-400">
											/month
										</span>
									</p>
									<Link
										href={tier.href}
										aria-describedby={tier.id}
										className="mt-6 block w-full rounded-md px-3 py-2 text-center text-sm/6 font-semibold text-indigo-600 inset-ring-1 inset-ring-indigo-200 group-data-featured/tier:bg-indigo-600 group-data-featured/tier:text-white group-data-featured/tier:shadow-xs group-data-featured/tier:inset-ring-0 hover:inset-ring-indigo-300 group-data-featured/tier:hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-white/10 dark:text-white dark:inset-ring dark:inset-ring-white/5 dark:group-data-featured/tier:bg-indigo-500 dark:group-data-featured/tier:shadow-none dark:hover:bg-white/20 dark:hover:inset-ring-white/5 dark:group-data-featured/tier:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500 dark:group-not-data-featured/tier:focus-visible:outline-white/75"
									>
										Buy plan
									</Link>
									<ul
										role="list"
										className="mt-8 space-y-3 text-sm/6 text-gray-600 dark:text-gray-300"
									>
										{tier.features.map((feature) => (
											<li key={feature} className="flex gap-x-3">
												<CheckIcon
													aria-hidden="true"
													className="h-6 w-5 flex-none text-indigo-600 dark:text-indigo-400"
												/>
												{feature}
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>
				</form>
			</main>
			<footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-16">
				<div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-600 dark:text-gray-400">
					<div>
						<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
							Workflow
						</h3>
						<p className="mt-2">Empowering creators with automation.</p>
					</div>

					<div>
						<h4 className="font-medium text-gray-900 dark:text-white mb-2">
							Links
						</h4>
						<ul className="space-y-1">
							<li>
								<a href="/about" className="hover:underline">
									About
								</a>
							</li>
							<li>
								<a href="/pricing" className="hover:underline">
									Pricing
								</a>
							</li>
							<li>
								<a href="/contact" className="hover:underline">
									Contact
								</a>
							</li>
							<li>
								<a href="/privacy" className="hover:underline">
									Privacy Policy
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="font-medium text-gray-900 dark:text-white mb-2">
							Connect
						</h4>
						<div className="flex space-x-4">
							<a
								href="https://twitter.com"
								aria-label="Twitter"
								className="hover:text-indigo-600"
							>
								🐦
							</a>
							<a
								href="https://github.com"
								aria-label="GitHub"
								className="hover:text-indigo-600"
							>
								🐙
							</a>
							<a
								href="https://linkedin.com"
								aria-label="LinkedIn"
								className="hover:text-indigo-600"
							>
								💼
							</a>
						</div>
					</div>
				</div>

				<div className="text-center text-xs text-gray-500 dark:text-gray-600 py-6">
					© 2025 Workflow Inc. All rights reserved.
				</div>
			</footer>
		</div>
	);
}
