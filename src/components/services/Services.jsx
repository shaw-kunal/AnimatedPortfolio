import React from 'react'
import "./services.scss"
import { motion } from "framer-motion"


const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    }
}

const Services = () => {



    const arr = [1, 2, 3, 4]
    return (
        <motion.div className='services'
        >
            <motion.div className="wrapper">
                <motion.div className="textContainer"
                    initial={{
                        x: -500,
                    }}
                    transition={{
                        duration: 2
                    }}

                    animate={{
                        x: 0,
                    }}
                >
                    <p>focus on helping your brand grow <br /> and move forward. </p>
                    <hr />
                </motion.div>
                <motion.div className="titleContainer"
                    initial={{
                        opacity: 0.1,
                        scale: 0.3

                    }}
                    transition={{ duration: 2 }}
                    whileInView={{
                        opacity: 1,
                        scale: 1
                    }}
                >
                    <div className="title">
                        <img src="/people.webp" alt="" />
                        <h1>
                            <motion.b
                                whileHover={{
                                    color: 'orange'
                                }}
                            >Unique </motion.b>ideas</h1>
                    </div>
                    <div className="title">
                        <h1><motion.b
                            whileHover={{
                                color: 'orange'
                            }}>For Your</motion.b> Buisness.</h1>
                        <button>WHAT WE DO?</button>
                    </div>
                </motion.div>
                <motion.div className="listContainer" >
                    {
                        arr.map((item, i) => (
                            <motion.div className="box"
                                key={i}
                                whileHover={{
                                    backgroundColor: 'lightgray',
                                    color: '#000',
                                }}
                            >
                                <motion.h1>Branding</motion.h1>
                                <motion.p>Lorem ipsum dolor sit amet consectetur in aspernatur provident at consectetur enim nam rem?</motion.p>
                                <motion.button>Go</motion.button>
                            </motion.div>
                        ))
                    }
                </motion.div>
            </motion.div>

        </motion.div >
    )
}

export default Services