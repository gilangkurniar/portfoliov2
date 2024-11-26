import { SocialIcon } from "react-social-icons"
import { motion } from "motion/react"

type Props = {}

export default function Header({ }: Props) {
    return (
        <header className="sticky top-0 mx-auto max-w-7xl px-5 z-20 flex flex-row justify-between">
            <motion.div
                initial={{
                    x: -200,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{ duration: 1 }}
                className="flex flex-row items-center w-28 h-28">
                <SocialIcon url="https://github.com/gilangkurniar" target="_blank" bgColor="transparent" fgColor="gray" />
                <SocialIcon url="https://instagram.com/codenamegkr" target="_blank" bgColor="transparent" fgColor="gray" />
                <SocialIcon url="https://x.com/gkrmdhn" target="_blank" bgColor="transparent" fgColor="gray" />
                <SocialIcon url="https://discord.com/users/444607292839690240" target="_blank" bgColor="transparent" fgColor="gray" />
            </motion.div>

            <motion.a
                initial={{
                    x: 200,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{ duration: 1 }}
                className="flex flex-row items-center" href="/">
                <img src="logo.png" className="w-12 h-6" alt="" />
            </motion.a>
        </header >
    )
}