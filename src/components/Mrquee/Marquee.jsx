import { motion } from 'framer-motion';
import React from 'react';

const Marquee = () => {
  return (
    <div className='w-full py-10 bg-[#004d43] overflow-hidden rounded-tl-3xl rounded-tr-3xl'>
    <div className='flex flex-nowrap whitespace-nowrap border-t-2 border-b-2 text-white leading-none inset-0'>
      
      <motion.h1
        initial={{ x: "0" }}
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, ease:"linear", duration: 5 }}
        
        className='uppercase text-[24vw] font-bold tracking-tight pr-20 '
      >
        We Are ochi
      </motion.h1>
      <motion.h1
        initial={{ x: "0" }}
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, ease:"linear", duration: 5 }}
       
        className='uppercase text-[24vw]  font-bold tracking-tight pr-20'
      >
        We Are ochi
      </motion.h1>
      </div>
    
  </div>
  );
};

export default Marquee;