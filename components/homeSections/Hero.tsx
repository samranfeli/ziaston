import Carousel from "../ui/Carousel";

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

    return (
        <section className="overflow-hidden">
            <Carousel
                items={items.map(item => ({imageUrl: item.imageUrl, title: item.text, imageAlt: item.imageAlt}))}
            />
        </section>
    )
}

export default Hero;