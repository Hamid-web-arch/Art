import Logo from "../header/logo/Logo"
export default function Footer() {
  const navigationLinks = [
    { name: "Ana səhifə", href: "#" },
    { name: "Kateqoriyalar", href: "#" },
    { name: "Sənətkarlar", href: "#" },
    { name: "Kolleksiyalar", href: "#" },
    { name: "Yeniliklər", href: "#" },
    { name: "Blog", href: "#" },
  ];

  const helpLinks = [
    { name: "Tez-tez soruşulan suallar", href: "#" },
    { name: "Çatdırılma", href: "#" },
    { name: "Qaytarma", href: "#" },
    { name: "Ödəniş üsulları", href: "#" },
    { name: "Hesab ayarları", href: "#" },
    { name: "Texniki dəstək", href: "#" },
  ];

  return (
    <footer className="container mx-auto px-4 select-none">
      <div className="py-16">

        <div className="text-center py-12">
          <p className="font-inter font-semibold text-[24px] md:text-[30px] mb-3 text-black">
            Öz sənətkarlığını göstərməyə hazırsan?
          </p>
          <span className="font-inter font-normal text-[14px] md:text-[18px] text-[#4B5563]">
            Platformamıza qoşularaq sənətinizi dünya ilə bölüşün
          </span>
        </div>

        
        <div className="grid gap-8 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-start mt-16">
          
          {/* Logo və Sosial Media */}
          <div className="flex flex-col gap-6 items-center">
            <Logo/>
            
            {/* Sosial Linklər */}
            <ul className="flex items-center gap-4">
              <li>
                <a href="#" className="flex items-center justify-center rounded-lg bg-[#F3F4F6] hover:bg-gray-200 transition-colors w-10 h-10">
                  <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_552_4384)">
                      <path d="M8.63184 7.875L9.02066 5.34133H6.58953V3.69715C6.58953 3.00398 6.92914 2.32832 8.01797 2.32832H9.1232V0.171172C9.1232 0.171172 8.12023 0 7.16129 0C5.15918 0 3.85051 1.21352 3.85051 3.41031V5.34133H1.625V7.875H3.85051V14H6.58953V7.875H8.63184Z" fill="#4B5563" />
                    </g>
                    <defs>
                      <clipPath id="clip0_552_4384">
                        <path d="M1 0H9.75V14H1V0Z" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-center rounded-lg bg-[#F3F4F6] hover:bg-gray-200 transition-colors w-10 h-10">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.12588 2.98525C4.38682 2.98525 2.98408 4.38799 2.98408 6.12705C2.98408 7.86611 4.38682 9.26885 6.12588 9.26885C7.86494 9.26885 9.26768 7.86611 9.26768 6.12705C9.26768 4.38799 7.86494 2.98525 6.12588 2.98525ZM6.12588 8.16963C5.00205 8.16963 4.0833 7.25361 4.0833 6.12705C4.0833 5.00049 4.99932 4.08447 6.12588 4.08447C7.25244 4.08447 8.16846 5.00049 8.16846 6.12705C8.16846 7.25361 7.24971 8.16963 6.12588 8.16963ZM10.129 2.85674C10.129 3.26416 9.80088 3.58955 9.39619 3.58955C8.98877 3.58955 8.66338 3.26143 8.66338 2.85674C8.66338 2.45205 8.9915 2.12393 9.39619 2.12393C9.80088 2.12393 10.129 2.45205 10.129 2.85674ZM12.2099 3.60049C12.1634 2.61885 11.9392 1.74932 11.22 1.03291C10.5036 0.316504 9.63408 0.0922852 8.65244 0.0430664C7.64072 -0.0143555 4.6083 -0.0143555 3.59658 0.0430664C2.61768 0.0895508 1.74814 0.313769 1.029 1.03018C0.309863 1.74658 0.0883789 2.61611 0.0391602 3.59775C-0.0182617 4.60947 -0.0182617 7.64189 0.0391602 8.65361C0.0856445 9.63525 0.309863 10.5048 1.029 11.2212C1.74814 11.9376 2.61494 12.1618 3.59658 12.211C4.6083 12.2685 7.64072 12.2685 8.65244 12.211C9.63408 12.1645 10.5036 11.9403 11.22 11.2212C11.9364 10.5048 12.1606 9.63525 12.2099 8.65361C12.2673 7.64189 12.2673 4.61221 12.2099 3.60049ZM10.9028 9.73916C10.6896 10.2751 10.2767 10.688 9.73799 10.904C8.93135 11.2239 7.01729 11.1501 6.12588 11.1501C5.23447 11.1501 3.31768 11.2212 2.51377 10.904C1.97783 10.6907 1.56494 10.2778 1.34893 9.73916C1.029 8.93252 1.10283 7.01846 1.10283 6.12705C1.10283 5.23564 1.03174 3.31885 1.34893 2.51494C1.56221 1.979 1.9751 1.56611 2.51377 1.3501C3.32041 1.03018 5.23447 1.104 6.12588 1.104C7.01729 1.104 8.93408 1.03291 9.73799 1.3501C10.2739 1.56338 10.6868 1.97627 10.9028 2.51494C11.2228 3.32158 11.1489 5.23564 11.1489 6.12705C11.1489 7.01846 11.2228 8.93525 10.9028 9.73916Z" fill="#4B5563" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-center rounded-lg bg-[#F3F4F6] hover:bg-gray-200 transition-colors w-10 h-10">
                  <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5609 2.83374C12.5698 2.9581 12.5698 3.08249 12.5698 3.20685C12.5698 6.99997 9.68275 11.3705 4.40609 11.3705C2.78045 11.3705 1.27031 10.8997 0 10.0825C0.230973 10.1091 0.453031 10.118 0.692891 10.118C2.03424 10.118 3.26903 9.66498 4.25507 8.89213C2.99365 8.86547 1.93654 8.03934 1.57232 6.90227C1.75 6.92891 1.92765 6.94668 2.11422 6.94668C2.37182 6.94668 2.62946 6.91113 2.86929 6.84898C1.55457 6.58246 0.568504 5.42765 0.568504 4.03298V3.99746C0.950469 4.21066 1.39467 4.34391 1.86545 4.36166C1.0926 3.84642 0.586277 2.96699 0.586277 1.97206C0.586277 1.43907 0.728383 0.950496 0.977129 0.524098C2.38957 2.26521 4.51268 3.40225 6.89336 3.52663C6.84895 3.31343 6.82229 3.09138 6.82229 2.86929C6.82229 1.28805 8.10149 0 9.69158 0C10.5177 0 11.2639 0.346445 11.788 0.90609C12.4365 0.78173 13.0583 0.541871 13.6091 0.213199C13.3959 0.879457 12.9428 1.4391 12.3477 1.79441C12.9251 1.73225 13.4847 1.57232 13.9999 1.35026C13.6091 1.91877 13.1205 2.42509 12.5609 2.83374Z" fill="#4B5563" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-center rounded-lg bg-[#F3F4F6] hover:bg-gray-200 transition-colors w-10 h-10">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.74203 12.2497H0.202344V4.07121H2.74203V12.2497ZM1.47082 2.95559C0.658711 2.95559 0 2.28293 0 1.47082C5.81273e-09 1.08073 0.154961 0.706626 0.430793 0.430793C0.706626 0.154961 1.08073 0 1.47082 0C1.86091 0 2.23501 0.154961 2.51085 0.430793C2.78668 0.706626 2.94164 1.08073 2.94164 1.47082C2.94164 2.28293 2.28266 2.95559 1.47082 2.95559ZM12.2473 12.2497H9.71305V8.26848C9.71305 7.31965 9.69391 6.10285 8.39262 6.10285C7.07219 6.10285 6.86984 7.13371 6.86984 8.20012V12.2497H4.33289V4.07121H6.76867V5.18684H6.80422C7.14328 4.54426 7.97152 3.86613 9.20719 3.86613C11.7775 3.86613 12.25 5.55871 12.25 7.75715V12.2497H12.2473Z" fill="#4B5563" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Naviqasiya Sütunu */}
          <div className="flex flex-col gap-6">
            <h4 className="font-inter font-semibold text-[16px] text-black">Naviqasiya</h4>
            <ul className="flex flex-col gap-4">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="font-inter font-normal text-[16px] text-[#4B5563] hover:text-black transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kömək Sütunu */}
          <div className="flex flex-col gap-6">
            <h4 className="font-inter font-semibold text-[16px] text-black">Kömək</h4>
            <ul className="flex flex-col gap-4">
              {helpLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="font-inter font-normal text-[16px] text-[#4B5563] hover:text-black transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Əlaqə Sütunu */}
          <div className="flex flex-col gap-6">
            <h4 className="font-inter font-semibold text-[16px] text-black">Əlaqə</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="mailto:info@artevo.az" className="font-inter font-normal text-[16px] text-[#4B5563] hover:text-black transition-colors flex items-center gap-3">
                  <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.3125 0C0.587891 0 0 0.587891 0 1.3125C0 1.72539 0.194141 2.11367 0.525 2.3625L6.475 6.825C6.78672 7.05742 7.21328 7.05742 7.525 6.825L13.475 2.3625C13.8059 2.11367 14 1.72539 14 1.3125C14 0.587891 13.4121 0 12.6875 0H1.3125ZM0 3.0625V8.75C0 9.71523 0.784766 10.5 1.75 10.5H12.25C13.2152 10.5 14 9.71523 14 8.75V3.0625L8.05 7.525C7.42656 7.99258 6.57344 7.99258 5.95 7.525L0 3.0625Z" fill="#4B5563" />
                  </svg>
                  <span>info@artevo.az</span>
                </a>
              </li>
              <li>
                <a href="tel:+994123456789" className="font-inter font-normal text-[16px] text-[#4B5563] hover:text-black transition-colors flex items-center gap-3">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.50898 0.673273C4.29844 0.164679 3.74336 -0.106024 3.21289 0.0388978L0.806641 0.695148C0.330859 0.826398 0 1.25843 0 1.75062C0 8.51546 5.48516 14.0006 12.25 14.0006C12.7422 14.0006 13.1742 13.6698 13.3055 13.194L13.9617 10.7877C14.1066 10.2573 13.8359 9.70218 13.3273 9.49163L10.7023 8.39788C10.2566 8.21194 9.73984 8.34046 9.43633 8.71507L8.33164 10.0631C6.40664 9.15257 4.84805 7.59398 3.9375 5.66898L5.28555 4.56702C5.66016 4.26077 5.78867 3.74671 5.60273 3.30101L4.50898 0.676007V0.673273Z" fill="#4B5563" />
                  </svg>
                  <span>+994 12 345 67 89</span>
                </a>
              </li>
              <li>
                <div className="font-inter font-normal text-[16px] text-[#4B5563] flex items-start gap-3">
                  <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1 flex-shrink-0">
                    <path d="M5.89805 13.65C7.30078 11.8945 10.5 7.63984 10.5 5.25C10.5 2.35156 8.14844 0 5.25 0C2.35156 0 0 2.35156 0 5.25C0 7.63984 3.19922 11.8945 4.60195 13.65C4.93828 14.0684 5.56172 14.0684 5.89805 13.65ZM5.25 3.5C5.71413 3.5 6.15925 3.68437 6.48744 4.01256C6.81563 4.34075 7 4.78587 7 5.25C7 5.71413 6.81563 6.15925 6.48744 6.48744C6.15925 6.81563 5.71413 7 5.25 7C4.78587 7 4.34075 6.81563 4.01256 6.48744C3.68437 6.15925 3.5 5.71413 3.5 5.25C3.5 4.78587 3.68437 4.34075 4.01256 4.01256C4.34075 3.68437 4.78587 3.5 5.25 3.5Z" fill="#4B5563" />
                  </svg>
                  <span className="leading-tight">Bakı, Azərbaycan<br />Nizami küç. 123</span>
                </div>
              </li>
              <li>
                <a href="#" className="font-inter font-normal text-[16px] text-[#4B5563] hover:text-black transition-colors">
                  Bizimlə əlaqə
                </a>
              </li>
              <li>
                <a href="#" className="font-inter font-normal text-[16px] text-[#4B5563] hover:text-black transition-colors">
                  Partnyorluq
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Copyright və Siyasətlər */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-8 border-t border-gray-100">
        <p className="font-inter font-normal text-[14px] text-[#6B7280] text-center sm:text-left">
          © 2026 Artevo. Bütün hüquqlar qorunur.
        </p>

        <ul className="flex flex-wrap justify-center gap-6">
          <li className="font-inter font-normal text-[14px] text-[#6B7280] hover:text-black cursor-pointer transition-colors">
            Məxfilik siyasəti
          </li>
          <li className="font-inter font-normal text-[14px] text-[#6B7280] hover:text-black cursor-pointer transition-colors">
            İstifadə şərtləri
          </li>
          <li className="font-inter font-normal text-[14px] text-[#6B7280] hover:text-black cursor-pointer transition-colors">
            Cookie siyasəti
          </li>
        </ul>
      </div>
    </footer>
  );
}