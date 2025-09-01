import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import newsData from '../News.json';

const Navbar = () => {
  const [isSubjectsOpen, setIsSubjectsOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubjectClick = (subjectId) => {
    navigate(`/subject${subjectId}`);
    setIsSubjectsOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => navigate('/')}
          >
            <div className="text-2xl font-bold text-blue-800">
              Shah's University
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">
              About
            </a>
            
            {/* Subjects Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsSubjectsOpen(true)}
              onMouseLeave={() => setIsSubjectsOpen(false)}
            >
              <button className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium flex items-center">
                Subjects
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isSubjectsOpen && (
                <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-md shadow-lg border">
                  <div className="py-2 max-h-96 overflow-y-auto">
                    {newsData.map((subject) => (
                      <button
                        key={subject.id}
                        onClick={() => handleSubjectClick(subject.id)}
                        className="block w-full text-left px-4 py-2 hover:bg-blue-50 hover:text-blue-600 text-sm"
                      >
                        <div className="font-medium">{subject.subjectName}</div>
                        <div className="text-xs text-gray-500">{subject.department}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <a href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-blue-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;