//gemmer express-library i variabel
const express = require('express')
//initialiserer express-server
const server = express()
const port = 4000

var hardUser = require('./HardUser.js')

//henter controller fra sti
const userController = require('./Controller/userController')
const protectedController = require('./Controller/Protectedcontroller')
const loginController = require('./Controller/loginController')

//henter middleware
const ensureToken = require('./Middleware/ensureToken')
//read endpoint på routen '/'
server.get('/', userController)

server.get('/protected', ensureToken,  protectedController)

server.post('/login', loginController)


//jeg vil gerne sende min HardUser tilbage --> brugerne sendes tilbage --> user 1 endpoint, som sender harduser tilbage
server.get('/user1', (req, res) => {
  res.send(hardUser[0]);
})

server.get('/user2', (req, res) => {
  res.send(hardUser[1]);
})

//laver et post endpoint - giver ingen mening da jeg ikke har en database tilkoblet, så bare for sjov --> post requste kan ikke tjekkes om de virker i vores webbrower, derfor bruger vi postman 
//lav det her 
server.post('/user1post', (req, res) => {
  res.send(hardUser[0]);
})
server.post('/user2post', (req, res) => {
  res.send(hardUser[1]);
})

//delete user
server.delete('/user1delete', (req, res) => {
  res.send("har slettet " + hardUser[0].name);
})
server.delete('/user2delete', (req, res) => {
  res.send("har slettet " + hardUser[1].name);
})


//put (update) users
server.put('/user1put', (req, res) => {
  res.send(hardUser[0]);
})
server.put('/user2put', (req, res) => {
  res.send(hardUser[1]);
})



//server aktiveres
server.listen(port, () => {
  console.log(`Server-applikation lytter på http://localhost:${port}`)
})# Godkend3
