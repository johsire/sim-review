require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const ctrl = require('./Controller')
const massive = require('massive')

const app = express()
app.use(bodyParser.json())

// ===== .env variables =====
const {
    SERVER_PORT,
    CONNECTION_STRING
} = process.env

// ===== api endpoints =====
app.get('/api/inventory', ctrl.getTheInventory)
app.post('/api/product', ctrl.addItem)
app.delete('/api/products/:id', ctrl.delete)
// app.put('/api/product', ctrl.updateProduct)


//  ===== Connect to DB with massive, and start up server on SERVER_PORT =====
massive(CONNECTION_STRING)
    .then( db => {
        app.set('db', db)
        console.log('DB CONNECTED')
        app.listen(SERVER_PORT, ()=> console.log(`The magic is happening on SERVER_PORT: ${SERVER_PORT}`))
    })