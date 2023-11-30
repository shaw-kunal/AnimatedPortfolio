import { useRef } from "react";
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
const items = [
    {
        id: 1,
        title: "React Component",
        img: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, eos atque asperiores, itaque quia nobis assumenda veniam quibusdam illum laudantium quae inventore! Eaque, reiciendis totam! Dignissimos, similique! Perferendis, ut eligendi.",
    },
    {
        id: 2,
        title: "Node.js Development",
        img: "https://images.pexels.com/photos/414860/pexels-photo-414860.jpeg?auto=compress&cs=tinysrgb&w=400",
        desc: "Building scalable and efficient server-side applicBuilding scalable and efficient server-side applications with Node.jsations with Node.js.",
    },
    {
        id: 3,
        title: "Frontend Frameworks",
        img: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=400",
        desc: "Exploring and mastering popular frontend frameworks like React, Angular, and Vue.Building scalable and efficient server-side applications with Node.js",
    },
    {
        id: 4,
        title: "Database Design",
        img: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=400",
        desc: "Designing and optimizing database structures for better performanceBuilding scalable and efficient server-side applications with Node.js.",
    },
    // Add more elements as needed
];


const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        // offset:["start start" ,"end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1],[-300,300])

    return (
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imgContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer"  style={{ y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section >
    )
}

const Portfolio = () => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    })

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    })



    return (
        <div className="portfolio" ref={ref} >

            <div className="progress">
                <h1>Feature Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {
                items.map((item, i) => (
                    <Single item={item} key={i} />
                ))
            }
        </div>
    )
}

export default Portfolio