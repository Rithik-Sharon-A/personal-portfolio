import React, { useState, useEffect, useRef } from 'react';
import './ChatbotWidget.css';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Rithik Sharon A's AI Digital Twin. I can answer questions about his skills, experience, projects, and more. What would you like to know?",
      type: 'bot',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickQuestions, setShowQuickQuestions] = useState(true);
  const messagesEndRef = useRef(null);

  const quickQuestions = [
    { text: '💻 Technical Skills', question: 'What are your technical skills?' },
    { text: '🤖 AI Experience', question: 'Tell me about your AI experience' },
    { text: '🚀 Projects', question: 'What projects have you built?' },
    { text: '📧 Contact Info', question: 'How can I contact you?' }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getAIResponse = async (userMessage) => {
    // Get API URL from environment or use default
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
    
    try {
      const response = await fetch(`${apiUrl}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: userMessage
        })
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();
      return data.response;
    } catch (error) {
      console.error('Python Backend API Error:', error);
      return getFallbackResponse(userMessage);
    }
  };

  const getFallbackResponse = (message) => {
    const msg = message.toLowerCase();

    if (msg.includes('skill') || msg.includes('technology') || msg.includes('tech stack')) {
      return "Rithik is a MERN Stack Developer specializing in React, Node.js, Express, and MongoDB. He also has expertise in Agentic AI and OpenAI APIs, combining full-stack development with cutting-edge AI integration!";
    }
    
    if (msg.includes('project')) {
      return "Rithik has built several exciting projects including a modern Portfolio Website, this Career Digital Twin using AI, and various AI-powered applications. Check out his GitHub at github.com/Rithik-Sharon-A to see more!";
    }
    
    if (msg.includes('ai') || msg.includes('artificial intelligence') || msg.includes('openai')) {
      return "Rithik specializes in Agentic AI and OpenAI APIs! He uses these technologies to automate complex workflows, build intelligent chatbots, and create AI-powered web applications that enhance user experiences.";
    }
    
    if (msg.includes('experience') || msg.includes('work') || msg.includes('background')) {
      return "Rithik is a MERN Stack Developer with strong expertise in building scalable, responsive web applications. He specializes in integrating Agentic AI and OpenAI APIs to create intelligent, automated solutions.";
    }
    
    if (msg.includes('contact') || msg.includes('email') || msg.includes('reach') || msg.includes('hire')) {
      return "You can reach Rithik at rithiksharon.a@gmail.com (he usually responds within 24-48 hours) or connect on LinkedIn at linkedin.com/in/rithik-sharon/. He's open to full-time opportunities and freelance projects!";
    }
    
    if (msg.includes('available') || msg.includes('looking for work')) {
      return "Yes! Rithik is open to exciting opportunities including full-time positions, freelance projects, and collaborations. Feel free to reach out at rithiksharon.a@gmail.com to discuss opportunities.";
    }
    
    if (msg.includes('resume') || msg.includes('cv')) {
      return "You can download Rithik's resume from his portfolio website. It contains detailed information about his education, experience, skills, and projects. Visit his portfolio or email him directly at rithiksharon.a@gmail.com!";
    }
    
    if (msg.includes('github') || msg.includes('code')) {
      return "Check out Rithik's GitHub at github.com/Rithik-Sharon-A to see his projects and code. He has several full-stack MERN applications and AI-powered projects showcased there!";
    }

    return "That's a great question! I'm Rithik's Digital Twin powered by AI. Feel free to ask me about his skills, projects, experience with AI, or how to contact him. What would you like to know?";
  };

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    const newUserMessage = {
      text: userMessage,
      type: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInputValue('');
    setShowQuickQuestions(false);
    setIsTyping(true);

    try {
      const response = await getAIResponse(userMessage);
      const botMessage = {
        text: response,
        type: 'bot',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage = {
        text: "I apologize, but I'm having trouble connecting right now. Please try again or contact Rithik directly at rithiksharon.a@gmail.com",
        type: 'bot',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleQuickQuestion = (question) => {
    setInputValue(question);
    setTimeout(() => handleSend(), 100);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        className={`chatbot-float-btn ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle chat"
      >
        {isOpen ? '✕' : '🤖'}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window">
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-header-content">
              <div className="chatbot-avatar">🤖</div>
              <div>
                <h3>Rithik's AI Twin</h3>
                <p className="chatbot-status">
                  <span className="status-dot"></span>
                  Online
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="chatbot-close">✕</button>
          </div>

          {/* Messages */}
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`chatbot-message ${msg.type}`}>
                <div className="message-avatar">{msg.type === 'user' ? '👤' : '🤖'}</div>
                <div className="message-content">
                  <p>{msg.text}</p>
                  <span className="message-time">{msg.time}</span>
                </div>
              </div>
            ))}

            {/* Quick Questions */}
            {showQuickQuestions && messages.length === 1 && (
              <div className="quick-questions">
                <p className="quick-questions-title">Quick Questions:</p>
                <div className="quick-questions-grid">
                  {quickQuestions.map((q, index) => (
                    <button
                      key={index}
                      className="quick-question-btn"
                      onClick={() => handleQuickQuestion(q.question)}
                    >
                      {q.text}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="typing-indicator">
                <div className="message-avatar">🤖</div>
                <div className="typing-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Ask me anything about Rithik..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isTyping}
            />
            <button onClick={handleSend} disabled={isTyping || !inputValue.trim()}>
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;

