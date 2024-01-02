const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const movieRouter = require('./routes/movie-router')
const productRouter = require('./routes/product')
const connectDB = require('./db')
const app = express()
const apiPort = 5000
connectDB();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

//db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', movieRouter)
app.use('/api', productRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
