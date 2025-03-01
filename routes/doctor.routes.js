const express =require("express");
const DoctorRoute =express.Router();


DoctorRoute.get("/appointments", async(req,res)=>{
    try{
        let appointmentInDb =await AppointmentModel.findOne(req.body.appointmentInDb._id)
        res.status(200).json({msg:"Appointments Not Found"})
    }catch(err){
        res.status(500).json({msg:"Failed to see Appointments data "})
    }
});
DoctorRoute.put("/appointments:id", async(req,res)=>{
    try{
        let appointmentInDb =await AppointmentModel.insertOne(req.body.appointmentInDb._id)
        res.status(200).json({msg:"Appointment Created"})
    }catch(err){
        res.status(500).json({msg:"Failed to Create Appointment data "})
    }
});


module.exports= DoctorRoute;
