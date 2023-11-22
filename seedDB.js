// import Prisma
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const fs = require("fs");
const path = require("path");
const generateSlug = require("./generateSlug.js");

function main()
{
	const rawData = fs.readFileSync(path.resolve(__dirname, './', 'db', 'db.json'));
	const postsData = JSON.parse(rawData);

	postsData.forEach(postData =>
	{
		const slug = generateSlug(postData.title);

		prisma.post.create({
			data: {
				...postData,
				slug: slug,
				createdAt: new Date(),
				updatedAt: new Date()
			}
		}).then(createdPost => console.log(`Post creato: ${createdPost.title}`));
	});
}

main();
