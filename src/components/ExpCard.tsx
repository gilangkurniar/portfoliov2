import { motion } from "motion/react"

type Props = {}

export default function ExpCard({ }: Props) {
    return (
        <>
            <article className="flex flex-col roudned-lg items-center space-y-10 flex-shrink-0 w-[300px] md:w-[590px] snap-center bg-[#292929] p-10 mt-10">
                <motion.img
                    initial={{
                        y: -100,
                        opacity: 0
                    }}
                    transition={{ duration: 1.5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    src="stikom.png" className="w-24 h-24 rounded-full object-cover object-center" />

                <div className="px-0">
                    <h4 className="text-2xl font-light">Front-End Developer</h4>
                    <p className="font-bold text-2xl mt-1">UPT. SDNS STIKOM PGRI Banyuwangi (Intern)</p>
                    <div className="flex space-x-2 my-2 justify-center">
                        <img src="figma.png" className="h-10 w-10 rounded-full" />
                        <img src="nextjs.png" className="h-10 w-10 rounded-full" />
                    </div>
                    <p className="uppercase py-5 text-gray-300">Started work January, 2022 - Ended June, 2022</p>

                    <ul className="list-disc space-y-4 text-left text-sm">
                        <li>UI/UX design making using Figma</li>
                        <li>Implementation on web programming using NextJS</li>
                    </ul>
                </div>
            </article>
            <article className="flex flex-col roudned-lg items-center space-y-10 flex-shrink-0 w-[300px] md:w-[590px] snap-center bg-[#292929] p-10 mt-10">
                <motion.img
                    initial={{
                        y: -100,
                        opacity: 0
                    }}
                    transition={{ duration: 1.5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    src="bwi.jpg" className="w-24 h-24 rounded-full object-cover object-center" />

                <div className="px-0">
                    <h4 className="text-2xl font-light">Full Stack Developer</h4>
                    <p className="font-bold text-2xl mt-1">Kelurahan Tamanbaru Banyuwangi</p>
                    <div className="flex space-x-2 my-2 justify-center">
                        <img src="php.png" className="h-10 w-10 rounded-full" />
                        <img src="ci.png" className="h-10 w-10 rounded-full" />
                    </div>
                    <p className="uppercase py-5 text-gray-300">Started work July, 2022 - Ended June 2023</p>

                    <ul className="list-disc space-y-4 text-left text-sm">
                        <li>Building company profile website using PHP Native</li>
                        <li>Building some web based app using CodeIgniter</li>
                    </ul>
                </div>
            </article>
        </>
    )
}