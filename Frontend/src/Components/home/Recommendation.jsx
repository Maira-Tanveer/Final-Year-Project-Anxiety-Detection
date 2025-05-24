// // // src/Components/home/Recommendation.jsx
// // import { useState } from 'react';
// // import { motion } from 'framer-motion';
// // import { useNavigate } from 'react-router-dom';

// // const Recommendation = () => {
// //   const navigate = useNavigate();
// //   const [hoveredCard, setHoveredCard] = useState(null);
  
// //   // SVG Icon Components
// //   const IconPeople = () => (
// //     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
// //       <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zm5 2a2 2 0 11-4 0 2 2 0 014 0zm-8 8c0-1.657 2.686-3 6-3V9a3 3 0 00-3-3h-4a3 3 0 00-3 3v4c3.314 0 6 1.343 6 3zM2 13a2 2 0 012-2h1a2 2 0 012 2H2z" />
// //     </svg>
// //   );
  
// //   const IconBrain = () => (
// //     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
// //       <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
// //     </svg>
// //   );
  
// //   const IconRunning = () => (
// //     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
// //       <path fillRule="evenodd" d="M10 3.5a.5.5 0 01.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zm0 4a.5.5 0 01.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zm0 4a.5.5 0 01.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5z" clipRule="evenodd" />
// //       <path d="M13.5 5.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm2 10a1 1 0 01-1-1V8.5a1 1 0 011-1h3a1 1 0 011 1v6a1 1 0 01-1 1h-3zM7 2a1 1 0 00-1 1v11a1 1 0 11-2 0V3a3 3 0 013-3h5.5a3 3 0 012.82 2H19v14a3 3 0 01-3 3H6a3 3 0 01-3-3V9h-.5v1A1.5 1.5 0 011 11.5v4A1.5 1.5 0 012.5 17h11a1.5 1.5 0 001.5-1.5v-4a1.5 1.5 0 00-1.5-1.5H7V2z" />
// //     </svg>
// //   );
  
// //   const IconHeartbeat = () => (
// //     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
// //       <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
// //     </svg>
// //   );
  
// //   const IconComment = () => (
// //     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
// //       <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
// //     </svg>
// //   );
  
// //   const IconWarning = () => (
// //     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
// //       <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
// //     </svg>
// //   );
  
// //   const IconArrow = () => (
// //     <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 20 20" fill="currentColor">
// //       <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
// //     </svg>
// //   );

// //   // Main anxiety categories for the first row
// //   const mainCategories = [
// //     {
// //       id: "mild-social",
// //       title: "Social Anxiety Tips",
// //       type: "Mild Anxiety",
// //       description: "Easy strategies to manage social situations with less stress",
// //       icon: IconPeople,
// //       color: "teal",
// //       techniques: 5
// //     },
// //     {
// //       id: "severe-agoraphobia",
// //       title: "Agoraphobia Tips",
// //       type: "Severe Anxiety",
// //       description: "Support for fear of spaces or situations that may cause panic",
// //       icon: IconRunning,
// //       color: "pink",
// //       techniques: 5
// //     },
// //     {
// //       id: "panic-tips",
// //       title: "Panic Attack Tips",
// //       type: "Panic Level",
// //       description: "Immediate strategies to manage and reduce panic episodes",
// //       icon: IconHeartbeat,
// //       color: "red",
// //       techniques: 5
// //     }
// //   ];

// //   // Secondary anxiety categories for the second row
// //   const secondaryCategories = [
// //     {
// //       id: "moderate-general",
// //       title: "General Anxiety Tips",
// //       type: "Moderate Anxiety",
// //       description: "Effective methods to manage persistent worry and tension",
// //       icon: IconBrain,
// //       color: "purple",
// //       techniques: 5
// //     },
// //     {
// //       id: "moderate-selective",
// //       title: "Selective Mutism Tips",
// //       type: "Moderate Anxiety",
// //       description: "Strategies to help overcome situational speech difficulties",
// //       icon: IconComment,
// //       color: "blue",
// //       techniques: 5
// //     },
// //     {
// //       id: "moderate-phobia",
// //       title: "Phobia Tips",
// //       type: "Moderate Anxiety",
// //       description: "Steps to gradually overcome specific fears",
// //       icon: IconWarning,
// //       color: "orange",
// //       techniques: 5
// //     }
// //   ];

