import React from 'react';
import { Link } from 'react-router-dom';
import { Utensils, Heart, Home, MessageSquare, Phone, UserCircle } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-emerald-600 text-white py-4 px-6 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Utensils className="h-8 w-8" />
          <span className="text-2xl font-bold">ResQFood</span>
        </Link>
        
        <div className="flex items-center space-x-6">
          <Link to="/" className="flex items-center space-x-1 hover:text-emerald-200">
            <Home className="h-5 w-5" />
            <span>Home</span>
          </Link>
          <Link to="/donate" className="flex items-center space-x-1 hover:text-emerald-200">
            <Heart className="h-5 w-5" />
            <span>Donate Food</span>
          </Link>
          <Link to="/feedback" className="flex items-center space-x-1 hover:text-emerald-200">
            <MessageSquare className="h-5 w-5" />
            <span>Feedback</span>
          </Link>
          <Link to="/contact" className="flex items-center space-x-1 hover:text-emerald-200">
            <Phone className="h-5 w-5" />
            <span>Contact</span>
          </Link>
          <Link to="/login" className="flex items-center space-x-1 hover:text-emerald-200">
            <UserCircle className="h-5 w-5" />
            <span>Login</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}