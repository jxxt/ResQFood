import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative min-h-[80vh] flex items-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://media.istockphoto.com/id/588607364/vector/food-bank-donation-concept-banner.jpg?s=612x612&w=0&k=20&c=YjrdIBpwCDczs2EO23cvjcOzmGfRx91dGUTFJe-OLsQ=)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl font-bold mb-6">
            Share Food, Share Love
          </h1>
          <p className="text-xl mb-8">
            Join us in our mission to reduce food waste and feed those in need.
            Your excess food can make a difference in someone's life today.
          </p>
          <Link
            to="/donate"
            className="inline-flex items-center bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition-colors"
          >
            Donate Food Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}