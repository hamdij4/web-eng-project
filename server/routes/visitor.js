module.exports = (router, db, mongojs, jwt, config) => {

    router.get('/foodFull', (req, res) => {
        db.food.find({}, (error, docs) => {
            if (error) {
                throw error;
            }
            res.json(docs);
            console.log(docs)
        });
    });

    router.get('/food/:name', (req, res) => {
        let fname = req.params.name

        db.food.find({ name: fname }, (error, docs) => {
            if (error) {
                throw error;
            }
            res.json(docs);
        });
    });

    router.get('/food', (req, res) => {
        let limit = Number(req.query.limit) || 6;
        let skip = Number(req.query.skip) || 0;
        db.food.find({}).skip(skip).limit(limit, (error, docs) => {
            if (error) {
                throw error;
            }
            res.json(docs);
            console.log(limit, " ", skip);
        });
    });

    router.post('/order/post', (req, res) => {
        let total = calculatePrice(req.body.content)
        let model = {
            username  : req.body.username,
            telephone : req.body.telephone,
            content : req.body.content,
            date : req.body.date,
            discount : req.body.discount,
            price : total,
            delivery: req.body.delivery,
            cashier: getCashier(),
            driver : getDriver(),
            paid : req.body.paid
        }
        db.order.insertOne(model, (error, docs) => {
            if (error) {
                throw error;
            }
            res.json(docs);
        });
        /*let auth = req.get('Authorization')
        if(auth){
            jwt.verify(auth,
                process.env.JWT_SECRET || config.JWT_SECRET, (error, decoded) => {
                    if(error) res.status(401).send('No access to this path__' + error.message)
                    else {
                        if(decoded.type === 'visitor' || decoded.type === 'customer'){
                            let model = {
                                username  : req.body.username,
                                telephone : req.body.telephone,
                                content : req.body.content,
                                date : req.body.date,
                                discount : req.body.discount,
                                price : calculatePrice(req.body.content),
                                delivery: req.body.delivery,
                                cashier: getCashier(),
                                driver : getDriver(),
                                paid : req.body.paid
                            }
                            db.order.insertOne(model, (error, docs) => {
                                if (error) {
                                    throw error;
                                }
                                res.json(docs);
                            });
                        } else {
                            res.status(401).send('No access for your user type')
                        }
                    }
                })
        } else {
            res.status(401).send('No valid authorization provided')
        }*/
    });

    router.post('/register', (req, res) => {
        if(req){
            let username = req.body.username;
            let password = req.body.password;
            let email = req.body.email;
            let address = req.body.address || 'No address given';
            let phone = req.body.telephone || 'No phone number given';

            var model = {
                "username" : username,
                "order_history" : [],
                "balance" : 0.00,
                "email" : email,
                "telephone" : phone,
                "address" : address,
                "password" : password
            };

            db.user.insertOne(model, (error, docs) => {
                if(error) throw error;
                console.log("User ", username, " was added successfully");
                let token = jwt.sign({
                    username :req.body.username, 
                    type: "user", 
                    exp: Math.floor(Date.now() / 1000) + 3600 
                }, process.env.JWT_SECRET || config.JWT_SECRET)
                res.send({response: "User created!", jwt: token});
            });
        }
        else{
            res.status(400)
            res.send('Invalid input')
        }
    });



    function calculatePrice(order){
        let price = 0;
        order.forEach(orderEl => {
            console.log(orderEl)
            db.food.find({name : orderEl}, (error, docs) => {
                if(error) return -401
                else {
                    console.log(docs[0].price)
                    price += docs[0].price
                }
            })
        });
        console.log(price)
        return price;
    }
    function getCashier(){
        return "Mensur"
    }
    function getDriver(){
        return "Amir"
    }

}