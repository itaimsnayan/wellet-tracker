import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import incomeRoute from "./incomeRoute";
import cors from "cors";

dotenv.config();
const app = express();

app.use(cors());
const PORT = 5000;

mongoose
  .connect(process.env.MONGODBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to Database");
  });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/income", incomeRoute);
app.listen(5000, () => console.log(`listening on PORT ${PORT}`));
