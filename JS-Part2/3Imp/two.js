let emp = {}
let user = {
    name: "Rahul",
    loc: 'Wayanad'
}
console.log(Object.keys(user))
console.log(Object.keys(user).length)
console.log(Object.keys(user).length > 0)
console.log(Object.keys(emp).length > 0)

if(Object.keys(user).length >0){
    console.log("Not Empty Object")
}
else{
    console.log("Empty object")
}