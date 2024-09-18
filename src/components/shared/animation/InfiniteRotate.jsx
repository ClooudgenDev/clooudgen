'use client'

import React from 'react';
import { motion } from 'framer-motion';

const InfiniteRotate = ({children}) => {
    return (
        <motion.div  animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        style={{
            maxHeight:'fit'
        }}
>
            {children}
        </motion.div>
    );
};

export default InfiniteRotate;