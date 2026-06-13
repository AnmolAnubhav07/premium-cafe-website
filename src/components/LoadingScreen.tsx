import React from 'react';
import { motion } from 'framer-motion';
import { Coffee } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-cream"
    >
      <div className="text-center">
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Coffee className="h-24 w-24 text-primary-green mx-auto" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-4xl font-playfair font-bold text-neutral-dark"
        >
          Brew & Bloom
        </motion.h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "200px" }}
          transition={{ duration: 2 }}
          className="mt-4 h-1 bg-primary-green mx-auto rounded-full"
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
