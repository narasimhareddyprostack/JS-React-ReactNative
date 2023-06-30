let state = {
    msg: "GM",
    product: {
        id: 101,
        price: 45000,
        name: "Iphone 13"
    }
}
console.log(state.product.name)
let { product } = state
let { name } = product
console.log(name)