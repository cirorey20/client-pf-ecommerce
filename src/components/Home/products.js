import faker from "faker";

class Products {
    constructor() {
        this.products = [];
        this.generate();
    }

    async generate() {
        for (let i = 0; i < 20; i++) {
            this.products.push({
                id: faker.datatype.uuid(),
                name: faker.commerce.productName(),
                price: parseInt(faker.commerce.price(), 10),
                img: faker.image.imageUrl()
            })
        }
    }
}

export default Products;