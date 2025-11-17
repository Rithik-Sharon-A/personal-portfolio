// src/chatbot/ChatbotPlaceholder.jsx

import React, { useState } from 'react';
import './ChatbotPlaceholder.css';

function ChatbotPlaceholder() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hi! 👋 I\'m your portfolio assistant. How can I help you today?' }
  ]);
  const [inputValue, setInputValue] = useState('');

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    // Add user message
    const userMessage = { type: 'user', text: inputValue };
    setMessages([...messages, userMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = { 
        type: 'bot', 
        text: 'Thanks for your message! This is a placeholder chatbot. Integration coming soon! 🚀' 
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    setInputValue('');
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button 
        className="chatbot-toggle-btn"
        onClick={toggleChatbot}
        aria-label="Toggle chatbot"
      >
        {isOpen ? '✕' : '💬'}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="chatbot-window">
          {/* Header */}
          <div className="chatbot-header">
            <div className="d-flex align-items-center gap-2">
              <div className="chatbot-avatar">🤖</div>
              <div>
                <h6 className="mb-0">Portfolio Assistant</h6>
                <small className="text-muted">Online</small>
              </div>
            </div>
            <button 
              className="btn-close-chat"
              onClick={toggleChatbot}
              aria-label="Close chatbot"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`message ${message.type === 'user' ? 'user-message' : 'bot-message'}`}
              >
                {message.type === 'bot' && <div className="message-avatar">🤖</div>}
                <div className="message-bubble">
                  {message.text}
                </div>
                {message.type === 'user' && <div className="message-avatar">👤</div>}
              </div>
            ))}
          </div>

          {/* Input */}
          <form className="chatbot-input-form" onSubmit={handleSendMessage}>
            <input
              type="text"
              className="chatbot-input"
              placeholder="Type your message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button 
              type="submit" 
              className="btn-send"
              disabled={inputValue.trim() === ''}
            >
              📤
            </button>
          </form>

          {/* Footer */}
          <div className="chatbot-footer">
            <small>Powered by AI 🚀</small>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatbotPlaceholder;

