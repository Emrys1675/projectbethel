import React from 'react'
import { Smartphone } from 'lucide-react'

const OfflineMode: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <Smartphone className="h-16 w-16 text-orange-600 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Offline Mode</h1>
        <p className="text-gray-600">Coming soon...</p>
      </div>
    </div>
  )
}

export default OfflineMode
