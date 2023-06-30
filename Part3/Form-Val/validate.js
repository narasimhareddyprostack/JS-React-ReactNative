let validate_Data = () => {
    //alert("GM")
    let name = document.getElementById('uName').value
    //alert(name)
    let password = document.getElementById('uPassword').value
    //alert(password)
    if (name == "" || name.length < 4) {
        // alert("Please Enter User Name")
        document.getElementById('uNameMessage').innerHTML = "Please Enter User Name"
    }
    if (password == "" || password.length < 6) {
        document.getElementById('passwordMessage').innerHTML = "Please Enter Valid Password"
    }

    return false
}