import IphoneImg from "./iphoneImg/IphoneImg";
import SenetVeHeykelImg from "./senetVeHeykelImg/SenetVeHeykelImg";

export default function MissionMobileSection() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-0 py-12 lg:py-20 overflow-hidden">

      {/* Mission & Vision */}
      <div className="relative flex flex-col lg:block">

        {/* Background Image */}
        <div className="relative lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-[65%] order-1 lg:order-2">
          <SenetVeHeykelImg />
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center order-2 lg:order-1 lg:min-h-[700px]">
          <div className="bg-[#F9FAFB] border-l-4 lg:border-l-8 border-button-primary w-full lg:max-w-[1019px] p-6 sm:p-8 lg:p-10 lg:ml-12 shadow-sm">

            <h2 className="font-inter font-medium text-2xl sm:text-3xl lg:text-[40px] text-button-primary text-center mb-6 lg:mb-10">
              Missiyamız və vizyonumuz
            </h2>

            <p className="font-inter font-light text-base sm:text-lg lg:text-2xl text-black leading-7 lg:leading-10">
              Bizim missiyamız yaradıcılığı təşviq etmək, sənətkarları
              birləşdirmək, sənətsevərlərin sərgidə iştirak etməsinə kömək
              etməkdir. Vizyonumuz isə sənətin paylaşılması və
              dəyərləndirilməsi üçün ən etibarlı platforma olmaq.
            </p>

          </div>
        </div>
      </div>

      {/* Mobile App */}
      <div className="flex flex-col lg:flex-row items-center mt-16 lg:mt-24 gap-8 lg:gap-0">

        {/* Phone */}
        <div className="w-full lg:w-[35%] flex justify-center">
          <IphoneImg />
        </div>

        {/* Text */}
        <div className="w-full lg:w-[65%]">
          <div className="bg-[#F9FAFB] border-r-4 lg:border-r-8 border-button-primary w-full lg:max-w-[970px] p-6 sm:p-8 lg:p-10 shadow-sm">

            <h2 className="font-inter font-medium text-2xl sm:text-3xl lg:text-[40px] text-button-primary text-center mb-6 lg:mb-10">
              Mobil tətbiq
            </h2>

            <p className="font-inter font-light text-base sm:text-lg lg:text-2xl text-black leading-7 lg:leading-10">
              Artevo-nu hər yerdə özünlə apar! Mobil tətbiqimiz vasitəsilə
              istənilən yerdə sənətkarlarla tanış ol, işlərini paylaş və yeni
              ideyalardan ilham al.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}