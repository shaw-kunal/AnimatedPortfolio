import React from 'react'
import "./navbar.scss"
import {motion} from 'framer-motion'
import Sidebar from '../sidebar/sidebar'

const Navbar = () => {

  const variants = {
    visible:{
      opacity:1,
      x:20,
      transition:{ staggerChildren :0.3,type:"spring"},
    },
    hiddden:{ opacity:0}
  }
  return (
    <div className='navbar'>
        {/* Sidebar */}
        <Sidebar/>
        <div className="wrapper">
            <motion.span
            initial={{opacity:0,scale:0.5}}
            animate={{opacity:1,scale:1}}
            transition={{duration:0.5}}
            >My Profile</motion.span>

            <motion.div className="social"
            initial="hidden"
            variants={variants}
            animate="visible"
            >
                <motion.a   variants={variants}  href=""><img src="./facebook.png" alt="" /></motion.a>
                <motion.a   variants={variants} href=""><img src="./instagram.png" alt="" /></motion.a>
                <motion.a   variants={variants} href=""><img src="./youtube.png" alt="" /></motion.a>
                <motion.a   variants={variants} href=""><img src="./dribbble.png" alt="" /></motion.a>
            </motion.div>
        </div>
    </div>
  )
}

export default Navbar