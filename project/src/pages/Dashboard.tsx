import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Target, TrendingUp, Users, BookOpen, Award, Calendar, ArrowRight, Plus } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const stats = [
    { label: 'Career Progress', value: '67%', icon: TrendingUp, color: 'bg-blue-500' },
    { label: 'Skills Acquired', value: '12', icon: Award, color: 'bg-green-500' },
    { label: 'Expert Sessions', value: '3', icon: Users, color: 'bg-purple-500' },
    { label: 'Days Active', value: '28', icon: Calendar, color: 'bg-orange-500' }
  ];

  const recentActivities = [
    { type: 'completed', title: 'Completed JavaScript Fundamentals', date: '2 days ago' },
    { type: 'milestone', title: 'Reached 50% Career Progress', date: '1 week ago' },
    { type: 'expert', title: 'Mentorship session with Sarah Chen', date: '1 week ago' },
    { type: 'resource', title: 'Added React.js to learning path', date: '2 weeks ago' }
  ];

  const dailySuggestions = [
    'Complete 2 LeetCode problems on Arrays',
    'Read about React Hooks documentation',
    'Practice CSS Grid layouts for 30 minutes',
    'Join the Frontend Developers community discussion'
  ];

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Welcome back, {user?.name?.split(' ')[0] || 'there'}! 👋
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Ready to continue your journey to become a {user?.careerAspiration || 'professional'}?
          </p>
        </div>
        <button
          onClick={() => navigate('/career-path')}
          className="mt-4 sm:mt-0 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
        >
          <Plus className="w-5 h-5" />
          Update Career Path
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-300 text-sm font-medium">
                  {stat.label}
                </p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white mt-1">
                  {stat.value}
                </p>
              </div>
              <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Current Goals & Progress */}
        <div className="lg:col-span-2 space-y-6">
          {/* Career Goal Card */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <Target className="w-6 h-6 text-blue-600" />
                Current Career Goal
              </h2>
              <button
                onClick={() => navigate('/career-path')}
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 font-medium flex items-center gap-1 transition-colors"
              >
                View Path <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {user?.careerAspiration || 'Software Engineer'}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Current focus: Full-stack web development with React and Node.js
                </p>
              </div>
              
              {/* Progress Bar */}
              <div>
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-2">
                  <span>Overall Progress</span>
                  <span>67%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div className="bg-gradient-to-r from-blue-600 to-teal-600 h-3 rounded-full transition-all duration-300" style={{ width: '67%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Recent Activities</h2>
            <div className="space-y-3">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.type === 'completed' ? 'bg-green-500' :
                    activity.type === 'milestone' ? 'bg-blue-500' :
                    activity.type === 'expert' ? 'bg-purple-500' : 'bg-orange-500'
                  }`}></div>
                  <div className="flex-1">
                    <p className="text-gray-900 dark:text-white font-medium">{activity.title}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{activity.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Content */}
        <div className="space-y-6">
          {/* Daily Suggestions */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-teal-600" />
              Daily Suggestions
            </h2>
            <div className="space-y-3">
              {dailySuggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="mt-0.5 w-4 h-4 text-blue-600 bg-white dark:bg-gray-600 border-gray-300 dark:border-gray-500 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
                  />
                  <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed">
                    {suggestion}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button
                onClick={() => navigate('/experts')}
                className="w-full flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg hover:from-purple-100 dark:hover:from-purple-900/30 hover:to-pink-100 dark:hover:to-pink-900/30 transition-all duration-200"
              >
                <span className="text-gray-900 dark:text-white font-medium">Book Expert Session</span>
                <ArrowRight className="w-4 h-4 text-gray-600 dark:text-gray-300" />
              </button>
              
              <button
                onClick={() => navigate('/community')}
                className="w-full flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 rounded-lg hover:from-blue-100 dark:hover:from-blue-900/30 hover:to-teal-100 dark:hover:to-teal-900/30 transition-all duration-200"
              >
                <span className="text-gray-900 dark:text-white font-medium">Join Community</span>
                <ArrowRight className="w-4 h-4 text-gray-600 dark:text-gray-300" />
              </button>
              
              <button
                onClick={() => navigate('/profile')}
                className="w-full flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg hover:from-green-100 dark:hover:from-green-900/30 hover:to-emerald-100 dark:hover:to-emerald-900/30 transition-all duration-200"
              >
                <span className="text-gray-900 dark:text-white font-medium">Update Profile</span>
                <ArrowRight className="w-4 h-4 text-gray-600 dark:text-gray-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;