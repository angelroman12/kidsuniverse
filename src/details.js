import { http } from './http.js';
import { ui } from './ui.js';
 
window.onload = () => {
	if(window.location.search !== '') {
		const id = window.location.search.split('=')[1];	
		http.get("https://60adff9080a61f0017332272.mockapi.io/allProducts?id="+id)
		.then((data) =>  ui.showProductDetails(data));		
	}
}

