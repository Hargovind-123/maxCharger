const express = require('express')
const auth= require("../middleware/auth")
const userController = require('../controller/userController');
const router = express.Router();
/**
 * @swagger
 * /user/signup:
 *   post:
 *     tags:
 *       - USER
 *     description: signup
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: email
 *         description: email required.
 *         in: formData
 *         required: true
 *       - name: owner
 *         description: owner required.
 *         in: formData
 *         required: true
 *       - name: vehicle
 *         description: vehicle required.
 *         in: formData
 *         required: true
 *       - name: vehicleType
 *         description: vehicleType required.
 *         in: formData
 *         required: true
 *       - name: vehicleNumber
 *         description: vehicleNumber required.
 *         in: formData
 *         required: true
 *       - name: regDate
 *         description: regDate required.
 *         in: formData
 *         required: true
 *       - name: mfgDate
 *         description: mfgDate required.
 *         in: formData
 *         required: true
 *       - name: mobileNumber
 *         description: mobileNumber required.
 *         in: formData
 *         required: true
 *       - name: password
 *         description: password required.
 *         in: formData
 *         required: true
 *       - name: confirm_password
 *         description: confirm_password required.
 *         in: formData
 *         required: true
 *     responses:
 *       200:
 *         description: Thanks, You have successfully signup.
 *       500:
 *         description: Internal Server Error
 *       501:
 *         description: Something went wrong!
 */

router.post('/signup',userController.signup);
/**
 * @swagger
 * /user/login:
 *   post:
 *     tags:
 *       - USER
 *     description: login
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: email
 *         description: email required.
 *         in: formData
 *         required: true
 *       - name: password
 *         description: password required.
 *         in: formData
 *         required: true
 *     responses:
 *       200:
 *         description: Thanks, You have successfully login.
 *       500:
 *         description: Internal Server Error
 *       501:
 *         description: Something went wrong!
 */  
router.post('/login',userController.login);
/**
 * @swagger
 * /user/verifyOtp:
 *   put:
 *     tags:
 *       - USER
 *     description: verifyOtp
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: email
 *         description: email required.
 *         in: formData
 *         required: true
 *       - name: otp
 *         description: otp required.
 *         in: formData
 *         required: true
 *     responses:
 *       200:
 *         description: Thanks, You have successfully verifyOtp.
 *       500:
 *         description: Internal Server Error
 *       501:
 *         description: Something went wrong!
 */  
router.put('/verifyotp',userController.verifyOtp);
/**
 * @swagger
 * /user/resendOtp:
 *   put:
 *     tags:
 *       - USER
 *     description: resendOtp
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: email
 *         description: email required.
 *         in: formData
 *         required: true
 *     responses:
 *       200:
 *         description: Thanks, You have successfully resendotp.
 *       500:
 *         description: Internal Server Error
 *       501:
 *         description: Something went wrong!
 */  
router.put('/resendOtp',userController.resendOtp);
/**
 * @swagger
 * /user/forgotPassword:
 *   put:
 *     tags:
 *       - USER
 *     description: forgotPassword
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: email
 *         description: email required.
 *         in: formData
 *         required: true  
 *     responses:
 *       200:
 *         description: Thanks, You have successfully forgotPassword.
 *       500:
 *         description: Internal Server Error
 *       501:
 *         description: Something went wrong!
 */  
router.put('/forgotPassword',userController.forgotPassword);

/**
 * @swagger
 * /user/resetPassword:
 *   put:
 *     tags:
 *       - USER
 *     description: resetPassword
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: email
 *         description: email required.
 *         in: formData
 *         required: true
 *       - name: otp
 *         description: otp required.
 *         in: formData
 *         required: true
 *       - name: newPassword
 *         description: newPassword required.
 *         in: formData
 *         required: true
 *       - name: confirm_password
 *         description: confirm_password required.
 *         in: formData
 *         required: true
 *     responses:
 *       200:
 *         description: Thanks, You have successfully  resetPassword.
 *       500:
 *         description: Internal Server Error
 *       501:
 *         description: Something went wrong!
 */

router.put('/resetPassword',userController.resetPassword);
/**
 * @swagger
 * /user/changePassword:
 *   put:
 *     tags:
 *       - USER
 *     description: changePassword
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: token required.
 *         in: header
 *         required: true
 *       - name: password
 *         description: password required.
 *         in: formData
 *         required: true
 *       - name: newPassword
 *         description: newPassword required.
 *         in: formData
 *         required: true
 *       - name: confirm_password
 *         description: confirm_password required.
 *         in: formData
 *         required: true 
 *     responses:
 *       200:
 *         description: Thanks, You have successfully changePassword.
 *       500:
 *         description: Internal Server Error
 *       501:
 *         description: Something went wrong!
 */
router.put('/changePassword',auth.verifyToken,userController.changePassword)
/**
 * 
 * @swagger
 * /user/editProfile:
 *   put:
 *     tags:
 *       - USER
 *     description: editProfile
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: token required.
 *         in: header
 *         required: true
 *       - name: _id
 *         description: _id required.
 *         in: formData
 *         required: true 
 *       - name: email
 *         description: email required.
 *         in: formData
 *         required: true   
 *       - name: owner
 *         description: owner required.
 *         in: formData
 *         required: true 
 *       - name: vehicle
 *         description: vehicle required.
 *         in: formData
 *         required: true 
 *       - name: vehicleType
 *         description: vehicleType required.
 *         in: formData
 *         required: true
 *       - name: vehicleNumber
 *         description: vehicleNumber required.
 *         in: formData
 *         required: true 
 *       - name: regNumber
 *         description: regnumber required.
 *         in: formData
 *         required: true
 *       - name: mgfDate
 *         description: mfgDate required.
 *         in: formData
 *         required: true
 *       - name: mobilenumber
 *         description: mobileNumber required.
 *         in: formData
 *         required: true  
 *     responses:
 *       200:
 *         description: Thanks, You have successfully edit.
 *       500:
 *         description: Internal Server Error
 *       501:
 *         description: Something went wrong!
 */
router.put('/editProfile',auth.verifyToken,userController.editProfile)
/**
 * @swagger
 * /user/viewData:
 *   get:
 *     tags:
 *       - USER
 *     description: viewData
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: token required.
 *         in: header
 *         required: true
 *     responses:
 *       200:
 *         description: Thanks, You have successfully viewData.
 *       500:
 *         description: Internal Server Error
 *       501:
 *         description: Something went wrong!
 */  
router.get('/viewData', auth.verifyToken,userController.viewData)

module.exports=router