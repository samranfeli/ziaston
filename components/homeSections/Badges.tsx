import Image from "next/image";

const Badges = () => {
    const items : {
        title: string;
        description: string;
        iconUrl: string;
    }[] = [
        {
            title:"بالاترین کیفیت ", 
            description:"محصولات باغ زیتون با بالاترین کیفیت و مناسب ترین قیمت عرضه می شوند.",
            iconUrl:"/assets/images/badgeIcons/quality.svg"
        },
        {
            title:"100% ارگانیک", 
            description:"تمامی محصولات باغ زیتون از مزارع ارگانیک تهیه می شوند.",
            iconUrl:"/assets/images/badgeIcons/organic.svg"
        },
        {
            title:"ارسال به سراسر کشور", 
            description:"خرید خود را سریع و آسان درب منزل دریافت کنید.",
            iconUrl:"/assets/images/badgeIcons/delivery.svg"
        }
    ]
    return (
        <section className="px-5 py-14 lg:py-24 lg:pb-28 bg-gradient-to-r from-[#e6ebb0] to-[#d4fffb] ">
            <div className="max-width-container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {items.map(item => (
                        <div key={item.title} className="text-center xl:px-5">
                            <Image src={item.iconUrl} alt={item.title} width={80} height={80} className="h-14 lg:h-20 w-auto mx-auto block mb-3 lg:mb-6" />
                            <h3 className="block mb-2 text-lg lg:text-xl font-bold text-green1-800"> {item.title} </h3>
                            <p className="text-neutral-500 max-lg:text-sm"> {item.description} </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Badges;