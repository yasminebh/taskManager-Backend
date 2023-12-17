
const route = require('express').Router()
const {getAllTasks, getTask, updateTask, createTask, deleteTask}= require('../controllers/Task-Controller')

route.get('/', getAllTasks )
route.get('/:id', getTask )
route.patch('/:id', updateTask )
route.post('/', createTask )
route.delete('/:id', deleteTask )


module.exports= route