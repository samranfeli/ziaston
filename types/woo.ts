export interface ProductItemType {
    images: {
        id: number;
        alt?: string;
        src: string;
    }[];
    name?: string;
    slug: string;
    price?: number;
    id: number;
    description?: string;
    short_description?: string;

}