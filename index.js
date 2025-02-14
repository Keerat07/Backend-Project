const express=require('express');

const dotenv=require('dotenv');

const connectDB=require('./config/db');

const router=require('./route/routes');

//const {getproduct,createproduct}=require('./productcontroller/productcontroller');

connectDB();

dotenv.config();

const app=express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("hello brother");
})

app.use('/api',router);

// app.post('/api',createproduct);

// app.get('/api',getproduct);

app.listen(process.env.port,()=>{
    console.log("Server is running on "+process.env.port);
})