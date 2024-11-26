import { motion } from "motion/react"

type Props = {}

export default function About({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col relative h-screen text-center md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-28 uppercase tracking-[20px] text-gray-500 text-2xl">About Me</h3>

            <img
                src="me2.jpg" className="mt-40 flex-shrink-0 rounded-full h-40 w-40 mx-auto object-cover md:w-56 md:h-56"
            />

            <div
                className="space-y-10 px-0 md:px-10">
                <h4 className="text-4xl font-semibold text-center">Long story short...</h4>
                <p className="text-justify text-sm">
                    My full name is Gilang Kurnia Ramadhan, but you can just call me Gilang or Ramadhan. I'm bachelor of Informatics engineering and had more or less a year experience on web developer. Right now, I'm open to work, so if you wanna download my CV, just click <a href="https://drive.google.com/file/d/1URVF6msS89S-gIy2yPARN9g7KKq4ryOD/view?usp=sharing" target="_blank" className="underline font-semibold">here</a>. Feel free to contact me! we can do some projects together as a team, or maybe you want to hire me to work in your office, let me know!
                </p>
            </div>
        </motion.div>
    )
}