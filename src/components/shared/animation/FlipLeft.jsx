'use client'
import React from 'react';
import { motion } from 'framer-motion';

const FlipLeft = ({ children, once = true, duration = 1.5 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, rotateY: -90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: 90 }}
            viewport={{ once: once }}
            transition={{ duration: duration }}
        >
            {children}
        </motion.div>
    );
};

export default FlipLeft;