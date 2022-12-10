const jwt = require('jsonwebtoken');
const JWT_SECRET = "onepieceisreal";

const fetchuser = (req, res, next)=>{
    // Get the user from jwt
    const token = req.header("auth-token");
    if(!token){
        return res.status(400).send({error:"Plz authenticate from valid token"})
    }
    try{
        const data = jwt.verify(token, JWT_SECRET)
        req.user = data.user; 
        next();
    }catch(error){
        res.status(400).send({error:"Plz authenticate from valid token"})
    }
}

module.exports = fetchuser;