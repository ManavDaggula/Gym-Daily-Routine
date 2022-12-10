const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fetchuser = require("../middleware/fetchUser");

const JWT_SECRET = "onepieceisreal";

// Route 1: Post Request on path: </api/auth/createuser> which create users 
router.post("/createuser", [
    body('name','Enter a valid name').isLength({min:3}),
    body('email','ENter a valid email').isEmail()
] , async (req, res)=>{

    // If error occurres or bad requests
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try{
        // Checks the user exists already
        let user = await User.findOne({email: req.body.email});
        if(user){
            return res.status(400).json({"error":"User with these email already exists"})
        }

        // Creating salt
        const salt = await bcrypt.genSalt(10);
        const securedPassword = await bcrypt.hash(req.body.password, salt)
        user = await User.create({
            name: req.body.name,
            email:req.body.email,
            password: securedPassword
        })

        const data = {
            user:{
                id:user.id
            }
        }

        const jwtData = jwt.sign(data, JWT_SECRET);
        res.json({jwtData})
    }catch(error){
        console.log(error.message);
        res.status(500).send("Something went wrong")
    }
});



// Route 2: Post Request on path: </api/auth/login> which authenticate users 
router.post("/login", [
    body('email','Enter a valid email').isEmail(),
    body('password','Password cannot be blanked').exists()
] , async (req, res)=>{

    // If error occurres or bad requests
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {email, password} = req.body;

    try{
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({error:"Please, login with correct credentials"})
        }
        
        const passConfirm = await bcrypt.compare(password, user.password);
        if(!passConfirm){
            return res.status(400).json({error:"Please, login with correct credentials"})
        }

        const payload = {
            user:{
                id:user.id
            }
        }
        const jwtData = jwt.sign(payload, JWT_SECRET);
        res.json({jwtData})
    }catch(error){
        console.log(error.message);
        res.status(500).send("Server Error!!!")
    }
});


// Route 3: Post Request on path: </api/auth/fetchdata> which fetch logged in user details 
router.post("/fetchdata", fetchuser, async (req, res)=>{

    // If error occurres or bad requests
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try{
        let userId = req.user.id;
        let user = await User.findById(userId).select("-password");
        res.send(user);
    }catch(error){
        console.log(error.message);
        res.status(500).send("Server Error!!!")
    }
});

module.exports = router;