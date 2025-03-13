import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import { Heart, Users, Clock, Award } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: <Heart className="h-12 w-12 text-emerald-600" />,
      title: 'Make a Difference',
      description: 'Your food donations directly help people in need within your community.'
    },
    {
      icon: <Users className="h-12 w-12 text-emerald-600" />,
      title: 'Community First',
      description: 'Building stronger communities through food sharing and caring.'
    },
    {
      icon: <Clock className="h-12 w-12 text-emerald-600" />,
      title: 'Quick & Easy',
      description: 'Simple process to donate food with our efficient pickup service.'
    },
    {
      icon: <Award className="h-12 w-12 text-emerald-600" />,
      title: 'Quality Assured',
      description: 'We ensure all food donations meet safety and quality standards.'
    }
  ];

  return (
    <div>
      <Hero />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose ResQFood?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're on a mission to eliminate food waste while helping those in need.
              Join us in making a difference in your community.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-lg bg-gray-50"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Impact So Far
              </h2>
              <div className="space-y-4">
                <p className="text-lg text-gray-600">
                  Since our inception, we've helped distribute over 100,000 meals to people in need,
                  reducing food waste and building stronger communities.
                </p>
                <p className="text-lg text-gray-600">
                  With partners across the city, we ensure your donations reach those who need them most,
                  making a real difference in people's lives.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-96"
            >
              <img
                src="https://www.epa.gov/system/files/styles/large/private/images/2023-10/wasted-food-scale-simple-square.jpg?itok=Lr_bnC0R"
                alt="Food donation impact"
                className="rounded-lg shadow-xl object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}