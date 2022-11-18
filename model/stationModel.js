
 const mongoose = require('mongoose');
 const schema = require('mongoose').Schema
 const mongoosePaginate = require('mongoose-paginate');
 const categorySchema = new schema({
 userId:{
    type: mongoose.Schema.Types.ObjectId, ref:"ADMIN"
 },
     owner:{
         type:"String",require:true,
     },
     location:{
         type:"String", require:true,
 
     },
     contact:{
         type:"String", require:true,
     },
     amount:{
         type:"Number", require:true,
     },
     address:{
         type:"String", require:true,
     },
     mobileNumber:{
         type:"Number", require:true,
     },
     charge:{
         type:"String" ,require:true,
     },
     parking:{
         type:"String", require:true,
     },
   Type:{
      type:"String", require:true,
   },
   stationStatus:{
     type:String, enum:["AVILABLE","UNAVILABLE"], default:"AVILABLE"
   },
   status :{type:String, enum:["ACTIVE","BLOCK","DELETE"], default:"ACTIVE"},
    
   userType:{
     type: String, enum:["ADMIN","USER"], default:"ADMIN"
   }
   
    },
    {
     timestamps: true
    }
 
 )
 categorySchema.plugin(mongoosePaginate)
 const categoryModel = mongoose.model("category", categorySchema);
     module.exports = categoryModel;