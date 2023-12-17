
const db = require('./src/db/dbConnect')
const express = require('express')
const dotenv = require('dotenv').config()
const notFound= require('./src/middleware/not-found')
const errorHandlerMiddleware= require('./src/middleware/error-handler')
const app = express ()

//middleware
// set up static files
app.use(express.static('./src/public'))
app.use(express.json())
const tasks = require ('./src/routes/tasks')

//routes 
app.get('/hello', (req, res) => {
  res.send('task manager')
})

app.use('/api/v1/tasks', tasks)

app.use(notFound)
app.use(errorHandlerMiddleware)


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
