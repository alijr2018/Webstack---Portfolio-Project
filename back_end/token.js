const jwt = require("jsonwebtoken");

function verify(req, res, next){
    const auth = req.headers.token;
    if (auth) {
        const token = auth.split(" ")[1];

        jwt.verify(token, 'key', (err, user) =>{
            if (err) res.status(403).json("ERROR");
            req.user = user;
            next();
        })
    } else {
        return res.status(401).json("You have someting wrong with authentification");
    }
}

module.exports = verify;