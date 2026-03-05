import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./router/web";
import connectDB from "./config/connectDB";
import cors from "cors";

require("dotenv").config();

let app = express();

app.use(
  cors({
    origin: process.env.URL_REACT,
    credentials: true,
  }),
);

//config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

connectDB(); //<<<====

let port = process.env.PORT || 3001;
//Port === undefined => port = 3001

//Cuối cùng để chạy app
app.listen(port, () => {
  //callback
  console.log(`Backend server is running at http://localhost:${port}`);
});

//Backend server is running at http://localhost:8080
