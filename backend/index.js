import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

import connectDB from './config/db.js'
import cookieParser from 'cookie-parser'
import authRouter from './routes/auth.routes.js'
import cors from 'cors'

const app = express()
const port = process.env.PORT || 5000
//kon kon s url bakend ko use kr skt h
app.use(cors({
    origin : "https://localhost:5173",                     // kon backend ki api ko access kr skta h
    credentials:true
}))
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRouter)

app.listen(port , () => {
    connectDB()
    console.log(`server started as ${port} `)
})
