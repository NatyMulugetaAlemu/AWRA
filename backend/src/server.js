import express from "express"
import dotenv from "dotenv"
dotenv.config()
import authRoutes from "./routes/authRoutes.js"
import messageRoutes from "./routes/messageRoutes.js"

const app = express()
const PORT = process.env.PORT || 5001

app.get("/",(req,res)=>{
  res.status(200).json({message:"Okay"})
})
app.use("api/auth",authRoutes)
app.use("api/messages",messageRoutes)
 
app.listen(PORT, () => {
    console.log(`Server is running on PORT:${PORT}`)
})

