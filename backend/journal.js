
const express = require("express");
const { MongoClient } = require("mongodb");
const router = express.Router();
require("dotenv").config();
const client = new MongoClient(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

router.get("/", async(req,res)=>{
    console.log("connected");
    res.send("hello world");
})

// Route for saving journal entries
router.post("/save", async (req, res) => {
  const { entry } = req.body;
  try {
    const db = client.db("healthList");
    const collection = db.collection("journal_entries");
    const entryData = await collection.insertOne({ entry });
    if (entryData.length != 0){
        console.log("Entry saved:", entry);
        res.json({ status: true });
    } else{
        res.json({status : false, entry : []});
    }
  } catch (error) {
    console.error("Error saving entry:", error);
    res.status(500).json({ status: false, error: "Server error" });
  }
});
router.get("/view", async (req, res) => {
    try {
      const db = client.db("healthList");
      const collection = db.collection("journal_entries");
      const data = await collection.find({}).toArray(); // Convert cursor to array
      console.log("Entries retrieved:", data);
      res.json({ status: true, data });
    } catch (error) {
      console.error("Error retrieving entries:", error);
      res.status(500).json({ status: false, error: "Server error" });
    }
  });
module.exports = router;
