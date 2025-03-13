import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    
    try {
      // Use the API URL from the FastAPI backend
      const response = await fetch('http://127.0.0.1:8000/send-magic-link', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      if (response.ok) {
        setMessage('A magic link has been sent to your email.');
        setIsSuccess(true);
      } else {
        const errorData = await response.json();
        setMessage(errorData.detail || 'Failed to send magic link. Try again.');
        setIsSuccess(false);
      }
    } catch (error) {
      setMessage('An error occurred. Make sure the API server is running.');
      setIsSuccess(false);
      console.error('Error:', error);
    }
  };

  // Check for magic link verification on page load
  useEffect(() => {
    async function verifyMagicLink() {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get('token');

      if (token) {
        try {
          const response = await fetch('http://127.0.0.1:8000/verify-magic-link', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token })
          });

          if (response.ok) {
            // Display verification success message
            setMessage('Verified! Redirecting...');
            setIsSuccess(true);
            
            // Redirect to the home page after successful verification
            // Using the URL that matches what the backend expects
            setTimeout(() => { window.location.href = 'http://localhost:5173'; }, 2000);
          } else {
            const errorData = await response.json();
            setMessage(errorData.detail || 'Invalid or expired link.');
            setIsSuccess(false);
          }
        } catch (error) {
          setMessage('Verification error. Make sure the API server is running.');
          setIsSuccess(false);
          console.error('Error:', error);
        }
      }
    }

    verifyMagicLink();
  }, []);

  return (
    <div className="min-h-[80vh] bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <Mail className="h-12 w-12 text-emerald-600" />
        </motion.div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to ResQFood
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Enter your email to receive a magic link
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-8 sm:mx-auto sm:w-full sm:max-w-md"
      >
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
              >
                Send Magic Link
              </button>
            </div>
          </form>

          {message && (
            <div className={`mt-4 text-center text-sm ${isSuccess ? 'text-emerald-600' : 'text-red-600'}`}>
              {message}
            </div>
          )}

          <div className="mt-6">
            <p className="text-center text-sm text-gray-600">
              Don't have an account? <a href="/signup" className="font-medium text-emerald-600 hover:text-emerald-500">Sign up</a>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}