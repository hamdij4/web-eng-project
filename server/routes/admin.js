//TODO: Implement admin routes

module.exports = (router, db, jwt) => {

    router.use((req, res, next) =>{

        let auth = req.get('Auth')
        if(Auth){
            jwt.verify(Auth, processs.env.JWT_SECRET || config.JWT_SECRET , 
                (error, decoded) => {
                    if(error){
                        console.log(getDate(), "Error decoding JWT token for /admin")
                        res.status(401)
                        res.send({response: 'INVALID'})
                    } else {
                        let type = decoded.type
                        if(type === 3){
                            next()
                        } else {
                            console.log(getDate(), "Invalid token provided by ", decoded.username, " from ", req.ip)
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

}

getDate = () => {
    let date = new Date(Date.now())
    return date
}