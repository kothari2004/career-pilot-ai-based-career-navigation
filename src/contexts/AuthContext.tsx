import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  education: {
    tenth?: string;
    twelfth?: string;
    diploma?: string;
    ug?: string;
    pg?: string;
  };
  careerAspiration?: string;
  currentQualification?: string;
  certifications?: string[];
  skills?: string[];
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (userData: Partial<User> & { password: string }) => Promise<boolean>;
  logout: () => void;
  updateProfile: (userData: Partial<User>) => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check for stored authentication
    const storedUser = localStorage.getItem('careerpilot_user');
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUser(userData);
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Mock authentication - in real app, this would call an API
    const mockUser: User = {
      id: '1',
      name: 'John Doe',
      email: email,
      education: {},
      careerAspiration: 'Software Engineer',
      skills: ['JavaScript', 'React', 'Node.js']
    };

    setUser(mockUser);
    setIsAuthenticated(true);
    localStorage.setItem('careerpilot_user', JSON.stringify(mockUser));
    return true;
  };

  const signup = async (userData: Partial<User> & { password: string }): Promise<boolean> => {
    // Mock signup - in real app, this would call an API
    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      name: userData.name || '',
      email: userData.email || '',
      phone: userData.phone,
      education: userData.education || {},
      careerAspiration: userData.careerAspiration,
      currentQualification: userData.currentQualification,
      certifications: userData.certifications || [],
      skills: userData.skills || []
    };

    setUser(newUser);
    setIsAuthenticated(true);
    localStorage.setItem('careerpilot_user', JSON.stringify(newUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('careerpilot_user');
  };

  const updateProfile = (userData: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...userData };
      setUser(updatedUser);
      localStorage.setItem('careerpilot_user', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      signup,
      logout,
      updateProfile,
      isAuthenticated
    }}>
      {children}
    </AuthContext.Provider>
  );
};