const fs = require('fs');
const products = [
  {
    category: "Electronics",
    products: [
      { product: "Laptop", price: 999.99 },
      { product: "Smartphone", price: 599.99 },
      { product: "Tablet", price: 499.99 },
    ],
  },
  {
    category: "Apparel",
    products: [
      { product: "T-Shirt", price: 19.99 },
      { product: "Jeans", price: 39.99 },
      { product: "Jacket", price: 99.99 },
    ],
  },
  {
    category: "Home Goods",
    products: [
      { product: "Coffee Table", price: 129.99 },
      { product: "Lamp", price: 29.99 },
      { product: "Sofa", price: 999.99 },
    ],
  },
];

const findMostExpensive = (products) => {
    const mappedPdts = products.flatMap(item => item.products);
    const mostExpensive = mappedPdts.reduce((acc, curr) => {
        if(acc.price < curr.price) {
            acc = curr;
        }
        return acc;
    }, {price: 0});
    return mostExpensive;
}

const mostExpensive = findMostExpensive(products);

fs.appendFile("text.txt",
    `Highest price Product is ${JSON.stringify(mostExpensive)}\n`,
    (err) => console.log(err)
)

