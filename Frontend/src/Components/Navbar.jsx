// src/Components/Navbar.jsx
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaBookMedical, FaShareAlt, FaCog } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);
  
  const tabs = [
    { name: 'Home', icon: FaHome, path: '/home' },
    { name: 'Recommendations', icon: FaBookMedical, path: '/recommendations' },
    { name: 'Assistant', icon: null, path: '/assistant', isCenter: true },
    { name: 'Settings', icon: FaCog, path: '/settings' }, // Changed from Goals to Settings
    { name: 'Share', icon: FaShareAlt, path: '/share' }
  ];
  
  // Handle tab click
  const handleTabClick = (path) => {
    setActiveTab(path);
  };
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-100 z-50">
      <div className="flex justify-around items-center h-16 px-2 relative">
        {tabs.map((tab) => (
          <Link
            key={tab.name}
            to={tab.path}
            className={`flex flex-col items-center justify-center ${
              tab.isCenter ? 'absolute left-1/2 transform -translate-x-1/2 -translate-y-6' : 'w-16'
            }`}
            onClick={() => handleTabClick(tab.path)}
          >
            {tab.isCenter ? (
              <div className="w-14 h-14 rounded-full bg-blue-400 flex items-center justify-center shadow-lg">
                <div className="text-2xl text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
                    <path d="M12 16c3.037 0 5.5-1.343 5.5-3h-11c0 1.657 2.463 3 5.5 3z"/>
                    <circle cx="9" cy="9.5" r="1.5"/>
                    <circle cx="15" cy="9.5" r="1.5"/>
                  </svg>
                </div>
              </div>
            ) : (
              <>
                <div
                  className={`text-xl ${
                    activeTab === tab.path ? 'text-blue-500' : 'text-gray-400'
                  }`}
                >
                  <tab.icon />
                </div>
                <p
                  className={`text-xs mt-1 ${
                    activeTab === tab.path ? 'text-blue-500' : 'text-gray-400'
                  }`}
                >
                  {tab.name}
                </p>
              </>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;