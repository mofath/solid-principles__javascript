class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    };

    save(storage) {

        storage.store({
            name: this.name,
            price: this.price
        });

        return storage.productsCount;
    };
};


class DiscountProduct extends Product {
    constructor(name, price, discount) {
        super(name, price)
        this.discount = discount;
    }

    save(storage) {

        storage.store({
            name: this.name,
            price: this.price - this.price * this.discount
        });

        return storage.productsCount;
    }
};


class ProductStorage {
    constructor() {
        this.products = [];
    };

    get productsCount() {
        return this.products.length;
    };

    store(product) {
        this.products.push(product);
    };
};


module.exports = {
    Product,
    DiscountProduct,
    ProductStorage
}