const express =require('express');
const userModel = require('../model/userModel')
const categoryModel = require('../model/stationModel');
const common = require("../Helper/CommonFunction")
 

module.exports={
addStation: async(req, res)=>{
 try {
    const{owner,address, charge, Type, mobileNumber, amount, location,contact }=req.body
const addData= await userModel.findOne({userType:"ADMIN"});
     if(!addData){
        res.send({responseCode:403, responseMessage:"data not found", responseResult:[]})

    }else{
        var categoryData = await categoryModel.findOne({owner:req.body.owner, type: req.body.type});
        if (categoryData) {
     res.send({responseCode:403,responseMessage:"alredy exist", responseResult:[]});

        } else {
            let addStation={
                owner:owner,
                address:address,
                charge:charge,
                location:location,
                Type:Type,
                mobileNumbner:mobileNumber,
                amount:amount,
                contact:contact,
            }
            const addCharging= await categoryModel(addStation).save();
            res.send({responseCode:200, responseMessage:"station add successfully", responseResult:addCharging})
        }
    }
 } catch (error) {
    res.send({responseCode:501, responseMessage:"something went wrong", responseMessage:[]})
 }
},
stationList: async (req, res)=>{
    try {
        const list = await categoryModel.find({status:"ACTIVE"});
        
        if (!list) {
            res.send({responseCode:403, responseMessage:"station list not found ", responseMessage:[]});

        } else {
            res.send({responseCode:200,responseMessage:"sation list view succesfully", responseResult:list})
        }
    } catch (error) {
        res.send({responseCode:501, responseMessage:"something went wrong", respomseResult:[]});
        
    }
},
editStaion: async(req, res)=>{
    try {
        const admin = await categoryModel.findOne({_id:req.query._id})
        console.log( admin)
        if (!admin) {
           res.send({responseCode:409, responseMessage:"content not found"})    
        } else {
            let adminEdit = await categoryModel.findByIdAndUpdate({_id:admin._id},{$set: {owner:req.body.owner, contact:req.body.contact, charge:req.body.charge, Type:req.body.Type,mobileNumber:req.body.mobileNumber, amount:req.body.amount, location:req.body.location,address:req.body.address}},{new:true});
            if (adminEdit) {
                res.send({responseCode:200, responseMessage:"chaging station update successfully", responseResult:adminEdit})
                
            } 
            
        }       
    } catch (error) {
        res.send({responseCode:501, responseMessage:"something went wrong", responseResult:error.message})
    }
},
stationView: async (req, res)=>{
    try {
        let admin = await categoryModel.findOne({_id:req.query._id});
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
        let  data = await categoryModel.findOne({ _id: req.query._id,userType:"ADMIN" })
        console.log("=====================>88",data)
        if (!data){
            res.send({ responseCode: 409, responseMessage: "station not found", responseResult: [] })
        } else {
            let stationUpdate = await categoryModel.findByIdAndDelete({ _id:req.query._id },{ new: true })
            return res.send({ responseCode: 200, responseMessage: "Content Deleted Successfully", responseResult: stationUpdate })
        }
    } catch (error) {
        res.send({ responseCode: 501, responseMessage: "Something Was Wrong", responseResult: error.message })
    }
},

}

