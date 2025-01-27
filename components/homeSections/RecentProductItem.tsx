import Image from "next/image";
import Link from "next/link";
import { ProductItemType } from "@/types/woo";
import { numberWithCommas } from "@/helpers";
import { useState } from "react";
import Loading from "../ui/icons/Loading";

type Props = {
    product: ProductItemType;
}

const RecentProductItem: React.FC<Props> = props => {

    const [loading, setLoading] = useState<boolean>(false);

    const { product } = props;

    return (
        <div
            className="border group bg-white w-full sm:w-48 lg:w-60 xl:w-80 max-w-full"
        >
            <div className="relative overflow-hidden md:mt-5 xl:mt-10 pt-5">
                <Image
                    src={product.images[0]?.src || ""}
                    alt={product.images[0]?.alt || product.name || ""}
                    width={382}
                    height={240}
                    className="w-full h-40 lg:h-60 object-contain scale-110 md:group-hover:scale-125 transition-all"
                />

                {product.images[1]?.src && (
                    <Image
                        src={product.images[1].src || ""}
                        alt={product.images[1]?.alt || product.name || ""}
                        width={382}
                        height={240}
                        className="max-sm:hidden absolute transition-all w-full h-full object-contain scale-110 group-hover:scale-125 top-0 left-0 right-0 bottom-0 opacity-0 transition-all group-hover:opacity-100"

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
                    href={`/products/${product.slug}`}
                    className="block bg-green1-800 px-5 py-2 text-white text-center max-md:text-sm mb-3"
                    onClick={() => { setLoading(true) }}
                >
                    جزییات  و ثبت سفارش
                    {loading && <Loading color="white" className="align-middle mx-2" />}

                </Link>
            </div>

        </div>
    )
}

export default RecentProductItem;