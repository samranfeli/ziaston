import { getBlogs } from "@/actions/blogActions";
import { getproducts } from "@/actions/wooActions";
import Badges from "@/components/homeSections/Badges";
import Hero from "@/components/homeSections/Hero";
import Intro from "@/components/homeSections/Intro";
import RecentBlogs from "@/components/homeSections/RecentBlogs";
import RecentProducts from "@/components/homeSections/RecentProducts";
import { BlogItemType } from "@/types/blog";
import { ProductItemType } from "@/types/woo";
import { NextPage } from "next";

type Props = {
  blogs?: BlogItemType[];
  products?: ProductItemType[];
}

const Home: NextPage<Props> = props => {

  // useEffect(()=>{
  //   const fetchData = async () => {
  //     //const blogsResponse = await getBlogs({ page: 1, per_page: 3 });

  //     const gggggg = await getproducts({page:1, per_page:3});
  //   }

  //   fetchData();

  // },[]);

  return (
    <>
      <Hero />

      <Intro />

      <Badges />

      <RecentProducts products={props.products} />

      <RecentBlogs posts={props.blogs} />

    </>
  );
}

export const getStaticProps = async () => {

  const [recentBlogPost, recentProducts] = await Promise.all<any>([
    getBlogs({ page: 1, per_page: 3 }),
    getproducts({ per_page: 6, page: 1 })
  ]);

  return ({
    props: {
      blogs: recentBlogPost?.data || null,
      products: recentProducts?.data || null
    },
    revalidate: 3600
  })
};

export default Home