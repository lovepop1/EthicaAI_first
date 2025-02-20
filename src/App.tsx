import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Shield } from 'lucide-react';
import Home from './pages/Home';
import Platform from './pages/Platform';
import Solutions from './pages/Solutions';
import Marketplace from './pages/Marketplace';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-indigo-600" />
              <span className="text-2xl font-bold text-gray-900">EthicaAI</span>
            </Link>
            <div className="flex space-x-6">
              <Link to="/platform" className="text-gray-600 hover:text-gray-900">Platform</Link>
              <Link to="/solutions" className="text-gray-600 hover:text-gray-900">Solutions</Link>
              <Link to="/marketplace" className="text-gray-600 hover:text-gray-900">Marketplace</Link>
              <Link to="/platform" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                Get Started
              </Link>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/marketplace" element={<Marketplace />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-indigo-600" />
                <span className="text-xl font-bold text-gray-900">EthicaAI</span>
              </div>
              <div className="text-sm text-gray-500">
                © 2025 EthicaAI. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;