import { getproducts } from "@/actions/wooActions";
import RecentProducts from "@/components/homeSections/RecentProducts";
import { NextPage } from "next";
import parse from 'html-react-parser';
import { ProductItemType } from "@/types/woo";
import Image from "next/image";
import { numberWithCommas } from "@/helpers";

type Props = {
    productData: ProductItemType;
}

const Product: NextPage<Props> = props => {

    const { description, name, images, price, short_description } = props.productData;

    console.dir(props.productData);
    return (
        <section>
            <div className="max-width-container mx-auto px-5 py-10 px-5">
                <h2 className="text-xl xl:text-2xl font-bold mb-5"> {name} </h2>
                <div className="border flex gap-5">
                    {images?.map(image => (
                        <Image key={image.id} src={image.src} alt={image.alt || name || ""} className="w-60 h-60 object-contain" width={500} height={400} />
                    ))}
                </div>

                <div className="inserted-content my-10 text-blue-500">
                    {parse(short_description || "")}
                </div>
                <div className="inserted-content my-10">
                    {parse(description || "")}
                </div>
                <div>
                    {numberWithCommas(price || 0)}
                </div>
            </div>
        </section>
    );
}


export async function getServerSideProps(context: any) {

    const productResponse: any = await getproducts({ slug: context.query.slug });

    return (
        {
            props: {
                productData: productResponse?.data?.[0] || null,
            }
        }
    )
}


export default Product;