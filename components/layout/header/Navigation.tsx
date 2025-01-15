import Menu from "@/components/ui/icons/Menu";
import Link from "next/link";
import { useState } from "react";

const Navigation = () => {

    const [open, setOpen] = useState<boolean>(false);

    const menuItems: {
        text: string;
        url: string;
    }[] = [
            { text: "خانه", url: "/" },
            { text: "درباره باغ زیتون", url: "/about" },
            { text: "محصولات", url: "/products" },
            { text: "مقالات", url: "/blog" },
            { text: "قوانین و مقررات", url: "terms" },
            { text: "تماس با ما", url: "/contact" }
        ];

    return (
        <>
            <button
                type="button"
                onClick={() => {setOpen(true)}}
                className="text-green1-800 md:hidden"
            >
                <Menu />
            </button>
            
            <div className={`max-md:fixed max-md:top-0 max-md:right-0 max-md:w-screen max-md:h-screen transition-all ${open ? "max-md:opacity-100 max-md:visible" :"max-md:opacity-0 max-md:invisible"}`}>
                
                {open && <div 
                    className={`fixed top-0 right-0 h-screen w-screen bg-black/75 md:hidden`} 
                    onClick={()=>{setOpen(false)}}
                />}
                
                <nav className={`relative md:flex md:gap-4 md:items-center max-md:bg-white max-md:h-screen max-md:right-0 max-md:w-3/4 transition-all ${open?"max-md:translate-x-0":"max-md:translate-x-full"}`}>
                
                    {menuItems.map(item => (
                        <div className="max-md:px-5 max-md:py-2.5 max-md:border-t" key={item.text}>
                            <Link
                                onClick={()=>{setOpen(false)}}
                                prefetch={false}
                                href={item.url}
                                title={item.text}
                                className="inline-block text-neutral-600 text-md xl:text-lg md:hover:text-green1-800"
                            >
                                {item.text}
                            </Link>
                        </div>
                    ))}

                </nav>
            </div>
        </>
    )
}

export default Navigation;