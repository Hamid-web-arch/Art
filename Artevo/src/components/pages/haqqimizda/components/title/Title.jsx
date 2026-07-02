import titleBgImg from "../../../../../assets/haqqimizda/titleBgImg.png";

export default function Title() {
  return (
    <section
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${titleBgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative w-full h-251.25 flex flex-col items-center"
    >
      {/* "Haqqımızda" hissəsi */}
      <div className="flex-1 flex flex-col items-center justify-center text-white">
        <h2 className="text-4xl md:text-[64px] font-inter font-medium mb-4">
          Haqqımızda
        </h2>
        <p className="text-2xl font-inter font-medium">
          Sənətin olduğu hər yerdə.
        </p>
      </div>

      {/* Məzmun qutusu */}
      <div className="bg-[#F9FAFB] p-8 md:p-10 w-full max-w-[940px] mb-[72px] shadow-lg">
        <h3 className="font-inter font-medium text-[40px] text-button-primary mb-10 text-center">
          Artevo
        </h3>
        <p className="font-inter font-light text-black text-2xl">
          Sənətkarların və yaradıcı insanların bir araya gəldiyi məkan. Burada
          siz əl işlərinizi, dekorasiya və memarlıq layihələrinizi paylaşa,
          satışa çıxara və ala bilərsiniz. Bizim məqsədimiz yaradıcılığı
          dəstəkləmək və sənətə dəyər verən bir icma yaratmaqdır. Artevo –
          sənətin olduğu hər yerdə.
        </p>
      </div>
    </section>
  );
}
