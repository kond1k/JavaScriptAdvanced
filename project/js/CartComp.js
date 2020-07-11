Vue.component('cart', {
    data() {
        return {
            cartUrl: '/getBasket.json',
            cartItems: [],
            showBasket: false,
        }
    },
    // methods: {
    //     addProduct(product) {
    //         this.$parent.getJson(`${API}/addToBasket.json`)
    //             .then(data => {
    //                 if (data.result === 1) {
    //                     let find = this.cartItems.find(el => el.id_product === product.id_product);
    //                     if (find) {
    //                         find.quantity++;
    //                     } else {
    //                         let prod = Object.assign({ quantity: 1 }, product);
    //                         this.cartItems.push(prod)
    //                     }
    //                 } else {
    //                     alert('Error');
    //                 }
    //             })
    //     },
    //     remove(item) {
    //         this.$parent.getJson(`${API}/deleteFromBasket.json`)
    //             .then(data => {
    //                 if (data.result === 1) {
    //                     if (item.quantity > 1) {
    //                         item.quantity--;
    //                     } else {
    //                         this.cartItems.splice(this.cartItems.indexOf(item), 1)
    //                     }
    //                 }
    //             })
    //     },
    // },
    // mounted() {
    //     this.$parent.getJson(`${API + this.cartUrl}`)
    //         .then(data => {
    //             for (let el of data.contents) {
    //                 this.cartItems.push(el);
    //             }
    //         });
    // },
    template: `
    <div>
            <button class="btn-cart" type="button" @click="showBasket = !showBasket">Корзина</button>
            <div class="cart-block" v-show="showBasket">
            </div>
        </div>`
});