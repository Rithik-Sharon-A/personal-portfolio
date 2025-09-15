import React from "react";
import "./ChatbotPlaceholder.css";

function ChatbotPlaceholder() {
  return (
    <div className="chatbot-placeholder">
      <div className="chatbot-header">
        <div className="chatbot-avatar">
          <span className="avatar-icon">🤖</span>
        </div>
        <div className="chatbot-info">
          <h4 className="chatbot-name">AI Assistant</h4>
          <span className="chatbot-status">Online</span>
        </div>
      </div>
      
      <div className="chatbot-body">
        <div className="chat-messages">
          <div className="message bot-message">
            <div className="message-avatar">🤖</div>
            <div className="message-content">
              <p>Hi! I'm your AI assistant. How can I help you today?</p>
              <span className="message-time">Just now</span>
            </div>
          </div>
          
          <div className="message user-message">
            <div className="message-content">
              <p>Tell me about your projects</p>
              <span className="message-time">Just now</span>
            </div>
          </div>
          
          <div className="message bot-message">
            <div className="message-avatar">🤖</div>
            <div className="message-content">
              <p>I'd be happy to! I have several exciting AI and web development projects including a Career Digital Twin, SDR Agent, and more. Check out my Projects section above!</p>
              <span className="message-time">Just now</span>
            </div>
          </div>
        </div>
        
        <div className="chat-input-container">
          <div className="chat-input">
            <input 
              type="text" 
              placeholder="Ask me anything..." 
              className="message-input"
            />
            <button className="send-btn">
              <span>📤</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="chatbot-preview">
        <span className="preview-text">Ask me anything!</span>
        <div className="typing-indicator">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default ChatbotPlaceholder;
