import Link from "next/link";
import { ProductItemType } from "@/types/woo";
import RecentProductItem from "./RecentProductItem";

type Props = {
    products?: ProductItemType[];
}

const RecentProducts: React.FC<Props> = props => {

    if (!props.products?.length) return null;

    return (
        <section className="py-10 lg:py-24 bg-[#99a14b0d] px-4">
            <div className="max-w-7xl mx-auto">
                <h2
                    className="text-lg font-bold md:text-4xl block text-center mb-8 lg:mb-12"
                >
                    محصولات <span className="text-green1-800 md:text-5xl"> باغ زیتون </span>
                </h2>

                <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-5 xl:gap-10">
                    {props.products.map(product => (
                        <RecentProductItem product={product} key={product.id} />
                    ))}
                </div>

                {props.products.length > 5 && <div className="text-center mt-6 lg:mt-14">
                    <Link
                        href="/products"
                        className="px-5 py-2 inline-block text-white rounded bg-green1-800 md:text-lg hover:bg-green1-600"
                    >
                        مشاهده همه محصولات
                    </Link>
                </div>}

            </div>
        </section>
    )
}

export default RecentProducts;