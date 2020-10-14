//gemmer express-library i variabel
const express = require('express')
//initialiserer express-server
const server = express()
const port = 10000

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

//server aktiveres
server.listen(port, () => {
  console.log(`Server-applikation lytter på http://localhost:${port}`)
})


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

// herefter laves der CRUD på match 
server.get('/user1match', (req, res) => {
  res.send(hardUser[0].match);
})

server.get('/user2match', (req, res) => {
  res.send(hardUser[1].match);
})
//post på match 
server.post('/1matchpost', (req, res) => {
  res.send(hardUser[0].match);
})
server.post('/2matchpost', (req, res) => {
  res.send(hardUser[1]).match;
})
//delete match
server.delete('/1matchdelete', (req, res) => {
  res.send("har slettet " + hardUser[0].match);
})
server.delete('/2matchdelete', (req, res) => {
  res.send("har slettet " + hardUser[1].match);
})
//put (update) match
server.put('/1matchput', (req, res) => {
  res.send(hardUser[0].match);
})
server.put('/2matchput', (req, res) => {
  res.send(hardUser[1].match);
})


// herefter laves der CRUD på interest
server.get('/user1interests', (req, res) => {
  res.send(hardUser[0].interests);
})

server.get('/user2interests', (req, res) => {
  res.send(hardUser[1].interests);
})

//post på interests
server.post('/1interestspost', (req, res) => {
  res.send(hardUser[0].interests);
})
server.post('/2interestspost', (req, res) => {
  res.send(hardUser[1]).interests;
})
//delete match
server.delete('/1interestsdelete', (req, res) => {
  res.send("har slettet " + hardUser[0].interests);
})
server.delete('/2interestsdelete', (req, res) => {
  res.send("har slettet " + hardUser[1].interests);
})
//put (update) match
server.put('/1interestsput', (req, res) => {
  res.send(hardUser[0].interests);
})
server.put('/2interestsput', (req, res) => {
  res.send(hardUser[1].interests);
})
