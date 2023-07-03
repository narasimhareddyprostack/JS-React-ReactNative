let employees = [{ id: 101, name: "Rahul", sal: 45000 },
{ id: 102, name: "Sonia", sal: 55000 }]
let createEmployee = (emp) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let flag = true;
            flag ? resolve("Data Inserted") : reject("Not Inserted")
            employees.push(emp)
        }, 4000)
    });
}
let getEmployees = () => {
    //iterate datasource ie employees and construct table tr as string 
    // and update table tbody using DOM

    setTimeout(() => {
        let rows = ""
        for (emp of employees) {
            rows = rows + `<tr>
              <td>${emp.id}</td>            
              <td>${emp.name}</td>            
              <td>${emp.sal}</td>            
            </tr>`
        }
        document.getElementById('abc').innerHTML = rows
    }, 1000)
}

let exec = async () => {
    await createEmployee({ id: 103, name: "Priyanka", sal: 65000 })
    getEmployees()
}
exec()