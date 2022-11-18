const mongoose = require('mongoose');
const schema = require('mongoose').Schema
const staticSchema = new schema({
    type:{
        type:String

    },
    title:{
        type:String
    },
    description:{
        type:String
    },
    status:{
        type:String,
        default:"ACTIVE"
    }
    
})
const staticModel = mongoose.model('admin', staticSchema)
module.exports = staticModel;



mongoose.model('admin', staticSchema).findOne({userType:{$in:"STATIC"}},(err,res)=>{
   
    if (err) {
        console.log("SERVER ERROR");
    } else if(res) {
        console.log("content already exists");
    }else{
        let obj1={
            status:"ACTIVE",
            type:"Privacy policy ",
            title:"vehicle",
            description:"In the context of advanced and automated safety technologies, consumer acceptance is critical to effective and timely deployment. "
        }
        let obj2={
            status:"ACTIVE",
            type:"Terms And Conditions",
            title:"charging station",
            description:"This Privacy Policy is designed to address regulatory requirements of the jurisdictions in which Blockchain.com offers its Services, including the General Data Protection Regulation (“GDPR”), as enacted by the European Commission. In this Privacy Policy, the term “Service” and “Services” has the same meaning as described in the User Agreement, but excludes API services, which are governed by a separate agreement. If you do not agree with this Privacy Policy, in general, or any part of it, you should not use the Services. This Privacy Policy is periodically reviewed to ensure that any new obligations and changes to our business model are taken into consideration. We may amend this Privacy Policy at any time by posting an amended version on our website."
        }
        let obj3={
            status:"ACTIVE",
            type:"Contact us",
            title:"8009652104",
            description:"greenusys technology pvt ltd "
        }
        mongoose.model('admin', staticSchema).create(obj1, obj2,obj3,(err, res)=>{
            if (err) {
                console.log("error");
            } else {
                console.log("static content is saved", res);                
            }
        })
    }
})