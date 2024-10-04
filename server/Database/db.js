import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config({
    path: './.env'
})
const connectodb=async()=>{
    console.log(process.env.MONGO_DB_URL)
   try {
    const connect= await mongoose.connect(`${process.env.MONGO_DB_URL}/${process.env.MONGO_DB_NAME}`)
    console.log("Database connection succesful")
   } catch (error) {
     console.log("Error during making connection with database : ",error)
   }
}

export {connectodb}