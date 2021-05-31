import { addProductsInLocalStorage, updateQuantityInLocalStorage, getElementFromLocalStorage, removeElementFromLocalStorage } from './localStorage.js';
class UI {
    constructor(){
        this.productsDiv = document.getElementById('output');
        this.detailsDiv = document.getElementById('output-details');
        this.recenziiOutput = document.getElementById('recenzii-output');
        this.fullName = document.getElementById('fullName');
        this.email = document.getElementById('email')
        this.productName = document.getElementById('productName');
        this.cartBody = document.getElementById('cart-body')
    }

    productsInIndex(products){
        let output = '';
        products.forEach((product)=> {
            output = 
            `
            <div class="card">
            <h3> ${product.name}</h3>
            <a href="details.html?id=${product.id}" > <img src=${product.picture}>   </a>         
            <h4> ${product.price} RON</h4>
            <a href="details.html?id=${product.id}" >    </a>  
            </div>
            `;
            this.productsDiv.innerHTML += output;
                
        });
    }
    productsAdmin(products) {
        let output = '';
        products.forEach((product) => {
            output = `
            <div class="adminProduct">
            <img src=${product.picture}>
            <h4> ${product.name}</h4>
            <h4> ${product.price} RON</h4>
            <button class="delete" id=${product.id} > Remove </button> </td>
            </div>`; this.productsDiv.innerHTML += output;
        })
    }

    showProductDetails(products) {
        let output = '';

        products.forEach((product) => {
            output = `
            <div class="details">
                <img src=${product.picture}>
                <div class="description">
                    <h3> ${product.name}</h3>
                    <p> ${product.descriere}</p>
                    <h4> ${product.price} RON </h4>
                     <button class="addToCart" id="addProductToCart" id="${product.id}">Aaugati in cos</button>
                     <h5> Cantitate </h5><input type="text" value="" id="quantity" placeholder="1">	
                </div>
                <div class="beneficii">
                    <h4>Transport gratuit la easybox</h4>
                    <h4>Livrare rapidă</h4>
                    <h4>Retur în 30 de zile</h4>
                    <h4>La retur, banii înapoi instant</h4>
                </div>
            </div>
            `;this.detailsDiv.innerHTML = output;
            addProductToCart.addEventListener('click', () => {
                let count = parseInt(quantity.value);
                if (isNaN(count)) {
                    count = 1;
                }
                addProductsInLocalStorage(product, count);
                
            });	
            addProductToCart.addEventListener('click', () => { 
                document.getElementById('confirm').style.display ='flex'
            }),
            document.getElementById('ok').addEventListener('click', () => {
                document.getElementById('confirm').style.display ="none"
            })
                  
        })
    }

    showComments(comments) {
        let output = '';
        comments.forEach((comment) => {
            output = `
            <h4> Nume: ${comment.fullName}</h4>
            <h4> Email: ${comment.email}</h4>
            <h4> Product Name: ${comment.productName}</h4>
            <h1> Comment: ${comment.message} </h1>
            `; this.recenziiOutput.innerHTML += output;
        })
    }
    showProductsCart(storageItems) {
        let output = '';
        storageItems.forEach((product) => {
            output = `
            <table id="table-cart">
                <tbody> 
                    <tr class="cartRows">
                        <td><img src="${product.product.picture}" class="admin-card-img"/></td>
                        <td><button onclick="window.location.href='details.html?id=${product.product.id}'" class="title">${product.product.name}</button></td>                       
                        <td>${product.product.price} RON</td>
                        <td ><input value=${product.count} id="quantity"  type="text" /></td>
                        <td id=“subtotal">${product.product.price*product.count}</td>
                        <td><button id=${product.product.id} type="button" class="card-button delete"> <i class="far fa-trash-alt" id=${product.product.id}></i></button></td>
                    </tr>
                </tbody>   
            </table> 
            `     
            this.cartBody.innerHTML += output;
        });
        let inputFields = document.querySelectorAll("input");
        inputFields.forEach( (inputElement) => {
            let row = inputElement.parentElement.parentElement;
            let removeButton = row.lastElementChild.firstElementChild;
            let productId = removeButton.id;
            inputElement.addEventListener('change', (e) => {
                let count = parseInt(e.target.value);
                if(!isNaN(count) && count > 0) {
                    updateQuantityInLocalStorage(productId, count);
                    return window.location.reload();
                } else {
                    let storageElement = getElementFromLocalStorage(productId);
                    e.target.value = storageElement.count;
                }
            });  
            
            removeButton.addEventListener('click', (e) => {
                removeElementFromLocalStorage(e.target.id);
                row.remove();
                    return window.location.reload();
                });
            });  
    }
}

export const ui = new UI();