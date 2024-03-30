const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const User = require("../models/User");


//Login
router.post("/login", async (req, res) => {
    const user = await user.findOne({ email: req.body.email});
    if (user) {
        const crypt = bcrypt.compare(user.password, req.body.password);

        const token = jwt.sign(
            { id: user._id, isAdmin: user.isAdmin },
            'key',
            {expiresIn: "24h"}
        );

        const {password, ...info } = user._doc;
        if (!crypt) {
            res.status(400).json("Your email or password are Wrong check well!")
        } else {
            res.status(200).json({ ...info, token });
        }
    } else {
        res.status(401).json("Please create your account")
    }
});


//Register
router.post("/sing_up", async (req, res) => {
    const encrypt = await bcrypt.genSalt(10);
    const nUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: (await bcrypt.hash(req.body.password, encrypt))
    });

    try{
        const user = await nUser.save();
        res.status(201).json(user);
    } catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;