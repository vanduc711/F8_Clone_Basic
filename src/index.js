const express = require('express')
const path = require('path')
const app = express()
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const port = 3000
const route = require('./routes')
const db = require('./config/db')

//connect db
db.connect()
// Http logger
app.use(morgan('combined'))
//middleware process data from client
app.use(express.urlencoded({
    extended:true
}))

app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')))

// Template engine
app.engine('.hbs', handlebars.engine({extname: '.hbs'}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))

//Route
route(app)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})