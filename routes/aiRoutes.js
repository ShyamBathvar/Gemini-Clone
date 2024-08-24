const express = require("express");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const router = express.Router();

// Initialize the Gemini API
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Route to generate text using Gemini API
router.post("/generate-text", async (req, res) => {
  const { prompt } = req.body;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();

    res.json({ text });
  } catch (error) {
    console.error("Error details:", error.response ? await error.response.text() : error.message);
    res.status(500).json({ error: "Failed to generate text" });
  }
});


module.exports = router;
