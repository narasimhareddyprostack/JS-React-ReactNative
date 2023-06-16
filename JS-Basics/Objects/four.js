let product = {
    id: 'p1o1',
    name: "Iphone 12s",
    price: 35000,
    color: ['Black', 'White', 'Gold'],
    discount: false,
    availability: 'yes'
}
for (prop in product) {
    console.log(product[prop])
}