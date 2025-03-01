const mongoose =require("mongoose");

const connectToDb = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected To Database");
    }catch(err){
        console.log("Failed to Connect To Database");
    }
}

module.exports =connectToDb;
 

