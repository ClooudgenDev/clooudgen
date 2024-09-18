'use client'

import { motion } from 'framer-motion';

const ZoomIn = ({ children, scale = 0.9, once = true, duration = 1.2, }) => {
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

export default ZoomIn;