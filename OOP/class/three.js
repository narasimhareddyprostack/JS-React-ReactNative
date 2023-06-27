class Employee {
    name = "Rahul"
    get_Details() {
        console.log("Displaying Employee Details")
    }
}

let e1 = new Employee()
console.log(e1)
console.log(e1.name)  //Rahul

e1.get_Details()