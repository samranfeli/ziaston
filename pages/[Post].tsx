import { GetAllCategories, GetAllTags, GetBlogDetail } from "@/actions/blogActions";
import { PostDetailType } from "@/types/blog";
import { NextPage } from "next";
import parse from 'html-react-parser';
import Image from "next/image";
import Link from "next/link";

type Props = {
    post?: PostDetailType;
    categories?: {
        name: string;
        id: number;
    }[];
    tags?: {
        name: string;
        id: number;
    }[];
}

const Post: NextPage<Props> = props => {

    const { post, categories, tags } = props;


    const postTags = tags?.filter(tag => post?.tags?.includes(tag.id));
    const postCategories = categories?.filter(category => post?.categories?.includes(category.id));

    return (
        <section>
            <div className="max-w-5xl mx-auto px-5 py-3 pb-8 md:pb-20">
                {!!post?.jetpack_featured_media_url && (
                    <Image
                        src={post.jetpack_featured_media_url}
                        alt={post?.title.rendered || ""}
                        className="w-full h-500 object-cover"
                        width={1000}
                        height={400}
                    />
                )}

                <div className="max-w-3xl mx-auto px-5 py-10 md:px-10 border rounded -mt-14 bg-white relative">

                    {postCategories?.map(item => (
                        <Link
                            key={item.id}
                            href={`/category/id=${item.id}`}
                            className="mb-5 inline-block text-green1-800 font-semibold"
                        >
                            {item.name}
                        </Link>
                    ))}


                    <h3 className="font-semibold text-xl md:text-2xl mb-5"> {post?.title?.rendered} </h3>

                    {!!post?.content?.rendered && <div className="text-justify my-10 leading-7">
                        <div className="inserted-content">
                            {parse(post.content.rendered)}
                        </div>
                    </div>}

                    <div className="flex gap-3">

                        {postTags?.map(item => (
                            <Link
                                key={item.id}
                                href={`/tag/id=${item.id}`}
                                className="border bg-neutal-100 inline-block py-1 px-3 text-sm"
                            >
                                #{item.name}
                            </Link>
                        ))}
                    </div>
                </div>

            </div>


        </section>
    )
}


export async function getServerSideProps(context: any) {

    const [blogResponse, categoriesREsponse, tagsResponse] = await Promise.all<any>([
        GetBlogDetail(context.query.Post),
        GetAllCategories(),
        GetAllTags()
    ]);

    return (
        {
            props: {
                post: blogResponse?.data?.[0] || null,
                categories: categoriesREsponse?.data || null,
                tags: tagsResponse?.data || null,
            }
        }
    )
}




export default Post;