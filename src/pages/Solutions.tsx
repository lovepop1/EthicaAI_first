import React from 'react';
import { Lightbulb, Target, Puzzle, ArrowRight } from 'lucide-react';

function Solutions() {
  return (
    <main className="py-16">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            AI Ethics Solutions for Every Industry
          </h1>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            Tailored approaches to ensure ethical AI implementation across different sectors and use cases.
          </p>
        </div>

        {/* Industry Solutions */}
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Healthcare */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=500"
                alt="Healthcare"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-semibold text-gray-900">Healthcare</h3>
              <p className="mt-4 text-gray-600">
                Ensure patient privacy, fair treatment recommendations, and unbiased diagnostic systems.
              </p>
              <button className="mt-6 flex items-center text-indigo-600 hover:text-indigo-700">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>

            {/* Finance */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500"
                alt="Finance"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-semibold text-gray-900">Finance</h3>
              <p className="mt-4 text-gray-600">
                Implement fair lending practices and transparent risk assessment models.
              </p>
              <button className="mt-6 flex items-center text-indigo-600 hover:text-indigo-700">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>

            {/* Education */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=500"
                alt="Education"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-semibold text-gray-900">Education</h3>
              <p className="mt-4 text-gray-600">
                Create fair assessment systems and personalized learning experiences.
              </p>
              <button className="mt-6 flex items-center text-indigo-600 hover:text-indigo-700">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Common Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-indigo-600" />
                <h3 className="ml-4 text-xl font-semibold">Bias Detection & Mitigation</h3>
              </div>
              <p className="text-gray-600">
                Identify and eliminate biases in your AI models to ensure fair treatment for all users.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-gray-600">
                  <Lightbulb className="w-4 h-4 mr-2 text-green-500" />
                  Automated bias detection
                </li>
                <li className="flex items-center text-gray-600">
                  <Lightbulb className="w-4 h-4 mr-2 text-green-500" />
                  Mitigation strategies
                </li>
                <li className="flex items-center text-gray-600">
                  <Lightbulb className="w-4 h-4 mr-2 text-green-500" />
                  Continuous monitoring
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                <Puzzle className="w-8 h-8 text-indigo-600" />
                <h3 className="ml-4 text-xl font-semibold">Model Explainability</h3>
              </div>
              <p className="text-gray-600">
                Make your AI decisions transparent and understandable to all stakeholders.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-gray-600">
                  <Lightbulb className="w-4 h-4 mr-2 text-green-500" />
                  Decision explanations
                </li>
                <li className="flex items-center text-gray-600">
                  <Lightbulb className="w-4 h-4 mr-2 text-green-500" />
                  Feature importance
                </li>
                <li className="flex items-center text-gray-600">
                  <Lightbulb className="w-4 h-4 mr-2 text-green-500" />
                  Impact assessment
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white">Ready to Make Your AI More Ethical?</h2>
          <p className="mt-4 text-xl text-white opacity-90">
            Get started with our platform and ensure your AI systems are fair, transparent, and compliant.
          </p>
          <button className="mt-8 px-8 py-4 bg-white text-indigo-600 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors">
            Schedule a Demo
          </button>
        </div>
      </div>
    </main>
  );
}

export default Solutions;