// //   // Custom color variant for each card
// //   const getCardColors = (color) => {
// //     switch (color) {
// //       case 'teal':
// //         return {
// //           bg: 'bg-teal-50',
// //           border: 'border-teal-200',
// //           text: 'text-teal-700',
// //           icon: 'text-teal-600',
// //           bgIcon: 'bg-teal-100',
// //           type: 'text-teal-500',
// //           actionText: 'text-teal-600',
// //           count: 'bg-teal-100'
// //         };
// //       case 'purple':
// //         return {
// //           bg: 'bg-purple-50',
// //           border: 'border-purple-200',
// //           text: 'text-purple-700',
// //           icon: 'text-purple-600',
// //           bgIcon: 'bg-purple-100',
// //           type: 'text-purple-500',
// //           actionText: 'text-purple-600',
// //           count: 'bg-purple-100'
// //         };
// //       case 'blue':
// //         return {
// //           bg: 'bg-blue-50',
// //           border: 'border-blue-200',
// //           text: 'text-blue-700',
// //           icon: 'text-blue-600',
// //           bgIcon: 'bg-blue-100',
// //           type: 'text-blue-500',
// //           actionText: 'text-blue-600',
// //           count: 'bg-blue-100'
// //         };
// //       case 'orange':
// //         return {
// //           bg: 'bg-orange-50',
// //           border: 'border-orange-200',
// //           text: 'text-orange-700',
// //           icon: 'text-orange-600',
// //           bgIcon: 'bg-orange-100',
// //           type: 'text-orange-500',
// //           actionText: 'text-orange-600',
// //           count: 'bg-orange-100'
// //         };
// //       case 'pink':
// //         return {
// //           bg: 'bg-pink-50',
// //           border: 'border-pink-200',
// //           text: 'text-pink-700',
// //           icon: 'text-pink-600',
// //           bgIcon: 'bg-pink-100',
// //           type: 'text-pink-500',
// //           actionText: 'text-pink-600',
// //           count: 'bg-pink-100'
// //         };
// //       case 'red':
// //         return {
// //           bg: 'bg-red-50',
// //           border: 'border-red-200',
// //           text: 'text-red-700',
// //           icon: 'text-red-600',
// //           bgIcon: 'bg-red-100',
// //           type: 'text-red-500',
// //           actionText: 'text-red-600',
// //           count: 'bg-red-100'
// //         };
// //       default:
// //         return {
// //           bg: 'bg-gray-50',
// //           border: 'border-gray-200',
// //           text: 'text-gray-700',
// //           icon: 'text-gray-600',
// //           bgIcon: 'bg-gray-100',
// //           type: 'text-gray-500',
// //           actionText: 'text-gray-600',
// //           count: 'bg-gray-100'
// //         };
// //     }
// //   };

// //   // Animation variants
// //   const containerVariants = {
// //     hidden: { opacity: 0 },
// //     visible: {
// //       opacity: 1,
// //       transition: {
// //         staggerChildren: 0.1
// //       }
// //     }
// //   };

// //   const cardVariants = {
// //     hidden: { y: 20, opacity: 0 },
// //     visible: {
// //       y: 0,
// //       opacity: 1,
// //       transition: {
// //         type: "spring",
// //         stiffness: 100
// //       }
// //     }
// //   };

// //   // Share functionality
// //   const handleShare = (e, cardId, cardTitle) => {
// //     e.stopPropagation(); // Prevent triggering the card click
    
// //     // Check if Web Share API is available
// //     if (navigator.share) {
// //       navigator.share({
// //         title: cardTitle,
// //         text: `Check out these tips for managing ${cardTitle}`,
// //         url: window.location.origin + `/recommendations/${cardId}`
// //       }).catch(error => console.log('Error sharing:', error));
// //     } else {
// //       // Fallback for browsers that don't support the Web Share API
// //       // You could implement a custom share modal here
// //       alert('Share feature not supported by your browser. Try copying the link manually.');
// //     }
// //   };

// //   // Card component to avoid repetition
// //   const AnxietyCard = ({ card, index }) => {
// //     const colors = getCardColors(card.color);
    
