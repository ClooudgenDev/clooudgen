"use client"
import React from 'react';
import { motion } from 'framer-motion';

const PageAnimation = ({ children }) => {
  return (
    <motion.div   initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}>
      {children}
    </motion.div>
  );
};

export default PageAnimation;
