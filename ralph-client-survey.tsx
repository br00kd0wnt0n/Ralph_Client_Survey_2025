
import React, { useState } from 'react';

// Vibe-coded survey form for RALPH 🚀
export default function RalphClientSurvey() {
  const [formData, setFormData] = useState({
    bestThing: '',
    worstThing: '',
    recommendation: '',
    rating: 5,
    changeOneThing: '',
    newServices: '',
    upcomingProjects: '',
    firstChoice: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Google Sheets API endpoint (you'll need to replace with your actual Google Apps Script Web App URL)
    const googleSheetsUrl = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL';

    try {
      const response = await fetch(googleSheetsUrl, {
        method: 'POST',
        mode: 'no-cors', // Note: this prevents seeing the response
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      // Assuming successful submission
      alert('Thank you for your feedback! Your survey has been submitted.');
      
      // Reset form after submission
      setFormData({
        bestThing: '',
        worstThing: '',
        recommendation: '',
        rating: 5,
        changeOneThing: '',
        newServices: '',
        upcomingProjects: '',
        firstChoice: ''
      });
    } catch (error) {
      console.error('Submission error:', error);
      alert('Oops! There was a problem submitting the survey. Please try again.');
    }
  };

  // Ralph brand colors
  const brandColors = {
    hero: '#EB008B',
    cyan: '#31BDBF',
    orange: '#F16524',
    green: '#44B658',
    yellow: '#FBC000'
  };

  return (
    <div 
      className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg"
      style={{ 
        borderTop: `5px solid ${brandColors.hero}`,
        borderBottom: `5px solid ${brandColors.hero}`
      }}
    >
      <div className="mb-6 text-center">
        {/* Ralph Logo - Increased prominence and visibility */}
        <div className="mx-auto mb-4 flex justify-center">
          <img 
            src="https://storage.googleapis.com/ralph-artifacts/ralph-logo.png" 
            alt="Ralph Logo" 
            className="max-h-32 object-contain"
            style={{ 
              zIndex: 10,
              position: 'relative',
              marginBottom: '1rem'
            }}
          />
        </div>
        <h1 
          className="text-2xl font-semibold mb-2"
          style={{ color: brandColors.hero }}
        >
          Client Feedback Survey
        </h1>
        <p className="text-gray-600 mt-2">We value your honest feedback</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Survey Questions */}
        {[
          { 
            name: 'bestThing', 
            label: "What aspects of working with Ralph have been most valuable to your business?",
            required: true
          },
          { 
            name: 'worstThing', 
            label: "What areas of our service could be improved?",
            required: false
          },
          { 
            name: 'recommendation', 
            label: "How likely are you to recommend Ralph to a colleague or business partner?",
            type: 'select',
            options: [
              'Very Likely',
              'Likely',
              'Neutral',
              'Unlikely',
              'Very Unlikely'
            ],
            required: true
          },
          { 
            name: 'rating', 
            label: "Please rate your overall satisfaction with Ralph's services (1-10):",
            type: 'range',
            required: true
          },
          { 
            name: 'changeOneThing', 
            label: "What is the single most important improvement we could make to our services?",
            required: false
          },
          { 
            name: 'newServices', 
            label: "Are there any additional services or capabilities you would like Ralph to offer?",
            required: false
          },
          { 
            name: 'upcomingProjects', 
            label: "Do you have any upcoming projects where Ralph could provide value? Please describe:",
            required: false
          },
          { 
            name: 'firstChoice', 
            label: "What factors would make Ralph your preferred partner for all relevant projects?",
            required: false
          }
        ].map((question, index) => (
          <div key={question.name}>
            <label 
              className="block text-sm font-medium text-gray-700 mb-1"
              style={{ color: brandColors.hero }}
            >
              {question.label}
            </label>
            
            {question.type === 'select' ? (
              <select
                name={question.name}
                value={formData[question.name]}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                style={{
                  borderColor: brandColors.hero,
                  focus: { borderColor: brandColors.cyan }
                }}
                required={question.required}
              >
                <option value="">Select an option</option>
                {question.options.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            ) : question.type === 'range' ? (
              <div>
                <input
                  type="range"
                  name={question.name}
                  min="1"
                  max="10"
                  value={formData[question.name]}
                  onChange={handleChange}
                  className="mt-1 w-full h-2 rounded-lg appearance-none cursor-pointer"
                  style={{ 
                    background: `linear-gradient(to right, ${brandColors.hero} 0%, ${brandColors.cyan} 100%)`,
                  }}
                />
                <div className="flex justify-between text-xs text-gray-600 mt-1">
                  <span>1 (Terrible)</span>
                  <span>10 (Amazing)</span>
                </div>
                <div 
                  className="text-center font-bold"
                  style={{ color: brandColors.hero }}
                >
                  {formData[question.name]}
                </div>
              </div>
            ) : (
              <textarea
                name={question.name}
                value={formData[question.name]}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                style={{
                  borderColor: brandColors.hero,
                  focus: { borderColor: brandColors.cyan }
                }}
                rows="3"
                required={question.required}
              />
            )}
          </div>
        ))}

        <div className="text-center mt-6">
          <button 
            type="submit" 
            className="px-6 py-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
            style={{
              backgroundColor: brandColors.hero,
              color: 'white',
              boxShadow: `0 4px 6px rgba(235, 0, 139, 0.3)`,
              hover: { backgroundColor: brandColors.cyan }
            }}
          >
            Submit Survey
          </button>
        </div>
      </form>

      {/* Subtle brand color accents */}
      <div className="mt-6 flex justify-center space-x-2">
        {Object.values(brandColors).map((color, index) => (
          <div 
            key={color} 
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  );
}
