class UI {
    constructor(){
        this.productsDiv = document.getElementById('output');
        this.detailsDiv = document.getElementById('output-details');
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
            <button class="addToCart">Aaugati in cos</button>
            </div>
            `;
            this.productsDiv.innerHTML += output;
        });
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
                     <button class="addToCart">Aaugati in cos</button>
                </div>
                <div class="beneficii">
                    <h4>Transport gratuit la easybox</h4>
                    <h4>Livrare rapidă</h4>
                    <h4>Retur în 30 de zile</h4>
                    <h4>La retur, banii înapoi instant</h4>
                </div>
            </div>
            `;this.detailsDiv.innerHTML = output;
        })
    }

    
}

export const ui = new UI();