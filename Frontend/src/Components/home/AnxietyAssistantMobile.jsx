// src/Components/home/AnxietyAssistantMobile.jsx
import { useState, useEffect, useRef } from 'react';
import { FaLock, FaInfoCircle, FaPaperPlane, FaTimes } from 'react-icons/fa';

const AnxietyAssistantMobile = ({ username }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isUrdu, setIsUrdu] = useState(true);
  const [showPrivacyPopup, setShowPrivacyPopup] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Pre-defined responses in Urdu
  const responses = [
    'آپ کی بات سمجھ آئی۔ میں آپ کی مدد کرنے کی کوشش کروں گا۔',
    'آپ کیسا محسوس کر رہے ہیں؟ اپنے احساسات کے بارے میں مزید بتائیں۔',
    'مجھے افسوس ہے کہ آپ اس مشکل سے گزر رہے ہیں۔ میں آپ کے ساتھ ہوں۔',
    'آپ کو شاید کچھ آرام کی ضرورت ہے۔ کیا آپ نے آج کوئی آرام دہ سرگرمی کی ہے؟',
  ];

  // Check if text is in Urdu
  const checkIfUrdu = (text) => {
    // Urdu Unicode range
    const urduPattern = /[\u0600-\u06FF\u0750-\u077F]/;
    return text.length === 0 || urduPattern.test(text);
  };

  // Handle input change
  const handleInputChange = (e) => {
    const text = e.target.value;
    setInput(text);
    
    // Validate if input is in Urdu
    setIsUrdu(checkIfUrdu(text));
  };

  // Get a random response
  const getRandomResponse = () => {
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim() || !isUrdu) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      text: input,
      sender: 'user'
    };
    
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInput('');
    
    // Simulate AI "typing"
    setIsTyping(true);
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        text: getRandomResponse(),
        sender: 'assistant'
      };
      
      setMessages(prevMessages => [...prevMessages, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  // Auto-scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Add initial greeting when component mounts
  useEffect(() => {
    setTimeout(() => {
      const initialGreeting = {
        id: Date.now(),
        text: `السلام علیکم ${username}، آپ محفوظ ہیں۔ آزادانہ طور پر اپنے احساسات کا اظہار کریں۔`,
        sender: 'assistant'
      };
      setMessages([initialGreeting]);
    }, 1000);
  }, [username]);

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Privacy Popup */}
      {showPrivacyPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-4 mx-4 max-w-xs">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-md font-semibold text-gray-800 flex items-center">
                <FaLock className="text-blue-500 mr-2" /> Privacy Notice
              </h3>
              <button 
                onClick={() => setShowPrivacyPopup(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <FaTimes />
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Your information is private and secure.
            </p>
            <button
              onClick={() => setShowPrivacyPopup(false)}
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm"
            >
              I understand
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 text-white">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">AI Assistant</h2>
          <button 
            onClick={() => setShowPrivacyPopup(true)}
            className="text-white hover:text-blue-100 flex items-center text-xs"
          >
            <FaInfoCircle className="mr-1" /> Privacy
          </button>
        </div>
      </div>
      
      {/* Intro Message */}
      <div className="p-3 bg-blue-50 border-b border-blue-100">
        <p className="text-gray-700 text-sm">
          Hi <span className="font-semibold">{username}</span>, I'm your AI assistant. You're safe here. Share your feelings freely.
        </p>
        <p className="text-gray-500 text-xs mt-1">
          Please type in Urdu only | براہ کرم صرف اردو میں لکھیں
        </p>
      </div>
      
      {/* Messages Container */}
      <div className="flex-1 p-3 overflow-y-auto">
        {messages.length === 0 ? (
          <div className="text-center text-gray-500 mt-6">
            <p className="text-sm">آپ کیسے محسوس کر رہے ہیں؟</p>
          </div>
        ) : (
          <div className="space-y-3">
            {messages.map(message => (
              <div 
                key={message.id} 
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-xs rounded-lg p-2 text-sm ${
                    message.sender === 'user' 
                      ? 'bg-blue-500 text-white rounded-br-none' 
                      : 'bg-white border border-gray-200 text-gray-700 rounded-bl-none'
                  }`}
                  dir="rtl"
                >
                  <p>{message.text}</p>
                </div>
              </div>
            ))}
            
            {/* AI Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-lg p-2 rounded-bl-none">
                  <div className="flex space-x-1">
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>
      
      {/* Input Area */}
      <form onSubmit={handleSubmit} className="p-2 bg-white border-t border-gray-200">
        {!isUrdu && input.length > 0 && (
          <div className="mb-1 text-red-500 text-xs flex items-center">
            <FaInfoCircle className="mr-1" /> Please enter your text in Urdu.
          </div>
        )}
        
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="اپنے خیالات بیان کریں..."
            className={`flex-1 border ${!isUrdu && input.length > 0 ? 'border-red-300' : 'border-gray-300'} rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
            dir="rtl"
          />
          <button
            type="submit"
            disabled={!isUrdu || !input.trim()}
            className={`bg-blue-500 text-white p-2 rounded-full ${
              !isUrdu || !input.trim() ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
            }`}
          >
            <FaPaperPlane className="text-sm" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AnxietyAssistantMobile;