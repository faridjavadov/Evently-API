import express  from "express";
import mongoose from "mongoose";
import { placeRouter } from "./routes/placeRoutes.js";
import { ConnectMongo } from "./config/db.js";
import { authRouter } from "./routes/AuthRouter.js";

const app = express();
app.use(express.json());

ConnectMongo();


const PlaceRouter = placeRouter;
const AuthRouter = authRouter

app.use('/api/places',PlaceRouter);
app.use('/api/auth',AuthRouter)

app.listen(8080,()=>{
    console.log('Server is Running');
})