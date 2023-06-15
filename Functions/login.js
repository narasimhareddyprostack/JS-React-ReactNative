function login(name, status) {
    if (status == true) {
        return "Login Successfully"
    }
    else {
        return "Login Failed"
    }

}

let value = login("Rahul", true)
console.log(value)

let v1 = login("Sonia", false)
console.log(v1)