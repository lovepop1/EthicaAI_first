import React from 'react';
import { Award, BarChart3, ShoppingBag, CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main>
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Ethical AI for a
            <span className="text-indigo-600"> Trustworthy Future</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Transform how your organization approaches AI ethics with our comprehensive platform for compliance, transparency, and trust.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Link to="/platform" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                Start Assessment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Ethical Impact Credits */}
          <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <Award className="w-12 h-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">Ethical Impact Credits</h3>
            <p className="mt-2 text-gray-500">
              Earn and trade credits for implementing ethical AI practices and maintaining high standards.
            </p>
          </div>

          {/* Compliance Monitoring */}
          <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <CheckCircle className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">Compliance Monitoring</h3>
            <p className="mt-2 text-gray-500">
              Automated monitoring and reporting for EU AI Act, GDPR, and other regulatory frameworks.
            </p>
          </div>

          {/* Ethical Marketplace */}
          <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <ShoppingBag className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">Ethical Marketplace</h3>
            <p className="mt-2 text-gray-500">
              Exchange ethical solutions, best practices, and collaborate with other organizations.
            </p>
          </div>
        </div>
      </div>

      {/* Analytics Dashboard Preview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Ethics Analytics Dashboard</h2>
            <BarChart3 className="w-8 h-8 text-indigo-600" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
              <div className="flex items-center justify-between">
                <span className="text-green-600 font-semibold">Compliance Score</span>
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <div className="mt-2 text-2xl font-bold text-gray-900">94%</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
              <div className="flex items-center justify-between">
                <span className="text-blue-600 font-semibold">EIC Balance</span>
                <Award className="w-5 h-5 text-blue-600" />
              </div>
              <div className="mt-2 text-2xl font-bold text-gray-900">2,450</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl">
              <div className="flex items-center justify-between">
                <span className="text-yellow-600 font-semibold">Pending Reviews</span>
                <AlertTriangle className="w-5 h-5 text-yellow-600" />
              </div>
              <div className="mt-2 text-2xl font-bold text-gray-900">3</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;