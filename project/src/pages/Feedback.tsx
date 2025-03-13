import React from 'react';
import { motion } from 'framer-motion';

export default function Feedback() {
  return (
    <div className="py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Feedback Matters</h1>
          <p className="text-lg text-gray-600">Help us improve our service by sharing your experience</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white p-8 rounded-lg shadow-lg"
        >
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Age
                </label>
                <input
                  type="number"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                How satisfied were you with our service?
              </label>
              <div className="space-y-2">
                {['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied', 'Very Dissatisfied'].map((option) => (
                  <div key={option} className="flex items-center">
                    <input
                      type="radio"
                      name="satisfaction"
                      value={option}
                      className="h-4 w-4 text-emerald-600 focus:ring-emerald-500"
                    />
                    <label className="ml-2 text-gray-700">{option}</label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Which aspects of our service did you find most valuable?
              </label>
              <div className="space-y-2">
                {[
                  'Easy donation process',
                  'Quick pickup service',
                  'Friendly staff',
                  'Regular updates',
                  'Impact tracking'
                ].map((option) => (
                  <div key={option} className="flex items-center">
                    <input
                      type="checkbox"
                      value={option}
                      className="h-4 w-4 text-emerald-600 focus:ring-emerald-500"
                    />
                    <label className="ml-2 text-gray-700">{option}</label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Any additional comments or suggestions?
              </label>
              <textarea
                rows={4}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 transition-colors"
            >
              Submit Feedback
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}