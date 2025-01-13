import Image from "next/image";
import Slider from "react-slick";

const Hero = () => {

    const items: {
        imageUrl: string;
        imageAlt: string;
        LinkUrl?: string;
        text: React.ReactNode;
    }[] = [
            {
                imageUrl: "/assets/images/home-carousel/p1.jpg",
                imageAlt: "محصولات ارگانیک، بدون واسطه، با عشق از باغهای محلی",
                text: <>
                    <h2 className="mb-4"> محصولات ارگانیک </h2>
                    <h2 className="mb-4 mr-10"> بدون واسطه </h2>
                    <h2 className="mr-20"> با عشق از باغهای محلی </h2>
                </>,
                LinkUrl: ""
            },
            {
                imageUrl: "/assets/images/home-carousel/p2.jpg",
                imageAlt: "زیتونهای خالص، از باغ زیتون تا سفره شما ",
                text: <>
                    <h2 className="mb-4"> زیتونهای خالص </h2>
                    <h2 className="mr-10"> از باغ زیتون تا سفره شما </h2>
                </>,
                LinkUrl: ""
            },
            {
                imageUrl: "/assets/images/home-carousel/p3.jpg",
                imageAlt: " زیتونهای محلی، طعم زندگی سالم ",
                text: <>
                    <h2 className="mb-4"> زیتونهای محلی </h2>
                    <h2 className="mr-10"> طعم زندگی سالم </h2>
                </>,
                LinkUrl: ""
            }
        ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <section className="overflow-hidden">
            <Slider {...settings}>
                {items.map((item, index) => (
                    <div className="relative" key={item.imageUrl}>

                        <Image
                            src={item.imageUrl}
                            alt={item.imageAlt}
                            width={1200}
                            height={550}
                            className="w-full h-80 xl:h-550 object-cover"
                            priority={index === 1}
                        />

                        <div className="text-xl xl:text-4xl text-white font-bold absolute right-0 top-24 w-full text-right drop-shadow-lg">
                            <div className="max-width-container mx-auto px-5">
                                {item.text}
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    )
}

export default Hero;