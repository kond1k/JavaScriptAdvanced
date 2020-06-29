const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';


let getRequest = (url) => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(xhr.responseText);
                } else {
                    reject(xhr.status);
                }
            }
        }
        xhr.send();
    })
}


class Products {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this._fetchProducts();
        this.getTotalPrice();
    }

    _fetchProducts() {
        getRequest(`${API}/catalogData.json`)
            .then((data) => {
                this.goods = [...JSON.parse(data)];
                this.render();
            })
            .catch((error) => {
                console.log(error);
            })
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
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
    }

    render() {
        return `<div class="product-item card">
                    <img class="card-img-top" src="${this.img}" alt="Product">
                     <div class = "card-body">
                        <h3 class="card-title">${this.title}</h3>
                        <p class="card-text">${this.price}</p>
                        <button class="by-btn btn btn-primary btn-lg btn-block product-basket-btn">Добавить в корзину</button>
                    </div>
                </div>`;
    }
}


class Basket {
    constructor() {
        this.products = [];
        document.querySelector("#basket-btn").addEventListener('click', () => {
            this.getProductsFromBasket()
                .then(data => {
                    this.products = [...data.contents];
                    console.log([...data.contents]);
                })
        })
    }

    addProductToBasket(product) {
        this.products.push(product);
    }

    getProductsFromBasket() {
        return fetch(`${API}/getBasket.json`)
            .then(response => response.json())
            .catch(error => {
                console.log(error);
            });
    }

}


test = new Products();