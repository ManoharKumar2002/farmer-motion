import React from 'react'
import { motion } from "framer-motion"

const Btn = ({boxRef}) => {
  return (
    <motion.div drag dragConstraints={boxRef} whileDrag={{scale:1.2}} className="w-60 h-72 bg-zinc-900 border-green-300 border-[2px] rounded-3xl flex items-center justify-center">
        <span className='text-2xl text-zinc-800 font-semibold bg-green-500 px-5 py-3 rounded-[10px]'>Box.</span>
    </motion.div>
  )
}

export default Btn ;