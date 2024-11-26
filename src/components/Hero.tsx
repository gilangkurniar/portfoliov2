import { useTypewriter } from "react-simple-typewriter"
import { motion } from "motion/react"
import BgCircle from "./BgCircle"

type Props = {}

export default function Hero({ }: Props) {
    const [text] = useTypewriter({
        words: [
            "Hi, the name's Gilang",
            "I'm the learning-by-doing type of guy"
        ],
        loop: true,
        delaySpeed: 2000
    })
    return (
        <motion.div
            initial={{
                x: -200,
                opacity: 0
            }}
            transition={{
                duration: 1
            }}
            whileInView={{ opacity: 1, x: 0 }} className="h-screen flex flex-col space-y-10 items-center justify-center text-center overflow-hidden">
            <BgCircle />
            <img src="me.jpg" className="relative rounded-full h-32 w-32 mx-auto object-cover" alt="" />
            <div className="z-20 space-y-5">
                <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">Web Developer</h2>
                <h1 className="text-4xl font-semibold px-10">
                    <span className="mr-3">{text}</span>
                </h1>

                <div className="pt-5">
                    <a href="#about" className="herobtn">About</a>
                    <a href="#skills" className="herobtn">Skills</a>
                    <a href="#projects" className="herobtn">Projects</a>
                    <a href="#contact" className="herobtn">Contact</a>
                </div>
            </div>
        </motion.div >
    )
}