export default function ExhibitionSection() {
  return (
    <section className="w-full py-5 md:py-10 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url('assets/section-bg.jpg')] bg-cover">
      <div className="container">
        <button type="button" className="font-inter font-medium text-[14px] sm:text-[16px] md:text-[24px] text-white py-[5px] px-[24px] bg-white/40 rounded-[60px] cursor-pointer">
          Heykəltaraşlıq sərgisi
        </button>
        
        <div className="max-w-[953px] mt-16 sm:mt-25 md:mt-50">
          <h4 className="font-inter font-medium text-[20px] sm:text-[24px] md:text-[48px] text-white mb-2 sm:mb-0">
            Şəhər qalereyasında innovativ və konseptual heykəlləri kəşf edin
          </h4>
          <p className="font-inter font-medium text-[14px] sm:text-[16px] md:text-[24px] text-white max-w-[781px]">
            Bakı Müasir İncəsənət Mərkəzində keçirilən sərgidə gənc heykəltəraşların əsərləri nümayiş etdirilir
          </p>
        </div>
      </div>
    </section>
  );
}