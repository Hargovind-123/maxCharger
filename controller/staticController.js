const staticModel = require('../model/userstaticModel')
module.exports = ({
    view: async (req, res)=>{
        try {
            let admin = await staticModel.findOne({_id:req.query._id});
            if (!admin) {
                res.send({responseCode: 409,resposMessage:"no content found",responseResult:[] })
            } else {
                res.send({responseCode:200, reponseMessage:"content found sucessfully", responseResult:admin})
                
            }
        } catch (error) {
            res.send({responseCode:501,reponseMessage:"someting went wrong",responseResult:[]})
        }
    },
    list: async(req, res)=>{
        try {
            let admin = await staticModel.find({status:"ACTIVE"});
            if(!admin){
                res.send({responseCode:409, responseMessage:"content not found",responseResult:[]})
            }
            else{
                res.send({responseCode:200, responseMessage:"content found sucessfully", responseResult:admin})
            }
        } catch (error) {
         res.send({responseCode:501, responseMessage:"something went wrong"})           
        }
    },
    edit: async(req, res)=>{
        try {
            const admin = await staticModel.findOne({_id:req.query._id})
            console.log(admin)
            if (!admin) {
               res.send({responseCode:409, responseMessage:"content not found"})    
            } else {
                let adminAdd = await staticModel.findByIdAndUpdate({_id:admin._id},{$set: {description:req.body.description, type:req.body.type,title:req.body.title}},{new:true});
                if (adminAdd) {
                    res.send({responseCode:200, responseMessage:"admin content update successfully", responseResult:adminAdd})
                    
                } 
                
            }       
        } catch (error) {
            res.send({responseCode:501, responseMessage:"something went wrong", responseResult:error.message})
        }
    }
})