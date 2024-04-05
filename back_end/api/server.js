const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const auth = require("./routes/auth");
const user = require("./routes/users");

const port = 3000;//choose the port you want just check isn't by something else
dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("Connection successefully"))
.catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/auth", auth);
app.use("/api/users", user);

app.listen(port, () =>{
    console.log(`Server is running on port: ${port}`);
});
