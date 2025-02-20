import React from 'react';
import { Shield, Brain, Cpu, Lock, LineChart, Users } from 'lucide-react';

function Platform() {
  return (
    <main className="py-16">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            The Complete AI Ethics Platform
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Everything you need to ensure your AI systems are ethical, compliant, and trustworthy.
          </p>
        </div>

        {/* Features */}
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* AI Assessment */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center">
                <Brain className="w-10 h-10 text-indigo-600" />
                <h3 className="ml-4 text-2xl font-semibold">AI Assessment</h3>
              </div>
              <p className="mt-4 text-gray-600">
                Comprehensive analysis of your AI systems for bias, fairness, and ethical concerns.
                Get detailed reports and actionable recommendations.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center text-gray-600">
                  <Shield className="w-5 h-5 mr-2 text-green-500" />
                  Bias detection and mitigation
                </li>
                <li className="flex items-center text-gray-600">
                  <Shield className="w-5 h-5 mr-2 text-green-500" />
                  Fairness metrics analysis
                </li>
                <li className="flex items-center text-gray-600">
                  <Shield className="w-5 h-5 mr-2 text-green-500" />
                  Model transparency evaluation
                </li>
              </ul>
            </div>

            {/* Compliance Monitoring */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center">
                <Lock className="w-10 h-10 text-indigo-600" />
                <h3 className="ml-4 text-2xl font-semibold">Compliance Monitoring</h3>
              </div>
              <p className="mt-4 text-gray-600">
                Stay compliant with AI regulations and standards. Automated monitoring and
                reporting for various frameworks including EU AI Act and GDPR.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center text-gray-600">
                  <Shield className="w-5 h-5 mr-2 text-green-500" />
                  Real-time compliance tracking
                </li>
                <li className="flex items-center text-gray-600">
                  <Shield className="w-5 h-5 mr-2 text-green-500" />
                  Automated compliance reports
                </li>
                <li className="flex items-center text-gray-600">
                  <Shield className="w-5 h-5 mr-2 text-green-500" />
                  Regulatory updates and alerts
                </li>
              </ul>
            </div>

            {/* Performance Analytics */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center">
                <LineChart className="w-10 h-10 text-indigo-600" />
                <h3 className="ml-4 text-2xl font-semibold">Performance Analytics</h3>
              </div>
              <p className="mt-4 text-gray-600">
                Track your AI system's ethical performance over time. Monitor improvements
                and identify areas that need attention.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center text-gray-600">
                  <Shield className="w-5 h-5 mr-2 text-green-500" />
                  Ethics score tracking
                </li>
                <li className="flex items-center text-gray-600">
                  <Shield className="w-5 h-5 mr-2 text-green-500" />
                  Trend analysis
                </li>
                <li className="flex items-center text-gray-600">
                  <Shield className="w-5 h-5 mr-2 text-green-500" />
                  Performance benchmarking
                </li>
              </ul>
            </div>

            {/* Team Collaboration */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center">
                <Users className="w-10 h-10 text-indigo-600" />
                <h3 className="ml-4 text-2xl font-semibold">Team Collaboration</h3>
              </div>
              <p className="mt-4 text-gray-600">
                Work together with your team to improve AI ethics. Share insights,
                track progress, and maintain accountability.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center text-gray-600">
                  <Shield className="w-5 h-5 mr-2 text-green-500" />
                  Team dashboards
                </li>
                <li className="flex items-center text-gray-600">
                  <Shield className="w-5 h-5 mr-2 text-green-500" />
                  Progress tracking
                </li>
                <li className="flex items-center text-gray-600">
                  <Shield className="w-5 h-5 mr-2 text-green-500" />
                  Role-based access control
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <button className="px-8 py-4 bg-indigo-600 text-white rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors">
            Start Your Free Assessment
          </button>
          <p className="mt-4 text-gray-500">
            No credit card required. Get started in minutes.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Platform;