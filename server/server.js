const mongojs = require('mongojs')
const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const port = process.env.PORT || 8080;
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

app.post('/authenticate', (req, res) => {
    let model = req.body
    db.user.findOne(
        { $and: [ {username : model.username}, {password : model.password}]}, 
        (error, docs) => {
            if(error){
                console.log(getDate(), "Error logging in for ", model.username, "ERROR : ", error);
                throw error;
            }
            if(docs){
                let token = jwt.sign (
                    {
                        username : req.body.username,
                        type : docs.type,
                        exp: Math.floor(Date.now() / 1000) + 3600
                    },
                    process.env.JWT_SECRET || config.JWT_SECRET
                )
                console.log(getDate(), "New logging by : ", docs.username)
                res.status(200)
                res.send({response: 'OK', jwt : token, user : docs.username, type : docs.type})
            } else {
                res.status(401)
                res.send({response: 'FAIL', reason: 'invalid'})
            }
        }
    )
})
app.post('/registration', (req, res) => {
    let model = {
        username : req.body.username,
        order_history: [],
        balance: 0.0,
        email: req.body.email,
        type: req.body.type,
        telephone: req.body.telephone,
        address: req.body.address,
        password: req.body.password
    }
    db.user.findOne({email : model.email}, (error, docs) => {
        if(error) throw error
        if(docs){
            console.log(getDate(), "Duplicate email error for ", model.email)
            res.status(406)
            res.send({response : 'FAIL', reason: 'email'})
        } else {
            db.user.findOne({username : model.username}, (error, docs) => {
                if(error) throw error
                if(docs){
                    console.log(getDate(), "Duplicate username error for ", model.username)
                    res.status(406)
                    res.send({response : 'FAIL', reason: 'username'})
                } else {
                    db.user.insertOne(model, (error, docs) => {
                        console.log(getDate(), "New user registered : ", model.username)
                        res.status(200)
                        res.send({response: 'OK'})
                    })
                }
            })
        }
    })
})

app.use(express.static(path.join(__dirname, '../client/build')))

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.listen(port, () => {
    console.log("Server.js is on PORT: ", port);
})


getDate = () => {
    let date = new Date(Date.now())
    return date
}