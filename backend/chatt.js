const express = require("express");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const router = express.Router();

// Access your API key as an environment variable
const genAI = new GoogleGenerativeAI(process.env.GEMINI);

router.post("/fetch-data", async (req, res) => {
  try {
    const prompt = req.body.message; // Assuming the message is sent in the request body

    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(`${prompt}. Give small responses only!!`);
    const response = await result.response;
    const text = response.text();

    res.json({ text }); // Send the generated text back to the client
  } catch (error) {
    console.error('Error generating text:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
