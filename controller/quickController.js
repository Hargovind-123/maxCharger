const express =require('express');
const userModel = require('../model/userModel')
const chargerModel = require('../model/quickChargerModel');
const common = require("../Helper/CommonFunction");
const quickChargerModel = require('../model/quickChargerModel');
const qrCodes = require('qrcode')
module.exports={
    quickChargerAdd: async (req, res)=>{
      try {
        const{owner, location, qrCode, }=req.body
        const addData= await userModel.findOne({userType:"ADMIN"});
        if (!addData) {
            res.send({responseCode:403, responseMessage:"data not found", responseResult:[]})

        } else {
            var data = await chargerModel.findOne({owner:req.body.owner, qrCode:req.body.qrCode})
            if (data) {
                res.send({responseCode:401,responseMessage:" charging point alredy exist ", response:[]})

            } else {
                let qrCodes = await qrCode.toString('hargovind',data)
                console.log("=====================================>",qrCodes)
                var charger={
                    owner:owner,
                    location:location,
                    qrCode:qrCode,
                }
                const quickData= await chargerModel(charger).save();
                res.send({responseCode:200, responseMessage:"charging point add successfully",responseResult:quickData})
                
            }
            
        } 
      } catch (error) {
        res.send({ responseCode:501, responseMessage:"something went wrong", responseResult:error.message})
      }
    
    },
    editChargerPoint: async(req, res)=>{
      try {
          const admin = await chargerModel.findOne({_id:req.query._id})
          console.log( admin)
          if (!admin) {
             res.send({responseCode:409, responseMessage:"content not found"})    
          } else {
              let adminEdit = await chargerModel.findByIdAndUpdate({_id:admin._id},{$set: {owner:req.body.owner,location:req.body.location, qrcode:req.body.qrCode}},{new:true});
              if (adminEdit) {
                  res.send({responseCode:200, responseMessage:"chaging point update successfully", responseResult:adminEdit})
                  
              } 
              
          }       
      } catch (error) {
          res.send({responseCode:501, responseMessage:"something went wrong", responseResult:error.message})
      }
    },
    chargingPointView: async (req, res)=>{
      try {
          let admin = await chargerModel.findOne({_id:req.query._id});
           if (!admin) {
              res.send({responseCode: 409,resposMessage:"no content found",responseResult:[] })
          } else {
              res.send({responseCode:200, reponseMessage:"content found sucessfully", responseResult:admin})
              
          }
      } catch (error) {
          res.send({responseCode:501,reponseMessage:"someting went wrong",responseResult:[]})
      }
    },
    deleteData: async (req, res) => {
      try {
          let  data = await chargerModel.findOne({ _id: req.query._id,userType:"ADMIN" })
          console.log("=====================>88",data)
          if (!data){
              res.send({ responseCode: 409, responseMessage: "station not found", responseResult: [] })
          } else {
              let stationUpdate = await chargerModel.findByIdAndDelete({ _id:req.query._id },{ new: true })
              return res.send({ responseCode: 200, responseMessage: "Content Deleted Successfully", responseResult: stationUpdate })
          }
      } catch (error) {
          res.send({ responseCode: 501, responseMessage: "Something Was Wrong", responseResult: error.message })
      }
    },
    chargingPointList: async (req, res)=>{
      try {
          const list = await chargerModel.find({status:"ACTIVE"});
          
          if (!list) {
              res.send({responseCode:403, responseMessage:"station list not found ", responseMessage:[]});
  
          } else {
              res.send({responseCode:200,responseMessage:"sation list view succesfully", responseResult:list})
          }
      } catch (error) {
          res.send({responseCode:501, responseMessage:"something went wrong", respomseResult:[]});
          
      }
  },
}
 