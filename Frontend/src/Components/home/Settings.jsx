// src/Components/home/Settings.jsx
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaArrowLeft, 
  FaBell, 
  FaQuestionCircle, 
  FaShare, 
  FaStar, 
  FaUser, 
  FaTrash, 
  FaCamera,
  FaMoon,
  FaSun,
  FaEdit,
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt
} from 'react-icons/fa';

const Settings = ({ onLogout }) => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    country: 'Pakistan',
    province: 'Punjab',
    birthYear: '2005',
    profilePicture: null
  });
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [showRatingPopup, setShowRatingPopup] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [showEditProfilePopup, setShowEditProfilePopup] = useState(false);
  const [editedUserData, setEditedUserData] = useState({
    username: '',
    email: '',
    country: '',
    province: ''
  });
  
  // Load user data and preferences from localStorage when component mounts
  useEffect(() => {
    try {
      // Load user data
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser) {
        setUserData(prev => ({
          ...prev,
          username: storedUser.username || '',
          email: storedUser.email || '',
          country: storedUser.country || 'Pakistan',
          province: storedUser.province || 'Punjab',
          profilePicture: storedUser.profilePicture || null,
        }));
      }
      
      // Load dark mode preference
      const darkModePreference = localStorage.getItem('darkMode') === 'true';
      setDarkMode(darkModePreference);
      if (darkModePreference) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      
      // Load notification preference
      const notificationPreference = localStorage.getItem('notifications') !== 'false';
      setNotificationsEnabled(notificationPreference);
    } catch (error) {
      console.error('Error loading user data:', error);
    }
  }, []);
  
  // Init edit form when edit popup is opened
  useEffect(() => {
    if (showEditProfilePopup) {
      setEditedUserData({
        username: userData.username,
        email: userData.email,
        country: userData.country,
        province: userData.province
      });
    }
  }, [showEditProfilePopup]);
  
  // Handle profile picture selection
  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newUserData = { 
          ...userData, 
          profilePicture: e.target.result 
        };
        setUserData(newUserData);
        
        // Update in localStorage
        try {
          const storedUser = JSON.parse(localStorage.getItem('user')) || {};
          localStorage.setItem('user', JSON.stringify({
            ...storedUser,
            profilePicture: e.target.result
          }));
        } catch (error) {
          console.error('Error saving profile picture:', error);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  
  // Handle dark mode toggle
  const handleToggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode.toString());
    
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };
  
  // Handle logout
  const handleLogout = () => {
    if (window.confirm('Are you sure you want to log out?')) {
      if (onLogout) {
        onLogout();
      }
      navigate('/login');
    }
  };
  
  // Handle notifications toggle
  const handleToggleNotifications = () => {
    const newState = !notificationsEnabled;
    setNotificationsEnabled(newState);
    localStorage.setItem('notifications', newState.toString());
  };

  // Handle account deletion
  const handleDeleteAccount = () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      // Perform deletion logic here
      localStorage.removeItem('user');
      if (onLogout) {
        onLogout();
      }
      navigate('/login');
    }
  };

  // Handle rating submission
  const handleRatingSubmit = () => {
    alert(`Thank you for rating our app with ${selectedRating} stars!`);
    setShowRatingPopup(false);
  };

  // Navigate to profile view
  const handleViewProfile = () => {
    navigate('/profile');
  };
  
  // Handle edit profile form submission
  const handleEditProfileSubmit = (e) => {
    e.preventDefault();
    
    // Update user data state
    const updatedUserData = {
      ...userData,
      ...editedUserData
    };
    setUserData(updatedUserData);
    
    // Save to localStorage
    try {
      const storedUser = JSON.parse(localStorage.getItem('user')) || {};
      localStorage.setItem('user', JSON.stringify({
        ...storedUser,
        ...editedUserData
      }));
      setShowEditProfilePopup(false);
    } catch (error) {
      console.error('Error saving profile data:', error);
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'} transition-all duration-300 pb-16`}>
      {/* Header */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-blue-500'} text-white p-4 flex items-center`}>
        <button 
          onClick={() => navigate('/home')}
          className="mr-4"
        >
          <FaArrowLeft size={20} />
        </button>
        <h1 className="text-xl font-medium">Settings</h1>
      </div>
      
      <div className="max-w-xl mx-auto">
        {/* User Profile Card */}
        <div className={`mx-4 mt-6 rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="relative h-40 bg-gradient-to-r from-blue-500 to-indigo-600">
            {/* Profile Picture */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
              <div className="relative">
                {userData.profilePicture ? (
                  <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden">
                    <img 
                      src={userData.profilePicture} 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-24 h-24 bg-gray-300 rounded-full border-4 border-white flex items-center justify-center text-blue-500">
                    <FaUser size={36} />
                  </div>
                )}
                <button 
                  className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-2 text-white"
                  onClick={() => fileInputRef.current.click()}
                >
                  <FaCamera size={14} />
                </button>
                <input 
                  type="file" 
                  ref={fileInputRef}
                  className="hidden"
                  accept="image/*"
                  onChange={handleProfilePictureChange}
                />
              </div>
            </div>
            
            {/* Edit Profile Button */}
            <button 
              className="absolute top-4 right-4 bg-white bg-opacity-20 rounded-full p-2 text-white hover:bg-opacity-30 transition"
              onClick={() => setShowEditProfilePopup(true)}
            >
              <FaEdit size={16} />
            </button>
          </div>
          
          {/* User Info */}
          <div className="pt-16 pb-6 px-6 text-center">
            <h2 className="text-2xl font-bold">{userData.username}</h2>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} flex items-center justify-center mt-1`}>
              <FaEnvelope className="mr-2" size={14} />
              {userData.email}
            </p>
            <div className="flex justify-center mt-3 space-x-4">
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} flex items-center`}>
                <FaGlobe className="mr-2" size={14} />
                {userData.country}
              </p>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} flex items-center`}>
                <FaMapMarkerAlt className="mr-2" size={14} />
                {userData.province}
              </p>
            </div>
          </div>
        </div>
      
        {/* Settings Sections */}
        <div className={`m-4 mt-6 rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          {/* Theme & Notifications Section */}
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className={`text-xl font-medium mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`}>Appearance & Notifications</h2>
            
            {/* Dark Mode Toggle */}
            <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-700">
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${darkMode ? 'bg-blue-400 bg-opacity-20 text-blue-400' : 'bg-blue-100 text-blue-500'}`}>
                  {darkMode ? <FaMoon size={18} /> : <FaSun size={18} />}
                </div>
                <span className="ml-4">{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
              </div>
              <div 
                className={`w-14 h-7 rounded-full p-1 cursor-pointer ${darkMode ? 'bg-blue-500' : 'bg-gray-300'}`}
                onClick={handleToggleDarkMode}
              >
                <div 
                  className={`bg-white w-5 h-5 rounded-full shadow-md transform duration-300 ease-in-out ${darkMode ? 'translate-x-7' : ''}`}
                />
              </div>
            </div>
            
            {/* Notifications Toggle */}
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${darkMode ? 'bg-purple-400 bg-opacity-20 text-purple-400' : 'bg-purple-100 text-purple-500'}`}>
                  <FaBell size={18} />
                </div>
                <span className="ml-4">Notifications</span>
              </div>
              <div 
                className={`w-14 h-7 rounded-full p-1 cursor-pointer ${notificationsEnabled ? 'bg-blue-500' : 'bg-gray-300'}`}
                onClick={handleToggleNotifications}
              >
                <div 
                  className={`bg-white w-5 h-5 rounded-full shadow-md transform duration-300 ease-in-out ${notificationsEnabled ? 'translate-x-7' : ''}`}
                />
              </div>
            </div>
          </div>
          
          {/* Other Options Section */}
          <div className="p-4">
            <h2 className={`text-xl font-medium mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`}>Options</h2>
            
            {/* Help Option */}
            <div 
              className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-700 cursor-pointer"
              onClick={() => window.open('https://help.anxietymanager.com', '_blank')}
            >
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${darkMode ? 'bg-green-400 bg-opacity-20 text-green-400' : 'bg-green-100 text-green-500'}`}>
                  <FaQuestionCircle size={18} />
                </div>
                <span className="ml-4">Help & Support</span>
              </div>
              <div className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            
            {/* Share App Option */}
            <div 
              className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-700 cursor-pointer"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: 'Anxiety Manager',
                    text: 'Check out this great app for managing anxiety!',
                    url: 'https://anxietymanager.com',
                  })
                } else {
                  alert('Share functionality not available on this device');
                }
              }}
            >
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${darkMode ? 'bg-teal-400 bg-opacity-20 text-teal-400' : 'bg-teal-100 text-teal-500'}`}>
                  <FaShare size={18} />
                </div>
                <span className="ml-4">Share With Friends</span>
              </div>
              <div className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            
            {/* Rate App Option */}
            <div 
              className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-700 cursor-pointer"
              onClick={() => setShowRatingPopup(true)}
            >
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${darkMode ? 'bg-yellow-400 bg-opacity-20 text-yellow-400' : 'bg-yellow-100 text-yellow-500'}`}>
                  <FaStar size={18} />
                </div>
                <span className="ml-4">Rate This App</span>
              </div>
              <div className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            
            {/* Delete Account Option */}
            <div 
              className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-700 cursor-pointer"
              onClick={handleDeleteAccount}
            >
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${darkMode ? 'bg-red-400 bg-opacity-20 text-red-400' : 'bg-red-100 text-red-500'}`}>
                  <FaTrash size={18} />
                </div>
                <span className="ml-4 text-red-500">Delete Account</span>
              </div>
              <div className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            
            {/* Logout Button */}
            <div className="mt-6 mb-2"> {/* Added mb-2 margin-bottom */}
              <button
                onClick={handleLogout}
                className={`w-full py-3 rounded-lg font-medium ${darkMode ? 'bg-red-500 hover:bg-red-600' : 'bg-red-500 hover:bg-red-600'} text-white transition duration-200`}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
        
        {/* App Version - Removed extra vertical margin */}
        <div className="p-2 text-center text-sm">
          <p className={darkMode ? 'text-gray-500' : 'text-gray-500'}>Anxiety Manager v1.0.0</p>
        </div>
      </div>

      {/* Rating Popup */}
      {showRatingPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className={`p-6 rounded-xl w-4/5 max-w-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h3 className="text-xl font-medium text-center mb-4">Rate Anxiety Manager</h3>
            <p className={`text-center mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>How would you rate your experience with our app?</p>
            
            <div className="flex justify-center space-x-3 mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  size={36}
                  className={`cursor-pointer ${selectedRating >= star ? 'text-yellow-400' : darkMode ? 'text-gray-600' : 'text-gray-300'}`}
                  onClick={() => setSelectedRating(star)}
                />
              ))}
            </div>
            
            <div className="flex justify-between">
              <button 
                className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700 text-white' : 'border border-gray-300 text-gray-700'}`}
                onClick={() => setShowRatingPopup(false)}
              >
                Cancel
              </button>
              <button 
                className={`px-4 py-2 bg-blue-500 text-white rounded-lg ${selectedRating === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
                onClick={handleRatingSubmit}
                disabled={selectedRating === 0}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Edit Profile Popup */}
      {showEditProfilePopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className={`p-6 rounded-xl w-4/5 max-w-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h3 className="text-xl font-medium text-center mb-4">Edit Profile</h3>
            
            <form onSubmit={handleEditProfileSubmit}>
              <div className="mb-4">
                <label className={`block mb-2 text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Username
                </label>
                <input 
                  type="text" 
                  value={editedUserData.username}
                  onChange={(e) => setEditedUserData({...editedUserData, username: e.target.value})}
                  className={`w-full px-3 py-2 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className={`block mb-2 text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Email
                </label>
                <input 
                  type="email" 
                  value={editedUserData.email}
                  onChange={(e) => setEditedUserData({...editedUserData, email: e.target.value})}
                  className={`w-full px-3 py-2 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className={`block mb-2 text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Country
                </label>
                <input 
                  type="text" 
                  value={editedUserData.country}
                  onChange={(e) => setEditedUserData({...editedUserData, country: e.target.value})}
                  className={`w-full px-3 py-2 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                />
              </div>
              
              <div className="mb-4">
                <label className={`block mb-2 text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Province/State
                </label>
                <input 
                  type="text" 
                  value={editedUserData.province}
                  onChange={(e) => setEditedUserData({...editedUserData, province: e.target.value})}
                  className={`w-full px-3 py-2 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                />
              </div>
              
              <div className="flex justify-between mt-6">
                <button 
                  type="button"
                  className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700 text-white' : 'border border-gray-300 text-gray-700'}`}
                  onClick={() => setShowEditProfilePopup(false)}
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;