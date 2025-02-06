import express from "express";
const app=express();

import cors from "cors";
import connectDB from "./utils/connectDB.js";
import empRouter from "./routes/empRoute.js"
let PORT=8000;
app.use(cors());
app.use(express.json());
connectDB();
app.use("/",empRouter);

app.listen(PORT,()=>{
    console.log("Server is Running");
})



