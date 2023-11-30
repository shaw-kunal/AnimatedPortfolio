import { motion } from "framer-motion"
import "./hero.scss"

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    },
    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity
        }
    }

}

const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants}
                    initial="initial"
                    animate="animate">
                    <motion.h2 variants={textVariants}>Kunal Kumar</motion.h2>
                    <motion.h1 variants={textVariants}>Web Developer and frontend developer</motion.h1>
                    <motion.div className="buttons" variants={textVariants}>
                        <motion.button >contact Me</motion.button>
                        <motion.a href="#" >
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            See the Latest Work
                        </motion.a>
                    </motion.div>
                    <motion.img variants={textVariants} src="/scroll.png" alt=""  animate="scrollButton"/>
                </motion.div>
            </div>
            <div className="slidingTextContainer">
                <marquee behavior="" direction=""> Writer COntent Creator Influencer
                </marquee>
            </div>
            <div className="imgContainer">
                <img src="/hero.png" alt="" />
            </div>


        </div>

    )
}

export default Hero