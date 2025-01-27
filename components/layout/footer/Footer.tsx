import Instagram from "@/components/ui/icons/instagram";
import Linkedin from "@/components/ui/icons/Linkedin";
import Telegram from "@/components/ui/icons/Telegram";
import WhatsApp from "@/components/ui/icons/WhatsApp";

const Footer = () => {
    return (
        <footer className="border-t py-8 lg:py-14 bg-green1-800 text-white px-4">
            <div className="max-width-container mx-auto flex justify-between items-center flex-wrap">
                <p>
                    تمامی حقوق این سایت محفوظ و متعلق به باغ زیتون می باشد.
                </p>

                <div className="flex gap-3">
                    <a target="_blank" href="https://www.instagram.com/baghzeytoon.ir" className="white">
                        <Instagram className="w-8 h-8 fill-current" />
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/company/baghzeytoon/" className="white">
                        <Linkedin className="w-8 h-8 fill-current" />
                    </a>
                    <a target="_blank" href="https://wa.me/989112193566" className="white">
                        <WhatsApp className="w-8 h-8 fill-current" />
                    </a>
                    <a target="_blank" href="https://telegram.me/baghzeytoon.ir" className="white">
                        <Telegram className="w-8 h-8 fill-current" />
                    </a>
                </div>

            </div>
        </footer>
    )
}

export default Footer;