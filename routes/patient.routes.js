const express =require("express");
const PatientRoute =express.Router();


PatientRoute.post("/appointments", async(req,res)=>{
    try{
        let appointmentInDb =await AppointmentModel.insertOne(req.body.appointmentInDb)
        res.status(200).json({msg:"Created appointement"})
    }catch(err){
        res.status(500).json({msg:"Failed to create Appointments data "})
    }
});
PatientRoute.get("/appointments:id", async(req,res)=>{
    try{
        let appointmentInDb =await AppointmentModel.findOne(req.body.appointmentInDb._id)
        res.status(200).json({msg:"Your Appointment is scheduled..."})
    }catch(err){
        res.status(500).json({msg:"Failed to find Appointment data "})
    }
});


module.exports =PatientRoute;