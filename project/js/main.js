const products = [{
        id: 1,
        title: 'Notebook',
        price: 20000
    },
    {
        id: 2,
        title: 'Mouse',
        price: 1500
    },
    {
        id: 3,
        title: 'Keyboard',
        price: 5000
    },
    {
        id: 4,
        title: 'Gamepad',
        price: 4500
    },
];

const renderProduct = (title, price, img = "./img/Product.jpg") => {
    return `<div class="product-item card">
                <img class="card-img-top" src="${img}" alt="Product">
                <div class = "card-body">
                    <h3 class="card-title">${title}</h3>
                    <p class="card-text">${price}</p>
                    <button class="by-btn btn btn-primary btn-lg btn-block">Добавить в корзину</button>
                </div>
              </div>`;
};

const renderProducts = (list) => {
    for (product of list) {
        document.querySelector('.products').innerHTML += renderProduct(product.title, product.price);
    }
};


renderProducts(products);