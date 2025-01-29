import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
    items : {
        title?:React.ReactNode;
        imageUrl: string;
        imageAlt: string;
    }[]
}

const Carousel : React.FC<Props> = props => {

    const [active, setActive] = useState<number>(0);

    let timerInterval: any = null;

    const next = () => {
        setActive(prev => {
            if (prev < props.items.length-1){
                return (prev+1);
            }
            return 0
        })
    }

    let isMobile = false;

    useEffect(() => {
        timerInterval = setInterval(() => {
          next();
        }, 5000);
        
        if(window?.innerWidth && window.innerWidth < 900){
            isMobile = true;
        }

        return () => {
          clearInterval(timerInterval);
        };

      }, []);

      let nextItemIndex ;

      if (active === props.items.length-1){
        nextItemIndex = 0
      } else{
        nextItemIndex = active + 1
      }


    return(
        <div className="relative h-500">
            {props.items.map((item, index) => {

                let className = ""

                if (index === active){
                    className += "blur-none translate-x-0 opacity-100 duration-700";
                }else if (index === nextItemIndex){
                    className += "blur-xl translate-x-full opacity-100 duration-0";
                }else{
                    className += "blur-xl -translate-x-full opacity-0 duration-700";
                }

                return (
                    <div
                        key={index}
                        className={`absolute top-0 right-0 transition-all ease-in-out ${className}`}
                    >
                        <Image 
                            priority = {!index}
                            src={item.imageUrl}
                            alt={item.imageAlt}
                            width={isMobile? 600 :1000}
                            height={isMobile ? 400 : 600}
                            sizes="(max-width: 768px) 100vw, (max-width: 1350px) 100vw, 100vw"
                            className="w-screen h-96 lg:h-500 object-cover"
                            
                        />
                        {item.title && <div className={`absolute right-0 w-full -translate-y-1/2 top-1/2`}>
                            <div className="max-width-container mx-auto px-5 text-xl md:text-4xl font-bold text-white">
                                {item.title}
                            </div>
                        </div>}
                    </div>
                )
            })}

        </div>
    );

}

export default Carousel;