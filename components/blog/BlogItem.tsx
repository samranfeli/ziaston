import { BlogItemType } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import parse from 'html-react-parser';
import Loading from "../ui/icons/Loading";

type Props = {
    post: BlogItemType;
    index?: number;
    priority?: boolean;
}

const BlogItem: React.FC<Props> = props => {

    const { post, index } = props;

    const [loading, setLoading] = useState<boolean>(false);

    return (
        <div
            className={`group flex flex-col ${index === 1 ? "lg:flex-col-reverse" : "lg:flex-col"}`}
        >
            <Image
                src={post.jetpack_featured_media_url || ""}
                alt={post.title.rendered}
                width={351}
                height={240}
                sizes="(max-width: 768px) 90vw, (max-width: 1350px) 30vw, 90vw"
                className="w-full max-lg:max-h-60 lg:h-72 object-center object-cover"
                priority={!!props.priority}
            />
            <div className="p-4 lg:p-6 bg-[#fafaf6] lg:min-h-72 md:group-hover:bg-[#645087] transition-all">

                <h3 className="transition-all text-neutral-700 md:group-hover:text-white font-semibold text-md lg:text-2xl mb-4"> {post.title?.rendered} </h3>

                <div className="transition-all text-sm md:text-md text-neutral-400 md:group-hover:text-white mb-3 text-justify"> {parse(post.excerpt.rendered)} </div>

                <Link
                    onClick={() => { setLoading(true) }}
                    href={post.slug}
                    className="transition-all text-orange-400 font-semibold md:group-hover:bg-white w-full text-center inline-block py-2 max-sm:text-sm"
                >
                    ادامه مطلب
                    {loading && <Loading color="orange" className="align-middle mx-2" />}
                </Link>
            </div>
        </div>
    )
}

export default BlogItem;