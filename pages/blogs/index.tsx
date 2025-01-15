import { getBlogs } from "@/actions/blogActions";
import { BlogItemType } from "@/types/blog";
import BlogItem from "@/components/blog/BlogItem";

type Props = {
    posts: BlogItemType[];
}

const Blogs: React.FC<Props> = props => {

    return (
        <section className="py-10 lg:py-24 px-3 md:px-5">
            <div className="max-width-container mx-auto">
                <h2
                    className="text-lg font-bold md:text-4xl block text-center mb-5 lg:mb-12"
                >
                    مجله <span className="text-green1-800 md:text-5xl"> باغ زیتون </span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {props.posts?.map(post => (
                        <BlogItem
                            key={post.id}
                            post={post}
                        />
                    ))}
                </div>



            </div>
        </section>
    )
}

export const getStaticProps = async () => {

    const blogs: any = await getBlogs({ page: 1, per_page: 10 });

    return ({
        props: {
            posts: blogs?.data || null
        },
        revalidate: 3600
    })
};


export default Blogs;