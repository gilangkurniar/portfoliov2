
type Props = {}

export default function Skill({ }: Props) {
    return (
        <div
            className="group relative flex cursor-pointer">
            <div className="grid grid-cols-3 md:grid-cols-4 gap-5">
                <img src="php.png" className="rounded-full border border-gray-600 object-cover w-20 h-20 md:w-24 md:h-24 filter" />
                <img src="ci.png" className="rounded-full border border-gray-600 object-cover w-20 h-20 md:w-24 md:h-24 filter" />
                <img src="laravel.png" className="rounded-full border border-gray-600 object-cover w-20 h-20 md:w-24 md:h-24 filter" />
                <img src="vite.png" className="rounded-full border border-gray-600 object-cover w-20 h-20 md:w-24 md:h-24 filter" />
                <img src="nextjs.png" className="rounded-full border border-gray-600 object-cover w-20 h-20 md:w-24 md:h-24 filter" />
                <img src="tailwind.png" className="rounded-full border border-gray-600 object-cover w-20 h-20 md:w-24 md:h-24 filter" />
                <img src="bootstrap.png" className="rounded-full border border-gray-600 object-cover w-20 h-20 md:w-24 md:h-24 filter" />
                <img src="figma.png" className="rounded-full border border-gray-600 object-cover w-20 h-20 md:w-24 md:h-24 filter" />
                <img src="linux.png" className="rounded-full border border-gray-600 object-cover w-20 h-20 md:w-24 md:h-24 filter" />
                <img src="mysql.png" className="rounded-full border border-gray-600 object-cover w-20 h-20 md:w-24 md:h-24 filter" />
            </div>
        </div>
    )
}