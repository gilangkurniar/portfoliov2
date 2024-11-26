import { motion } from "motion/react"
import ExpCard from "./ExpCard"

type Props = {}

export default function Exp({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="h-screen flex relative overflow-hidden max-w-7xl flex-col md:flex-row px-10 justify-evenly mx-auto text-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Work Experience</h3>

            <div className="mt-32 w-full flex space-x-5 overflow-x-scroll overflow-y-hidden snap-x scrollbar scrollbar-track-gray-500/20 scrollbar-thumb-[#F7AB0A]/80">
                <ExpCard />
            </div>
        </motion.div>
    )
}