import React, { useRef } from 'react'
import "./parallax.scss"
import { motion, useScroll, useTransform } from "framer-motion"


const Parallax = ({ type }) => {

    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start']
    })




    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "250%"])
    const xBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const xBgStar = useTransform(scrollYProgress, [0, 1], ["0%", "120%"])




    return (
        <motion.div className='parallax'
            ref={ref}
            style={{
                background: type === "services" 
                    ? "Linear-gradient(180deg, #111132,#0c0c1d)"
                    : "Linear-gradient(180deg,#111132,#505064)"
            }}
        >
            <motion.h1 style={{ y: yText }}>{type === "services" ? "What we Do?" : "What we did?"}</motion.h1>
            <motion.div className="mountains"></motion.div>
            <motion.div style={
                {x: xBg,
                backgroundImage:`url(${
                    type==="services"?"/planets.png":"/sun.png"
                })`
                }}
                className="planets"></motion.div>
            <motion.div style={{ x: xBgStar }} className="stars"></motion.div>
        </motion.div>

    )
}

export default Parallax