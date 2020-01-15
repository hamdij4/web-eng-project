//TODO: Implement admin routes

module.exports = (router, db, mongojs, jwt, config) => {

    router.use((req, res, next) =>{

        let Auth = req.get('Auth')
        if(Auth){
            jwt.verify(Auth,config.JWT_SECRET  || process.env.JWT_SECRET , 
                (error, decoded) => {
                    if(error){
                        console.log(getDate(), "Error decoding JWT token for /admin")
                        res.status(401)
                        res.send({response: 'INVALID'})
                    } else {
                        let type = decoded.type
                        if(type == 3){
                            next()
                        } else {
                            console.log(getDate(), "Invalid token provided by ", decoded.username, " from ", req.ip, "more: ", decoded, error, decoded.type)
                            res.status(401)
                            res.send({response : 'ACCESS'})
                        }
                    }
                })
        } else {
            res.status(401)
            res.send({response : 'ACCESS'})
        }

    })
    router.get('/topselling', (req, res) => {
        res.status(200)
        res.send({name : "Large Hamburger"})
    })
}

getDate = () => {
    let date = new Date(Date.now())
    return date
}