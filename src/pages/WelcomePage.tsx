import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Target, TrendingUp, Users, Zap } from 'lucide-react';

const WelcomePage: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Target,
      title: 'Personalized Roadmaps',
      description: 'Get AI-powered career paths tailored to your background and goals'
    },
    {
      icon: TrendingUp,
      title: 'Progress Tracking',
      description: 'Monitor your growth with detailed analytics and milestone tracking'
    },
    {
      icon: Users,
      title: 'Expert Mentorship',
      description: 'Connect with industry professionals for guidance and networking'
    },
    {
      icon: Zap,
      title: 'Smart Recommendations',
      description: 'Receive curated resources and daily learning suggestions'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-2xl mb-8 shadow-2xl">
            <Target className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Welcome to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
              CareerPilot
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            AI Career Pathway helps you discover, plan, and achieve your career goals. 
            Get a personalized roadmap, track progress, and connect with experts to excel in your career journey.
          </p>

          {/* Main CTA */}
          <button
            onClick={() => navigate('/profile')}
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl text-lg"
          >
            LET'S START
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-600 transform hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg mb-4">
                <feature.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Career Growth Illustration */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Your Career Journey Starts Here
            </h3>
            
            {/* Timeline illustration */}
            <div className="flex items-center justify-center space-x-8 overflow-x-auto pb-4">
              {[
                { step: 1, title: 'Setup Profile', color: 'bg-blue-500' },
                { step: 2, title: 'Get Roadmap', color: 'bg-teal-500' },
                { step: 3, title: 'Track Progress', color: 'bg-green-500' },
                { step: 4, title: 'Achieve Goals', color: 'bg-purple-500' }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center min-w-0">
                  <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg mb-3`}>
                    {item.step}
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
                    {item.title}
                  </span>
                  {index < 3 && (
                    <ArrowRight className="w-6 h-6 text-gray-400 mt-2 hidden lg:block absolute transform translate-x-20" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;