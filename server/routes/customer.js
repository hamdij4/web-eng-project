module.exports = (router, db) => {

    router.get('/foodFull', (req, res) => {
        db.food.find({}, (error, docs) => {
            if (error) {
                throw error;
            }
            res.json(docs);
            console.log(docs)
        });
    });

    router.get('/food/:name', (req, res)=> {
        let fname = req.params.name

        db.food.find({name : fname}, (error, docs) => {
            if(error){
                throw error;
            }
            res.json(docs);
        });
    });

    router.get('/food', (req, res) => {
        let limit = Number(req.query.limit) || 6;
        let skip = Number(req.query.skip) || 0;
        db.food.find({}).skip(skip).limit(limit, (error, docs) => {
            if(error){
                throw error;
            }
            res.json(docs);
            console.log(limit, " ", skip);
        });
    });

    router.get('/user', (req, res) => {
        db.user.find({}, (error, docs) => {
            if (error) {
                throw error;
            }
            res.json(docs);
            console.log(docs)
        });
    });

    router.post('/order/post', (req, res) => {
        db.order.insertOne(req.body, (error, docs) => {
            if(error){
                throw error;
            }
            res.json(docs);
        });
    });

    router.get('/user/:username', (req, res) => {
        let reqUsername = req.params.username;
        db.user.find({ username: reqUsername }, (error, docs) => {
            if (error && error != null) {
                throw error;
            }
            res.json(docs);
        });
    });

    router.get('/user/:username/balance', (req, res)=> {
        let reqUsername = req.params.username;
        db.user.find({username: reqUsername}, {balance: 1, _id: 0}, (error, docs) => {
            if(error){
                throw error
            }
            res.json(docs)
            console.log(docs)
        });
    });
    router.get('/order/:username', (req, res) => {
        let reqUsername = req.params.username;
        db.order.find({username: reqUsername}, (error, docs) => {
            if (error) {
                throw error;
            }
            res.json(docs);
        });
    });
}