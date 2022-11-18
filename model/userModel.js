const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const validator = require('validator')
const schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate');
const userSchema = new schema({
     
    owner:{
        type:String, require:true,
    },
    vehicle:{
        type:String, require:true,
    },
  address:{
            type:String, require:true,
        
    },
    regDate:{
        type:String, require:true,
    },
   vehicleType:{
    type:String, require:true,
    },
    
    email:{
        type:String, require:true,
    },
    vehicleNumber:{
        type:String, require:true,
    },
    mfgDate:{
     type:String, require:true,
    },
    type:{
       type:String, require:true,
    },
    parking:{
     type:String, require:true,
    },
    password:{
        type:String, require:true,
    },
otp:{
    type:Number, require:true,
},
mobileNumber:{
    type:Number, require:true,
},
expTime:{
    type:Number
},
otpvarification:{
    type:Boolean, require:true,
    default:false
},
userType:{
    type: String,
    enum:["ADMIN","USER"],
    default: "USER"
},
status:{
    type:String,
    enum:["ACTIVE", "BLOCK","DELETE"],
    default:"ACTIVE"
},
  
},
{timestamps:true}

);
userSchema.plugin(mongoosePaginate)
    const userModel = mongoose.model("user", userSchema);
    module.exports = userModel; 
    userModel.findOne({status:{$ne:"DELETE"},userType:"ADMIN"},(err, adminResult)=>{
        if (err) {
            console.log("Admin creation error",err)
        } else if (adminResult) {
            console.log('default admin exist,')
  }
        else {
            let admin ={
                owner:"Hargovind ",
                mobileNumber:"8009652104",
                address:"Uttar pradesh",
                email:"greenusys@gmail.com",
                password:bcrypt.hashSync("2323"),
                userType:"ADMIN"
            }
            userModel(admin).save((error, adminCreate)=>{
                if (error) {
                console.log("Admin creation error:",error)                    
                } else {
                    console.log('Default admin created')   
                }
            })
    }
})

    