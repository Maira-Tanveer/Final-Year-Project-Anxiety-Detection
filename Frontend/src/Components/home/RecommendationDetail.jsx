// src/Components/home/RecommendationDetail.jsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// SVG Icon components to replace react-icons/fa
const IconBrain = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
    <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
  </svg>
);

const IconLungs = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
    <path d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
  </svg>
);

const IconYinYang = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
  </svg>
);

const IconUserMd = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
  </svg>
);

const IconArrowLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
  </svg>
);

const IconShare = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
  </svg>
);

const IconRegBookmark = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
  </svg>
);

const IconBookmark = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
    <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
  </svg>
);

const IconRegHeart = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
  </svg>
);

const IconHeart = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
  </svg>
);

const IconRegLightbulb = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
  </svg>
);

const RecommendationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [recommendation, setRecommendation] = useState(null);
  const [activeTab, setActiveTab] = useState('techniques');
  const [isSaved, setIsSaved] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState(false);

  // Sample recommendation data - in a real app, you would fetch this based on the ID
  useEffect(() => {
    // Simulating an API call
    setTimeout(() => {
      // Example data for the "mild-social" recommendation
      if (id === 'mild-social') {
        setRecommendation({
          title: "Social Anxiety Tips",
          description: "Easy strategies to manage social situations with less stress",
          icon: "IconPeople",
          color: "from-teal-400 to-green-500",
          content: {
            techniques: [
              "Practice conversation starters with a trusted friend",
              "Arrive early to social events to adjust gradually",
              "Take short breaks during social gatherings when needed",
              "Set small goals for social interactions (e.g., talk to one new person)",
              "Focus on the conversation, not your anxiety"
            ],
            breathing: [
              "4-7-8 Breathing: Inhale for 4 seconds, hold for 7, exhale for 8",
              "Practice just before entering social situations"
            ],
            relaxation: [
              "Progressive muscle relaxation before social events",
              "Visualize a successful social interaction ahead of time",
              "Ground yourself by focusing on your senses (5-4-3-2-1 technique)"
            ],
            seekHelp: [
              "If social anxiety interferes with daily activities for more than 6 weeks",
              "If you find yourself avoiding important events",
              "If your anxiety causes physical symptoms like racing heart or nausea"
            ]
          }
        });
      } else {
        // Default placeholder
        setRecommendation({
          title: "Anxiety Management",
          description: "Techniques to help manage anxiety symptoms",
          icon: "IconBrain",
          color: "from-blue-400 to-indigo-500",
          content: {
            techniques: [
              "Practice deep breathing exercises",
              "Identify and challenge negative thoughts",
              "Use grounding techniques when feeling anxious",
              "Gradually face feared situations",
              "Establish a regular sleep schedule"
            ],
            breathing: [
              "Box Breathing: Equal counts of inhale, hold, exhale, and pause",
              "Diaphragmatic breathing: Focus on expanding your diaphragm"
            ],
            relaxation: [
              "Progressive muscle relaxation",
              "Mindfulness meditation",
              "Guided imagery or visualization"
            ],
            seekHelp: [
              "If anxiety interferes with daily activities",
              "If you experience panic attacks",
              "If anxiety causes significant distress"
            ]
          }
        });
      }
      setLoading(false);
    }, 800);
  }, [id]);

  const handleSave = () => {
    setIsSaved(prev => !prev);
    // In a real app, you would save this to user's saved recommendations
  };

  const handleLike = () => {
    setIsLiked(prev => !prev);
    // In a real app, you would update like count in the database
  };

  const handleShare = () => {
    // Use the Web Share API if available
    if (navigator.share) {
      navigator.share({
        title: recommendation.title,
        text: recommendation.description,
        url: window.location.href,
      }).catch(error => {
        console.log('Error sharing:', error);
        setShowShareOptions(prev => !prev);
      });
    } else {
      // Fallback to showing share options dropdown
      setShowShareOptions(prev => !prev);
    }
  };

  // Loading animation variants
  const loadingVariants = {
    animate: {
      rotate: 360,
      transition: {
        repeat: Infinity,
        duration: 1,
        ease: "linear"
      }
    }
  };

  // Tab animation variants
  const tabVariants = {
    inactive: { opacity: 0.7, scale: 0.95 },
    active: { 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", stiffness: 500, damping: 30 }
    }
  };

  // Content animation variants
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 25,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 25 
      }
    }
  };

  // Get icon color based on active tab
  const getTabColor = (tab) => {
    switch(tab) {
      case 'techniques': return 'text-indigo-500';
      case 'breathing': return 'text-blue-500';
      case 'relaxation': return 'text-teal-500';
      case 'seekHelp': return 'text-red-500';
      default: return 'text-gray-400';
    }
  };

  // Get background color based on active tab
  const getTabBgColor = (tab) => {
    switch(tab) {
      case 'techniques': return 'bg-indigo-50';
      case 'breathing': return 'bg-blue-50';
      case 'relaxation': return 'bg-teal-50';
      case 'seekHelp': return 'bg-red-50';
      default: return 'bg-gray-50';
    }
  };

  // Get item icon based on active tab
  const getItemIcon = (tab, index) => {
    switch(tab) {
      case 'techniques': 
        return (
          <span className="inline-flex items-center justify-center w-8 h-8 bg-indigo-100 text-indigo-700 rounded-full flex-shrink-0 mr-3">
            {index + 1}
          </span>
        );
      case 'breathing': 
        return (
          <div className="h-8 w-8 bg-blue-100 text-blue-600 rounded-full flex-shrink-0 flex items-center justify-center mr-3">
            <IconLungs />
          </div>
        );
      case 'relaxation': 
        return (
          <div className="h-8 w-8 bg-teal-100 text-teal-600 rounded-full flex-shrink-0 flex items-center justify-center mr-3">
            <IconYinYang />
          </div>
        );
      case 'seekHelp': 
        return (
          <svg className="h-6 w-6 text-red-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        );
      default: return null;
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <motion.div 
          className="w-16 h-16 border-t-4 border-b-4 border-indigo-600 rounded-full"
          variants={loadingVariants}
          animate="animate"
        />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 pb-20">
      <motion.button
        onClick={() => navigate('/recommendations')}
        className="mb-6 flex items-center text-blue-500 hover:text-blue-700 transition-colors"
        whileHover={{ x: -5 }}
        whileTap={{ scale: 0.95 }}
      >
        <IconArrowLeft className="mr-2" /> Back to Recommendations
      </motion.button>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="bg-white rounded-2xl shadow-lg overflow-hidden"
      >
        {/* Header Section */}
        <div className={`bg-gradient-to-r ${recommendation.color} p-8 text-white relative overflow-hidden`}>
          {/* Background pattern */}
          <div className="absolute top-0 right-0 opacity-10">
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="80" stroke="white" strokeWidth="6" strokeDasharray="15 15"/>
              <circle cx="100" cy="100" r="40" stroke="white" strokeWidth="6"/>
            </svg>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-3">{recommendation.title}</h2>
            <p className="text-white text-opacity-90 text-lg max-w-2xl">{recommendation.description}</p>
          </motion.div>
          
          {/* Action buttons */}
          <div className="absolute top-4 right-4 flex space-x-2">
            <motion.button 
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.9 }}
              onClick={handleSave}
              className="bg-white bg-opacity-20 p-3 rounded-full hover:bg-opacity-30 transition-all"
            >
              {isSaved ? <IconBookmark className="text-white" /> : <IconRegBookmark className="text-white" />}
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.9 }}
              onClick={handleLike}
              className="bg-white bg-opacity-20 p-3 rounded-full hover:bg-opacity-30 transition-all"
            >
              {isLiked ? <IconHeart className="text-white" /> : <IconRegHeart className="text-white" />}
            </motion.button>
            
            <motion.div className="relative">
              <motion.button 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.9 }}
                onClick={handleShare}
                className="bg-white bg-opacity-20 p-3 rounded-full hover:bg-opacity-30 transition-all"
              >
                <IconShare className="text-white" />
              </motion.button>
              
              {/* Share options popup */}
              <AnimatePresence>
                {showShareOptions && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 10 }}
                    className="absolute right-0 mt-2 bg-white rounded-lg shadow-lg p-3 w-40 z-10"
                  >
                    <button className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                      </svg>
                      Facebook
                    </button>
                    <button className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.068 10.068 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.892 4.892 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                      Twitter
                    </button>
                    <button className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                      </svg>
                      LinkedIn
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* Tip Note */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="bg-amber-50 p-4 flex items-start border-b border-amber-100"
        >
          <IconRegLightbulb className="text-amber-500 mt-1 mr-3 flex-shrink-0" />
          <p className="text-amber-800 text-sm">
            Try at least one technique from each category for best results. Start with what feels most comfortable for you.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex border-b">
          <motion.button
            variants={tabVariants}
            initial="inactive"
            animate={activeTab === 'techniques' ? 'active' : 'inactive'}
            onClick={() => setActiveTab('techniques')}
            className={`flex-1 px-4 py-3 font-medium flex items-center justify-center ${activeTab === 'techniques' ? 'text-indigo-600 border-b-2 border-indigo-500' : 'text-gray-500'}`}
          >
            <IconBrain className={`mr-2 ${getTabColor('techniques')}`} />
            Techniques
          </motion.button>
          
          <motion.button
            variants={tabVariants}
            initial="inactive"
            animate={activeTab === 'breathing' ? 'active' : 'inactive'}
            onClick={() => setActiveTab('breathing')}
            className={`flex-1 px-4 py-3 font-medium flex items-center justify-center ${activeTab === 'breathing' ? 'text-blue-600 border-b-2 border-blue-500' : 'text-gray-500'}`}
          >
            <IconLungs className={`mr-2 ${getTabColor('breathing')}`} />
            Breathing
          </motion.button>
          
          <motion.button
            variants={tabVariants}
            initial="inactive"
            animate={activeTab === 'relaxation' ? 'active' : 'inactive'}
            onClick={() => setActiveTab('relaxation')}
            className={`flex-1 px-4 py-3 font-medium flex items-center justify-center ${activeTab === 'relaxation' ? 'text-teal-600 border-b-2 border-teal-500' : 'text-gray-500'}`}
          >
            <IconYinYang className={`mr-2 ${getTabColor('relaxation')}`} />
            Relaxation
          </motion.button>
          
          <motion.button
            variants={tabVariants}
            initial="inactive"
            animate={activeTab === 'seekHelp' ? 'active' : 'inactive'}
            onClick={() => setActiveTab('seekHelp')}
            className={`flex-1 px-4 py-3 font-medium flex items-center justify-center ${activeTab === 'seekHelp' ? 'text-red-600 border-b-2 border-red-500' : 'text-gray-500'}`}
          >
            <IconUserMd className={`mr-2 ${getTabColor('seekHelp')}`} />
            Help Signs
          </motion.button>
        </div>

        {/* Content Section */}
        <div className="p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={`space-y-4 ${getTabBgColor(activeTab)} p-6 rounded-xl`}
            >
              {/* Tab title */}
              <motion.h3 
                variants={itemVariants}
                className={`text-xl font-semibold mb-4 flex items-center ${getTabColor(activeTab)}`}
              >
                {activeTab === 'techniques' && <IconBrain className="mr-2" />}
                {activeTab === 'breathing' && <IconLungs className="mr-2" />}
                {activeTab === 'relaxation' && <IconYinYang className="mr-2" />}
                {activeTab === 'seekHelp' && <IconUserMd className="mr-2" />}
                
                {activeTab === 'techniques' && 'Self-help Techniques'}
                {activeTab === 'breathing' && 'Breathing Exercises'}
                {activeTab === 'relaxation' && 'Relaxation Practices'}
                {activeTab === 'seekHelp' && 'When to Seek Professional Help'}
              </motion.h3>
              
              {/* Tab content */}
              <div className="space-y-3">
                {recommendation.content[activeTab].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.02, 
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
                    }}
                    className="flex items-start bg-white p-4 rounded-lg shadow-sm"
                  >
                    {getItemIcon(activeTab, index)}
                    <span className={`${activeTab === 'seekHelp' ? 'text-red-800' : 'text-gray-700'}`}>
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default RecommendationDetail; 
