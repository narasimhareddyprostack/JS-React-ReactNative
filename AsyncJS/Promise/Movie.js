let goToMovie = (success, failure) => {
    let acc_Bal = 1300;

    acc_Bal > 500 ? success("Go to Movie")
        : failure("Go To PG, Open VS Code")
}
//goToMovie(() => { }, () => { });
goToMovie((msg) => {
    console.log(msg)
}, (err) => {
    console.log(err)
});  