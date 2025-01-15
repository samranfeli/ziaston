export interface BlogItemType {
    id: number;

    jetpack_featured_media_url?: string;

    date: string;
    slug: string;
    acf: {
        time_read: string
    };
    categories: [
      number  
    ];
    categories_names: [
        string
    ];
    excerpt: {
        rendered: string
    }
    title: {
        rendered: string;
    };
    images: {
        medium: string;
        large: string;
    };

    tags?: number[];
    tags_names?: string[];
    content?:{
        rendered?: string;
    };
    time_read?: string;

}


export interface PostDetailType {
    id: number;

    jetpack_featured_media_url?: string;

    date: string;
    slug: string;
    acf: {
        time_read: string
    };
    categories: [
      number  
    ];
    excerpt: {
        rendered: string
    }
    title: {
        rendered: string;
    };

    tags?: number[];
    content?:{
        rendered?: string;
    };

}

