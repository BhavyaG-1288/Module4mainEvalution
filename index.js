const express =require("express");
const connectToDb = require("./config");
const UserRoute = require("./routes/user.route");
const AdminRoute = require("./routes/admin.route");
const PatientRoute = require("./routes/patient.routes");
const DoctorRoute = require("./routes/doctor.routes");
require('dotenv').config()
const app =express();
const PORT =process.env.SERVER_PORT

app.use(express.json());

app.use("/", (req, res)=>{
    res.send("This is a Test Route");
})


app.use("/users", UserRoute);
app.use("/admin", AdminRoute);
app.use("/patients", PatientRoute);
app.use("/doctor", DoctorRoute);

app.listen(PORT, ()=>{
    connectToDb();
    console.log("Server started");
})