import IphoneImage from "../../../../../assets/home/iphone.png";
import GooglePlayImage from "../../../../../assets/home/googleplay.png";
import AppStoreImage from "../../../../../assets/home/appstore.png";

export default function DownloadApp() {
    return (
        <section className="container overflow-hidden pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-between gap-3 md:gap-0">

                <div className="text-center lg:max-w-[420px] flex flex-col justify-center items-center">
                    <p className="font-inter font-semibold text-[24px] md:text-[32px] text-black">Tətbiqi yüklə</p>
                    <span
                        className="font-inter font-medium text-[16px] md:text-[24px] text-[#565656] block leading-relaxed">İndi
                        yüklə və
                        sənətkarların əl işlərinə daha rahat bax</span>
                </div>

                <div className="transform rotate-[17.29deg] flex justify-center items-center ">
                    <img src={IphoneImage} alt="iphone"
                        className="max-w-[200px] md:max-w-[280px] xl:max-w-[320px] h-auto object-contain" />
                </div>
                <div className="flex flex-row items-center justify-center gap-4 sm:gap-6 w-full">


                    <div className="w-[130px] sm:w-[160px] md:w-[180px] xl:w-[220px] shrink-0 cursor-pointer transition-transform duration-200 hover:scale-103">
                        <img
                            src={GooglePlayImage}
                            alt="googleplay"
                            className="w-full h-auto object-contain"
                        />
                    </div>


                    <div className="w-[130px] sm:w-[160px] md:w-[180px] xl:w-[220px] shrink-0 cursor-pointer transition-transform duration-200 hover:scale-103">
                        <img
                            src={AppStoreImage}
                            alt="appstore"
                            className="w-full h-auto object-contain"
                        />
                    </div>

                </div>

            </div>
        </section>
    );
}