const userQueries = require("../db/queries.users.js");
module.exports = {
    index(req, res, next){
        res.render("/users");
    },
    signup(req, res, next){
        res.render("/users/signup");
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