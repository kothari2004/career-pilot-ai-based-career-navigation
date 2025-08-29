import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';
import { 
  Bell, 
  Shield, 
  Globe, 
  Moon, 
  Sun, 
  Smartphone, 
  Mail, 
  Lock,
  Trash2,
  Download,
  Upload
} from 'lucide-react';

const Settings: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { user } = useAuth();
  
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    marketing: false
  });

  const [privacy, setPrivacy] = useState({
    profileVisible: true,
    showProgress: true,
    allowMessages: true
  });

  const toggleNotification = (key: keyof typeof notifications) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const togglePrivacy = (key: keyof typeof privacy) => {
    setPrivacy(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Settings</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Customize your CareerPilot experience
        </p>
      </div>

      <div className="space-y-8">
        {/* Appearance */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            {isDarkMode ? <Moon className="w-6 h-6 text-blue-600" /> : <Sun className="w-6 h-6 text-yellow-600" />}
            Appearance
          </h2>
          
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white">Theme Mode</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                Choose between light and dark mode
              </p>
            </div>
            <button
              onClick={toggleTheme}
              className={`relative w-16 h-8 rounded-full transition-all duration-200 ${
                isDarkMode ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <div
                className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all duration-200 transform ${
                  isDarkMode ? 'translate-x-9' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <Bell className="w-6 h-6 text-green-600" />
            Notifications
          </h2>
          
          <div className="space-y-4">
            {[
              { key: 'email' as const, label: 'Email Notifications', description: 'Receive updates via email', icon: Mail },
              { key: 'push' as const, label: 'Push Notifications', description: 'Browser and mobile notifications', icon: Smartphone },
              { key: 'sms' as const, label: 'SMS Notifications', description: 'Text message updates', icon: Smartphone },
              { key: 'marketing' as const, label: 'Marketing Communications', description: 'News and product updates', icon: Globe }
            ].map((item) => (
              <div key={item.key} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">{item.label}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
                  </div>
                </div>
                <button
                  onClick={() => toggleNotification(item.key)}
                  className={`relative w-12 h-6 rounded-full transition-all duration-200 ${
                    notifications[item.key] ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                >
                  <div
                    className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-all duration-200 transform ${
                      notifications[item.key] ? 'translate-x-6' : 'translate-x-0.5'
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Privacy */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <Shield className="w-6 h-6 text-purple-600" />
            Privacy & Security
          </h2>
          
          <div className="space-y-4">
            {[
              { key: 'profileVisible' as const, label: 'Public Profile', description: 'Make your profile visible to other users' },
              { key: 'showProgress' as const, label: 'Show Progress', description: 'Display your career progress publicly' },
              { key: 'allowMessages' as const, label: 'Allow Messages', description: 'Let other users send you messages' }
            ].map((item) => (
              <div key={item.key} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">{item.label}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
                </div>
                <button
                  onClick={() => togglePrivacy(item.key)}
                  className={`relative w-12 h-6 rounded-full transition-all duration-200 ${
                    privacy[item.key] ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                >
                  <div
                    className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-all duration-200 transform ${
                      privacy[item.key] ? 'translate-x-6' : 'translate-x-0.5'
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>

          {/* Security Actions */}
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Security Actions</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center gap-3 px-4 py-3 text-left bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-lg transition-colors">
                <Lock className="w-5 h-5 text-blue-600" />
                <span className="text-gray-900 dark:text-white">Change Password</span>
              </button>
              
              <button className="w-full flex items-center gap-3 px-4 py-3 text-left bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30 rounded-lg transition-colors">
                <Download className="w-5 h-5 text-green-600" />
                <span className="text-gray-900 dark:text-white">Export Data</span>
              </button>
            </div>
          </div>
        </div>

        {/* Account Management */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Account Management</h2>
          
          <div className="space-y-4">
            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-l-4 border-yellow-500">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Data Backup</h3>
              <p className="text-yellow-700 dark:text-yellow-300 text-sm mb-3">
                Download a copy of your career data and progress.
              </p>
              <button className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg transition-colors">
                <Download className="w-4 h-4" />
                Download Data
              </button>
            </div>

            <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500">
              <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">Delete Account</h3>
              <p className="text-red-700 dark:text-red-300 text-sm mb-3">
                Permanently delete your account and all associated data. This action cannot be undone.
              </p>
              <button className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors">
                <Trash2 className="w-4 h-4" />
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;