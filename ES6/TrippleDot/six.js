let user = { id: 101, name: "Rahul Gandhi", email: 'rahul@gmail.com' }

let details = { email: "rahul@pm.com", sal: "1 Rupee" }

let users_Details = { ...user, ...details }

console.log(users_Details)