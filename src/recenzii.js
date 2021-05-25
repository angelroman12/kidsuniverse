import { http } from './http.js';
import { ui } from './ui.js';

addEventListener('DOMContentLoaded', getComments);
function getComments() {
    http.get("http://localhost:3000/comentarii")
      .then((comments) => ui.showComments(comments));
}


document.getElementById('submitComment').addEventListener('click', addNewComment);

function addNewComment() {
	const fullName = document.getElementById('fullName').value;
	const productName = document.getElementById('productName').value;
	const email = document.getElementById('email').value;
	const message = document.getElementById('message').value;
	let recenzie = {	
		fullName: fullName,		
		productName: productName,
		email: email,		
		message: message,
	};
	http
		.post('http://localhost:3000/comentarii', recenzie)
		.then((comments) =>showComments(comments));	
	
}