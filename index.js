const express = require('express')
const dotenv = require('dotenv').config()
const app = express ()
app.use(express.json())





//routes 
app.get('/hello', (req, res) => {
  res.send('task manager')
})






PORT = process.env.PORT
app.listen(PORT, ()=> {
  console.log('the app is listening on port', PORT)
})