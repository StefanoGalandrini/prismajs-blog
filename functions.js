// import Prisma
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// import utilities
const generateSlug = require("./generateSlug.js");



function create(postData)
{
	const slug = generateSlug(postData.title);

	prisma.post.create({
		data: {
			...postData,
			slug: slug
		}
	}).then(createdPost => console.log(`Post creato: ${createdPost.title}`));
}

// create(postData);

/*--------------------------*/


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
				console.log("Post trovato:", post);
			} else
			{
				console.log("Nessun post trovato con lo slug:", slug);
			}
		})
		.catch(error => console.error("Errore durante la ricerca del post:", error));
}

// find(slug);

/*--------------------------*/


function getAllPosts()
{
	prisma.post.findMany()
		.then(posts => console.log("Tutti i post:", posts))
		.catch(error => console.error("Errore durante il recupero dei post:", error));
}

// getAllPosts();

/*--------------------------*/


function update(slug, updateData)
{
	// Search if the post exists
	prisma.post.findUnique({ where: { slug } })
		.then((existingPost) =>
		{
			if (!existingPost)
			{
				console.log("Nessun post trovato con lo slug:", slug);
				return;
			}

			// if title is changed, generate a new slug
			// and add it to the updateData
			if (updateData.title && updateData.title !== existingPost.title)
			{
				const newSlug = generateSlug(updateData.title);

				updateData = { ...updateData, slug: newSlug };
			}

			// update post
			return prisma.post.update({
				where: { slug },
				data: updateData
			});
		})
		.then((updatedPost) =>
		{
			if (updatedPost)
			{
				console.log("Post aggiornato:", updatedPost);
			}
		})
		.catch(error => console.error("Errore durante l'aggiornamento del post:", error));
}

// update(slug, updateData);

/*--------------------------*/



function destroy(slug)
{
	prisma.post.delete({
		where: {
			slug: slug
		}
	})
		.then(() => console.log("Post eliminato"))
		.catch(error => console.error("Errore durante l'eliminazione del post: ", error));
}

// destroy(slug);


/*--------------------------*/



function getPublishedPosts()
{
	prisma.post.findMany({
		where: {
			published: true
		}
	})
		.then(publishedPosts =>
		{
			console.log('Post pubblicati:', publishedPosts);
		})
		.catch(error => console.error('Errore durante il recupero dei post pubblicati:', error));
}

// getPublishedPosts();


/*--------------------------*/



function getPostsByContent(contentString)
{
	prisma.post.findMany({
		where: {
			content: {
				contains: contentString
			}
		}
	})
		.then(posts =>
		{
			console.log('Post contenenti la stringa:', posts);
		})
		.catch(error => console.error('Errore durante la ricerca dei post:', error));
}

// getPostsByContent(contentString);


/*--------------------------*/



module.exports = {
	create,
	find,
	getAllPosts,
	update,
	destroy,
	getPublishedPosts,
	getPostsByContent
};
