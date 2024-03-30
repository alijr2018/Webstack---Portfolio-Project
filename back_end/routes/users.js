const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");

//GET
router.get("/", verify, async (req, res) => {
    const que = req.query.new;
    if (req.user.isAdmin) {
        try {
            const users = que ? await User.find().sort({_id:-1}).limit(5) : await User.find();
            res.status(200).json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("Permession denided")
    }
});

module.exports = router;