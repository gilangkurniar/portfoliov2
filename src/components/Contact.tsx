import { motion } from "motion/react"
import { useForm, SubmitHandler } from "react-hook-form"

type Props = {}
type Inputs = {
    name: string
    email: string
    subject: string
    message: string
}

export default function Contact({ }: Props) {
    const {
        register,
        handleSubmit,
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:gilangkurniarmdhn@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}, ${formData.message} (${formData.email})`
    }

    return (
        <motion.div
            initial={{
                x: -200,
                opacity: 0
            }}
            transition={{
                duration: 1
            }}
            whileInView={{ opacity: 1, x: 0 }}
            className="h-screen flex relative flex-col items-center max-w-7xl px-10 justify-evenly mx-auto">
            <h3 className="absolute top-28 uppercase tracking-[20px] text-gray-500 text-2xl">contact</h3>

            <div className="flex flex-col space-y-10">
                <h4 className="text-center uppercase tracking-[5px] text-gray-500 text-sm max-w-2xl mt-14 md:mt-0">Contact me about your awesome project that we can build together!
                </h4>

                {/* <div className="space-y-5">
                    <div className="flex items-center space-x-5 justify-center">
                        <PhoneIcon className="w-7 h-7 animate-pulse" />
                        <p className="text-md">+62 851 5768 3044</p>
                    </div>
                    <div className="flex items-center space-x-5 justify-center">
                        <EnvelopeIcon className="w-7 h-7 animate-pulse" />
                        <p className="text-md">gilangkurniarmdhn@gmail.com</p>
                    </div>
                </div> */}
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 mx-auto">
                    <div className="space-y-2 md:space-y-0 md:space-x-2">
                        <input className="textinput md:w-auto w-full" type="text" {...register("name")} placeholder="Name" autoComplete="off" required />
                        <input className="textinput md:w-auto w-full" type="email" {...register("email")} placeholder="Email" autoComplete="off" required />
                    </div>

                    <input className="textinput" type="text" {...register("subject")} placeholder="Subject" autoComplete="off" required />

                    <textarea className="textinput" placeholder="Message..." {...register("message")}></textarea>
                    <button type="submit" className="bg-[#F7AB0A] py-5 px-10 rounded-sm text-black font-bold text-lg">Submit</button>
                </form>
            </div>
        </motion.div>
    )
}