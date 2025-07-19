import React from 'react'
import { Shield } from 'lucide-react'

const AdminDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <Shield className="h-16 w-16 text-green-600 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
        <p className="text-gray-600">Coming soon...</p>
      </div>
    </div>
  )
}

export default AdminDashboard
