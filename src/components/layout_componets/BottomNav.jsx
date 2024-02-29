import { IoLogoFacebook, IoLogoWhatsapp, IoLogoTwitter, IoLogoInstagram } from "react-icons/io5"


export const BottomNav = () => {
    return (
        <footer className="max-w-7xl m-auto p-6 items-center shadow-lg rounded-md border-t-2 border-slate-100 dark:border-slate-500" id="contact">
            <div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row justify-between flex-wrap items-center ">
                <a href="#top"><h3 className="text-xl text-color3 dark:text-color2">Samo Piano @designs.io</h3></a>
                <div className="flex space-x-6 items-center">
                    <div>
                        <IoLogoFacebook size={20} color="blue" />
                    </div>
                    <div>
                        <IoLogoWhatsapp size={20} />
                    </div>
                    <div>
                        <IoLogoTwitter size={20} />
                    </div>
                    <div>
                        <IoLogoInstagram size={20} />
                    </div>
                </div>
            </div>
        </footer>
    )
}
