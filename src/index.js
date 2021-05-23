import {http} from "./http.js";
import {ui} from "./ui.js";
const output = document.getElementById('output');

const mobilier = document.getElementById('mobilier');
mobilier.addEventListener('click', getMobilier);
function getMobilier () {
  output.innerHTML = "";
  http.get("http://localhost:3000/mobilier")
      .then((data) => ui.productsInIndex(data));
}


const biciclete = document.getElementById('biciclete')
biciclete.addEventListener('click', getBiciclete);
function getBiciclete(){
  output.innerHTML = "";
  http.get("http://localhost:3000/biciclete")
      .then((data) => ui.productsInIndex(data));
}

document.getElementById('boardgames').addEventListener('click', () => {
  output.innerHTML = "";
  http.get("http://localhost:3000/boardgames")
      .then((data) => ui.productsInIndex(data));
})


addEventListener("DOMContentLoaded", () =>{
  output.innerHTML = "";
  http.get("http://localhost:3000/biciclete")
      .then((data) => ui.productsInIndex(data));
})