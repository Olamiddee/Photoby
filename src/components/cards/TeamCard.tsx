import { Icon } from "@iconify/react"



export default function TeamCard({
    image,
    name
}: {
    image: string
    name: string
}) {
    return (
        <div className="flex flex-col gap-4">
            <img src={image} className="w-full h-70 lg:h-100 object-cover" />

            <div className="flex items-center justify-between">
                <p className="font-semibold text-sm uppercase">{name}</p>

                <div className="flex items-center gap-2.75">
                    <Icon icon="line-md:facebook" className="w-5 h-5 lg:w-6 lg:h-6 text-black cursor-pointer" />
                    <Icon icon="mynaui:x-twitter-solid" className="w-5 h-5 lg:w-6 lg:h-6 text-black cursor-pointer" />
                    <Icon icon="mdi:linkedin" className="w-5 h-5 lg:w-6 lg:h-6 text-black cursor-pointer" />
                </div>
            </div>
        </div>
    )
}