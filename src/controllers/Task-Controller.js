const taskModel = require("../models/Task");
const asyncWrapper= require('../middleware/async');
const errorHandlerMiddleware = require("../middleware/error-handler");
const {createCustomError}= require('../errors/custom-error')


const createTask = asyncWrapper(async (req, res) => {
    const task = new taskModel(req.body);
    await task.save();
    res.status(201).json({  task });
});
const getAllTasks = asyncWrapper (async (req, res) => {
     const tasks = await taskModel.find({});
   /*  if (tasks.length == []) {
      return res.status(404).json({ message: "no tasks added  ", data: null });
    } */
//    return res.status(200).json({ message: "data", data: tasks , amout: tasks.length});
   //  res.status(200).json({success:true, message: "data", data: {tasks, nbHits: tasks.length} });
   res.status(200).json({tasks})  
});
const getTask = asyncWrapper(async (req, res, next) => {
     const taskID = req.params.id;
     const task = await taskModel.findOne({ _id: taskID });
    if (!task) {
      return  next(createCustomError(  "no task with id", 404))
     // return res.status(404).json({ message: "no task with id", taskID });
    }
    return res.status(200).json({ task });
});
const updateTask = asyncWrapper (async (req, res) => {
    const { id: taskID } = req.params;
     const task = await taskModel.findByIdAndUpdate(
      { _id: taskID },
      req.body ,
      { new: true, runValidators: true }
    );
    if (!task) {
      return  next(createCustomError(  "no task with id", 404))
    }
    return res
      .status(201)
      .json({ task });
    /* return res
      .status(201)
      .json({ message: "the task is updated", id: taskID, data: task }); */
})

const deleteTask = asyncWrapper(async (req, res) => {
     const { id: taskID } = req.params;
    const deletedTask = await taskModel.findOneAndDelete({ _id: taskID });
    if (!deletedTask) {
      return  next(createCustomError(  "no task with id", 404))
    }
    return res
      .status(200)
      .json({ message: "the task is deleted", data: deletedTask });
 }
)
module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
