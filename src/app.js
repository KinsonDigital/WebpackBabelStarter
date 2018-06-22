import { person, sayHello } from "./lib";

console.log(person.name);

sayHello("Kinson");


var request = new Request("https://jsonplaceholder.typicode.com/posts", {
	method: "GET"
});

async function getPosts() {
	/*fetch is a new built in browser function for requesting data from servers.
		this is an ajax replacement.  Using "async await" requires that you
		install a polyfill called "babel-polyfill" and "babel-preset-stage-0" npm packages
	*/
	const response = await fetch(request);

	const data = await response.json();

	return data;
}


getPosts()
	.then(posts => console.log(posts));