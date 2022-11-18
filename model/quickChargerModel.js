const mongoose = require('mongoose');
const schema = require('mongoose').Schema
const mongoosePaginate = require('mongoose-paginate');
const quickChargerSchema = new schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId, ref:"ADMIN"
     },
         owner:{
             type: String,require:true,
         },
         location:{
             type: String, require:true,
     
         },
         qrCode:{
            type: String, require:true,
         },
         status :{type:String, enum:["ACTIVE","DELETE"], default:"ACTIVE"},
   
         userType:{type: String, enum:["ADMIN","USER"], default:"ADMIN"},  
})
quickChargerSchema.plugin(mongoosePaginate)
const chargerModel = mongoose.model("quickCharger", quickChargerSchema);
    module.exports = chargerModel;