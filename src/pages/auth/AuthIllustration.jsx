import React from 'react';
import { motion } from 'framer-motion';

const AuthIllustration = () => {
  return (
    <div className="hidden lg:flex flex-col items-center justify-center bg-primary-dark w-1/2 p-12 relative overflow-hidden">
      {/* Abstract Animated Nature Shapes */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-primary rounded-full blur-3xl opacity-20"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [0, -45, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-primary-light rounded-full blur-3xl opacity-20"
      />

      <div className="relative z-10 text-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8 inline-flex p-6 bg-white/10 rounded-full backdrop-blur-md">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#52B788"/>
              <path d="M12 22V12" stroke="#F8FAF7" strokeWidth="2" strokeLinecap="round"/>
              <path d="M12 12L17 7" stroke="#F8FAF7" strokeWidth="2" strokeLinecap="round"/>
              <path d="M12 12L7 7" stroke="#F8FAF7" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <h1 className="text-5xl font-extrabold text-white mb-6">CarbonSync</h1>
          <p className="text-xl text-primary-light max-w-md mx-auto leading-relaxed">
            Join the community dedicated to tracking and reducing carbon footprints for a greener tomorrow.
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-12 text-primary-light/50 font-medium text-sm">
        © 2026 CarbonSync Platform. All rights reserved.
      </div>
    </div>
  );
};

export default AuthIllustration;
