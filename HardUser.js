//henter User model
const User = require('./Model/user')

let userArray = [] 
let User1 = new User('Christian', [1997, 10, 09], 'Male', 'Copenhagen', 'christian@mail.dk', '1234', ['hockey', 'Pizza', 'cat videoes'], ['Bente', 'Christina', 'andre brugere']);
let User2 = new User('Bo', [1998, 10, 02], 'Male', 'Copenhagen', 'bo@mail.dk', 'AB1234', ['soccer', 'travelling', 'cat videoes'], ['Ida', 'Lone', 'andre brugere']);

userArray = [User1, User2]

module.exports = userArray

