class Account {
    id;
    acc_Name;
    acc_Bal;
    constructor(id, name, amount) {
        this.id = id;
        this.acc_Name = name;
        this.acc_Bal = amount
    }
    deposit_Amount(amount) {
        this.acc_Bal = this.acc_Bal + amount
    }
}
let a1 = new Account(101, "Rahul", 500)
a1.deposit_Amount(2)
a1.deposit_Amount(3)
let a2 = new Account(102, "Priyanka", 56000)

a2.deposit_Amount(3003)
a2.deposit_Amount(3002)
a2.deposit_Amount(3003)

console.log(a1)
console.log(a2)