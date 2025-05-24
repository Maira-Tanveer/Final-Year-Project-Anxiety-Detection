// src/components/home/MoodTracker.jsx
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const MoodTracker = () => {
  const [tempMood, setTempMood] = useState(3); // Default to middle mood
  const [submitted, setSubmitted] = useState(false);
  const [username, setUsername] = useState('');
  const sliderRef = useRef(null);
  const circleRef = useRef(null);
  
  // Get current user data on component mount
  useEffect(() => {
    try {
      // Get current user from localStorage
      const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
      if (currentUser && currentUser.username) {
        setUsername(currentUser.username);
      } else {
        // If no currentUser is found, try to get it from the most recently signed up or logged in user
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        if (users.length > 0) {
          // Just take the last user as a fallback
          setUsername(users[users.length - 1].username || 'User');
        } else {
          setUsername('User'); // Default fallback name
        }
      }
    } catch (error) {
      console.error('Error loading user data:', error);
      setUsername('User'); // Fallback name
    }
  }, []);
  
  // Get mood text based on value
  const getMoodText = (val) => {
    switch(val) {
      case 1: return 'Very Bad';
      case 2: return 'Bad';
      case 3: return 'OK';
      case 4: return 'Good';
      case 5: return 'Very Good';
      default: return 'OK';
    }
  };
  
  // Mood colors for the face
  const getMoodColor = (val) => {
    const colors = {
      1: '#D897A0', // Pinkish for very bad
      2: '#D8B2C8', // Light purple for bad
      3: '#BAA3E8', // Purple for OK
      4: '#90C7F0', // Light blue for good
      5: '#85E0D5', // Teal for very good
    };
    return colors[val] || colors[3];
  };
  
  // Handle drag of the slider knob
  const handleDrag = (event) => {
    if (!circleRef.current) return;
    
    const rect = circleRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate angle from center to cursor
    const dx = event.clientX - centerX;
    const dy = event.clientY - centerY;
    let angle = Math.atan2(dy, dx);
    
    // Convert to degrees for easier calculation
    let degrees = angle * (180 / Math.PI);
    
    // We only want the right semicircle, so constrain between -90 and 90 degrees
    degrees = Math.max(-90, Math.min(degrees, 90));
    
    // Map -90 to 90 degrees to mood values 1-5
    // -90 = 1, 0 = 3, 90 = 5
    const newMood = Math.round((degrees + 90) / 45 * 2) + 1;
    
    setTempMood(newMood);
  };
  
  const handleSubmit = () => {
    setSubmitted(true);
    // Save mood to localStorage for this user
    try {
      const moodEntries = JSON.parse(localStorage.getItem('moodEntries') || '[]');
      moodEntries.push({
        username: username,
        mood: tempMood,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('moodEntries', JSON.stringify(moodEntries));
    } catch (error) {
      console.error('Error saving mood:', error);
    }
    
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };
  
  // Get knob position based on mood
  const getKnobPosition = (mood) => {
    // Map mood 1-5 to angle -90 to 90 degrees
    const degrees = (mood - 1) / 4 * 180 - 90;
    const radians = degrees * (Math.PI / 180);
    
    const radius = 110; // Half of our 220px circle
    
    // Calculate coordinates
    const x = Math.cos(radians) * radius;
    const y = Math.sin(radians) * radius;
    
    return { x, y };
  };
  
  // Get knob coordinates for the current mood
  const knobPosition = getKnobPosition(tempMood);
  
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold text-blue-500">
          How are you today,<br/>
          {username}?
        </h2>
        <p className="text-gray-500 mt-2">
          Use the slider to describe how you're feeling.
        </p>
      </div>
      
      <div className="relative flex justify-center mb-8 py-4">
        {/* Big background mood text */}
        <div 
          className="absolute text-9xl font-bold text-center opacity-10"
          style={{ 
            color: getMoodColor(tempMood),
            zIndex: 0,
            top: '10px'
          }}
        >
          {getMoodText(tempMood)}
        </div>
        
        {/* Slider circle with face */}
        <div className="relative" style={{ width: '220px', height: '220px' }}>
          {/* Circle track */}
          <div 
            ref={circleRef}
            className="absolute w-full h-full rounded-full"
            style={{ border: '1px solid #E5E7EB' }}
          >
            {/* Only show right semicircle */}
            <svg width="220" height="220" viewBox="0 0 220 220">
              <path
                d="M 110 0 A 110 110 0 0 1 110 220"
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="1"
              />
            </svg>
          </div>
          
          {/* Face */}
          <div 
            className="absolute top-1/2 left-1/2 w-3/4 h-3/4 rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2"
            style={{ 
              background: `linear-gradient(135deg, ${getMoodColor(tempMood)}DD, ${getMoodColor(tempMood)})`,
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
          >
            {/* Eyes */}
            <div className="relative w-full h-full">
              <div className="absolute" style={{ top: '38%', left: '32%', width: '15px', height: '3px', backgroundColor: 'white', borderRadius: '4px' }}></div>
              <div className="absolute" style={{ top: '38%', right: '32%', width: '15px', height: '3px', backgroundColor: 'white', borderRadius: '4px' }}></div>
              
              {/* Mouth - changes based on mood */}
              {tempMood <= 2 ? (
                <div className="absolute" style={{ 
                  bottom: '38%', 
                  left: '35%', 
                  width: '30%', 
                  height: '3px',
                  backgroundColor: 'white',
                  borderRadius: '4px',
                  transform: 'rotate(-5deg)'
                }}></div>
              ) : tempMood === 3 ? (
                <div className="absolute" style={{ 
                  bottom: '38%', 
                  left: '35%', 
                  width: '30%', 
                  height: '3px',
                  backgroundColor: 'white',
                  borderRadius: '4px'
                }}></div>
              ) : (
                <div className="absolute" style={{ 
                  bottom: '38%', 
                  left: '35%', 
                  width: '30%', 
                  height: '3px',
                  backgroundColor: 'white',
                  borderRadius: '4px',
                  transform: 'rotate(5deg)'
                }}></div>
              )}
            </div>
          </div>
          
          {/* Draggable knob */}
          <motion.div
            className="absolute w-7 h-7 bg-blue-500 rounded-full shadow-md cursor-pointer z-10"
            style={{ 
              top: `calc(50% + ${knobPosition.y}px)`, 
              left: `calc(50% + ${knobPosition.x}px)`,
              transform: 'translate(-50%, -50%)',
            }}
            drag
            dragConstraints={circleRef}
            dragElastic={0}
            onDrag={handleDrag}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          />
        </div>
      </div>
      
      {/* "I'm feeling ok. Submit →" section - Modified for centered button in a contained box */}
      <div className="flex justify-center mb-4">
        <div className="bg-gray-50 rounded-lg py-3 px-6 inline-flex flex-col items-center shadow-sm" style={{ maxWidth: '280px' }}>
          <p className="text-blue-500 mb-2">
            I'm feeling {getMoodText(tempMood).toLowerCase()}.
          </p>
          <motion.button
            onClick={handleSubmit}
            className="flex items-center justify-center text-blue-500 font-medium px-4 py-2 rounded-full transition-all"
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: 'rgba(219, 234, 254, 0.5)', 
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' 
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span>{submitted ? 'Submitted!' : 'Submit'}</span>
            {!submitted && (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            )}
          </motion.button>
        </div>
      </div>
      
      {/* View Check-In Summary link */}
      <div className="text-center">
        <a href="#" className="text-blue-500 text-sm">
          View Check-In Summary
        </a>
      </div>
    </div>
  );
};

export default MoodTracker;