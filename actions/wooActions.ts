import { Blog, Woo, WpEndpoint } from "@/model";
import axios from "axios";

export const getproducts = async (options: { per_page?: number, page?: number; tags?: number; slug?: string; category?: any; search?: any }) => {

    let url = `${WpEndpoint}${Woo.getProducts}`;

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
    if (options.slug){
        queries.push(`slug=${options.slug}`)
    }

    let q: string = '';
    if (queries.length) {
        q = queries.join("&");
        q = "&" + q;
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