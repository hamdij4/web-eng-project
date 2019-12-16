const mongojs = require('mongojs')
const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const port = process.env.PORT || 8000 || 3001;
const path = require('path')
const bodyParser = require('body-parser')
app.use(bodyParser.json())


let config;
if (!process.env.HEROKU) {
    config = require('./config');
}

const db = mongojs(process.env.DB_URL || config.DB_URL);

let customer_router = express.Router()
require('./routes/customer.js')(customer_router, db, mongojs, jwt, config);
app.use('/customer', customer_router);

let admin_router = express.Router()
require('./routes/admin.js')(admin_router, db, mongojs, jwt, config);
app.use('/admin', admin_router);

let visitor_router = express.Router()
require('./routes/visitor.js')(visitor_router, db, mongojs, jwt, config);
app.use('/visitor', visitor_router);
app.use(express.static(path.join(__dirname, '../client/build')))

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.listen(port, () => {
    console.log("Server.js is on PORT: ", port);
})