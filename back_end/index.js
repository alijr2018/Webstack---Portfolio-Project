const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const port = 1200;//choose the port you want
dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("Connection successefully"))
.catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(port, () =>{
    console.log(`Server is running on port: ${port}`);
});