// //     return (
// //       <motion.div
// //         variants={cardVariants}
// //         className={`rounded-2xl overflow-hidden shadow-sm border ${colors.border} ${colors.bg} flex flex-col`}
// //         whileHover={{ 
// //           y: -5,
// //           scale: 1.02,
// //           boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
// //         }}
// //         whileTap={{ scale: 0.98 }}
// //         onHoverStart={() => setHoveredCard(card.id)}
// //         onHoverEnd={() => setHoveredCard(null)}
// //         onClick={() => navigate(`/recommendations/${card.id}`)}
// //       >
// //         {/* Card Header */}
// //         <div className="p-4 flex flex-col flex-grow">
// //           <div className="flex items-center justify-between">
// //             <div className="flex items-center mb-2">
// //               <div className={`w-10 h-10 rounded-full ${colors.bgIcon} flex items-center justify-center ${colors.icon} mr-3`}>
// //                 <card.icon />
// //               </div>
// //               <div>
// //                 <h3 className={`font-semibold ${colors.text} text-lg`}>{card.title}</h3>
// //                 <p className={`${colors.type} text-sm font-medium`}>{card.type}</p>
// //               </div>
// //             </div>
            
// //             {/* Share Button */}
// //             <motion.button
// //               whileHover={{ scale: 1.1 }}
// //               whileTap={{ scale: 0.9 }}
// //               onClick={(e) => handleShare(e, card.id, card.title)}
// //               className={`rounded-full p-2 ${colors.bgIcon} ${colors.icon}`}
// //             >
// //               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
// //                 <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
// //               </svg>
// //             </motion.button>
// //           </div>
          
// //           <p className="text-gray-600 text-sm mt-2">{card.description}</p>
          
// //           <div className="mt-auto pt-4 flex justify-between items-center">
// //             <span className="text-xs text-gray-500 flex items-center">
// //               <span className={`inline-block w-5 h-5 ${colors.count} text-gray-600 rounded-full text-xs flex items-center justify-center mr-1`}>
// //                 {card.techniques}
// //               </span>
// //               techniques
// //             </span>
            
// //             <motion.span 
// //               className={`${colors.actionText} text-sm flex items-center`}
// //               animate={{ 
// //                 x: hoveredCard === card.id ? 3 : 0,
// //                 opacity: hoveredCard === card.id ? 1 : 0.7
// //               }}
// //             >
// //               View tips
// //               <IconArrow />
// //             </motion.span>
// //           </div>
// //         </div>
// //       </motion.div>
// //     );
// //   };

// //   return (
// //     <div className="pb-20"> {/* Add padding bottom for navbar */}
// //       <motion.header 
// //         className="bg-gradient-to-r from-blue-400 to-indigo-500 py-6 mb-8 rounded-xl shadow-md"
// //         initial={{ opacity: 0, y: -50 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.5 }}
// //       >
// //         <div className="max-w-6xl mx-auto px-4">
// //           <motion.h1 
// //             className="text-2xl font-bold text-white"
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             transition={{ delay: 0.2, duration: 0.5 }}
// //           >
// //             Anxiety Recommendations
// //           </motion.h1>
// //           <motion.p 
// //             className="text-white text-opacity-90 mt-2"
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             transition={{ delay: 0.3, duration: 0.5 }}
// //           >
// //             Tips and strategies for managing different levels of anxiety
// //           </motion.p>
// //         </div>
// //       </motion.header>

// //       <div className="max-w-6xl mx-auto px-4">
// //         <motion.div
// //           initial="hidden"
// //           animate="visible"
// //           variants={containerVariants}
// //           className="space-y-8"
// //         >
// //           {/* First Row - Main Anxiety Types */}
// //           <motion.div variants={cardVariants} className="mb-12">
// //             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //               {mainCategories.map((card, index) => (
// //                 <AnxietyCard key={card.id} card={card} index={index} />
// //               ))}
// //             </div>
// //           </motion.div>
          
// //           {/* Second Row - Secondary Anxiety Types */}
// //           <motion.div variants={cardVariants} className="mb-8">
// //             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //               {secondaryCategories.map((card, index) => (
// //                 <AnxietyCard key={card.id} card={card} index={index} />
// //               ))}
// //             </div>
// //           </motion.div>
// //         </motion.div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Recommendation; 
// // src/Components/home/Recommendation.jsx
// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';

