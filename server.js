const express = require('express');
require('./database/db');
require('dotenv').config();
 const app = express();
 const port =5502;
 const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
 app.use(express.json())
 app.use(express.urlencoded({extended:true,limit:"1000mb"}))
 const userRouter=require('./router/userRouter');
 const adminRouter=require('./router/adminRouter')
 const staticRouter=require('./router/staticRouter')
 const UserManagementRouter=require('./router/userManagementRouter')
 const categoryRouter = require('./router/categoryRouter')
 const vehicleRouter = require('./router/vehicleRouter')
 const quickChargerRouter = require('./router/quickChargerRouter')
 app.use('/user',userRouter)
 app.use('/admin',adminRouter)
 app.use('/STATIC',staticRouter)
 app.use('/userManagement',UserManagementRouter)
 app.use('/category',categoryRouter);
 app.use('/vehicle',vehicleRouter);
 app.use('/quickCharger', quickChargerRouter)
 app.get('/',(req,res)=>{
    console.log("Data send successful"+req.query.name)
    res.send("welcome to" +req.query.name)
 });
 app.get('/about',(req,res)=>{
    res.send("About Us page")
 });
 const swaggerDefinition = {
  info: {
    title: "Node Test",
    version: "1.0.0",
    description: "Swagger API Docs",
  },
  host: `localhost:5502`,
  basePath: "/",
};
const options = {
  swaggerDefinition: swaggerDefinition,
  apis: ["./router/*.js"],
};
const swaggerSpec = swaggerJSDoc(options);
app.get("/swagger.json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerSpec);
});
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

 app.listen(port,()=>{
    console.log("server is running as port 5502")
 });
 