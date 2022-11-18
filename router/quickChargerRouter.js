const express = require('express');
const quickController  = require('../controller/quickController')
const router = express.Router();
/**
 * 
 * @swagger
 * /quickCharger/quickChargerAdd:
 *   post:
 *     tags:
 *       - quickCharger
 *     description: quickChargerAdd
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: token required.
 *         in: header
 *         required: true
 *       - name: location
 *         description: location required.
 *         in: formData
 *         required: true   
 *       - name: owner
 *         description: owner required.
 *         in: formData
 *         required: true 
 *       - name: qrCode
 *         description: qrCode required.
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
router.post('/quickChargerAdd',quickController.quickChargerAdd);
/**
 * 
 * @swagger
 * /quickCharger/editChargerPoint:
 *   put:
 *     tags:
 *       - quickCharger
 *     description: editChargerPoint
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
 *       - name: owner
 *         description: owner required.
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
 router.put('/editChargerPoint',quickController.editChargerPoint)
 /**
 * @swagger
 * /quickCharger/chargingPointView:
 *   get:
 *     tags:
 *       - quickCharger
 *     description: chargingPointView
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
  router.get('/chargingPointView',quickController.chargingPointView)
  /**
 * @swagger
 * /quickCharger/deleteData:
 *   delete:
 *     tags:
 *       - quickCharger
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
router.delete('/deleteData',quickController.deleteData)
/**
 * 
 * @swagger
 * /quickCharger/chargingPointList:
 *   get:
 *     tags:
 *       - quickCharger
 *     description: chargingPointList
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
 router.get('/chargingPointList',quickController.chargingPointList)

module.exports=router;
