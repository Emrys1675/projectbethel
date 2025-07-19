import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { AIProvider } from './contexts/AIContext'
import LandingPage from './pages/LandingPage'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import Consultations from './pages/Consultations'
import MedicalRecords from './pages/MedicalRecords'
import AdminDashboard from './pages/AdminDashboard'
import OfflineMode from './pages/OfflineMode'
import AIAssistant from './components/AIAssistant'

function App() {
  return (
    <AuthProvider>
      <AIProvider>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/consultations" element={<Consultations />} />
              <Route path="/records" element={<MedicalRecords />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/offline" element={<OfflineMode />} />
            </Routes>
            <AIAssistant />
          </div>
        </Router>
      </AIProvider>
    </AuthProvider>
  )
}

export default App
