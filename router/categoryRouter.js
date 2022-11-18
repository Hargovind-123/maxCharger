const express = require('express');
const categoryController = require('../controller/categoryController')
const router = express.Router();
/**
 * 
 * @swagger
 * /category/addStation:
 *   post:
 *     tags:
 *       - chargingStation
 *     description: addStation
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: token required.
 *         in: header
 *         required: true
 *       - name: contact
 *         description: contact required.
 *         in: formData
 *         required: true   
 *       - name: owner
 *         description: owner required.
 *         in: formData
 *         required: true 
 *       - name: charge
 *         description: charge required.
 *         in: formData
 *         required: true 
 *       - name: address
 *         description: address required.
 *         in: formData
 *         required: true
 *       - name: type
 *         description: type required.
 *         in: formData
 *         required: true 
 *       - name: parking
 *         description: parking required.
 *         in: formData
 *         required: true  
 *       - name: mobileNumber
 *         description: mobileNumber required.
 *         in: formData
 *         required: true  
 *       - name: amount
 *         description: amount required.
 *         in: formData
 *         required: true  
 *       - name: location
 *         description: location required.
 *         in: formData
 *         required: true  
 *     responses:
 *       200:
 *         description: Thanks, station add  successfully .
 *       500:
 *         description: Internal Server Error
 *       501:
 *         description: Something went wrong!
 */
 router.post('/addStation',categoryController.addStation)
/**
 * 
 * @swagger
 * /category/stationList:
 *   get:
 *     tags:
 *       - chargingStation
 *     description: stationList
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: token required.
 *         in: header
 *         required: true
 *     responses:
 *       200:
 *         description: Thanks list view successfully .
 *       500:
 *         description: Internal Server Error
 *       501:
 *         description: Something went wrong!
 */
 router.get('/stationList',categoryController.stationList)
 /**
 * 
 * @swagger
 * /category/editStaion:
 *   put:
 *     tags:
 *       - chargingStation
 *     description: editStaion
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: token required.
 *         in: header
 *         required: true
 *       - name: _id
 *         description: _id required.
 *         in: query
 *         required: true
 *       - name: contact
 *         description: contact required.
 *         in: formData
 *         required: true   
 *       - name: owner
 *         description: owner required.
 *         in: formData
 *         required: true 
 *       - name: charge
 *         description: charge required.
 *         in: formData
 *         required: true 
 *       - name: address
 *         description: address required.
 *         in: formData
 *         required: true
 *       - name: type
 *         description: type required.
 *         in: formData
 *         required: true 
 *       - name: parking
 *         description: parking required.
 *         in: formData
 *         required: true  
 *       - name: mobileNumber
 *         description: mobileNumber required.
 *         in: formData
 *         required: true  
 *       - name: amount
 *         description: amount required.
 *         in: formData
 *         required: true  
 *       - name: location
 *         description: location required.
 *         in: formData
 *         required: true  
 *     responses:
 *       200:
 *         description: Thanks, edit successfully .
 *       500:
 *         description: Internal Server Error
 *       501:
 *         description: Something went wrong!
 */
 router.put('/editStaion',categoryController.editStaion)
/**
 * @swagger
 * /category/stationView:
 *   get:
 *     tags:
 *       - chargingStation
 *     description: stationView
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: _id
 *         description: _id required.
 *         in: query
 *         required: true 
 *     responses:
 *       200:
 *         description: Thanks, view Data successfully.
 *       500:
 *         description: Internal Server Error
 *       501:
 *         description: Something went wrong!
 */  
 router.get('/stationView',categoryController.stationView)

/**
 * @swagger
 * /category/deleteData:
 *   delete:
 *     tags:
 *       - chargingStation
 *     description: deleteData
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: _id
 *         description: _id required.
 *         in: query
 *         required: true
 *     responses:
 *       200:
 *         description: Thanks, station Delete successfully.
 *       500:
 *         description: Internal Server Error
 *       501:
 *         description: Something went wrong!
 */  
router.delete('/deleteData',categoryController.deleteData)

module.exports= router;
