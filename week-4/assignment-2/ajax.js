function ajax(src, callback){
    // your code here
    fetch(src)
        .then(response => response.json())
        .then(products => callback(products)); //Array(3)
}

function render(data){
    // your code here.
    // ​document.createElement()​ and a​ppendChild()​ are preferred. No ​innerHTML​ or something alike
    const cardGroup = document.querySelector('.card-group');
    function attachCard(product) {
        let card = document.createElement('div');
        card.className = "card";
        cardGroup.appendChild(card);

        let cardTitle = document.createElement('h3');
        cardTitle.className = "card-title";
        cardTitle.textContent = product.name;
        card.appendChild(cardTitle);

        let cardDesc = document.createElement('p');
        cardDesc.className = "card-desc";
        cardDesc.textContent = product.description;
        card.appendChild(cardDesc);

        let cardPrice = document.createElement('p');
        cardPrice.className = "card-price";
        cardPrice.textContent = `$ ${product.price}`;
        card.appendChild(cardPrice);
    }
    data.forEach(product => {
        attachCard(product);
    });
}

ajax("https://cwpeng.github.io/live-records-samples/data/products.json", function(response){
    render(response);
}); 
// you should get product information in JSON format and render data in the page
