const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");
const verify = require("../token");

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

//GET user stats
router.get("/stat", async(req, res) => {
    const day = new Date();
    const year = day.setFullDate(day.setFullDate() - 1);
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    try {
        const info = await User.aggregate([
            {
                $pro:{
                    month: {$month: "$crationDate"}
                }
            },{
                $group: {
                    _id: "$month",
                    total: {$sum:1}
                }
            }
        ]);
        res.status(200).json(info)
    } catch(err) {
        res.status(500).json(err)
    }
});

//delete
router.delete("/:id", verify, async(req, res) => {
    if (req.user.id == req.params,id || req.user.isAdmin) {
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("User Deleted!");
        } catch(err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You delete only your personal account!")
    }
});

//Find
router.get("/find/:id",  async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...info } = user._doc;
        res.status(200).json(info);
    } catch(err) {
        res.status(500).json(err);
    }
})

module.exports = router;