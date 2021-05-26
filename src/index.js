import {http} from "./http.js";
import {ui} from "./ui.js";
const output = document.getElementById('output');

const mobilier = document.getElementById('mobilier');
mobilier.addEventListener('click', getMobilier);
function getMobilier () {
  output.innerHTML = "";
  http.get("https://60ae021e80a61f00173322ee.mockapi.io/mobilier")
      .then((data) => ui.productsInIndex(data));
}


const biciclete = document.getElementById('biciclete')
biciclete.addEventListener('click', getBiciclete);
function getBiciclete(){
  output.innerHTML = "";
  http.get("https://60ae033e80a61f0017332321.mockapi.io/biciclete")
      .then((data) => ui.productsInIndex(data));
}

document.getElementById('boardgames').addEventListener('click', () => {
  output.innerHTML = "";
  http.get("https://60ae00fc80a61f00173322ab.mockapi.io/boardGames")
      .then((data) => ui.productsInIndex(data));
})

const allProducts = document.getElementById('allProducts').addEventListener("click", () =>{
  output.innerHTML = "";
  http.get("https://60adff9080a61f0017332272.mockapi.io/allProducts")
      .then((data) => ui.productsInIndex(data));
})


// Mobile 
const mobilierMobile = document.getElementById('mobilierMobile');
mobilierMobile.addEventListener('click', getMobilierMobile);
function getMobilierMobile () {
  output.innerHTML = "";
  http.get("https://60ae021e80a61f00173322ee.mockapi.io/mobilier")
      .then((data) => ui.productsInIndex(data));
}


const bicicleteMobile = document.getElementById('bicicleteMobile')
bicicleteMobile.addEventListener('click', getBicicleteMobile);
function getBicicleteMobile(){
  output.innerHTML = "";
  http.get("https://60ae033e80a61f0017332321.mockapi.io/biciclete")
      .then((data) => ui.productsInIndex(data));
}

document.getElementById('boardgamesMobile').addEventListener('click', () => {
  output.innerHTML = "";
  http.get("https://60ae00fc80a61f00173322ab.mockapi.io/boardGames")
      .then((data) => ui.productsInIndex(data));
})

const allProductsMobile = document.getElementById('allProductsMobile').addEventListener("click", () =>{
  output.innerHTML = "";
  http.get("https://60adff9080a61f0017332272.mockapi.io/allProducts")
      .then((data) => ui.productsInIndex(data));
})
