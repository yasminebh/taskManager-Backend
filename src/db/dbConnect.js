const mongoose = require('mongoose')

const db= async() => {
  try {
    await mongoose.connect(process.env.URI)
    console.log("connected to db")
  } catch (error) {
    console.log(error," failed to connect")
  }
}

module.exports = db