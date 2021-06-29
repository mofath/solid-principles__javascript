const { Product, DiscountProduct, ProductStorage } = require('./product');

const products = [
    { name: 'aaa', price: 10 },
    { name: 'bbb', price: 20 },
    { name: 'ccc', price: 30, discount: 0.5 }
];

insertAll(products);

function insertAll(products) {
    const storage = new ProductStorage();

    products.forEach(product => {
        let newProduct;

        if (product.discount) {
            newProduct = new DiscountProduct(product.name, product.price, product.discount)
        }
        else {
            newProduct = new Product(product.name, product.price);
        }

        const count = newProduct.save(storage);
        console.log(`Product inserted. ${count} products in total.`);
    });
}