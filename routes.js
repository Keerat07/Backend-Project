const express=require('express');

const {getproduct,createproduct,updateproduct,deleteproduct}=require('../productcontroller/productcontroller');

const router=express.Router();

router.put('/:id',updateproduct);

router.delete('/:id',deleteproduct);

router.get('/',getproduct);

router.post('/',createproduct);

module.exports=router