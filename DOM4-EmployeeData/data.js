let employees = [{ id: 101, name: "Rahlul", salary: 45000 },
{ id: 102, name: "Sonia", salary: 55000 },
{ id: 103, name: "Priyanka", salary: 65000 },
{ id: 104, name: "Modi", salary: 95000 }]

function displayData() {
    //alert("Test Case 123")
    let rows = ""
    for (employee of employees) {
        rows = rows + `<tr>
            <td> ${employee.id} </td >
            <td> ${employee.name} </td >
            <td> ${employee.salary} </td >
        </tr >`
    }
    //document.getElementById('abc').innerHTML = "GM"
    document.getElementById('abc').innerHTML = rows
}