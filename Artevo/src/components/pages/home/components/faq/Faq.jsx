export default function Faq() {
  // 1. Suallar və cavablar massivi (Təkrarçılığın qarşısını almaq üçün)
  const faqData = [
    {
      id: 1,
      question: "Artevo platformasında əl işlərini necə sata bilərəm?",
      answer: "Platformamızda sənətkar profilini aktivləşdirərək əl işlərinizi bir neçə sadə addımla yükləyib satışa çıxara bilərsiniz."
    },
    {
      id: 2,
      question: "Çatdırılma və geri qaytarma şərtləri hansılardır?",
      answer: "Hər bir sənətkarın məhsul səhifəsində xüsusi çatdırılma qeydləri olur. Alınan fiziki əl işləri 14 gün ərzində zədələnməmiş şəkildə geri qaytarıla bilər."
    },
    {
      id: 3,
      question: "Sifarişlərin ödəniş təhlükəsizliyinə necə zəmanət verilir?",
      answer: "Bütün ödənişlər 3D Secure təhlükəsizlik protokolları ilə qorunur və məhsul sizə tam çatana qədər dondurulmuş hesabda saxlanılır."
    },
    {
      id: 4,
      question: "Mobil tətbiq vasitəsilə sərgilərə bilet almaq mümkündür?",
      answer: "Bəli, mobil tətbiqimizi yükləyərək həm sənətkarların eksklüziv işlərinə baxa, həm də canlı sənət sərgilərinə bilet əldə edə bilərsiniz."
    }
  ];

  return (
    <section className="container py-20 select-none">
      {/* Bölmə Başlığı */}
      <h4 className="font-inter font-medium text-[28px] md:text-[40px] mb-10 text-black">
        Tez-tez verilən suallar
      </h4>

      {/* Accordion Siyahısı */}
      <div className="flex flex-col gap-6">
        {faqData.map((item) => (
          <details
            key={item.id}
            className="group bg-[#F9FAFB] border border-gray-100 rounded-[32px] md:rounded-[40px] overflow-hidden transition-all duration-300"
          >
            {/* Kliklənən Başlıq Hissəsi */}
            <summary className="flex items-center justify-between hover:bg-gray-100/70 transition-colors duration-200 p-6 cursor-pointer list-none select-none">
              <span className="text-base md:text-lg font-medium text-gray-700 pr-4">
                {item.question}
              </span>

              {/* v4 Uyumlu və Animasiyalı Ox İkonu */}
              <svg
                className="transition-transform duration-300 group-open:rotate-180 shrink-0"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#faq-clip)">
                  <rect width="40" height="40" rx="20" fill="#900B00" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.1766 26.1786C20.8641 26.491 20.4402 26.6666 19.9983 26.6666C19.5564 26.6666 19.1325 26.491 18.82 26.1786L9.39163 16.7502C9.23244 16.5965 9.10547 16.4126 9.01812 16.2093C8.93078 16.0059 8.8848 15.7872 8.88288 15.5659C8.88095 15.3446 8.92312 15.1252 9.00692 14.9203C9.09073 14.7155 9.21448 14.5294 9.37097 14.3729C9.52746 14.2164 9.71354 14.0927 9.91837 14.0089C10.1232 13.9251 10.3427 13.8829 10.564 13.8848C10.7853 13.8868 11.004 13.9327 11.2073 14.0201C11.4106 14.1074 11.5945 14.2344 11.7483 14.3936L19.9983 22.6436L28.2483 14.3936C28.5626 14.09 28.9836 13.922 29.4206 13.9258C29.8576 13.9296 30.2756 14.1049 30.5847 14.4139C30.8937 14.7229 31.069 15.1409 31.0728 15.5779C31.0765 16.0149 30.9086 16.4359 30.605 16.7502L21.1766 26.1786Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="faq-clip">
                    <rect width="40" height="40" rx="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </summary>

            {/* Cavab Bölməsi */}
            <div className="p-6 text-gray-600 text-sm md:text-base border-t border-gray-50 bg-white leading-relaxed">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}