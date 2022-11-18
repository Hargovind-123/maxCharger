    
const express =require('express');
const userModel = require('../model/userModel')
const vehicleModel = require('../model/vehicleModel');
const common = require("../Helper/CommonFunction")
module.exports={
addVehicle: async(req, res)=>{
    try {
       const{owner, vehicle, vehicleNumber,mfgDate }=req.body
   const addData= await userModel.findOne({userType:"ADMIN"});
        if(!addData){
           res.send({responseCode:403, responseMessage:"data not found", responseResult:[]})
   
       }else{
           var vehicleData = await vehicleModel.findOne({owner:req.body.owner, vehicleNumber: req.body.vehicleNumber});
           if (vehicleData) {
        res.send({responseCode:403,responseMessage:"alredy exist", responseResult:[]});
   
           } else {
               let addVehicle={
                   owner:owner,
                   vehicle:vehicle,
                   vehicleNumber:vehicleNumber,
                   mfgDate:mfgDate,
               }
               const addCharging= await vehicleModel(addVehicle).save();
               res.send({responseCode:200, responseMessage:"station add successfully",responseResult:addCharging})
           }
       }
    } catch (error) {
       res.send({responseCode:501, responseMessage:"something went wrong", responseMessage:[]})
    }
   },
   vehicleList: async (req, res)=>{
    try {
        const dataList = await vehicleModel.find({status:"ACTIVE"});
        
        if (!dataList) {
            res.send({responseCode:403, responseMessage:"vehicle list not found ", responseMessage:[]});

        } else {
            res.send({responseCode:200,responseMessage:"vehicle list view succesfully", responseResult:dataList})
        }
    } catch (error) {
        res.send({responseCode:501, responseMessage:"something went wrong", respomseResult:[]});
        
    }
},
editVehicle: async(req, res)=>{
    try {
        const admin = await vehicleModel.findOne({_id:req.query._id})
        console.log( admin)
        if (!admin) {
           res.send({responseCode:409, responseMessage:"vehicle data not found"})    
        } else {
            let adminEdit = await  vehicleModel.findByIdAndUpdate({_id:admin._id},{$set: {owner:req.body.owner,vehicle:req.body.vehicle,vehicleNumber:req.body.vehicleNumber,mfgDate:req.body.mfgDate }},{new:true});
            if (adminEdit) {
                res.send({responseCode:200, responseMessage:"vehicle Data update successfully", responseResult:adminEdit})
                
            } 
            
        }       
    } catch (error) {
        res.send({responseCode:501, responseMessage:"something went wrong", responseResult:error.message})
    }
},
vehicleView: async (req, res)=>{
    try {
        let admin = await vehicleModel.findOne({_id:req.query._id});
         if (!admin) {
            res.send({responseCode: 409,resposMessage:"no content found",responseResult:[] })
        } else {
            res.send({responseCode:200, reponseMessage:"content found sucessfully", responseResult:admin})
            
        }
    } catch (error) {
        res.send({responseCode:501,reponseMessage:"someting went wrong",responseResult:[]})
    }
},
deleteVehicle: async (req, res) => {
    try {
        let vehicleData = await vehicleModel.findOne({ _id:req.query._id, userType:"ADMIN" })
        console.log("=====================>82",vehicleData)
        if (!vehicleData) {
            res.send({ responseCode: 409, responseMessage: "vehicle not found", responseResult: [] })
        } else {
            let vehicleDataupdate = await vehicleModel.findByIdAndDelete({ _id: req.query._id }, { new: true })
            return res.send({ responseCode: 200, responseMessage: "Content Deleted Successfully", responseResult: vehicleDataupdate })
        }
    } catch (error) {
        res.send({ responseCode: 501, responseMessage: "Something Was Wrong", responseResult: error.message })
    }
},
}