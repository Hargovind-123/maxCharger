const userModel = require('../model/userModel')
module.exports = {

list: async (req, res) => {
    try {
       
       let userMangement = await userModel.find({userType:"USER"})
        if (!userMangement) {
            res.send({ responseCode: 409, responseMessage: "No Content Found", responseResult: [] })
        } else {
            return res.send({ responseCode: 200, responseMessage: "Content Found Successfully", responseResult: userMangement })
        }
    } catch (error) {
        res.send({ responseCode: 501, responseMessage: "Something Was Wrong", responseResult: error.message })
    }
},
view: async (req, res) => {
    try {

        let userMangement = await userModel.findOne({ _id: req.query._id })
        if (!userMangement) {
            res.send({ responseCode: 409, responseMessage: "data not found", responseResult: [] })
        } else {
            return res.send({ responseCode: 200, responseMessage: "data  view Successfully", responseResult: userMangement })
        }
    } catch (error) {
        res.send({ responseCode: 501, responseMessage: "Something Was Wrong", responseResult: error.message })
    }
},

delete: async (req, res) => {
    try {
        let userMangement = await userModel.findOne({ _id: req.query._id,userType:"USER" })
        if (!userMangement) {
            res.send({ responseCode: 409, responseMessage: "", responseResult: [] })
        } else {
            let userMangementupdate = await userModel.findByIdAndDelete({ _id: req.query._id }, { new: true })
            return res.send({ responseCode: 200, responseMessage: "Content Deleted Successfully", responseResult: userMangementupdate })
        }
    } catch (error) {
        res.send({ responseCode: 501, responseMessage: "Something Was Wrong", responseResult: error.message })
    }
},

block: async (req, res) => {
    try {
        let userMangement = await userModel.findOne({ _id: req.query._id ,userType:"USER"})
        if (!userMangement) {
            res.send({ responseCode: 409, responseMessage: "user not found please try again", responseResult: [] })
        } else {
            let userMangementupdate = await userModel.findByIdAndUpdate({ _id: req.query._id }, { $set: { status: "BLOCK" } }, { new: true })
            if (userMangementupdate) {
                return res.send({ responseCode: 200, responseMessage: "user block successfully", responseResult: userMangementupdate })
            }
        }
    } catch (error) {
        res.send({ responseCode: 501, responseMessage: "Something went Wrong", responseResult: error.message })
    }
}
}


