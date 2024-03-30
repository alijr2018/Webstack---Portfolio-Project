const mongoose = require("mongoose");

const Users = new mongoose.Schema(
    {
        email: { type: String, required:true, unique:true },
        username: {type: String, required:true, unique:true},
        password: {type: String, required:true, unique:true},
        isAdmin: {type: String, default: false},
    }
)

module.export = mongoose.model("User", Users)