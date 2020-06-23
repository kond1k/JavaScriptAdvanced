class Products {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this._fetchProducts();
        this.render();
        this.getTotalPrice();
    }

    _fetchProducts() {
        this.goods = [{
            id: 1,
            title: 'Notebook',
            price: 20000
        }, {
            id: 2,
            title: 'Mouse',
            price: 1500
        }, {
            id: 3,
            title: 'Keyboard',
            price: 5000
        }, {
            id: 4,
            title: 'Gamepad',
            price: 4500
        }]
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new Product(product);
            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }
    }

    getTotalPrice() {
        let sum = 0;
        for (let product of this.goods) {
            sum += product.price;
        }
        document.querySelector(this.container).insertAdjacentHTML('afterend', `<p>Общая сумма: ${sum}</p>`)
    }
}


class Product {
    constructor(product, img = "./img/Product.jpg") {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
    }

    render() {
        return `<div class="product-item card">
                    <img class="card-img-top" src="${this.img}" alt="Product">
                     <div class = "card-body">
                        <h3 class="card-title">${this.title}</h3>
                        <p class="card-text">${this.price}</p>
                        <button class="by-btn btn btn-primary btn-lg btn-block">Добавить в корзину</button>
                    </div>
                </div>`;
    }
}


class Basket {

}

class BasketItem {

}

new Products();