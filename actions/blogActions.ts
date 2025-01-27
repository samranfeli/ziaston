import { Blog, WpEndpoint } from "@/model";
import axios from "axios";

export const getBlogs = async (options: { per_page?: number, page?: number; tags?: number; category?: any; search?: any }) => {

    let url = `${WpEndpoint}${Blog.getPosts}`;

    const queries = [];

    if (options.page) {
        queries.push(`page=${options.page}`);
    }

    if (options.category) {
        queries.push(`categories=${options.category}`);
    }

    if (options.tags) {
        queries.push(`tags=${options.tags}`)
    }

    if (options.search) {
        queries.push(`search=${options.search}`)
    }

    if (options.per_page) {
        queries.push(`per_page=${options.per_page}`)
    }

    let q: string = '';
    if (queries.length) {
        q = queries.join("&");
        q = "?" + q;
    }

    try {
        let response = await axios.get(
            url + q
        )
        return response
    } catch (error) {
        return error
    }

}

export const GetBlogDetail = async (slug : string) => {
    try {
      const res = await axios.get(
        `${WpEndpoint}/wp-json/wp/v2/posts/?slug=${slug}`,
        {
          headers: {
          },
        }
      );
      return res;
    } catch (error : any) {
      return error.response
    }
};


export const GetAllCategories = async () => {
    try {
      const res = await axios.get(
        `${WpEndpoint}/wp-json/wp/v2/categories`,
        {
          headers: {
          },
        }
      );
      return res;
    } catch (error : any) {
      return error.response
    }
};

export const GetAllTags = async () => {
    try {
      const res = await axios.get(
        `${WpEndpoint}/wp-json/wp/v2/tags`,
        {
          headers: {
          },
        }
      );
      return res;
    } catch (error : any) {
      return error.response
    }
};