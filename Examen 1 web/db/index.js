const mongoose = require('mongoose')

const conectDB = async () => {
    await mongoose.connect('mongodb://localhost:27017/Examen1')
    console.log('MongoDB connected')
}

module.exports = {conectDB}