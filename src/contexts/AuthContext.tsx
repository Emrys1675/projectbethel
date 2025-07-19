import React, { createContext, useContext, useState, useEffect } from 'react'

interface User {
  id: string
  name: string
  email: string
  role: 'patient' | 'doctor' | 'admin'
  avatar?: string
  location?: string
  specialty?: string
  verified?: boolean
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  register: (userData: any) => Promise<void>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem('afrihealth_user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Mock user data based on email
    const mockUser: User = {
      id: '1',
      name: email.includes('doctor') ? 'Dr. Amara Okafor' : 'Kwame Asante',
      email,
      role: email.includes('doctor') ? 'doctor' : email.includes('admin') ? 'admin' : 'patient',
      avatar: `https://images.unsplash.com/photo-${email.includes('doctor') ? '1559839734-2b71ea197ec2' : '1507003211169-0a1dd7228f2d'}?w=150&h=150&fit=crop&crop=face`,
      location: 'Accra, Ghana',
      specialty: email.includes('doctor') ? 'General Medicine' : undefined,
      verified: email.includes('doctor')
    }
    
    setUser(mockUser)
    localStorage.setItem('afrihealth_user', JSON.stringify(mockUser))
    setIsLoading(false)
  }

  const register = async (userData: any) => {
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const newUser: User = {
      id: Date.now().toString(),
      ...userData,
      avatar: `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face`
    }
    
    setUser(newUser)
    localStorage.setItem('afrihealth_user', JSON.stringify(newUser))
    setIsLoading(false)
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('afrihealth_user')
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}
