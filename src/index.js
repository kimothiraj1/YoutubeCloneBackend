//require('dotenv').config({path:'./env'})
import dotenv from "dotenv" 
import connectDB from "./db/index.js"

dotenv.config({
    path: './.env'
})


connectDB()
  .then(() => {
    console.log("MongoDB connected successfully");
    // once you have app.js ready, add app.listen here
  })
  .catch((err) => {
    console.log("MongoDB connection failed !!", err);
  });








/*(asyn()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERR:",error);
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on PORT ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("Error",error)
        throw err
    }
})()*/