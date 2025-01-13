
import { PropsWithChildren} from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const Layout: React.FC<PropsWithChildren> = props => {
    
    const isBodyScrollable = true;

    return (

        <div className={`wrapper ${isBodyScrollable ? "" : "overflow-hidden h-screen"}`} >

            <Header />

            <main id="main" className="content-min-h-desktop relative z-0">
                {props.children}
            </main>

            <Footer />

        </div>

    )
}
export default Layout;