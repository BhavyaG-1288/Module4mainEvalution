const express =require("express");
const UserRoute =express.Router();
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const UserModel = require("../models/user.model");
const saltRounds = Number(process.env.SALT_ROUNDS);
const jwtsecretkey =process.env.JWT_SECRECT_KEY;

UserRoute.post("/signup", async(req, res)=>{

    let myPlaintextPassword= req.body.password;
    bcrypt.hash(myPlaintextPassword, saltRounds, async function(err, hash) {
        // Store hash in your password DB.
        try{
            if(err){
                res.status(500).json({msg:"Error in Signup"});
            }
            let user ={...req.body, password:hash}
             await UserModel.create();
             res.status(200).json({msg:"User Created", email:req.body.email, password:req.body.password})
            }catch(err){
            res.status(500).json({msg:"Error in signup"});
        }
    });
});

UserRoute.post("/login", async(req, res)=>{
    try{
        if(!UserInDb){
            res.send(403).json({msg:"User Not Found"});
        }
        //If User in DB
        let UserInDb= await UserModel.findOne({email:req.body.email});
        let myPlaintextPassword =req.body.password;
        let hashedpassword =req.body.hashedpassword
        bcrypt.compare(myPlaintextPassword, hashedpassword, function(err, result) {
            // result == true
            if(err){
                res.send(500).json({msg:"Error in Login..."});
            }
            if(result){

               let dataToBeEncrypted=req.body.password;
                var token = jwt.sign({ dataToBeEncrypted, jwtsecretkey}, hashed);
                res.status(201).json({msg:"Login Sucess..."}, Token)
            }
        });

    }catch(err){
        res.status(500).json({msg:"Error in signup"});
    }
})





module.exports = UserRoute;