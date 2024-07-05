
const { MongoClient } = require("mongodb");
const express = require("express");
const router = express.Router();
require("dotenv").config();
//connect to mongodb db
const client = new MongoClient(process.env.DB_URL, {
    useUnifiedTopology: true,
});

router.post("/", async (req, res) => {
    const { email, password } = req.body;
    try {
        var flag = false;
        var userId;

        //connect to db
        await client.connect();
        const db = client.db("healthList");
        console.log(req.body);

        const collection = await db.collection("AccountData").aggregate().toArray();

        collection.find((e) => {
            if (e.email === email) {
                if (e.password === password) {
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