module.exports = {
    index(req, res, next){
        res.render("/users");
    },
    signUp(req, res, next){
        res.render("/users/sign_up");
    },
    create(req, res, next){
        let newUser = {
         username: req.body.username,
         email: req.body.email,
         password: req.body.password,
         passwordConfirmation: req.body.passwordConfirmation
        }
    }
}