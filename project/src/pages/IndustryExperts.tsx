import React, { useState } from 'react';
import { MessageCircle, Star, MapPin, Briefcase, Crown, Filter, Search } from 'lucide-react';

interface Expert {
  id: string;
  name: string;
  role: string;
  company: string;
  experience: string;
  rating: number;
  sessions: number;
  specialty: string[];
  isPremium: boolean;
  price?: string;
  location: string;
  bio: string;
  image: string;
}

const IndustryExperts: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Software Engineering', 'Data Science', 'Design', 'Finance', 'Marketing', 'Product Management'];

  const experts: Expert[] = [
    {
      id: '1',
      name: 'Sarah Chen',
      role: 'Senior Software Engineer',
      company: 'Google',
      experience: '8 years',
      rating: 4.9,
      sessions: 145,
      specialty: ['React', 'System Design', 'Career Growth'],
      isPremium: false,
      price: 'Free',
      location: 'San Francisco, CA',
      bio: 'Passionate about helping developers grow their careers in big tech companies.',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '2',
      name: 'Michael Rodriguez',
      role: 'Data Science Director',
      company: 'Netflix',
      experience: '12 years',
      rating: 4.8,
      sessions: 89,
      specialty: ['Machine Learning', 'Python', 'Leadership'],
      isPremium: true,
      price: '$150/hr',
      location: 'Los Angeles, CA',
      bio: 'Leading data science teams and helping professionals transition into AI/ML roles.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '3',
      name: 'Emily Johnson',
      role: 'UX Design Lead',
      company: 'Airbnb',
      experience: '10 years',
      rating: 4.9,
      sessions: 203,
      specialty: ['User Research', 'Design Systems', 'Figma'],
      isPremium: false,
      price: 'Free',
      location: 'New York, NY',
      bio: 'Helping designers create impactful user experiences and advance their careers.',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '4',
      name: 'David Park',
      role: 'Product Manager',
      company: 'Microsoft',
      experience: '7 years',
      rating: 4.7,
      sessions: 67,
      specialty: ['Product Strategy', 'Agile', 'Analytics'],
      isPremium: true,
      price: '$120/hr',
      location: 'Seattle, WA',
      bio: 'Guiding professionals through product management career transitions.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '5',
      name: 'Lisa Thompson',
      role: 'DevOps Engineer',
      company: 'Amazon',
      experience: '9 years',
      rating: 4.8,
      sessions: 112,
      specialty: ['AWS', 'Docker', 'CI/CD'],
      isPremium: false,
      price: 'Free',
      location: 'Austin, TX',
      bio: 'Specialized in cloud infrastructure and helping engineers scale their DevOps skills.',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '6',
      name: 'James Wilson',
      role: 'AI Research Scientist',
      company: 'OpenAI',
      experience: '11 years',
      rating: 5.0,
      sessions: 34,
      specialty: ['Deep Learning', 'NLP', 'Research'],
      isPremium: true,
      price: '$200/hr',
      location: 'San Francisco, CA',
      bio: 'Leading AI research and mentoring next-generation AI professionals.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const filteredExperts = experts.filter(expert => {
    const matchesCategory = selectedCategory === 'All' || 
      (selectedCategory === 'Software Engineering' && (expert.role.includes('Software') || expert.role.includes('DevOps'))) ||
      (selectedCategory === 'Data Science' && (expert.role.includes('Data') || expert.role.includes('AI'))) ||
      (selectedCategory === 'Design' && expert.role.includes('Design')) ||
      (selectedCategory === 'Product Management' && expert.role.includes('Product'));
    
    const matchesSearch = expert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expert.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expert.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expert.specialty.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Industry Experts</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Connect with experienced professionals for mentorship and career guidance
        </p>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 mb-8">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search experts by name, role, or skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Experts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredExperts.map((expert) => (
          <div
            key={expert.id}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
          >
            {/* Expert Header */}
            <div className="flex items-start space-x-4 mb-4">
              <img
                src={expert.image}
                alt={expert.name}
                className="w-16 h-16 rounded-full object-cover shadow-lg"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
                    {expert.name}
                  </h3>
                  {expert.isPremium && (
                    <Crown className="w-4 h-4 text-yellow-500" />
                  )}
                </div>
                <p className="text-blue-600 dark:text-blue-400 font-medium text-sm">
                  {expert.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {expert.company}
                </p>
              </div>
            </div>

            {/* Expert Info */}
            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-300">Experience</span>
                <span className="font-medium text-gray-900 dark:text-white">{expert.experience}</span>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-300">Rating</span>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="font-medium text-gray-900 dark:text-white">{expert.rating}</span>
                  <span className="text-gray-500 dark:text-gray-400">({expert.sessions})</span>
                </div>
              </div>

              <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300">
                <MapPin className="w-4 h-4" />
                <span>{expert.location}</span>
              </div>
            </div>

            {/* Specialties */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {expert.specialty.slice(0, 3).map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded-md font-medium"
                  >
                    {skill}
                  </span>
                ))}
                {expert.specialty.length > 3 && (
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md">
                    +{expert.specialty.length - 3} more
                  </span>
                )}
              </div>
            </div>

            {/* Bio */}
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
              {expert.bio}
            </p>

            {/* Action Button */}
            <div className="flex items-center justify-between">
              <div className="text-lg font-bold">
                {expert.isPremium ? (
                  <span className="text-purple-600 dark:text-purple-400">{expert.price}</span>
                ) : (
                  <span className="text-green-600 dark:text-green-400">Free</span>
                )}
              </div>
              <button
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 ${
                  expert.isPremium
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg'
                    : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg'
                }`}
              >
                <MessageCircle className="w-4 h-4" />
                {expert.isPremium ? 'Book Session' : 'Chat Now'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredExperts.length === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No experts found</h3>
          <p className="text-gray-600 dark:text-gray-300">Try adjusting your search or filter criteria.</p>
        </div>
      )}
    </div>
  );
};

export default IndustryExperts;