const mongoose = require("mongoose");

const UserSchema= new mongoose.Schema(
{
name:{type:String} ,
email: {type:String, Unique:true},
mobileNumber: {type:String},
password:{type:String},
role: {type:String, Enum:["admin", "doctor", "patient"]},
specialization: {type:String, Enum:["nerves","heart", "lungs","skin"]}, // (only for doctors)
availableDays:{type:String,Enum:["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]}  //only for doctors
});

const UserModel = mongoose.model("users", UserSchema);


module.exports =UserModel;
