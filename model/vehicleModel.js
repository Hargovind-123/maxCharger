const mongoose = require('mongoose');
const schema = require('mongoose').Schema
const mongoosePaginate = require('mongoose-paginate');
const vehicleSchema = new schema({
 userId:{
      type: mongoose.Schema.Types.ObjectId, ref:"ADMIN"
   },
     owner:{ 
        type:String, require:true
     },
     vehicle:{
      type:String, require:true
     },
     mfgDate:{
      type:String, require:true
     },
     vehicleNumber:{
      type:String, require:true
     },
     status :{type:String, enum:["ACTIVE","BLOCK","DELETE"], default:"ACTIVE"},
   
     userType:{type: String, enum:["ADMIN","USER"], default:"ADMIN"},  
}
)
vehicleSchema.plugin(mongoosePaginate)
const vehicleModel = mongoose.model("vehicle", vehicleSchema);
    module.exports = vehicleModel;