'use client'

import { motion } from 'framer-motion';

const ZoomOut = ({ children, scale = 1.1, once = true, duration = 1.2 }) => {
    return (
        <motion.div
            initial={{ scale: scale }}
            whileInView={{ scale: 1 }}
            viewport={{ once: once }}
            transition={{ duration: duration }}
        >
            {children}
        </motion.div>
    );
};

export default ZoomOut;