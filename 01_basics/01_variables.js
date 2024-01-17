const accountId = 123232
let accountEmail = "aditya@google.com"
var accountPassword = "12345"
accountCity = "Pune"
let accountState

// accountId = 2 // not allowed to change const

accountEmail = "as@as.com"
accountPassword = "11111"
accountCity = "Mumbai"

console.log(accountId);

/*
    Prefer not to use var
    because there are issues in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])