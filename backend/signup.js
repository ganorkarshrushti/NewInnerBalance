
const { MongoClient } = require("mongodb");
const express = require("express");
const router = express.Router();
require("dotenv").config();

//connect to mongodb database
const client = new MongoClient(process.env.DB_URL, {
    useUnifiedTopology: true,
});

router.post("/", async (req, res) => {
    const { email, password,fullname } = req.body;
    try {

        //connect to database
        await client.connect();
        const db = client.db("healthList");
        console.log(req.body);

        const collection = await db.collection("AccountData").insertOne({email,password,fullname});
        
        if (collection.acknowledged) {
            res.json({ status: true });
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