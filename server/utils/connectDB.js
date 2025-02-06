import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

let connectDB=()=>{
    try{
        mongoose.connect(process.env.MONGODB_URL);
        console.log("dbConnected")
    }
    catch(err){
        console.log("Server Error to connect" + err)
    }
    
}
export default connectDB;
