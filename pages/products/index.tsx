import { NextPage } from "next";
import { ProductItemType } from "@/types/woo";
import { getproducts } from "@/actions/wooActions";
import RecentProductItem from "@/components/homeSections/RecentProductItem";

type Props = {
    products?: ProductItemType[];
}

const Products: NextPage<Props> = props => {

    return (
        <section className="py-10 lg:py-24 bg-[#99a14b0d] px-4">
            <div className="max-w-7xl mx-auto">
                <h2
                    className="text-lg font-bold md:text-4xl block text-center mb-8 lg:mb-12"
                >
                    محصولات <span className="text-green1-800 md:text-5xl"> باغ زیتون </span>
                </h2>

                <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-5 xl:gap-10">
                    {props.products?.map(product => (
                        <RecentProductItem product={product} key={product.id} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export async function getStaticProps() {

    const products: any = await getproducts({ per_page: 30, page: 1 });

    return ({
        props: {
            products: products?.data || null
        },
        revalidate: 3600
    })
}


export default Products;