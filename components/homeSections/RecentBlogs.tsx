import { BlogItemType } from "@/types/blog";
import Link from "next/link";
import BlogItem from "../blog/BlogItem";

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
                        <BlogItem
                            key={post.id}
                            post={post}
                            index={index}
                        />
                    ))}
                </div>

                <div className="text-center mt-6 lg:mt-14">
                    <Link
                        href="/blogs"
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