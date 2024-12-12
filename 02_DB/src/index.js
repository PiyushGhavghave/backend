import dotenv from 'dotenv'
dotenv.config({
    path : './.env'
})
import connectDB from "./db/connect_DB.js";

connectDB()

