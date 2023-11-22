// import Prisma
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// import modules
const fs = require("fs");
const path = require("path");
const generateSlug = require("./generateSlug.js");

// function that reads initial data from json file
// and seeds the database

function create()
{
	const postData = {
		title: "Mille modi per desiderare di morire",
		image: "https://picsum.photos/200/300",
		content: "Il backend, in qualsiasi sua forma, è il male assoluto; per quanti modi si possano trovare per lavorarci, alla fine si desidera sempre di morire.",
		published: true
	};

	const slug = generateSlug(postData.title);


	prisma.post.create({
		data: {
			...postData,
			slug: slug
		}
	}).then(createdPost => console.log(`Post creato: ${createdPost.title}`));
}

// create();


// function that reads a Post using its slug
function find(slug)
{
	prisma.post.findUnique({
		where: {
			slug: slug
		}
	})
		.then(post =>
		{
			if (post)
			{
				console.log('Post trovato:', post);
			} else
			{
				console.log('Nessun post trovato con lo slug:', slug);
			}
		})
		.catch(error => console.error("Errore durante la ricerca del post:", error));
}

find("mille-modi-per-desiderare-di-morire");
