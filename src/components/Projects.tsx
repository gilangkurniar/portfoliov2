import { motion } from "motion/react"

type Props = {}

export default function Projects({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="h-screen relative flex overflow-hidden flex-col max-w-full justify-evenly mx-auto items-center z-0">
            <h3 className="absolute top-28 uppercase tracking-[20px] text-gray-500 text-2xl">Projects</h3>

            <div className="relative w-full flex mt-10 overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-500/20 scrollbar-thumb-[#F7AB0A]/80">
                <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 h-screen">
                    <img src="pekat.png" className="rounded-lg md:w-2/6" />

                    <div className="text-center space-y-5">
                        <h3 className="font-semibold text-2xl mt-10">Pengaduan Masyarakat</h3>
                        <p className="text-sm text-justify max-w-6xl">This is a public complaints website regarding to the road equipment facilities on the National Road in the BPTD Banten Region. Built with CodeIgniter Framework.</p>
                    </div>
                </div>
                <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 h-screen">
                    <img src="pariwisata.png" className="rounded-lg md:w-2/6" />

                    <div className="text-center space-y-5">
                        <h3 className="font-semibold text-2xl mt-10">Pariwisata Banyuwangi</h3>
                        <p className="text-sm text-justify max-w-6xl">This is the website of tourism destination of Banyuwangi that includes various destination option that can be discovered in Banyuwangi. Built with NextJS Framework.</p>
                    </div>
                </div>
                <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 h-screen">
                    <img src="kelurahan.png" className="rounded-lg md:w-2/6" />

                    <div className="text-center space-y-5">
                        <h3 className="font-semibold text-2xl mt-10">Kelurahan Tamanbaru Banyuwangi</h3>
                        <p className="text-sm text-justify max-w-6xl">This is the official website of Tamanbaru Banyuwangi Village. Includes company profile, information services, to MSME location. Built with PHP Native.</p>
                    </div>
                </div>
                <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 h-screen">
                    <img src="dtks.png" className="rounded-lg md:w-2/6" />

                    <div className="text-center space-y-5">
                        <h3 className="font-semibold text-2xl mt-10">SIM DTKS Tamanbaru</h3>
                        <p className="text-sm text-justify max-w-6xl">This is a web-based application for processing existing Integrated Social Welfare Data in the Tamanbaru Banyuwangi sub-district environment. Built with PHP Native.</p>
                    </div>
                </div>
                <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 h-screen">
                    <img src="rentcar.png" className="rounded-lg md:w-2/6" />

                    <div className="text-center space-y-5">
                        <h3 className="font-semibold text-2xl mt-10">RentCar</h3>
                        <p className="text-sm text-justify max-w-6xl">This is just a simple website for car rental, simply show the owner's car and order it by phone. Built with CodeIgniter Framework.</p>
                    </div>
                </div>
            </div>

            <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
        </motion.div>
    )
}