// const Recommendation = () => {
//   const navigate = useNavigate();
//   const [hoveredCard, setHoveredCard] = useState(null);
  
//   // SVG Icon Components
//   const IconPeople = () => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
//       <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zm5 2a2 2 0 11-4 0 2 2 0 014 0zm-8 8c0-1.657 2.686-3 6-3V9a3 3 0 00-3-3h-4a3 3 0 00-3 3v4c3.314 0 6 1.343 6 3zM2 13a2 2 0 012-2h1a2 2 0 012 2H2z" />
//     </svg>
//   );
  
//   const IconBrain = () => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
//       <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
//     </svg>
//   );
  
//   const IconRunning = () => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
//       <path fillRule="evenodd" d="M10 3.5a.5.5 0 01.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zm0 4a.5.5 0 01.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zm0 4a.5.5 0 01.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5z" clipRule="evenodd" />
//       <path d="M13.5 5.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm2 10a1 1 0 01-1-1V8.5a1 1 0 011-1h3a1 1 0 011 1v6a1 1 0 01-1 1h-3zM7 2a1 1 0 00-1 1v11a1 1 0 11-2 0V3a3 3 0 013-3h5.5a3 3 0 012.82 2H19v14a3 3 0 01-3 3H6a3 3 0 01-3-3V9h-.5v1A1.5 1.5 0 011 11.5v4A1.5 1.5 0 012.5 17h11a1.5 1.5 0 001.5-1.5v-4a1.5 1.5 0 00-1.5-1.5H7V2z" />
//     </svg>
//   );
  
//   const IconHeartbeat = () => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
//       <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
//     </svg>
//   );
  
//   const IconComment = () => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
//       <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
//     </svg>
//   );
  
//   const IconWarning = () => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
//       <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
//     </svg>
//   );
  
//   const IconArrow = () => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 20 20" fill="currentColor">
//       <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
//     </svg>
//   );

//   // Main anxiety categories for the first row
//   const mainCategories = [
//     {
//       id: "mild-social",
//       title: "Social Anxiety Tips",
//       type: "Mild Anxiety",
//       description: "Easy strategies to manage social situations with less stress",
//       icon: IconPeople,
//       color: "teal",
//       techniques: 5
//     },
//     {
//       id: "severe-agoraphobia",
//       title: "Agoraphobia Tips",
//       type: "Severe Anxiety",
//       description: "Support for fear of spaces or situations that may cause panic",
//       icon: IconRunning,
//       color: "pink",
//       techniques: 5
//     },
//     {
//       id: "panic-tips",
//       title: "Panic Attack Tips",
//       type: "Panic Level",
//       description: "Immediate strategies to manage and reduce panic episodes",
//       icon: IconHeartbeat,
//       color: "red",
//       techniques: 5
//     }
//   ];

//   // Secondary anxiety categories for the second row
//   const secondaryCategories = [
//     {
//       id: "moderate-general",
//       title: "General Anxiety Tips",
//       type: "Moderate Anxiety",
//       description: "Effective methods to manage persistent worry and tension",
//       icon: IconBrain,
//       color: "purple",
//       techniques: 5
//     },
//     {
//       id: "moderate-selective",
//       title: "Selective Mutism Tips",
//       type: "Moderate Anxiety",
//       description: "Strategies to help overcome situational speech difficulties",
//       icon: IconComment,
//       color: "blue",
//       techniques: 5
//     },
//     {
//       id: "moderate-phobia",
//       title: "Phobia Tips",
//       type: "Moderate Anxiety",
//       description: "Steps to gradually overcome specific fears",
//       icon: IconWarning,
//       color: "orange",
//       techniques: 5
//     }
//   ];

