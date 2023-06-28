class Account {
    id;
    name;
    constructor(id, name, amount) {
        this.id = id;
        this.name = name;
        this.amount = amount
    }

}
let a1 = new Account(101, "Rahul", 5001)
console.log(a1)
let a2 = new Account(102, "Sonia")
console.log(a2)