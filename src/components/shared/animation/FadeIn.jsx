'use client'

import { motion } from 'framer-motion'


const FadeIn = ({ children, once = true, duration = 1.3 }) => {
    return (
        <motion.div
            initial={{ opacity: 0.2, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: once }}
            transition={{ duration: duration }}>
            {children}
        </motion.div>
    );
};

export default FadeIn;