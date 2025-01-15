export interface ProductItemType {
    images: {
        id: number;
        alt?: string;
        src: string;
    }[];
    name?: string;
    slug: string;
    price?: number;
    price_html?: string;
    id: number;
    description?: string;
    short_description?: string;
    attributes?:{
        name?: string;
        options?:string[]
    }[]
}