//   // Custom color variant for each card
//   const getCardColors = (color) => {
//     switch (color) {
//       case 'teal':
//         return {
//           bg: 'bg-teal-50',
//           border: 'border-teal-200',
//           text: 'text-teal-700',
//           icon: 'text-teal-600',
//           bgIcon: 'bg-teal-100',
//           type: 'text-teal-500',
//           actionText: 'text-teal-600',
//           count: 'bg-teal-100'
//         };
//       case 'purple':
//         return {
//           bg: 'bg-purple-50',
//           border: 'border-purple-200',
//           text: 'text-purple-700',
//           icon: 'text-purple-600',
//           bgIcon: 'bg-purple-100',
//           type: 'text-purple-500',
//           actionText: 'text-purple-600',
//           count: 'bg-purple-100'
//         };
//       case 'blue':
//         return {
//           bg: 'bg-blue-50',
//           border: 'border-blue-200',
//           text: 'text-blue-700',
//           icon: 'text-blue-600',
//           bgIcon: 'bg-blue-100',
//           type: 'text-blue-500',
//           actionText: 'text-blue-600',
//           count: 'bg-blue-100'
//         };
//       case 'orange':
//         return {
//           bg: 'bg-orange-50',
//           border: 'border-orange-200',
//           text: 'text-orange-700',
//           icon: 'text-orange-600',
//           bgIcon: 'bg-orange-100',
//           type: 'text-orange-500',
//           actionText: 'text-orange-600',
//           count: 'bg-orange-100'
//         };
//       case 'pink':
//         return {
//           bg: 'bg-pink-50',
//           border: 'border-pink-200',
//           text: 'text-pink-700',
//           icon: 'text-pink-600',
//           bgIcon: 'bg-pink-100',
//           type: 'text-pink-500',
//           actionText: 'text-pink-600',
//           count: 'bg-pink-100'
//         };
//       case 'red':
//         return {
//           bg: 'bg-red-50',
//           border: 'border-red-200',
//           text: 'text-red-700',
//           icon: 'text-red-600',
//           bgIcon: 'bg-red-100',
//           type: 'text-red-500',
//           actionText: 'text-red-600',
//           count: 'bg-red-100'
//         };
//       default:
//         return {
//           bg: 'bg-gray-50',
//           border: 'border-gray-200',
//           text: 'text-gray-700',
//           icon: 'text-gray-600',
//           bgIcon: 'bg-gray-100',
//           type: 'text-gray-500',
//           actionText: 'text-gray-600',
//           count: 'bg-gray-100'
//         };
//     }
//   };

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const cardVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100
//       }
//     }
//   };

//   // Share functionality
//   const handleShare = (e, cardId, cardTitle) => {
//     e.stopPropagation(); // Prevent triggering the card click
    
//     // Check if Web Share API is available
//     if (navigator.share) {
//       navigator.share({
//         title: cardTitle,
//         text: `Check out these tips for managing ${cardTitle}`,
//         url: window.location.origin + `/recommendations/${cardId}`
//       }).catch(error => console.log('Error sharing:', error));
//     } else {
//       // Fallback for browsers that don't support the Web Share API
//       // You could implement a custom share modal here
//       alert('Share feature not supported by your browser. Try copying the link manually.');
//     }
//   };

//   // Handle navigation to detail page
//   const handleCardClick = (cardId) => {
//     // Navigate to the specific recommendation detail route
//     navigate(`/recommendations/${cardId}`);
//     console.log(`Navigating to: /recommendations/${cardId}`);
//   };

//   // Card component to avoid repetition
//   const AnxietyCard = ({ card, index }) => {
//     const colors = getCardColors(card.color);
    
//     return (
//       <motion.div
//         variants={cardVariants}
//         className={`rounded-2xl overflow-hidden shadow-sm border ${colors.border} ${colors.bg} flex flex-col`}
//         whileHover={{ 
//           y: -5,
//           scale: 1.02,
//           boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
//         }}
//         whileTap={{ scale: 0.98 }}
//         onHoverStart={() => setHoveredCard(card.id)}
//         onHoverEnd={() => setHoveredCard(null)}
//         onClick={() => handleCardClick(card.id)}
//       >
//         {/* Card Header */}
//         <div className="p-4 flex flex-col flex-grow">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center mb-2">
//               <div className={`w-10 h-10 rounded-full ${colors.bgIcon} flex items-center justify-center ${colors.icon} mr-3`}>
//                 <card.icon />
//               </div>
//               <div>
//                 <h3 className={`font-semibold ${colors.text} text-lg`}>{card.title}</h3>
//                 <p className={`${colors.type} text-sm font-medium`}>{card.type}</p>
//               </div>
//             </div>
            
