import React from 'react';
import { Search, Star, Download, Users } from 'lucide-react';

function Marketplace() {
  return (
    <main className="py-16">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Ethical AI Marketplace
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Discover and share ethical AI solutions, best practices, and resources.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mt-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for solutions, templates, or resources..."
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Featured Solutions */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Featured Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Solution Card 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Bias Detection Kit</h3>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="ml-1 text-gray-600">4.8</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Complete toolkit for detecting and mitigating bias in ML models.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500">
                    <Download className="w-4 h-4 mr-1" />
                    <span>2.4k downloads</span>
                  </div>
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                    Get Access
                  </button>
                </div>
              </div>
            </div>

            {/* Solution Card 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Explainability Framework</h3>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="ml-1 text-gray-600">4.9</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Make AI decisions transparent and understandable for all stakeholders.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500">
                    <Download className="w-4 h-4 mr-1" />
                    <span>1.8k downloads</span>
                  </div>
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                    Get Access
                  </button>
                </div>
              </div>
            </div>

            {/* Solution Card 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Compliance Templates</h3>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="ml-1 text-gray-600">4.7</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Ready-to-use templates for EU AI Act and GDPR compliance.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500">
                    <Download className="w-4 h-4 mr-1" />
                    <span>3.1k downloads</span>
                  </div>
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                    Get Access
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Community Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-12 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold">Join Our Community</h2>
                <p className="mt-4 text-lg opacity-90">
                  Connect with other ethical AI practitioners, share knowledge, and stay updated.
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-4xl font-bold">5K+</div>
                  <div className="text-sm opacity-90">Members</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold">1K+</div>
                  <div className="text-sm opacity-90">Resources</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold">100+</div>
                  <div className="text-sm opacity-90">Contributors</div>
                </div>
              </div>
             </div>
            </div>
          </div>

        {/* Recent Activity */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Recent Community Activity</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center">
                <Users className="w-10 h-10 text-indigo-600" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">New Bias Detection Framework</h3>
                  <p className="text-gray-600">
                    Shared by Sarah Chen • Healthcare AI Ethics Group
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center">
                <Users className="w-10 h-10 text-indigo-600" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">EU AI Act Compliance Template</h3>
                  <p className="text-gray-600">
                    Shared by Marcus Rodriguez • AI Policy Team
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center">
                <Users className="w-10 h-10 text-indigo-600" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Model Explainability Workshop</h3>
                  <p className="text-gray-600">
                    Hosted by Dr. James Wilson • AI Ethics Lab
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Marketplace;