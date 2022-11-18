
const express = require('express')
const userModel = require("../model/userModel");
const bcrypt= require('bcryptjs');
const CommonFunction=require('../Helper/CommonFunction')
const jwt = require('jsonwebtoken');
require('dotenv').config()
let otpTime=4*60*1000
module.exports={
    login: async (req, res) => {
  try {
            const { email, password } = req.body
            if (email && password) {
           const admin= await userModel.findOne({ email:email,status:"ACTIVE",userType:"ADMIN"})                   
                if (admin) {
                    const isMatch = await bcrypt.compareSync(password, admin.password)
                    if (email===admin.email&&isMatch) {
                        const token = await jwt.sign({ adminId:admin._id, email:email }, "hello", { expiresIn: "1d" })
                        res.send({ responseCode: 200, responseMessage: "Login Success", responsResult:admin, token:token})
                
                    } else {
                    
                        res.send({ responseCode: 403, responseMessage: "Email and Password Not Valid", responsResult: [] })
                    }
                } else {
                    res.send({ responseCode: 404, responseMessage: "Admin Not found" })
                }

            } else {
                res.send({ responseCode: 400, responseMessage: "All Field Are required" })
            }
        } catch (error) {
            console.log(error)
        }
    },
  forgotPassword: async (req, res) => {
        try {
            let adminData = await userModel.findOne({ email:req.body.email,status:"ACTIVE",userType:"ADMIN"})
            if (!adminData) {
                res.send({ responseCode: 404, responseMesage: "data not found", responseResult: [], });               
            } else {
                let otp2 = generateOtp();
                expTime = Date.now() + otpTime
                let subject = `otp for Resend`
                let text = `your OTP is:${otp2}`;
                await CommonFunction.sendMail(req.body.email, subject, text)
                if (adminData) {
                    let Data = await userModel.findByIdAndUpdate({ _id: adminData._id }, { $set: { expTime: expTime, otp: otp2 } }, { new: true })
                    if (Data) {
                        res.send({ responseCode: 200, responsMessage: "otp send successfully", responseResult: otp2 });
    
                    } else {
                        res.send({ responseCode: 401, responseMesage: "admin not else", responsResult: [] });

                    }
                } else {
                    res.send({ responseCode: 401, responseMesage: "Admin not else", responseResult: [] });
                }
            }
        } catch (error) {
            return res.send({ responseCode: 501, responseMesage: "something went wrong", responseResult: error.message, });
    
        }
    },
    resendOtp: async (req, res) => {
        try {
            let admin = await userModel.findOne({ email:req.body.email,status:"ACTIVE",status:"AVILABLE" })
            console.log("==========>",admin)
            if (!admin) {
                res.send({ responseCode: 403, responseMesage: "user alredy exist" })
            } else {
                let otp1 = generateOtp();
                expTime = Date.now() + otpTime
                let subject = 'Otp for resend'
                let text = `your Otp Is:${otp1}`;
                let mail = await CommonFunction.sendMail(req.body.email, subject, text)
                if (mail) {
                    let adminSave = await userModel.findByIdAndUpdate({ _id: admin._id }, { $set: { expTime: expTime, otp: otp1 } }, { new: true });
                    if (adminSave) {
                        res.send({ responseCode: 200, responseMesage: "otp send successfully", responseResult: adminSave })
                    }
                }
    
            }
    
        } catch (error) {
            console.log(error)
            res.send({ responseCode: 404, responsMessage: "user not found", responseResult: [] })
        }
    },
    resetPassword: async (req, res, next) => {
        try {
            const { email, newPassword, confirm_password, otp } = req.body
            const admin= await userModel.findOne({ email: email })
            if (!admin) {
                res.send({ responseCode: 404, responseMesage: "user not found" })
            } else {
                console.log("dghjgd");
                const salt = await bcrypt.genSalt(10)
    
                const haspassword = await bcrypt.hash(newPassword, salt)
                console.log(haspassword);
                const currentTime = Date.now();
                if (admin.otp == otp) {
                    const expTime = admin.expTime
                    if (currentTime <= expTime) {
                        if (newPassword == confirm_password) {
                            let adminUpdate = await userModel.findByIdAndUpdate({ _id: admin._id }, { $set: { password: haspassword, otpvarification: true } }, { new: true })
                            res.send({ responseCode: 200, responseMesage: "password reset successfully", responseResult: adminUpdate })
                        } else {
                            res.send({ responseCode: 404, responseMesage: "password does not match" })
    
                        }
                    } else {
                        res.send({ response: 401, responseMesage: "otp time expire" })
    
                    }
                } else {
    
                    res.send({ responseCode: 401, response: "wrong otp" })
    
                }
    
            }
    
        } catch (error) {
            res.send({ responseCode: 501, responseMesage: "something went wrong", responseResult: error })
    
        }
    
    },
    changePassword: async (req, res) => {
        try {
            const { password,newPassword,confirm_password} = req.body;
            console.log("===========>246",req.body)
            console.log("======>279",newPassword, password,confirm_password ) 
            const user = await userModel.findOne({userType:"ADMIN",})
            console.log("==============>247",user)
            if (!user) {
                res.send({ responseCode: 404, responseMesage: "user not found" })
            } else {
            if (newPassword && confirm_password ){
                if (!newPassword===confirm_password) {
                    res.send({ responseCode: 401, responseMesage: "password and newPassword does not match", responsResult: [] })
                } else {
                    const salt = await bcrypt.genSalt(10)
                    const hashnewPassword = await bcrypt.hash(newPassword, salt);
                    let userUpdate = await userModel.findByIdAndUpdate({ _id: user._id }, { $set: { password: hashnewPassword} }, { new: true })
                    res.send({ responseCode: 200, responseMesage: "password changed successfully", responseResult: userUpdate })
                }
               
            } else {
                res.send({ responseCode: 401, responseMessage: "both fields are require" })
            }}
        } catch (error) {
            return res.send({ responseCode: 501, responseMessage: "Something went wrong!", responseResult: error.message });
        }
    },
    editProfile: async (req,res)=>{
        try {
           const{email,firstname,number, lastname, dob, address,}=req.body
           console.log("============>229",req.body)
           const admin=await userModel.findOne({_id:req.body._id,status:"ACTIVE", userType:"ADMIN"})
           console.log("=============>230",admin)
           if (!admin) {
            res.send({responseCode:404,responseMesage:"admin not found",responseResult:[]})
           } 

       else {
        const mail = await userModel.find({email:req.body.email})
        if(mail==admin.email){
            return res.send({responseCode:404,responseMessage:"alredy exist",responseResult:[]})
        }else{
            const number=await userModel.find({number:req.body.number})
            if(number==admin.number){
                return res.send({responseCode:404, responseMesage:"number exist", responseResult:[]})
            }else{
                
            }
        }
               let adminProfileUpdate=await userModel.findByIdAndUpdate({_id:admin._id},{email:email,firstname:firstname,lastname:lastname,dob:dob,address:address,number:number},{new:true})
                    res.send({responseCode:200,responseMesage:"admin profile update suceccfully",responseResult:adminProfileUpdate})
                
          }
        } catch (error) {
           res.send({responseCode:501,responseMesage:"something went wrong",responseResult:error})
        }
       }
}    
function generateOtp() {
    let otp = Math.floor(100000 + Math.random()*900000)
    console.log(`Your Otp ===> ${otp}`)
    return otp
}
