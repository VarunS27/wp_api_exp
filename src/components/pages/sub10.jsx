import React from 'react';
import newsData from '../News.json';
import Navbar from './Navbar';
import Footer from './footer';

const sub10 = () => {
  const subject = newsData.find(item => item.id === 10);

  if (!subject) {
    return <div>Subject not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-4">
                <span className="text-sm font-medium bg-blue-500 bg-opacity-50 px-3 py-1 rounded-full">
                  {subject.department}
                </span>
              </div>
              <h1 className="text-5xl font-bold mb-6">
                {subject.subjectName}
              </h1>
              <p className="text-blue-100 text-xl leading-relaxed">
                {subject.description}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white bg-opacity-20 p-6 rounded-lg text-center">
                <h3 className="text-sm font-semibold text-blue-500 uppercase mb-2">Faculty</h3>
                <p className="text-lg font-bold text-blue-600">{subject.facultyName}</p>
              </div>
              <div className="bg-white bg-opacity-20 p-6 rounded-lg text-center">
                <h3 className="text-sm font-semibold text-blue-500 uppercase mb-2">Credits</h3>
                <p className="text-lg font-bold text-blue-600">{subject.credits}</p>
              </div>
              <div className="bg-white bg-opacity-20 p-6 rounded-lg text-center">
                <h3 className="text-sm font-semibold text-blue-500 uppercase mb-2">Semester</h3>
                <p className="text-lg font-bold text-blue-600">{subject.semester}</p>
              </div>
              <div className="bg-white bg-opacity-20 p-6 rounded-lg text-center">
                <h3 className="text-sm font-semibold text-blue-500 uppercase mb-2">Duration</h3>
                <p className="text-lg font-bold text-blue-600">{subject.duration}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Chapters Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Course Chapters</h2>
            <p className="text-xl text-gray-600">Comprehensive curriculum designed for your academic success</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subject.chapters.map((chapter, index) => (
              <div key={index} className="group bg-blue-50 hover:bg-blue-100 transition-colors p-6 rounded-lg border-l-4 border-blue-600">
                <div className="flex items-start">
                  <span className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0 group-hover:bg-blue-700 transition-colors">
                    {index + 1}
                  </span>
                  <span className="text-gray-800 font-medium leading-relaxed">{chapter}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prerequisites & Learning Outcomes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Prerequisites */}
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Prerequisites</h2>
                <p className="text-lg text-gray-600">Essential knowledge required before enrollment</p>
              </div>
              <div className="space-y-4">
                {subject.prerequisites.map((prereq, index) => (
                  <div key={index} className="flex items-center p-4 bg-yellow-50 hover:bg-yellow-100 transition-colors rounded-lg shadow-sm">
                    <svg className="w-6 h-6 text-yellow-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.732 15.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span className="text-gray-800 font-medium">{prereq}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Outcomes */}
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Learning Outcomes</h2>
                <p className="text-lg text-gray-600">Skills and knowledge you'll gain from this course</p>
              </div>
              <div className="space-y-4">
                {subject.learningOutcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start p-4 bg-green-50 hover:bg-green-100 transition-colors rounded-lg shadow-sm">
                    <svg className="w-6 h-6 text-green-600 mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-800 leading-relaxed">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Assessment Methods</h2>
            <p className="text-xl text-gray-600">How your progress will be evaluated throughout the course</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subject.assessmentMethods.map((method, index) => (
              <div key={index} className="group bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 transition-all p-6 rounded-lg border-l-4 border-purple-600 text-center">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-700 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-purple-800 font-semibold text-lg">{method}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Contact Information</h2>
            <p className="text-xl text-gray-300">Get in touch with the course instructor</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-700 rounded-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-blue-400 font-medium">{subject.email}</p>
            </div>
            <div className="text-center p-8 bg-gray-700 rounded-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Office Hours</h3>
              <p className="text-gray-300">{subject.officeHours}</p>
            </div>
            <div className="text-center p-8 bg-gray-700 rounded-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Textbook</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{subject.textbook}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default sub10;