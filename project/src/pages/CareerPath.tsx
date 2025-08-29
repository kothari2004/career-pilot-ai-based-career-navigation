import React, { useState } from 'react';
import { CheckCircle2, Circle, RefreshCw, ExternalLink, BookOpen, Video, Code, Trophy } from 'lucide-react';

interface PathStep {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  estimatedTime: string;
  resources: {
    type: 'course' | 'article' | 'practice' | 'certification';
    title: string;
    platform: string;
    url: string;
  }[];
}

const CareerPath: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [careerSteps, setCareerSteps] = useState<PathStep[]>([
    {
      id: '1',
      title: 'Master JavaScript Fundamentals',
      description: 'Build a solid foundation in JavaScript including ES6+ features, async/await, and DOM manipulation.',
      completed: true,
      estimatedTime: '4 weeks',
      resources: [
        { type: 'course', title: 'JavaScript Complete Course', platform: 'Udemy', url: '#' },
        { type: 'practice', title: 'JavaScript Exercises', platform: 'Codewars', url: '#' },
        { type: 'article', title: 'Modern JavaScript Features', platform: 'MDN', url: '#' }
      ]
    },
    {
      id: '2',
      title: 'Learn React.js Framework',
      description: 'Master React hooks, state management, component lifecycle, and modern development patterns.',
      completed: true,
      estimatedTime: '6 weeks',
      resources: [
        { type: 'course', title: 'React - The Complete Guide', platform: 'Udemy', url: '#' },
        { type: 'practice', title: 'React Projects', platform: 'GitHub', url: '#' },
        { type: 'certification', title: 'React Developer Certification', platform: 'Meta', url: '#' }
      ]
    },
    {
      id: '3',
      title: 'Backend Development with Node.js',
      description: 'Learn server-side development, REST APIs, databases, and authentication systems.',
      completed: false,
      estimatedTime: '8 weeks',
      resources: [
        { type: 'course', title: 'Node.js Complete Course', platform: 'Coursera', url: '#' },
        { type: 'practice', title: 'API Development Practice', platform: 'LeetCode', url: '#' },
        { type: 'article', title: 'RESTful API Design', platform: 'Medium', url: '#' }
      ]
    },
    {
      id: '4',
      title: 'Database Management & Design',
      description: 'Master SQL, NoSQL databases, data modeling, and optimization techniques.',
      completed: false,
      estimatedTime: '4 weeks',
      resources: [
        { type: 'course', title: 'Database Design & SQL', platform: 'Coursera', url: '#' },
        { type: 'practice', title: 'SQL Challenges', platform: 'HackerRank', url: '#' }
      ]
    },
    {
      id: '5',
      title: 'Build Portfolio Projects',
      description: 'Create 3-5 full-stack projects showcasing your skills and deploy them online.',
      completed: false,
      estimatedTime: '10 weeks',
      resources: [
        { type: 'article', title: 'Portfolio Best Practices', platform: 'Dev.to', url: '#' },
        { type: 'practice', title: 'Project Ideas', platform: 'GitHub', url: '#' }
      ]
    }
  ]);

  const toggleStepCompletion = (stepId: string) => {
    setCareerSteps(steps =>
      steps.map(step =>
        step.id === stepId ? { ...step, completed: !step.completed } : step
      )
    );
  };

  const regeneratePath = async () => {
    setIsGenerating(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsGenerating(false);
  };

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'course': return Video;
      case 'article': return BookOpen;
      case 'practice': return Code;
      case 'certification': return Trophy;
      default: return BookOpen;
    }
  };

  const completedSteps = careerSteps.filter(step => step.completed).length;
  const totalSteps = careerSteps.length;
  const progressPercentage = Math.round((completedSteps / totalSteps) * 100);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Your Career Path</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            AI-generated roadmap to become a Software Engineer
          </p>
        </div>
        <button
          onClick={regeneratePath}
          disabled={isGenerating}
          className="mt-4 sm:mt-0 inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 disabled:bg-teal-400 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
        >
          <RefreshCw className={`w-5 h-5 ${isGenerating ? 'animate-spin' : ''}`} />
          {isGenerating ? 'Generating...' : 'Regenerate Path'}
        </button>
      </div>

      {/* Progress Overview */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Progress Overview</h2>
          <span className="text-2xl font-bold text-blue-600">{progressPercentage}%</span>
        </div>
        
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 mb-4">
          <div 
            className="bg-gradient-to-r from-blue-600 to-teal-600 h-4 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        
        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
          <span>{completedSteps} of {totalSteps} steps completed</span>
          <span>Estimated completion: 8 weeks remaining</span>
        </div>
      </div>

      {/* Career Steps Timeline */}
      <div className="space-y-6">
        {careerSteps.map((step, index) => (
          <div
            key={step.id}
            className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border transition-all duration-200 hover:shadow-xl transform hover:-translate-y-1 ${
              step.completed 
                ? 'border-green-200 dark:border-green-700 bg-green-50/50 dark:bg-green-900/10' 
                : 'border-gray-100 dark:border-gray-700'
            }`}
          >
            <div className="flex items-start space-x-4">
              {/* Step Number & Status */}
              <div className="flex flex-col items-center">
                <button
                  onClick={() => toggleStepCompletion(step.id)}
                  className="transition-all duration-200 hover:scale-110"
                >
                  {step.completed ? (
                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                  ) : (
                    <Circle className="w-8 h-8 text-gray-400 hover:text-blue-500" />
                  )}
                </button>
                {index < careerSteps.length - 1 && (
                  <div className={`w-0.5 h-16 mt-4 ${step.completed ? 'bg-green-300' : 'bg-gray-300 dark:bg-gray-600'}`}></div>
                )}
              </div>

              {/* Step Content */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-3">
                  <h3 className={`text-lg font-semibold ${
                    step.completed ? 'text-green-700 dark:text-green-300' : 'text-gray-900 dark:text-white'
                  }`}>
                    {step.title}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                    {step.estimatedTime}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {step.description}
                </p>

                {/* Resources */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Recommended Resources:</h4>
                  <div className="grid gap-2">
                    {step.resources.map((resource, resourceIndex) => {
                      const IconComponent = getResourceIcon(resource.type);
                      return (
                        <a
                          key={resourceIndex}
                          href={resource.url}
                          className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors group"
                        >
                          <IconComponent className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                              {resource.title}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              {resource.platform}
                            </p>
                          </div>
                          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerPath;