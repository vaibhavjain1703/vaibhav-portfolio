import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";
import resumeContext from "./resumeContext.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Health check
app.get("https://localhost5000", (req, res) => {
  res.send("Vaibhav AI Server is running 🚀");
});

// Chat API
app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || message.trim() === "") {
      return res.status(400).json({ error: "Message is required" });
    }

    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: `
You are Vaibhav AI, a professional AI assistant for Vaibhav Jain's portfolio.

RULES:
- Answer ONLY using the resume data below
- Be friendly, natural, concise, and professional
- Support any language the user uses
- If something is not in resume, politely say you don’t have that info

RESUME DATA:
${resumeContext}

USER QUESTION:
${message}
      `,
    });

    // ✅ SAFELY extract text
    const reply =
      response.output_text ||
      response.output?.[0]?.content?.[0]?.text ||
      "Sorry, I couldn’t generate a response.";

    res.json({ reply });
  } catch (error) {
    console.error("❌ Chat Error:", error);

    res.status(500).json({
      error: "AI server error. Please try again later.",
    });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🤖 Vaibhav AI backend running on port ${PORT}`);
});
