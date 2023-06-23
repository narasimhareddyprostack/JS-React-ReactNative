let change_Color_focus = () => {
    document.getElementById('xyz').style.backgroundColor = "blue"
}

let change_Color = () => {
    //alert("Test Case 123")
    /*  let ref = document.getElementById('abc')
     console.log(ref)
     ref.style.backgroundColor = "yellow" */
    document.getElementById('abc').style.backgroundColor = "blue"
}
let change_Color_blur = () => {
    //alert("Test Case 123")
    let name = document.getElementById('userName').value
    //alert(name.toUpperCase())
    document.getElementById('userName').value = name.toUpperCase()
}