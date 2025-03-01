const express =require("express");
const UserModel = require("../models/user.model");
const AppointmentModel = require("../models/Appointment.model");
const AdminRoute =express.Router();

//Get all User data
AdminRoute.get("/users", authmiddleware,async(req, res)=>{
    try{
        let UserInDb =await UserModel.findById(req.body.UserInDb._id)
        res.status(200).json({msg:"User Found"})
    }catch(err){
        res.status(500).json({msg:"Failed to see user data "})
    }
});

//view specific user data using UserId
AdminRoute.get("/users/:id", authmiddleware, async(req, res)=>{
    try{
        let UserInDb =await UserModel.findById(req.body.UserInDb._id)
        res.status(200).json({msg:"User Found"})
    }catch(err){
        res.status(500).json({msg:"Failed to see user data "})
    }
});
 //get all Appointments 

AdminRoute.get("/appointments", authmiddleware, async(req, res)=>{
    try{
        let appointmentInDb =await AppointmentModel.findById(req.body.appointmentInDb._id)
        res.status(200).json({msg:"User Found"})
    }catch(err){
        res.status(500).json({msg:"Failed to see user data "})
    }
});

//Delete an appointment using Id

AdminRoute.get("/appointments", authmiddleware,async(req, res)=>{
    try{
        let appointmentInDb =await AppointmentModel.deleteOne(req.body.appointmentInDb._id)
        res.status(200).json({msg:"User Found"})
    }catch(err){
        res.status(500).json({msg:"Failed to see user data "})
    }
});






module.exports =AdminRoute;