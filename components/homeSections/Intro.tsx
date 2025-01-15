import Logo from "@/public/assets/Logo";
import Link from "next/link";

const Intro = () => {
    return (
        <section className="px-4 py-8 lg:pt-20 lg:pb-28 text-center">
            <Logo className="fill-green1-800 w-20 xl:w-32 h-auto object-contain inline-block mb-6 lg:mb-10" />
            <h2
                className="text-lg font-bold md:text-4xl block mb-6 lg:mb-10"
            >
                به <span className="text-green1-800 md:text-5xl"> باغ زیتون </span> خوش آمدید
            </h2>
            <p className="text-neutral-400 max-w-3xl mx-auto max-sm:text-sm text-center mb-8 lg:mb-10">
                باغ زیتون به تازگی فعالیتش رو تو عرضه محصولات طبیعی و ارگانیک شروع کرده. ما داریم تلاش میکنیم که تمام هموطنان عزیزمون در سراسر ایران بتونن به محصولات با کیفیت و بدون مواد شیمیایی دسترسی داشته باشن. محصولات باغ زیتون ما شامل زیتون انواع روغن زیتون و صابون زیتون هست.
            </p>
            <Link
                href="/products"
                className="px-5 py-2 inline-block text-white rounded bg-green1-800 md:text-lg hover:bg-green1-600"
            >
                محصولات ما
            </Link>
        </section>
    )
}

export default Intro;