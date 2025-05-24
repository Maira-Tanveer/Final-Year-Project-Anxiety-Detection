// src/Components/InstructionPopup.jsx
import { useState } from 'react';

const InstructionPopup = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;
  
  const steps = [
    {
      title: "Welcome to Our App!",
      content: "We're excited to have you here. This brief tutorial will help you get familiar with the platform.",
      icon: (
        <svg className="w-12 h-12 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      title: "Explore Your Dashboard",
      content: "Your dashboard provides an overview of your account. Here you can manage your profile and access all available features.",
      icon: (
        <svg className="w-12 h-12 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      title: "You're All Set!",
      content: "Congratulations! You're now ready to use our app. If you need help at any time, click the help icon in the menu.",
      icon: (
        <svg className="w-12 h-12 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];
  
  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      onClose();
    }
  };
  
  const handleSkip = () => {
    onClose();
  };
  
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" 
        onClick={handleSkip}
      ></div>
      
      {/* Modal */}
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md mx-auto overflow-hidden">
          {/* Progress bar */}
          <div className="h-1 bg-gray-200">
            <div 
              className="h-1 bg-gradient-to-r from-violet-500 to-indigo-600 transition-all duration-300 ease-in-out"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
          
          <div className="px-6 py-8">
            {/* Step content */}
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-indigo-50 mb-6">
                {steps[currentStep - 1].icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {steps[currentStep - 1].title}
              </h3>
              
              <p className="text-gray-600 mb-8 px-4">
                {steps[currentStep - 1].content}
              </p>
              
              {/* Step indicators */}
              <div className="flex justify-center space-x-2 mb-8">
                {Array.from({ length: totalSteps }).map((_, index) => (
                  <div 
                    key={index}
                    className={`h-2 w-2 rounded-full ${
                      currentStep === index + 1 
                        ? 'bg-indigo-600' 
                        : currentStep > index + 1 
                          ? 'bg-indigo-400' 
                          : 'bg-gray-300'
                    }`}
                  ></div>
                ))}
              </div>
              
              {/* Navigation buttons */}
              <div className="flex justify-between">
                <button
                  onClick={handleSkip}
                  className="py-2 px-4 text-sm font-medium text-gray-600 hover:text-gray-900 focus:outline-none"
                >
                  Skip
                </button>
                
                <button
                  onClick={handleNext}
                  className="py-2 px-6 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white text-sm font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
                >
                  {currentStep === totalSteps ? 'Get Started' : 'Next'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructionPopup;