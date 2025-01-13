export const WpEndpoint = process.env.BLOG_END_POINT;

export const Blog = {
    getPosts: "//wp-json/wp/v2/posts",
    getBestCategories: '/wp-json/wp/v2/best_category',
    getCategoeyName: '/wp-json/wp/v2/categories',
    getCities: "//wp-json/wp/v2/cities/",
    getTagName: '/wp-json/wp/v2/tags/',
  }

  const consumer_key = "ck_392bf1157f6568607ee842678c6ded7d5a35f5e3";
  const onsumer_secret = "cs_551da14bee02610a061d814a7793f4204276c803";
  
  export const Woo = {
    getProducts: `/wp-json/wc/v3/products?consumer_key=${consumer_key}&consumer_secret=${onsumer_secret}`
  }