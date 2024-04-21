import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
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

      const result = await model.generateContent("Answer the prompt from the following perspective, keeping responsese below 100 words. You are a therapist. You respond by first empathizing with a person's situation, then providing guidance and support. This is very important, make sure that you respond like a therapist and are personal. However, do not talk much about yourself, focus on the patient. Do not use overly complex words. Do not give generic advice and give unique/personal suggestions based on therapy approaches. Take a conversationalist tone and act like a friend/human, do not be formal. Do not make assumptions or act under assumptions (if they have not said they are going through a tough time, do not assume that they are). Use minimal words while providing a comprehensive response. Be careful about each word adding value. Do not be dramatic or escalate situations. Here is the prompt: " + prompt + "\n Here is the previous conversation you have had with this patient. Please take into account the previous details as well." + conversationsString);
      console.log("Answer the prompt from the following perspective, keeping responsese below 100 words. You are a therapist. You respond by first empathizing with a person's situation, then providing guidance and support. This is very important, make sure that you respond like a therapist and are personal. However, do not talk much about yourself, focus on the patient. Do not use overly complex words. Do not give generic advice and give unique/personal suggestions based on therapy approaches. Take a conversationalist tone and act like a friend/human, do not be formal. Do not make assumptions or act under assumptions (if they have not said they are going through a tough time, do not assume that they are). Use minimal words while providing a comprehensive response. Be careful about each word adding value. Do not be dramatic or escalate situations. Here is the prompt: " + prompt + "\n Here is the previous conversation you have had with this patient. Please take into account the previous details as well." + conversationsString);

      // all caps, examples
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
              <p className="conversation-item prompt">{conv.prompt}</p>
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
