// require ('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/indesx.js";

dotenv.config(
    {
        path: './env'
    }
)



connectDB()










/*import { Express } from "express";
const app =express()


;(async ()=>{
    try{
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    app.on("error",(error)=>{
        console.log("error",error);
        throw error
    })
    app.listen(process.env.PORT,()=>{
        console.log(`app is listening on port ${process.env.PORT}`)
    })

    }catch(error){
        console.error("ERROR :",error)
        throw err
    }
})()*/