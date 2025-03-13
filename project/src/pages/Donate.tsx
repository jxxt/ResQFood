import React from 'react';
import { motion } from 'framer-motion';
import { BarChart } from 'lucide-react';

export default function Donate() {
  return (
    <div className="py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Donate Food</h1>
          <p className="text-lg text-gray-600">Your generosity can make a difference in someone's life</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Food Type
                </label>
                <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500">
                  <option value="">Select food type</option>
                  <option value="raw">Raw Materials (Rice, Grains, Pulses)</option>
                  <option value="cooked">Cooked Food (Burgers, Pizza, etc.)</option>
                  <option value="packaged">Packaged Food</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Quantity (in kg/pieces)
                </label>
                <input
                  type="number"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                  placeholder="Enter quantity"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Pickup Location
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                  placeholder="Enter address"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Pickup Time
                </label>
                <input
                  type="datetime-local"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Notes
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                  placeholder="Any special instructions or details about the food"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 transition-colors"
              >
                Submit Donation
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <BarChart className="h-6 w-6 text-emerald-600 mr-2" />
              Donation Statistics
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Food Donated by Area</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-32">Downtown</div>
                    <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-600" style={{ width: '75%' }}></div>
                    </div>
                    <div className="w-16 text-right">75%</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-32">Suburbs</div>
                    <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-600" style={{ width: '60%' }}></div>
                    </div>
                    <div className="w-16 text-right">60%</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-32">Rural</div>
                    <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-600" style={{ width: '40%' }}></div>
                    </div>
                    <div className="w-16 text-right">40%</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Recent Impact</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-emerald-600">1,234</div>
                    <div className="text-sm text-gray-600">Meals Donated</div>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-emerald-600">89%</div>
                    <div className="text-sm text-gray-600">Food Saved</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}