//             {/* Share Button */}
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={(e) => handleShare(e, card.id, card.title)}
//               className={`rounded-full p-2 ${colors.bgIcon} ${colors.icon}`}
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
//                 <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
//               </svg>
//             </motion.button>
//           </div>
          
//           <p className="text-gray-600 text-sm mt-2">{card.description}</p>
          
//           <div className="mt-auto pt-4 flex justify-between items-center">
//             <span className="text-xs text-gray-500 flex items-center">
//               <span className={`inline-block w-5 h-5 ${colors.count} text-gray-600 rounded-full text-xs flex items-center justify-center mr-1`}>
//                 {card.techniques}
//               </span>
//               techniques
//             </span>
            
//             <motion.span 
//               className={`${colors.actionText} text-sm flex items-center`}
//               animate={{ 
//                 x: hoveredCard === card.id ? 3 : 0,
//                 opacity: hoveredCard === card.id ? 1 : 0.7
//               }}
//             >
//               View tips
//               <IconArrow />
//             </motion.span>
//           </div>
//         </div>
//       </motion.div>
//     );
//   };

//   return (
//     <div className="pb-20"> {/* Add padding bottom for navbar */}
//       <motion.header 
//         className="bg-gradient-to-r from-blue-400 to-indigo-500 py-6 mb-8 rounded-xl shadow-md"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <div className="max-w-6xl mx-auto px-4">
//           <motion.h1 
//             className="text-2xl font-bold text-white"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2, duration: 0.5 }}
//           >
//             Anxiety Recommendations
//           </motion.h1>
//           <motion.p 
//             className="text-white text-opacity-90 mt-2"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3, duration: 0.5 }}
//           >
//             Tips and strategies for managing different levels of anxiety
//           </motion.p>
//         </div>
//       </motion.header>

//       <div className="max-w-6xl mx-auto px-4">
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={containerVariants}
//           className="space-y-8"
//         >
//           {/* First Row - Main Anxiety Types */}
//           <motion.div variants={cardVariants} className="mb-12">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {mainCategories.map((card, index) => (
//                 <AnxietyCard key={card.id} card={card} index={index} />
//               ))}
//             </div>
//           </motion.div>
          
