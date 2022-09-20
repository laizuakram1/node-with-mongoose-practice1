const express = require('express')
const app = express()
const cors = require("cors")
const mongoose = require('mongoose')

// middle ware
app.use(express.json())
app.use(cors())


const sneackersRoute = require('./Routes/sneackers.router');

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.use('/api/v1/Sneackers', sneackersRoute)


module.exports = app;