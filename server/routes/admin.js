//TODO: Implement admin routes

module.exports = (router, db, jwt) => {

    router.use((req, res) =>{
        console.log("Admin login by: ", req.ip)

        let auth = req.get('Authorization')

    })

}