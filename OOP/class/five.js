class Account {
    min_Bal = 500;
    open_Acc() {
        console.log("Account Opened Successfully")
    }
    deposit_Amount(amount) {
        console.log(amount, ":Amount Deposited Successfully")
    }
    get_Bal() {
        console.log("Server Busy")
    }
    withdrawl() {
        console.log("Insuffient Balance! Month Ending")
    }
    get_Statement() {
        console.log("Charges apply")
    }

}
let a1 = new Account()
a1.open_Acc();
a1.deposit_Amount(6000)
a1.withdrawl()
a1.get_Bal()