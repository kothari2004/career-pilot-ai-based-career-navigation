import React, { useState } from 'react';
import { MessageSquare, Users, TrendingUp, Plus, Heart, MessageCircle, Share, Clock, Star, Award } from 'lucide-react';

interface Post {
  id: string;
  author: string;
  avatar: string;
  title: string;
  content: string;
  category: string;
  likes: number;
  comments: number;
  timeAgo: string;
  isLiked: boolean;
}

interface SuccessStory {
  id: string;
  name: string;
  avatar: string;
  fromRole: string;
  toRole: string;
  company: string;
  timeframe: string;
  story: string;
}

const Community: React.FC = () => {
  const [activeTab, setActiveTab] = useState('discussions');

  const discussions: Post[] = [
    {
      id: '1',
      author: 'Alex Kumar',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100',
      title: 'How to prepare for system design interviews?',
      content: 'I have interviews coming up at FAANG companies. Looking for advice on system design preparation. What resources worked best for you?',
      category: 'Software Engineering',
      likes: 24,
      comments: 8,
      timeAgo: '2 hours ago',
      isLiked: false
    },
    {
      id: '2',
      author: 'Maria Rodriguez',
      avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=100',
      title: 'Transitioning from Data Analyst to Data Scientist',
      content: 'Currently working as a Data Analyst and want to move into Data Science. What skills should I focus on? Any course recommendations?',
      category: 'Data Science',
      likes: 18,
      comments: 12,
      timeAgo: '4 hours ago',
      isLiked: true
    },
    {
      id: '3',
      author: 'John Chen',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100',
      title: 'Remote work tips for new developers',
      content: 'Just started my first remote developer job. Any tips for staying productive and building relationships with the team?',
      category: 'Career Growth',
      likes: 31,
      comments: 15,
      timeAgo: '6 hours ago',
      isLiked: false
    }
  ];

  const successStories: SuccessStory[] = [
    {
      id: '1',
      name: 'Sarah Kim',
      avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=100',
      fromRole: 'Marketing Coordinator',
      toRole: 'Product Manager',
      company: 'Spotify',
      timeframe: '8 months',
      story: 'CareerPilot helped me identify the skills gap and provided a clear roadmap. The expert mentorship sessions were invaluable in preparing for PM interviews.'
    },
    {
      id: '2',
      name: 'Michael Zhang',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100',
      fromRole: 'Junior Developer',
      toRole: 'Senior Software Engineer',
      company: 'Tesla',
      timeframe: '1.5 years',
      story: 'The personalized learning path and community support helped me level up my skills systematically. Now leading a team of 5 developers!'
    },
    {
      id: '3',
      name: 'Emma Johnson',
      avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=100',
      fromRole: 'Business Analyst',
      toRole: 'Data Scientist',
      company: 'Netflix',
      timeframe: '10 months',
      story: 'Made a complete career pivot with CareerPilot. The AI-generated roadmap and expert connections made what seemed impossible, achievable.'
    }
  ];

  const categories = ['All', 'Software Engineering', 'Data Science', 'Design', 'Product Management', 'Career Growth'];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Community</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Connect, learn, and grow with fellow professionals
          </p>
        </div>
        <button className="mt-4 sm:mt-0 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg">
          <Plus className="w-5 h-5" />
          New Post
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 mb-8">
        <div className="flex border-b border-gray-200 dark:border-gray-700">
          {[
            { id: 'discussions', label: 'Discussions', icon: MessageSquare },
            { id: 'networking', label: 'Networking', icon: Users },
            { id: 'success', label: 'Success Stories', icon: Award }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-4 font-semibold transition-all duration-200 ${
                activeTab === tab.id
                  ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content based on active tab */}
      {activeTab === 'discussions' && (
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 sticky top-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="w-full text-left px-3 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Discussion Posts */}
          <div className="lg:col-span-3 space-y-6">
            {discussions.map((post) => (
              <div
                key={post.id}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-200"
              >
                <div className="flex items-start space-x-4">
                  <img
                    src={post.avatar}
                    alt={post.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white">{post.author}</h4>
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded-md">
                        {post.category}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.timeAgo}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {post.content}
                    </p>

                    {/* Post Actions */}
                    <div className="flex items-center space-x-6 text-sm">
                      <button className={`flex items-center gap-2 transition-colors ${
                        post.isLiked ? 'text-red-500' : 'text-gray-500 dark:text-gray-400 hover:text-red-500'
                      }`}>
                        <Heart className={`w-4 h-4 ${post.isLiked ? 'fill-current' : ''}`} />
                        {post.likes}
                      </button>
                      
                      <button className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-blue-500 transition-colors">
                        <MessageCircle className="w-4 h-4" />
                        {post.comments}
                      </button>
                      
                      <button className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-green-500 transition-colors">
                        <Share className="w-4 h-4" />
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'networking' && (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
          <Users className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Find Your Study Buddies</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Connect with peers who share similar career goals. Collaborate on projects, study together, and support each other's growth.
          </p>
          <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg">
            <Users className="w-5 h-5" />
            Find Study Partners
          </button>
        </div>
      )}

      {activeTab === 'success' && (
        <div className="grid lg:grid-cols-2 gap-6">
          {successStories.map((story) => (
            <div
              key={story.id}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-200"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={story.avatar}
                  alt={story.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{story.name}</h3>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-500 dark:text-gray-400">{story.fromRole}</span>
                    <TrendingUp className="w-3 h-3 text-green-500" />
                    <span className="text-green-600 dark:text-green-400 font-medium">{story.toRole}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-700 dark:text-gray-300">Now at: <strong>{story.company}</strong></span>
                  <span className="text-green-600 dark:text-green-400 font-medium">{story.timeframe}</span>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                "{story.story}"
              </p>

              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-1 text-red-500 hover:text-red-600 transition-colors">
                    <Heart className="w-4 h-4" />
                    <span className="text-sm">Inspire</span>
                  </button>
                  <button className="flex items-center gap-1 text-blue-500 hover:text-blue-600 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-sm">Connect</span>
                  </button>
                </div>
                <Star className="w-5 h-5 text-yellow-500" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Community;