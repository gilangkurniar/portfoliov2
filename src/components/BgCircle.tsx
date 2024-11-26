
type Props = {}

export default function BgCircle({ }: Props) {
    return (
        <div className="relative flex justify-center items-center">
            <div className="absolute border border-[aqua] rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
            <div className="absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52" />
            <div className="absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-52" />
        </div>
    )
}