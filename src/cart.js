import { ui } from './ui.js';
import { getCartFromLocalStorage, removeElementFromLocalStorage  } from './localStorage.js';
document.addEventListener('DOMContentLoaded', () => {
  let storageItems = getCartFromLocalStorage();
  ui.showProductsCart(storageItems);
  getCartTotal(storageItems);
});
function getCartTotal (storageItems) {
	let total = 0;
	for (let item of storageItems) {
		let numberOfProducts = parseInt(item.count);
		let productPrice = parseInt(item.product.price);
		total = total + numberOfProducts * productPrice;
	}
	
	addEventListener('DOMContentLoaded', () => {
	   let t = total.toString();
		document.getElementById("total").innerHTML += total + " " + "RON";
		
	});
	return total;
}

document.getElementById('finalizare').addEventListener('click', () => {
	document.getElementById('confirm').style.display ="flex";
	document.getElementById('cart-body').innerHTML = ""
	document.getElementById('total').innerHTML = "Total" + " " + 0 + " " + "RON";
})

document.getElementById('ok').addEventListener('click', () => {
	document.getElementById('confirm').style.display ="none"
})