import { PrismaClient } from "./app/generated/prisma";

const prisma = new PrismaClient();

async function main() {
	const user = await prisma.user.create({
		data: {
			name: "Bob",
			email: "bob@prisma.io",
			// Remove 'posts' if not supported by your Prisma schema
		},
	});
	console.log(user);
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
