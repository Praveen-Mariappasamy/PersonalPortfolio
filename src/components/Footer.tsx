import React from 'react';
import { Heart, Coffee } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Let's Work Together
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            I'm always interested in new opportunities and interesting projects.
          </p>
          <a
            href="mailto:praveenmariappan23@gmail.com"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200"
          >
            Get In Touch
          </a>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
          <p className="text-gray-500 dark:text-gray-400 flex items-center justify-center gap-2 flex-wrap">
            <span>© {currentYear} Praveen. Made with</span>
            <Heart size={16} className="text-red-500" />
            <span>and</span>
            <Coffee size={16} className="text-amber-600" />
            <span>All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}