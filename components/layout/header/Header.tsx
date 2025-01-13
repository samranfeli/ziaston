import Logo from "@/public/assets/Logo";
import Link from "next/link";
import Navigation from "./Navigation";

const Header = () => {
    return(
        <header className="border-b relative z-10">
            <div className="max-width-container mx-auto">
                <div className="flex justify-between items-center py-3 px-5">
                    <Link 
                        prefetch={false}
                        href="/"
                        className="text-lg md:text-2xl font-bold text-green1-800 flex items-center gap-3"
                    >
                        <Logo className="fill-green1-800 w-11 md:w-16 h-auto object-contain" />
                        <h1> باغ زیتون </h1>
                    </Link>

                    <Navigation />

                </div>

            </div>
        </header>
    )
}

export default Header;