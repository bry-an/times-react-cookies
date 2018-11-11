const express = require('express')
const app = express()
const routes = require('./routes')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3001
const bodyParser = require('body-parser')
const cors = require('cors')
const cookieParser = require('cookie-parser')


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(cookieParser())

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
}

app.use(routes)

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/timesreact'
)

app.listen(PORT, () => console.log('listening on port ' + PORT))