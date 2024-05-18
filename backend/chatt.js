/*const express = require("express");
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

module.exports = router;*/

const express = require("express");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const router = express.Router();
// Access your API key as an environment variable
const genAI = new GoogleGenerativeAI(process.env.GEMINI);

// Function to handle specific intents
const handleIntent = (message) => {
  const greetings = ["hi", "hello", "hey"];
  const normalizedMessage = message.trim().toLowerCase();

  if (greetings.includes(normalizedMessage)) {
    return "Hello! How can I help you?";
  }

  if (normalizedMessage.includes("suffering from")) {
    return `It sounds like you're looking for advice. Please provide more details about what you're suffering from, and I will do my best to help.`;
  }

  return null;
};

// Function to truncate text to a specified word limit
const truncateText = (text, wordLimit) => {
  const words = text.split(' ');
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(' ') + '...';
  }
  return text;
};

// Function to format text as numbered points
const formatAsPoints = (text) => {
  // Split the text into sentences
  const sentences = text.match(/[^\.!\?]+[\.!\?]+/g);
  // Return each sentence as a numbered point
  if (sentences) {
    return sentences.map((sentence, index) => `${index + 1}. ${sentence.trim()}`).join('\n');
  }
  return text;
};

router.post("/fetch-data", async (req, res) => {
  try {
    const prompt = req.body.message; // Assuming the message is sent in the request body

    // Check for specific intents first
    const intentResponse = handleIntent(prompt);
    if (intentResponse) {
      return res.json({ text: intentResponse });
    }

    // For health-related input, ensure concise and relevant advice
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(`${prompt}. Please provide practical advice and tips in less than 250 words, formatted as a list.`);
    const response = await result.response;
    let text = response.text();

    // Remove any asterisks from the response text
    text = text.replace(/\*/g, '');

    // Truncate the response to 250 words
    text = truncateText(text, 50);

    // Format the response as numbered points
    text = formatAsPoints(text);

    res.json({ text }); // Send the generated text back to the client
  } catch (error) {
    console.error('Error generating text:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
