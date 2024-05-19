# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


// Step 1 : Install Framer Motion 
    npm i framer-motion

// step 2 : import Framer Motion    
    import { motion } from "framer-motion"

// Step 3 : Add motion.element 
    <motion.div>Box</motion.div>

// Step 4 : To make drag / floating -> drag 
     <motion.div drag >Box</motion.div>

// Step 5 : To set boundary -> dragConstraints 
     <motion.div drag dragConstraints >Box</motion.div>

// Step 6 : To make size increase -> whileDrag(scale) 
     <motion.div drag dragConstraints whileDrag({scale:1.3}) >Box</motion.div>
