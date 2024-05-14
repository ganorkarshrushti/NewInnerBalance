// Require modules
const { MongoClient } = require("mongodb");
const express = require("express");
const router = express.Router();
require("dotenv").config();

//connect to mongodb database
const client = new MongoClient(process.env.DB_URL, {
    useUnifiedTopology: true,
});

router.post("/", async (req, res) => {
    const { username, password } = req.body;
    try {
        var flag = false;
        var userId;

        //connect to database
        await client.connect();
        const db = client.db("healthList");

        const collection = await db.collection("AccountData").aggregate().toArray();

        collection.find((e) => {
            if (e.username === username) {
                if (e.password === parseInt( password)) {
                    flag = true;
                    userId = e._id;

                }
            }
        });
        if (flag) {
            res.json({ status: true, userId: userId });
        }
        else {
            res.json({ status: false });
        }


    } catch (error) {
        console.error(error);
        return res.status(500).send("Server error");
    }
});

module.exports = router;