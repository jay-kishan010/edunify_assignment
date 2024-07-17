const express= require("express")
require('dotenv').config()
const app=express();



// middleware

app.use(express.json());
app.use(cors())

app.use("/api/school")


app.listen(4000, ()=>{
    console.log("server starting!!!!!!!!")
})


