import { GetBlogDetail } from "@/actions/blogActions";
import { PostDetailType } from "@/types/blog";
import { NextPage } from "next";
import parse from 'html-react-parser';

type Props = {
    post: PostDetailType;
}

const Post: NextPage<Props> = props => {

    const { post } = props;

    console.log(post);

    return (
        <section>
            <div className="max-width-container mx-auto px-5 py-10 px-5">

                <h3 className="font-semibold text-xl mb-5"> {post.title.rendered} </h3>

                {!!post.content?.rendered && <div className="max-w-3xl mx-auto text-justify my-10 leading-7">
                    <div className="inserted-content">
                        {parse(post.content.rendered)}
                    </div>
                </div>}

            </div>
        </section>
    )
}


export async function getServerSideProps(context: any) {

    const blogResponse = await GetBlogDetail(context.query.Post);

    return (
        {
            props: {
                post: blogResponse?.data?.[0] || null
            }
        }
    )
}




export default Post;