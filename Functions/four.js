function add(a, b, c = 5) {
    console.log(a + b + c)
}
add(10, 20, 30)   //60
add(10, 20) //35
add(1, 2, 3, 4) //6

add(1, "Rahul") //"1Rahul5"
add(10, 20, "Rahul") //"30Rahul"