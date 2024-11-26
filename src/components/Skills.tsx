import Skill from "./Skill"
import { motion } from "motion/react"

type Props = {}

export default function Skills({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex relative flex-col text-center h-screen justify-center mx-auto items-center max-w-72 md:max-w-full">
            <h3 className="absolute top-28 uppercase tracking-[20px] text-gray-500 text-2xl">skills</h3>

            <h3 className="absolute top-40 uppercase tracking-[3px] text-gray-500 text-sm max-w-xl">hover over a skill for currency proviciency</h3>

            <div className="mt-40 md:mt-20">
                <Skill />
            </div>
        </motion.div>
    )
}