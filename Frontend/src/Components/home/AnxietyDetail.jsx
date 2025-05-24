// // src/Components/AnxietyDetail.jsx
// import { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { FaArrowLeft, FaUserFriends, FaMicrophone, FaBullhorn, FaSpider } from 'react-icons/fa';

// const AnxietyDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState('intro');

//   // Anxiety type details
//   const anxietyDetails = {
//     general: {
//       id: 'general',
//       name: 'General Worry',
//       color: '#d8b5ff',
//       icon: FaUserFriends,
//       intro: 'General Anxiety Disorder (GAD) is characterized by persistent and excessive worry about a variety of different things. People with GAD may anticipate disaster and may be overly concerned about money, health, family, work, or other issues.',
//       signs: [
//         'Persistent worrying or anxiety about a number of areas that are out of proportion to the impact of the events',
//         'Overthinking plans and solutions to all possible worst-case outcomes',
//         'Perceiving situations and events as threatening, even when they aren\'t',
//         'Difficulty handling uncertainty',
//         'Indecisiveness and fear of making the wrong decision',
//         'Inability to set aside or let go of a worry'
//       ]
//     },
//     social: {
//       id: 'social',
//       name: 'Social Anxiety',
//       color: '#7eecd2',
//       icon: FaUserFriends,
//       intro: 'Most people get anxious in some social situations, like before a job interview or when giving a speech. However, some people get overly anxious in social situations. They tend to worry about doing something embarrassing or that others will think badly of them. They also tend to avoid social situations or endure them with great distress. Social anxiety becomes problematic when it interferes with daily life.',
//       signs: [
//         'Worrying about embarrassing yourself in social situations',
//         'Fear of being judged negatively by others',
//         'Avoiding social gatherings or staying quiet in groups',
//         'Physical symptoms like blushing, sweating, or trembling in social settings',
//         'Difficulty making or keeping friends',
//         'Intense anxiety when meeting new people'
//       ]
//     },
//     perfectionism: {
//       id: 'perfectionism',
//       name: 'Perfectionism',
//       color: '#ffafcc',
//       icon: FaBullhorn,
//       intro: 'Perfectionism involves setting unrealistically high standards for yourself and others. People with perfectionism often feel like they\'re never good enough and continuously strive for flawlessness, causing significant stress and anxiety.',
//       signs: [
//         'Setting extremely high and often unrealistic standards',
//         'Being highly self-critical when mistakes are made',
//         'Procrastination due to fear of not meeting high standards',
//         'Difficulty delegating tasks to others',
//         'Black-and-white thinking (all-or-nothing mentality)',
//         'Excessive checking and rechecking of work'
//       ]
//     },
//     phobia: {
//       id: 'phobia',
//       name: 'Phobia',
//       color: '#ff8fab',
//       icon: FaSpider,
//       intro: 'A phobia is an intense fear of specific objects or situations. Phobias are irrational fears that can interfere with daily activities and cause significant distress.',
//       signs: [
//         'Immediate intense fear when exposed to the object of fear',
//         'Avoidance behaviors to prevent encountering the feared object or situation',
//         'Physical symptoms like racing heart, trouble breathing, or dizziness',
//         'Recognition that the fear is excessive or unreasonable',
//         'Anxiety that builds as a feared situation approaches',
//         'Disruption to normal activities due to avoidance behaviors'
//       ]
//     }
//   };

//   // Get the anxiety data based on the ID from URL
//   const anxietyData = anxietyDetails[id];
  
//   // If anxiety type not found, redirect to home
//   useEffect(() => {
//     if (!anxietyData) {
//       navigate('/home');
//     }
//   }, [anxietyData, navigate]);

//   if (!anxietyData) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-violet-500"></div>
//       </div>
//     );
//   }
  
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-50">
//       {/* Header with background image */}
//       <div 
//         className="h-16 flex items-center px-4 text-white relative"
//         style={{
//           backgroundImage: 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)',
//           boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
//         }}
//       >
//         <button 
//           onClick={() => navigate('/home')} 
//           className="mr-4 p-1"
//         >
//           <FaArrowLeft size={20} />
//         </button>
//         <h1 className="text-xl font-medium">{anxietyData.name}</h1>
//       </div>
      
//       {/* Tabs - only Intro and Signs */}
//       <div className="flex border-b">
//         <button
//           className={`flex-1 py-3 px-4 ${activeTab === 'intro' ? 'text-blue-500 border-b-2 border-blue-500 font-medium' : 'text-gray-500'}`}
//           onClick={() => setActiveTab('intro')}
//         >
//           Intro
//         </button>
//         <button
//           className={`flex-1 py-3 px-4 ${activeTab === 'signs' ? 'text-blue-500 border-b-2 border-blue-500 font-medium' : 'text-gray-500'}`}
//           onClick={() => setActiveTab('signs')}
//         >
//           Signs
//         </button>
//       </div>
      