//           {/* Second Row - Secondary Anxiety Types */}
//           <motion.div variants={cardVariants} className="mb-8">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {secondaryCategories.map((card, index) => (
//                 <AnxietyCard key={card.id} card={card} index={index} />
//               ))}
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Recommendation;
// src/Components/home/Recommendation.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Recommendation = () => {
  const navigate = useNavigate();
  
  // SVG Icon Components
  const IconPeople = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zm5 2a2 2 0 11-4 0 2 2 0 014 0zm-8 8c0-1.657 2.686-3 6-3V9a3 3 0 00-3-3h-4a3 3 0 00-3 3v4c3.314 0 6 1.343 6 3zM2 13a2 2 0 012-2h1a2 2 0 012 2H2z" />
    </svg>
  );
  
  const IconBrain = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
    </svg>
  );
  
  const IconRunning = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 3.5a.5.5 0 01.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zm0 4a.5.5 0 01.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zm0 4a.5.5 0 01.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5z" clipRule="evenodd" />
      <path d="M13.5 5.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm2 10a1 1 0 01-1-1V8.5a1 1 0 011-1h3a1 1 0 011 1v6a1 1 0 01-1 1h-3zM7 2a1 1 0 00-1 1v11a1 1 0 11-2 0V3a3 3 0 013-3h5.5a3 3 0 012.82 2H19v14a3 3 0 01-3 3H6a3 3 0 01-3-3V9h-.5v1A1.5 1.5 0 011 11.5v4A1.5 1.5 0 012.5 17h11a1.5 1.5 0 001.5-1.5v-4a1.5 1.5 0 00-1.5-1.5H7V2z" />
    </svg>
  );
  
  const IconHeartbeat = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
    </svg>
  );
  
  const IconComment = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
    </svg>
  );
  
  const IconWarning = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
    </svg>
  );
  
  const IconArrow = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  );

  // Main anxiety categories for the first row
  const mainCategories = [
    {
      id: "mild-social",
      title: "Social Anxiety Tips",
      type: "Mild Anxiety",
      description: "Easy strategies to manage social situations with less stress",
      icon: IconPeople,
      color: "teal",
      gradient: "from-teal-300 to-teal-500",
      techniques: 5
    },
    {
      id: "severe-agoraphobia",
      title: "Agoraphobia Tips",
      type: "Severe Anxiety",
      description: "Support for fear of spaces or situations that may cause panic",
      icon: IconRunning,
      color: "pink",
      gradient: "from-pink-300 to-purple-400",
      techniques: 5
    },
    {
      id: "panic-tips",
      title: "Panic Attack Tips",
      type: "Panic Level",
      description: "Immediate strategies to manage and reduce panic episodes",
      icon: IconHeartbeat,
      color: "red",
      gradient: "from-red-300 to-red-500",
      techniques: 5
    }
  ];

  // Secondary anxiety categories for the second row
  const secondaryCategories = [
    {
      id: "moderate-general",
      title: "General Anxiety Tips",
      type: "Moderate Anxiety",
      description: "Effective methods to manage persistent worry and tension",
      icon: IconBrain,
      color: "purple",
      gradient: "from-purple-300 to-purple-500",
      techniques: 5
    },
    {
      id: "moderate-selective",
      title: "Selective Mutism Tips",
      type: "Moderate Anxiety",
      description: "Strategies to help overcome situational speech difficulties",
      icon: IconComment,
      color: "blue",
      gradient: "from-blue-300 to-blue-500",
      techniques: 5
    },
    {
      id: "moderate-phobia",
      title: "Phobia Tips",
      type: "Moderate Anxiety",
      description: "Steps to gradually overcome specific fears",
      icon: IconWarning,
      color: "orange",
      gradient: "from-orange-300 to-orange-500",
      techniques: 5
    }
  ];

  // Custom color variant for each card - UPDATED with gradient backgrounds
  const getCardColors = (color) => {
    switch (color) {
      case 'teal':
        return {
          bg: 'bg-gradient-to-br from-teal-300 to-teal-500',
          border: 'border-teal-300',
          text: 'text-white',
          icon: 'text-white',
          bgIcon: 'bg-teal-400 bg-opacity-30',
          type: 'text-teal-100',
          actionText: 'text-white',
          count: 'bg-teal-400 bg-opacity-30'
        };
      case 'purple':
        return {
          bg: 'bg-gradient-to-br from-purple-300 to-purple-500',
          border: 'border-purple-300',
          text: 'text-white',
          icon: 'text-white',
          bgIcon: 'bg-purple-400 bg-opacity-30',
          type: 'text-purple-100',
          actionText: 'text-white',
          count: 'bg-purple-400 bg-opacity-30'
        };
      case 'blue':
        return {
          bg: 'bg-gradient-to-br from-blue-300 to-blue-500',
          border: 'border-blue-300',
          text: 'text-white',
          icon: 'text-white',
          bgIcon: 'bg-blue-400 bg-opacity-30',
          type: 'text-blue-100',
          actionText: 'text-white',
          count: 'bg-blue-400 bg-opacity-30'
        };
      case 'orange':
        return {
          bg: 'bg-gradient-to-br from-orange-300 to-orange-500',
          border: 'border-orange-300',
          text: 'text-white',
          icon: 'text-white',
          bgIcon: 'bg-orange-400 bg-opacity-30',
          type: 'text-orange-100',
          actionText: 'text-white',
          count: 'bg-orange-400 bg-opacity-30'
        };
      case 'pink':
        return {
          bg: 'bg-gradient-to-br from-pink-300 to-purple-400',
          border: 'border-pink-300',
          text: 'text-white',
          icon: 'text-white',
          bgIcon: 'bg-pink-400 bg-opacity-30',
          type: 'text-pink-100',
          actionText: 'text-white',
          count: 'bg-pink-400 bg-opacity-30'
        };
      case 'red':
        return {
          bg: 'bg-gradient-to-br from-red-300 to-red-500',
          border: 'border-red-300',
          text: 'text-white',
          icon: 'text-white',
          bgIcon: 'bg-red-400 bg-opacity-30',
          type: 'text-red-100',
          actionText: 'text-white',
          count: 'bg-red-400 bg-opacity-30'
        };
      default:
        return {
          bg: 'bg-gradient-to-br from-gray-300 to-gray-500',
          border: 'border-gray-300',
          text: 'text-white',
          icon: 'text-white',
          bgIcon: 'bg-gray-400 bg-opacity-30',
          type: 'text-gray-100',
          actionText: 'text-white',
          count: 'bg-gray-400 bg-opacity-30'
        };
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  // Share functionality
  const handleShare = (e, cardId, cardTitle) => {
    e.stopPropagation(); // Prevent triggering the card click
    
    // Check if Web Share API is available
    if (navigator.share) {
      navigator.share({
        title: cardTitle,
        text: `Check out these tips for managing ${cardTitle}`,
        url: window.location.origin + `/recommendations/${cardId}`
      }).catch(error => console.log('Error sharing:', error));
    } else {
      // Fallback for browsers that don't support the Web Share API
      // You could implement a custom share modal here
      alert('Share feature not supported by your browser. Try copying the link manually.');
    }
  };

  // Handle navigation to detail page
  const handleCardClick = (cardId) => {
    // Navigate to the specific recommendation detail route
    navigate(`/recommendations/${cardId}`);
    console.log(`Navigating to: /recommendations/${cardId}`);
  };

  // Card component to avoid repetition
  const AnxietyCard = ({ card, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const colors = getCardColors(card.color);
    
    return (
      <motion.div
        variants={cardVariants}
        className={`rounded-2xl overflow-hidden shadow-sm border ${colors.border} ${colors.bg} flex flex-col transition-all duration-300`}
        style={{
          transform: isHovered ? 'translateY(-5px) scale(1.02)' : 'translateY(0) scale(1)',
          boxShadow: isHovered ? '0 10px 25px -5px rgba(0, 0, 0, 0.1)' : '0 1px 3px rgba(0, 0, 0, 0.05)'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => handleCardClick(card.id)}
      >
        {/* Card Header */}
        <div className="p-4 flex flex-col flex-grow">
          <div className="flex items-center justify-between">
            <div className="flex items-center mb-2">
              <div className={`w-10 h-10 rounded-full ${colors.bgIcon} flex items-center justify-center ${colors.icon} mr-3`}>
                <card.icon />
              </div>
              <div>
                <h3 className={`font-semibold ${colors.text} text-lg`}>{card.title}</h3>
                <p className={`${colors.type} text-sm font-medium`}>{card.type}</p>
              </div>
            </div>
            
            
            {/* Share Button */}
            <div 
              className={`rounded-full p-2 ${colors.bgIcon} ${colors.icon} cursor-pointer transition-transform hover:scale-110 active:scale-90`}
              onClick={(e) => handleShare(e, card.id, card.title)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
              </svg>
            </div>
          </div>
          
          <p className="text-white text-opacity-80 text-sm mt-2">{card.description}</p>
          
          <div className="mt-auto pt-4 flex justify-between items-center">
            <span className="text-xs text-white text-opacity-80 flex items-center">
              <span className={`inline-block w-5 h-5 ${colors.count} text-white rounded-full text-xs flex items-center justify-center mr-1`}>
                {card.techniques}
              </span>
              techniques
            </span>
            
            <span 
              className={`${colors.actionText} text-sm flex items-center transition-all duration-300`}
              style={{ 
                transform: isHovered ? 'translateX(3px)' : 'translateX(0)',
                opacity: isHovered ? 1 : 0.7
              }}
            >
              View tips
              <IconArrow />
            </span>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="pb-20"> {/* Add padding bottom for navbar */}
      <motion.header 
        className="bg-gradient-to-r from-blue-400 to-indigo-500 py-6 mb-8 rounded-xl shadow-md"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.h1 
            className="text-2xl font-bold text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Anxiety Recommendations
          </motion.h1>
          <motion.p 
            className="text-white text-opacity-90 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Tips and strategies for managing different levels of anxiety
          </motion.p>
        </div>
      </motion.header>

      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-8"
        >
          {/* First Row - Main Anxiety Types */}
          <motion.div variants={cardVariants} className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mainCategories.map((card, index) => (
                <AnxietyCard key={card.id} card={card} index={index} />
              ))}
            </div>
          </motion.div>
          
          {/* Second Row - Secondary Anxiety Types */}
          <motion.div variants={cardVariants} className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {secondaryCategories.map((card, index) => (
                <AnxietyCard key={card.id} card={card} index={index} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Recommendation;