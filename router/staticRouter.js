const express = require('express');
const staticController=require('../controller/staticController')
const staticRouter = express.Router();
/**
 * @swagger
 * /STATIC/view:
 *   get:
 *     tags:
 *       - STATIC
 *     description: view
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
staticRouter.get('/view',staticController.view)
/**
 * @swagger
 * /STATIC/list:
 *   get:
 *     tags:
 *       - STATIC
 *     description: list
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: token
 *         description: token required.
 *         in: header
 *         required: true
 *     responses:
 *       200:
 *         description: Thanks, view List successfully.
 *       500:
 *         description: Internal Server Error
 *       501:
 *         description: Something went wrong!
 */  
staticRouter.get('/list',staticController.list)
/**
 * @swagger
 * /STATIC/edit:
 *   put:
 *     tags:
 *       - STATIC
 *     description: edit
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
 *       - name: type
 *         description: type required.
 *         in: formData
 *         required: true
 *     responses:
 *       200:
 *         description: Thanks, add successfully.
 *       500:
 *         description: Internal Server Error
 *       501:
 *         description: Something went wrong!
 */  
staticRouter.put('/edit',staticController.edit)
module.exports=staticRouter;