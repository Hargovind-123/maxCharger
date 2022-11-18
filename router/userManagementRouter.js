
 const express = require('express');
 const router = express.Router();
 const UserManagement = require('../controller/usermanagementController');
 /**
  * @swagger
  * /userManagement/list:
  *   get:
  *     tags:
  *       - UserManagement
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
  *         description: Thanks, open list successfully.
  *       500:
  *         description: Internal Server Error
  *       501:
  *         description: Something went wrong!
  */  
 router.get('/list',UserManagement.list)
 /**
  * @swagger
  * /userManagement/view:
  *   get:
  *     tags:
  *       - UserManagement
  *     description: view
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
  *     responses:
  *       200:
  *         description: Thanks, user data view successfully.
  *       500:
  *         description: Internal Server Error
  *       501:
  *         description: Something went wrong!
  */ 
 
 router.get('/view',UserManagement.view)
 /**
  * @swagger
  * /userManagement/block:
  *   put:
  *     tags:
  *       - UserManagement
  *     description: block
  *     produces:
  *       - application/json
  *     parameters:
  *       - name: _id
  *         description: -id required.
  *         in: query
  *         required: true
  *     responses:
  *       200:
  *         description: Thanks, user block successfully.
  *       500:
  *         description: Internal Server Error
  *       501:
  *         description: Something went wrong!
  */  
 router.put('/block',UserManagement.block)
 /**
  * @swagger
  * /userManagement/delete:
  *   put:
  *     tags:
  *       - UserManagement
  *     description: delete
  *     produces:
  *       - application/json
  *     parameters:
  *       - name: _id
  *         description: _id required.
  *         in: query
  *         required: true
  *     responses:
  *       200:
  *         description: Thanks, user Delete successfully.
  *       500:
  *         description: Internal Server Error
  *       501:
  *         description: Something went wrong!
  */  
 router.put('/userDelete',UserManagement.delete)
 
 module.exports = router;