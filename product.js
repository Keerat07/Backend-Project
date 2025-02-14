const {Schema,model} =require('mongoose')

const product=new Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
})

const productmodel=model("products",product);

module.exports=productmodel;