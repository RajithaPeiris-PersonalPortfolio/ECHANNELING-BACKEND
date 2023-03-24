import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import clinicsRoute from "./routes/clinics.js";
import roomsRoute from "./routes/rooms.js";

const app = express();
dotenv.config();

// MongoDB Connection Establishment

const connect = async () => {
try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected To MongoDB.");
  } catch (error) {
    throw error;
  }
};

// Mongoose Connection To MongoDB (Recurring Automatic Connection To MongoDB)

mongoose.connection.on("disconnected", ()=>{
    console.log("MongoDB Disconnected!");
});

// MIDDLEWARES

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/clinics", clinicsRoute);
app.use("/api/rooms", roomsRoute);

app.use((err, req, res, next)=>{
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something Went Wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(8800, () => {
    connect()
    console.log("Connected To The Backend!");
});