//       {/* Content */}
//       <div className="p-4">
//         {activeTab === 'intro' && (
//           <div>
//             <p className="text-gray-700 leading-relaxed">{anxietyData.intro}</p>
//             <p className="mt-4 text-gray-700 font-medium">Check out the following social situations or experiences to see which ones are a problem for you.</p>
//           </div>
//         )}
        
//         {activeTab === 'signs' && (
//           <div>
//             <ul className="list-disc pl-5 space-y-2">
//               {anxietyData.signs.map((sign, index) => (
//                 <li key={index} className="text-gray-700">{sign}</li>
//               ))}
//             </ul>
//           </div>
//         )}
        
//         {/* Specific situations - shown only on intro tab */}
//         {activeTab === 'intro' && (
//           <div className="mt-6">
//             <div className="border-t pt-4 pb-2 flex items-start">
//               <div className="bg-purple-200 p-2 rounded-lg mr-3">
//                 <FaUserFriends className="text-purple-500" size={24} />
//               </div>
//               <div>
//                 <h3 className="text-blue-500 text-lg font-medium">Social Events</h3>
//                 <p className="text-gray-600">
//                   Worrying about doing something embarrassing or making a good impression when attending social events, or trying to avoid social gatherings altogether.
//                 </p>
//               </div>
//             </div>
            
//             <div className="border-t pt-4 pb-2 flex items-start">
//               <div className="bg-pink-200 p-2 rounded-lg mr-3">
//                 <FaMicrophone className="text-pink-500" size={24} />
//               </div>
//               <div>
//                 <h3 className="text-blue-500 text-lg font-medium">Being Assertive</h3>
//                 <p className="text-gray-600">
//                   Difficulty expressing your needs or standing up for yourself in everyday situations due to fear of conflict or rejection.
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AnxietyDetail; 
// src/Components/home/AnxietyDetail.jsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaUserFriends, FaMicrophone, FaBullhorn, FaSpider, FaRunning } from 'react-icons/fa';

const AnxietyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('intro');

  // Anxiety type details - Added agoraphobia
  const anxietyDetails = {
    general: {
      id: 'general',
      name: 'General Worry',
      color: '#d8b5ff',
      icon: FaUserFriends,
      intro: 'General Anxiety Disorder (GAD) is characterized by persistent and excessive worry about a variety of different things. People with GAD may anticipate disaster and may be overly concerned about money, health, family, work, or other issues.',
      signs: [
        'Persistent worrying or anxiety about a number of areas that are out of proportion to the impact of the events',
        'Overthinking plans and solutions to all possible worst-case outcomes',
        'Perceiving situations and events as threatening, even when they aren\'t',
        'Difficulty handling uncertainty',
        'Indecisiveness and fear of making the wrong decision',
        'Inability to set aside or let go of a worry'
      ]
    },
    social: {
      id: 'social',
      name: 'Social Anxiety',
      color: '#7eecd2',
      icon: FaUserFriends,
      intro: 'Most people get anxious in some social situations, like before a job interview or when giving a speech. However, some people get overly anxious in social situations. They tend to worry about doing something embarrassing or that others will think badly of them. They also tend to avoid social situations or endure them with great distress. Social anxiety becomes problematic when it interferes with daily life.',
      signs: [
        'Worrying about embarrassing yourself in social situations',
        'Fear of being judged negatively by others',
        'Avoiding social gatherings or staying quiet in groups',
        'Physical symptoms like blushing, sweating, or trembling in social settings',
        'Difficulty making or keeping friends',
        'Intense anxiety when meeting new people'
      ]
    },
    agoraphobia: {
      id: 'agoraphobia',
      name: 'Agoraphobia',
      color: '#ffafcc',
      icon: FaRunning,
      intro: 'Agoraphobia is the fear of being in situations where escape might be difficult or help wouldn\'t be available if things go wrong. People with agoraphobia often avoid public places, open spaces, or situations that might trigger panic attacks.',
      signs: [
        'Fear of leaving home alone',
        'Fear of crowds or waiting in line',
        'Fear of enclosed spaces like movie theaters or elevators',
        'Fear of open spaces like bridges or parking lots',
        'Fear of using public transportation',
        'These situations almost always cause anxiety or panic attacks'
      ]
    },
    perfectionism: {
      id: 'perfectionism',
      name: 'Perfectionism',
      color: '#ffafcc',
      icon: FaBullhorn,
      intro: 'Perfectionism involves setting unrealistically high standards for yourself and others. People with perfectionism often feel like they\'re never good enough and continuously strive for flawlessness, causing significant stress and anxiety.',
      signs: [
        'Setting extremely high and often unrealistic standards',
        'Being highly self-critical when mistakes are made',
        'Procrastination due to fear of not meeting high standards',
        'Difficulty delegating tasks to others',
        'Black-and-white thinking (all-or-nothing mentality)',
        'Excessive checking and rechecking of work'
      ]
    },
    phobia: {
      id: 'phobia',
      name: 'Phobia',
      color: '#ff8fab',
      icon: FaSpider,
      intro: 'A phobia is an intense fear of specific objects or situations. Phobias are irrational fears that can interfere with daily activities and cause significant distress.',
      signs: [
        'Immediate intense fear when exposed to the object of fear',
        'Avoidance behaviors to prevent encountering the feared object or situation',
        'Physical symptoms like racing heart, trouble breathing, or dizziness',
        'Recognition that the fear is excessive or unreasonable',
        'Anxiety that builds as a feared situation approaches',
        'Disruption to normal activities due to avoidance behaviors'
      ]
    }
  };

  // Get the anxiety data based on the ID from URL
  const anxietyData = anxietyDetails[id];
  
  // If anxiety type not found, redirect to home
  useEffect(() => {
    if (!anxietyData) {
      navigate('/home');
    }
  }, [anxietyData, navigate]);

  if (!anxietyData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-violet-500"></div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-50">
      {/* Header with background image */}
      <div 
        className="h-16 flex items-center px-4 text-white relative"
        style={{
          backgroundImage: 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}
      >
        <button 
          onClick={() => navigate('/home')} 
          className="mr-4 p-1"
        >
          <FaArrowLeft size={20} />
        </button>
        <h1 className="text-xl font-medium">{anxietyData.name}</h1>
      </div>
      
      {/* Tabs - only Intro and Signs */}
      <div className="flex border-b">
        <button
          className={`flex-1 py-3 px-4 ${activeTab === 'intro' ? 'text-blue-500 border-b-2 border-blue-500 font-medium' : 'text-gray-500'}`}
          onClick={() => setActiveTab('intro')}
        >
          Intro
        </button>
        <button
          className={`flex-1 py-3 px-4 ${activeTab === 'signs' ? 'text-blue-500 border-b-2 border-blue-500 font-medium' : 'text-gray-500'}`}
          onClick={() => setActiveTab('signs')}
        >
          Signs
        </button>
      </div>
      
      {/* Content */}
      <div className="p-4">
        {activeTab === 'intro' && (
          <div>
            <p className="text-gray-700 leading-relaxed">{anxietyData.intro}</p>
            <p className="mt-4 text-gray-700 font-medium">Check out the following social situations or experiences to see which ones are a problem for you.</p>
          </div>
        )}
        
        {activeTab === 'signs' && (
          <div>
            <ul className="list-disc pl-5 space-y-2">
              {anxietyData.signs.map((sign, index) => (
                <li key={index} className="text-gray-700">{sign}</li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Specific situations - shown only on intro tab */}
        {activeTab === 'intro' && (
          <div className="mt-6">
            <div className="border-t pt-4 pb-2 flex items-start">
              <div className="bg-purple-200 p-2 rounded-lg mr-3">
                <FaUserFriends className="text-purple-500" size={24} />
              </div>
              <div>
                <h3 className="text-blue-500 text-lg font-medium">Social Events</h3>
                <p className="text-gray-600">
                  Worrying about doing something embarrassing or making a good impression when attending social events, or trying to avoid social gatherings altogether.
                </p>
              </div>
            </div>
            
            <div className="border-t pt-4 pb-2 flex items-start">
              <div className="bg-pink-200 p-2 rounded-lg mr-3">
                <FaMicrophone className="text-pink-500" size={24} />
              </div>
              <div>
                <h3 className="text-blue-500 text-lg font-medium">Being Assertive</h3>
                <p className="text-gray-600">
                  Difficulty expressing your needs or standing up for yourself in everyday situations due to fear of conflict or rejection.
                </p>
              </div>
            </div>
          </div>
        )}
        
        {/* Treatment options button - shown on both tabs */}
        <div className="mt-6">
          <button 
            onClick={() => navigate(`/recommendations/${anxietyTypeToRecommendation(id)}`)}
            className="w-full py-3 rounded-lg bg-blue-500 text-white font-medium"
          >
            View Treatment Options
          </button>
        </div>
      </div>
    </div>
  );
};

// Helper function to map anxiety type to recommendation ID
const anxietyTypeToRecommendation = (anxietyType) => {
  const mapping = {
    'social': 'mild-social',
    'general': 'moderate-general',
    'agoraphobia': 'severe-agoraphobia',
    'phobia': 'moderate-phobia',
    'perfectionism': 'moderate-general' // Default to general anxiety for perfectionism
  };
  
  return mapping[anxietyType] || 'moderate-general';
};

export default AnxietyDetail;