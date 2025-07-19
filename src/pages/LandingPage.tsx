import React from 'react'
import { Link } from 'react-router-dom'
import { Heart, Shield, Users, Smartphone, Globe, Star, ArrowRight, CheckCircle } from 'lucide-react'

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Heart className="h-8 w-8 text-purple-600" />
              <span className="text-2xl font-bold text-gray-900">AfriHealth</span>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/login" className="text-gray-600 hover:text-purple-600 transition-colors">
                Sign In
              </Link>
              <Link
                to="/register"
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Healthcare for
                <span className="text-purple-600"> Every African</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Access quality healthcare anywhere in Africa with our AI-powered platform. 
                Connect with verified doctors, manage your medical records securely, and get 
                personalized health guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/register"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  Start Your Health Journey
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/offline"
                  className="border border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <Smartphone size={20} />
                  Try Offline Mode
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop"
                alt="African healthcare professional"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">50,000+</p>
                    <p className="text-sm text-gray-600">Patients Served</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Healthcare Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform combines cutting-edge technology with local healthcare expertise 
              to provide accessible, quality care across Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-purple-50 p-8 rounded-2xl">
              <div className="bg-purple-600 p-3 rounded-full w-fit mb-4">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Health Assistant</h3>
              <p className="text-gray-600">
                Get instant health guidance, symptom analysis, and personalized recommendations 
                from our AI assistant trained on African health data.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-2xl">
              <div className="bg-blue-600 p-3 rounded-full w-fit mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Virtual Consultations</h3>
              <p className="text-gray-600">
                Connect with verified doctors across Africa through video calls, chat, or voice. 
                Filter by specialty, language, and availability.
              </p>
            </div>

            <div className="bg-green-50 p-8 rounded-2xl">
              <div className="bg-green-600 p-3 rounded-full w-fit mb-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Secure Medical Records</h3>
              <p className="text-gray-600">
                Your medical data is encrypted and stored securely. Access your records from 
                any hospital or clinic with your consent.
              </p>
            </div>

            <div className="bg-orange-50 p-8 rounded-2xl">
              <div className="bg-orange-600 p-3 rounded-full w-fit mb-4">
                <Smartphone className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Offline Access</h3>
              <p className="text-gray-600">
                Access essential features even with poor connectivity. SMS and USSD support 
                for rural areas with limited internet access.
              </p>
            </div>

            <div className="bg-indigo-50 p-8 rounded-2xl">
              <div className="bg-indigo-600 p-3 rounded-full w-fit mb-4">
                <Star className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Assurance</h3>
              <p className="text-gray-600">
                Rate and review your healthcare experience. Anonymous feedback system 
                ensures continuous improvement in care quality.
              </p>
            </div>

            <div className="bg-pink-50 p-8 rounded-2xl">
              <div className="bg-pink-600 p-3 rounded-full w-fit mb-4">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Pan-African Network</h3>
              <p className="text-gray-600">
                Connect with healthcare providers across Africa. Your medical records 
                travel with you wherever you go on the continent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">50K+</div>
              <div className="text-gray-600">Patients Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">2,500+</div>
              <div className="text-gray-600">Verified Doctors</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">15</div>
              <div className="text-gray-600">African Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-gray-600">Patient Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Healthcare Experience?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of Africans who are already experiencing better healthcare 
            through our platform. Start your journey today.
          </p>
          <Link
            to="/register"
            className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2 transition-colors"
          >
            Get Started Now
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="h-6 w-6 text-purple-400" />
                <span className="text-xl font-bold">AfriHealth</span>
              </div>
              <p className="text-gray-400">
                Democratizing healthcare access across Africa through technology and innovation.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/consultations" className="hover:text-white transition-colors">Consultations</Link></li>
                <li><Link to="/records" className="hover:text-white transition-colors">Medical Records</Link></li>
                <li><Link to="/offline" className="hover:text-white transition-colors">Offline Mode</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partners</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AfriHealth. All rights reserved. Built with ❤️ for Africa.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
