const router = require("express").Router();
const bcrypt = require("bcrypt");
const verify = require("../token"); 
const Agent = require("../models/Agents");

//GET
router.get("/", verify, async (req, res) => {
    const que = req.query.new;
    if (req.agent.isAdmin) {
        try {
            const agent = que ? await Agent.find().sort({_id:-1}).limit(5) : await Agent.find();
            res.status(200).json(agent);
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
        const info = await Agent.aggregate([
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
    if (req.agent.id == req.params,id || req.agent.isAdmin) {
        try {
            await Agent.findByIdAndDelete(req.params.id);
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
        const agent = await agent.findById(req.params.id);
        const { password, ...info } = agent._doc;
        res.status(200).json(info);
    } catch(err) {
        res.status(500).json(err);
    }
})

module.exports = router;