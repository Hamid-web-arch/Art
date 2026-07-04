import SergilerHeroImg from "../../../assets/sergilerim/sergilerHeroImg.png";

export default function Sergiler() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="relative w-full h-183.75 rounded-4xl overflow-hidden">
        <img
          src={SergilerHeroImg}
          alt="Sərgi"
          className="w-full h-full object-cover"
        />

        <div className="absolute top-10 left-10">
          <span className="font-inter text-white bg-black/50 font-medium text-2xl leading-4 px-4 py-3.5 border border-white rounded-[10px]">
            Seçilmiş sərgi
          </span>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-10 bg-black/30 text-white">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-6 font-inter text-base leading-5 text-white">
              <div className="flex items-center gap-2">
                <span>15 May - 30 İyun</span>
              </div>
              <div className="flex items-center gap-2">
                <span>10:00 - 18:00</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Bakı, Milli İncəsənət Muzeyi</span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="font-inter font-bold text-[40px] leading-9">
                Müasir Azərbaycan heykəltəraşlığı
              </h2>
              <p className="font-inter text-[18px] leading-6.5 max-w-240 text-white">
                Azərbaycanın aparıcı heykəltəraşlarının əsərlərini özündə
                birləşdirən bu sərgi müasir incəsənətin yeni üfüqlərini açır.
                Klassik və müasir üslubların sintezi.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        
      </div>
    </section>
  );
}
