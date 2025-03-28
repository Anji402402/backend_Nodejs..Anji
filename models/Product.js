const mongoose = require("mongoose")
 const productSchema = new mongoose.Schema({
     productName: {
          type:String,
          required:true
     },
     price:{
          type:String,
          required:true
     },
     categroy:{
          type:[{
               type:String,
               enum:['veg','non-veg']

     }]
     },
     region:{
          type:[{
               enum:[]
          }]
     },
     Image:{
          type:String,
     },
     bestseller:{
          type:String,
     },
     description:{
          type:String,
     },
     firm:[{
          type:mongoose.Schema.Types.ObjectId,
          ref:'Firm'
          
     }] 
 });
 const Product =mongoose.model('product',productSchema)


 module.exports = Product;