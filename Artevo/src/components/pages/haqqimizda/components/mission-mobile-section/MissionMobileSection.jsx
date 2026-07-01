import IphoneImg from "./iphoneImg/IphoneImg";
import SenetVeHeykelImg from "./senetVeHeykelImg/SenetVeHeykelImg";

export default function MissionMobileSection() {
  return (
    <section className="container mx-auto py-20 overflow-hidden">
      {/* 1-ci Hissə: Missiya və Vizyon */}
      <div className="relative w-full h-210">
        <div className="absolute right-0 top-0 h-full w-[65%] z-0">
          <SenetVeHeykelImg />
        </div>
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="bg-[#F9FAFB] p-6 border-l-8 border-button-primary w-full max-w-[1019px] ml-12">
            <h2 className="font-inter font-medium text-[40px] text-button-primary mb-10 text-center">
              Missiyamız və vizyonumuz
            </h2>
            <p className="font-inter font-light text-black text-2xl">
              Bizim missiyamız yaradıcılığı təşviq etmək, sənətkarları
              birləşdirmək, sənət sevərlərin sərgidə iştirak etməsinə kömək
              etməkdir. Vizyonumuz isə sənətin paylaşılması və dəyərləndirilməsi
              üçün ən etibarlı platforma olmaq.
            </p>
          </div>
        </div>
      </div>

      {/* 2-ci Hissə: Mobil tətbiq - Düzəldilmiş struktur */}
      <div className="relative flex items-center">
        {/* Şəkil - İndi solda */}
        <div className="w-[35%]">
          <IphoneImg />
        </div>

        {/* Mətn - İndi sağda, sağ kənarı "image_0be4f2.png" üzərindəki sarı xəttə toxunur */}
        <div className="w-[65%]">
          <div className="bg-[#F9FAFB] p-6 border-r-8 border-button-primary w-full max-w-[970px]">
            <h2 className="font-inter font-medium text-[40px] text-button-primary mb-10 text-center">
              Mobil tətbiq
            </h2>
            <p className="font-inter font-light text-black text-2xl">
              Artevo-nu hər yerdə özünlə apar! Mobil tətbiqimiz vasitəsilə
              istənilən yerdə sənətkarlarla tanış ol, işlərini paylaş və yeni
              ideyalardan ilham al. (App Store və Google Play-də)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
