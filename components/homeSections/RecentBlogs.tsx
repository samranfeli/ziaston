import { BlogItemType } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import parse from 'html-react-parser';

type Props = {
    posts?: BlogItemType[];
}

const RecentBlogs: React.FC<Props> = props => {
    return (
        <section className="py-10 lg:py-24 px-3 md:px-5">
            <div className="max-width-container mx-auto">
                <h2
                    className="text-lg font-bold md:text-4xl block text-center mb-5 lg:mb-12"
                >
                    مجله <span className="text-green1-800 md:text-5xl"> باغ زیتون </span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-6">
                    {props.posts?.map((post, index) => (
                        <div
                            key={post.id}
                            className={`group flex flex-col ${index === 1 ? "lg:flex-col-reverse" : "lg:flex-col"}`}
                        >
                            <Image
                                src={post.jetpack_featured_media_url || ""}
                                alt={post.title.rendered}
                                width={433}
                                height={288}
                                className="w-full max-lg:max-h-60 lg:h-72 object-center object-cover"
                            />
                            <div className="p-4 lg:p-6 bg-[#fafaf6] lg:min-h-72 group-hover:bg-[#645087] transition-all">

                                <h3 className="transition-all text-neutral-700 group-hover:text-white font-semibold text-md lg:text-2xl mb-4"> {post.title?.rendered} </h3>

                                <div className="transition-all text-sm md:text-md text-neutral-400 group-hover:text-white mb-3 text-justify"> {parse(post.excerpt.rendered)} </div>

                                <Link
                                    href={post.slug}
                                    prefetch={false}
                                    className="transition-all text-orange-400 font-semibold group-hover:bg-white w-full text-center inline-block py-2 max-sm:text-sm"
                                >
                                    ادامه مطلب
                                </Link>
                            </div>



                        </div>
                    ))}
                </div>

                <div className="text-center mt-6 lg:mt-14">
                    <Link
                        href="/blog"
                        prefetch={false}
                        className="px-5 py-2 inline-block text-white rounded bg-green1-800 md:text-lg hover:bg-green1-600"
                    >
                        آرشیو مقالات
                    </Link>
                </div>

            </div>
        </section>
    )
}

export default RecentBlogs;