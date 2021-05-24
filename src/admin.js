import { http } from './http.js';
import { ui } from './ui.js';
// Load products 
document.addEventListener('DOMContentLoaded', getProducts);

function getProducts() {
	http
		.get("http://localhost:3000/allProducts")
		.then((data) => ui.productsAdmin(data));
}
// Add new product 
document.getElementById('submit').addEventListener('click', addNewProduct);

function addNewProduct() {
	const picture = document.getElementById('picture').value;
	const title = document.getElementById('title').value;
	const price = document.getElementById('price').value;
	const descriptionValue = document.getElementById('description').value;
	let product = {	
		picture: picture,		
		price: price,
		title: title,		
		description: descriptionValue,
	};
	http
		.post('http://localhost:3000/allProducts', product)
		.then((data) => productsAdmin());	
		alert("Produsul a fost adaugat")	
}
document.getElementById('output').addEventListener('click', deleteProduct);
function deleteProduct(e) {
	if (e.target.classList.contains('delete')) {
		const id = e.target.id;
		http
			.delete(`http://localhost:3000/allProducts/${id}`)
			.then((data) => productsAdmin())
			.catch('Error on delete!');
			alert("Produsul a fost sters")		
	}
	
}