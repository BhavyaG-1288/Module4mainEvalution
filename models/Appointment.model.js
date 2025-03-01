const mongoose = require("mongoose");


const AppointmentSchema= new mongoose.Schema({

    patientId:
    {
        name:{tyep:String},
        age:{type:String},
    },
    doctorId:{
        name:{tyep:String},  
        Speciality:{tyep:String}, 
    }, 
    appointmentDateTime: "2025-03-14T23:15:30",
    symptoms: String,
    fees: Number,                        //(updated by doctor after appointment)
    prescription: String,              // (updated by doctor after appointment)
    isDiagnosisDone: Boolean           // (updated by doctor after appointment)

});

const AppointmentModel= mongoose.model("appointments", AppointmentSchema);


module.exports =AppointmentModel;