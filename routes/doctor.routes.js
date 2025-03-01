const express =require("express");
const DoctorRoute =express.Router();


DoctorRoute.get("/appointments", async(req,res)=>{
    try{
        let appointmentInDb =await AppointmentModel.findOne(req.body.appointmentInDb._id)
        res.status(200).json({msg:"User Found"})
    }catch(err){
        res.status(500).json({msg:"Failed to see user data "})
    }
});