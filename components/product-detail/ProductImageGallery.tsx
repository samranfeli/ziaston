import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";
import { useState } from "react";
import Image from "next/image";

type Props = {
    images?: {
        src: string;
        alt: string;
        description: string;
    }[];
}

const ProductImageGallery: React.FC<Props> = props => {

    const { images } = props;

    const [open, setOpen] = useState(false);
    const [slideIndex, setSlideIndex] = useState(0);

    if (!images?.length) {
        return null;
    }

    const openLightBox = (index?: number) => {
        setSlideIndex(index || 0);
        setOpen(true);
    }

    return (
        <>
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-1`}>
                {images.slice(0, 4).map((slide, index) => (
                    <Image
                        key={slide.src}
                        priority={!index}
                        src={slide.src}
                        alt={slide.alt}
                        width={index ? 200 : 610}
                        height={index ? 130 : 398}
                        //sizes="(max-width: 767px) 100vw, 50vw"
                        onClick={() => { openLightBox(index); }}
                        className={`cursor-pointer border border-neutral-200 w-full object-cover h-full ${index ? "hidden md:block md:col-span-1" : "md:col-span-3"}`}
                    />
                ))}

            </div>
            <Lightbox
                index={slideIndex}
                open={open}
                close={() => setOpen(false)}
                slides={images}
                plugins={[Thumbnails, Captions]}
                captions={{ descriptionTextAlign: 'center' }}
                thumbnails={{ width: 80, height: 50 }}
            />

        </>
    )
}

export default ProductImageGallery;