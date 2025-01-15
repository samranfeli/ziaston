import { getproducts } from "@/actions/wooActions";
import { NextPage } from "next";
import parse from 'html-react-parser';
import { ProductItemType } from "@/types/woo";
import { numberWithCommas } from "@/helpers";
import ProductImageGallery from "@/components/product-detail/ProductImageGallery";
import BreadCrumpt from "@/components/ui/BreadCrumpt";
import { useState } from "react";

type Props = {
    productData: ProductItemType;
}

const Product: NextPage<Props> = props => {

    const { productData } = props;

    const [amount, setAmount] = useState<number>(1);

    let amountOptions: {
        value: number;
        label: string;
    }[] = [];

    if(productData?.attributes?.[0].name && productData?.attributes?.[0].options?.length ){
        
        amountOptions = productData?.attributes[0].options.map(a => ({
            label: `${a} ${productData?.attributes?.[0].name}`,
            value: +a
        })) ;

        amountOptions.sort((b,a) => b.value - a.value);
    }

    return (
        <section>
            <div className="max-width-container mx-auto px-5 py-10 px-5">

                <div className="grid gap-10 grid-cols-1 md:grid-cols-2 mb-16">

                    <ProductImageGallery
                        images={productData?.images.map(image => ({
                            src: image.src,
                            alt: image.alt || "",
                            description: image.alt || ""
                        }))}
                    />

                    <div className="">
                        
                        <BreadCrumpt 
                            items={[
                                {label:"محصولات", link:"/products"},
                                {label: productData?.name! }
                            ]}
                        />

                        <h2 className="text-xl xl:text-3xl font-bold my-5 lg:my-8"> {productData?.name} </h2>

                        <div className="font-bold text-2xl mb-4 flex gap-3 items-center">
                            <label className="text-base"> قیمت: </label>
                             {numberWithCommas((productData?.price || 0)* amount)} تومان
                        </div>

                        {amountOptions?.length && (
                            <select 
                                onChange={e => { setAmount(+e.target.value) }}
                                className="border border-neutral-400 outline-none rounded w-44 h-10 px-1 mb-5"
                            >
                                {amountOptions.map(item => (
                                    <option 
                                        value={item.value} 
                                        key={item.value}
                                        selected={item.value === amount}
                                    > 
                                        {item.label} 
                                    </option>
                                ))}
                            </select>
                        )}


                        {productData?.short_description && <div className="inserted-content mb-5 text-slate-400">
                            {parse(productData.short_description || "")}
                        </div>}

                        <a
                            href="tel:+989112193566"
                            target="_blank"
                            className="bg-green1-800 text-white py-3 w-full text-center font-semibold px-5 rounded inline-block mb-5 mt-6"
                        >
                            جهت سفارش این محصول با شماره 09112193566 تماس بگیرید
                        </a>
                    </div>

                </div>

                {productData?.description && <div className="max-w-3xl mx-auto text-justify my-10 leading-7">
                    <h3 className="font-semibold text-xl mb-5"> توضیحات محصول </h3>
                    <div className="inserted-content">
                        {parse(productData.description || "")}
                    </div>
                </div>}


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