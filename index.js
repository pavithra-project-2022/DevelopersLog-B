import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import employeeRoute from "./routes/employee.js";
import searchRoute from "./routes/search.js";
import companyInfoRoute from "./routes/companyInfo.js";
import educationInfoRoute from "./routes/educationInfo.js";
import experienceInfoRoute from "./routes/experienceInfo.js";
import personalInfoRoute from "./routes/personalInfo.js";
import projectRoute from "./routes/project.js";
import projectTypeRoute from "./routes/projectType.js";
import projectLocationRoute from "./routes/projectLocation.js";
import dcmRoute from "./routes/dcm.js";
import cookieParser from "cookie-parser";
import cors from "cors";




const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect("mongodb+srv://mms:mms@cluster0.26hvrmo.mongodb.net/developerlog?retryWrites=true&w=majority");
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};



mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});



//middlewares
app.use(cors({
  origin: "*",
}))
app.use(cookieParser())
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/employee", employeeRoute);
app.use("/api/search", searchRoute);
app.use("/api/companyInfo", companyInfoRoute);
app.use("/api/educationInfo", educationInfoRoute);
app.use("/api/experienceInfo", experienceInfoRoute);
app.use("/api/personalInfo", personalInfoRoute);
app.use("/api/search", searchRoute);
app.use("/api/project", projectRoute);
app.use("/api/projectType", projectTypeRoute);
app.use("/api/projectLocation", projectLocationRoute);
app.use("/api/dcm", dcmRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(process.env.PORT || 8000, () => {
  connect();
  console.log("Connected to backend at 8000");
});