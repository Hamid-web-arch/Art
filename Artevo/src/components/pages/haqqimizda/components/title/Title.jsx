import titleBgImg from "../../../../../assets/haqqimizda/titleBgImg.png";

export default function Title() {
  return (
    <section
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${titleBgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative w-full min-h-screen lg:h-[1005px] flex flex-col items-center px-4 sm:px-6"
    >
      {/* Hero */}
      <div className="flex-1 flex flex-col items-center justify-center text-white text-center pt-16 sm:pt-20">
        <h2 className="font-inter font-medium text-4xl sm:text-5xl lg:text-[64px] mb-4">
          Haqqımızda
        </h2>

        <p className="font-inter font-medium text-lg sm:text-xl lg:text-2xl">
          Sənətin olduğu hər yerdə.
        </p>
      </div>

      {/* Content Card */}
      <div className="bg-[#F9FAFB] w-full max-w-[940px] p-6 sm:p-8 lg:p-10 shadow-lg mb-8 sm:mb-12 lg:mb-[72px]">
        <h3 className="font-inter font-medium text-2xl sm:text-3xl lg:text-[40px] text-button-primary text-center mb-6 lg:mb-10">
          Artevo
        </h3>

        <p className="font-inter font-light text-base sm:text-lg lg:text-2xl text-black leading-7 lg:leading-10 text-center lg:text-left">
          Sənətkarların və yaradıcı insanların bir araya gəldiyi məkan.
          Burada siz əl işlərinizi, dekorasiya və memarlıq layihələrinizi
          paylaşa, satışa çıxara və ala bilərsiniz. Bizim məqsədimiz
          yaradıcılığı dəstəkləmək və sənətə dəyər verən bir icma yaratmaqdır.
          Artevo – sənətin olduğu hər yerdə.
        </p>
      </div>
    </section>
  );
}