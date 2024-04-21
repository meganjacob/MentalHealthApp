import React, { useEffect, useState } from 'react';
import './App.css';

const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_KEY);


function ChatPage() {
  const [prompt, setPrompt] = useState("");
  const [generatedText, setGeneratedText] = useState("");
  const [conversations, setConversations] = useState([{response:"Hi! How are you doing?"}]);

  async function generateText() {
    try {
      const conversationsString = JSON.stringify(conversations);
      // Access your API key as an environment variable (see "Set up your API key" above)
      const genAI = new GoogleGenerativeAI(process.env.REACT_APP_API_KEY);
      
      // For text-only input, use the gemini-pro model
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      const result = await model.generateContent("Answer the prompt as a professional therapist. Your responses should be detailed and specific, but also minimal(if possible below 20 words, otherwise must be below 50). You must make specific, unqiue, and personal recommendations based on psychological studies and topics. Take a conversationalist tone and be genuine but DO NOT BE CHEESY and NO GENERIC ADVICE. Be careful about each word, each word should add significant value." + prompt + "\n Here is the previous conversation you have had with this patient. Please take into account the previous details as well. DO NOT SHOW PREVIOUS RESPONSES but do use them when thinking about your next one" + conversationsString);

      const response = await result.response;
      const text = await response.text();
      setGeneratedText(text);
      console.log(text);
      setConversations([...conversations, { prompt, response: text }]);

    } catch (error) {
      console.error("Error:", error);
    }
  }
  return (
    <div className="App">
      <div className="outer">
        <div className="conversation">
          {conversations.map((conv, index) => (
            <div key={index}>
              {conv.prompt && <p className="conversation-item prompt">{conv.prompt}</p>}
              <p className="conversation-item response">{conv.response}</p>
            </div>
          ))}
        </div>
        <div class="input-container">
          <input 
            type="text" 
            id="prompt" 
            placeholder="Start typing here..." 
            value={prompt} 
            onChange={(e) => setPrompt(e.target.value)} 
          />
          <button onClick={generateText}>Send</button>
        </div>
        </div>
    </div>
  );
}

export default ChatPage;
