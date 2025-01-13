import Image from "next/image";
import Link from "next/link";
import { ProductItemType } from "@/types/woo";
import { numberWithCommas } from "@/helpers";

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

                <div className="flex flex-wrap justify-center gap-2 lg:gap-5 xl:gap-10">
                    {props.products.map(product => (
                        <div
                            key={product.id}
                            className="border group bg-white w-40 sm:w-48 lg:w-60 xl:w-80 max-w-full"
                        >
                            <div className="relative overflow-hidden md:mt-5 xl:mt-10">
                                <Image
                                    src={product.images[0]?.src || ""}
                                    alt={product.images[0]?.alt || product.name || ""}
                                    width={382}
                                    height={240}
                                    className="w-full h-36 lg:h-60 object-contain scale-110 group-hover:scale-125 transition-all"
                                />

                                {product.images[1]?.src && (
                                    <Image
                                        src={product.images[1].src || ""}
                                        alt={product.images[1]?.alt || product.name || ""}
                                        width={382}
                                        height={240}
                                        className="absolute transition-all w-full h-full object-contain scale-110 group-hover:scale-125 top-0 left-0 right-0 bottom-0 opacity-0 transition-all group-hover:opacity-100"

                                    />
                                )}
                            </div>
                            <div className="px-3 md:px-5">

                                <h3 className="block text-neutral-700 font-semibold md:text-lg mb-3">
                                    {product.name}
                                </h3>
                                {product.price && (
                                    <div className="mb-4 font-bold md:text-xl">
                                        {numberWithCommas(product.price)} <span className="text-sm"> تومان </span>
                                    </div>
                                )}

                                <Link
                                    href={`/product/${product.slug}`}
                                    prefetch={false}
                                    className="block bg-green1-800 px-5 py-2 text-white text-center max-md:text-sm mb-3"
                                >
                                    مشاهده جزییات
                                </Link>
                            </div>

                        </div>
                    ))}
                </div>

                {props.products.length > 5 && <div className="text-center mt-6 lg:mt-14">
                    <Link
                        href="/products"
                        prefetch={false}
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