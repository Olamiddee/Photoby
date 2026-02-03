export default function NewsDataCard({
    date,
    title,
    imageUrl
}: {
    date: string
    title: string
    imageUrl: string    
}) {
    return (
        <div className="flex flex-col gap-2 lg:gap-4">
            <img src={imageUrl} className="w-full h-100 lg:h-100 " />

            <div className="flex flex-col gap-2 lg:gap-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 lg:gap-1.25">
                        <div className="w-1 h-1 lg:w-2 lg:h-2 rounded-full bg-black" />
                        <p className="font-semibold text-sm">PRESS</p>
                    </div>
                    <p className="font-semibold text-sm">{date}</p>
                </div>
                <div className="w-full border border-black" />
                <p className="font-semibold text-lg lg:text-2xl uppercase">{title}</p>
            </div>
        </div>
    )
}