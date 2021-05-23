import { http } from './http.js';
import { ui } from './ui.js';
 
window.onload = () => {
	if(window.location.search !== '') {
		const id = window.location.search.split('=')[1];	
		http.get("http://localhost:3000/allproducts?id="+id)
		.then((data) =>  ui.showProductDetails(data));		
	}
}