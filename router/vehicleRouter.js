const express = require('express');
const router = express.Router();
const vehicleController  = require('../controller/vehicleController');
/**
 * 
 * @swagger
 * /vehicle/addVehicle:
 *   post:
 *     tags:
 *       - vehicleStation
 *     description: addVehicle
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: token required.
 *         in: header
 *         required: true
 *       - name: vehicle
 *         description: vehicle required.
 *         in: formData
 *         required: true   
 *       - name: owner
 *         description: owner required.
 *         in: formData
 *         required: true 
 *       - name: vehicleNumber
 *         description: vehicleNumber required.
 *         in: formData
 *         required: true 
 *       - name: address
 *         description: mfgDate required.
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
 router.post('/addVehicle',vehicleController.addVehicle)
 /**
 * 
 * @swagger
 * /vehicle/vehicleList:
 *   get:
 *     tags:
 *       - vehicleStation
 *     description: vehicleList
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
 router.get('/vehicleList',vehicleController.vehicleList)
 /**
 * 
 * @swagger
 * /vehicle/editVehicle:
 *   put:
 *     tags:
 *       - vehicleStation
 *     description: editVehicle
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
 *       - name: vehicle
 *         description: vehicle required.
 *         in: formData
 *         required: true   
 *       - name: owner
 *         description: owner required.
 *         in: formData
 *         required: true 
 *       - name: vehicleNumber
 *         description: vehicleNumber required.
 *         in: formData
 *         required: true 
 *       - name: mfgDate
 *         description: mfgDate required.
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
 router.put('/editVehicle',vehicleController.editVehicle)
 /**
 * @swagger
 * /vehicle/vehicleView:
 *   get:
 *     tags:
 *       - vehicleStation
 *     description: vehicleView
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
 router.get('/vehicleView',vehicleController.vehicleView)
 /**
 * @swagger
 * /vehicle/deleteVehicle:
 *   delete:
 *     tags:
 *       - vehicleStation
 *     description: deleteVehicle
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: _id
 *         description: _id required.
 *         in: query
 *         required: true
 *     responses:
 *       200:
 *         description: Thanks, vehicle Delete successfully.
 *       500:
 *         description: Internal Server Error
 *       501:
 *         description: Something went wrong!
 */  
router.delete('/deleteVehicle',vehicleController.deleteVehicle)

 module.exports=router;
