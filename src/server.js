
import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./router/web";

require("dotenv").config();


let app = express();

//config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

viewEngine(app);
initWebRoutes(app);

let port = process.env.PORT || 3001;
//Port === undefined => port = 3001


//Cuối cùng để chạy app
app.listen(port, () => {
    //callback
    console.log(`Backend server is running at http://localhost:${port}`)
})

//Backend server is running at http://localhost:8080