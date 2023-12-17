
const route = require('express').Router()
const {getAllTasks, getOneTask, updateTask, createTask, deleteTask}= require('../controllers/Task-Controller')

route.get('/tasks', getAllTasks )
route.get('/task/:id', getOneTask )
route.patch('/task', updateTask )
route.post('/task', createTask )
route.delete('/task/:id', deleteTask )


module.exports= route