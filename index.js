
const db = require('./src/db/dbConnect')
const express = require('express')
const dotenv = require('dotenv').config()
const app = express ()

//middleware
app.use(express.json())




const TaskRoute = require ('./src/routers/Task-Route')

//routes 
app.get('/hello', (req, res) => {
  res.send('task manager')
})

app.use('/api/v1/tasks', TaskRoute)




PORT = process.env.PORT

const start = async () => {
  try {
  await db()
   app.listen(PORT, () => {
     console.log("the app is listening on port", PORT);
   });
  } catch (error) {
    console.log(error)
  }
}

start()
