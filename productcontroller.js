const productmodel=require('../product/product');

const getproduct=async(req,res)=>{
    try {
        const all=await productmodel.find();
        console.log("At Get request");
        if(all.length===0){
            res.send("Database is Empty");
        }
        res.status(200).json({success:true,Products:all});
    } 
    catch (error) {
        res.send("Internal Error in get Request "+error);
    }
}

const createproduct=async(req,res)=>{
    try {
        const {name,age}=req.body;
        const productadd=new productmodel({name,age});
        productadd.save();
        res.status(200).json({success:true,productadded:productadd});
    }
     catch (error) {
        res.send("Internal Error at create product request "+error);
    }
}

const updateproduct=async(req,res)=>{
    try {
        const {id}=req.params;
        console.log("1 ");
        const {name,age}=req.body;
        console.log("2 ");
        const updateProduct=await productmodel.findByIdAndUpdate(id,{name,age},{new:true});
        console.log("3 ");
        res.status(200).json({success:true,UpdatedProduct:updateProduct});
    } 
    catch (error) {
        res.send("Internal error at update request "+error);
    }
}

const deleteproduct=async(req,res)=>{
    try {
        const {id}=req.params;
        const deleteprod=await productmodel.findByIdAndDelete(id);
        if(!deleteprod){
            res.status(200).json({success:false,message:"Id was not present"});
        }
        res.status(200).json({success:true,Productgotdeleted:deleteprod});
    } 
    catch (error) {
        res.send("Internal error at update request "+error);
    }
}

module.exports={getproduct,createproduct,updateproduct,deleteproduct};