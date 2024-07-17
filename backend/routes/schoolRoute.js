const express =require("express")

const multer=require("multer")

const schoolRouter=express.Router();


schoolRouter.post("/add",addSchool);
schoolRouter.get("/list",listSchool);

module.exports=schoolRouter;