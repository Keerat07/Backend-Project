const mongoose=require('mongoose');

const dotenv=require('dotenv');

dotenv.config();

const connectDB=async(req,res)=>{
    try {
        const conn=await mongoose.connect(process.env.mongo_uri);
        console.log("MongoDB is connected")    
    } 
    catch (error) {
        console.log("Internal Error "+error);
    }
}

module.exports=connectDB;