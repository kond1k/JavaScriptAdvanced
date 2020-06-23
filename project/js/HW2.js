class Burger {
    constructor(cal, price) {
        this.cal = cal;
        this.price = price;
    }

    setFilling(name) {
        let fill = document.getElementsByName(name);
        if (fill[0].checked) {
            this.cal += 20;
            this.price += 10;
        }
        if (fill[1].checked) {
            this.cal += 10;
            this.price += 15;
        }
        if (fill[2].checked) {
            this.cal += 5;
            this.price += 20;
        }
    }

    checkSeasoning(id) {
        if (document.getElementById(id).checked) {
            this.price += 15;
        }
    }

    checkMayo(id) {
        if (document.getElementById(id).checked) {
            this.cal += 5;
            this.price += 20;
        }
    }
}

class bigBurger extends Burger {
    constructor() {
        super(40, 100);
        this.button = document.getElementById("big-burger-button");
        this.button.onclick = () => {
            this.setFilling("big-fill");
            this.checkMayo("checkMayoBig");
            this.checkSeasoning("checkSeaBig");
            console.log(`Цена Большого Бургера ${this.price}. Каллорийность Большого Бургера ${this.cal}`)
            this.cal = 40;
            this.price = 100;
        }
    }
}

class smallBurger extends Burger {
    constructor() {
        super(20, 50);
        this.button = document.getElementById("small-burger-button");
        this.button.onclick = () => {
            this.setFilling("small-fill");
            this.checkMayo("checkMayoSmall");
            this.checkSeasoning("checkSeaSmall");
            console.log(`Цена Маленького Бургера ${this.price}. Каллорийность Маленького Бургера ${this.cal}`);
            this.cal = 20;
            this.price = 50;
        }
    }
}

bb = new bigBurger();
sb = new smallBurger();