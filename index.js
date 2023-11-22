// import functions
const {
	create,
	find,
	getAllPosts,
	update,
	destroy,
	getPublishedPosts,
	getPostsByContent
} = require("./functions.js");

const parameters = process.argv.slice(2);

const postData = {
	title: "Se non ci fosse il backend...",
	image: "https://picsum.photos/200/300",
	content: "Ci sono cose che non dovrebbero esistere, e il backend è una di queste. Non è possibile che esista qualcosa di così malvagio e perverso la cui logica scaturisce direttamente dalle profondità dell'inferno.",
	published: false
};

const slug = "se-non-ci-fosse-il-backend";

const updateData = {
	title: "Se non ci fosse il backend bisognerebbe farne a meno",
	content: "Anche se ad alcuni piace, in realtà il backend è una perversione, qualcosa di malvagio e perverso la cui logica scaturisce direttamente dalle profondità dell'inferno.",
	published: false
};

const contentString = "backend";


switch (parameters[0])
{
	case "create":
		create(postData);
		break;

	case "find":
		find(slug);
		break;

	case "getAllPosts":
		getAllPosts();
		break;

	case "update":
		update(slug, updateData);
		break;

	case "destroy":
		destroy(slug);
		break;

	case "getPublishedPosts":
		getPublishedPosts();
		break;

	case "getPostsByContent":
		getPostsByContent(contentString);
		break;

	default:
		console.log("Comando non riconosciuto");
}
