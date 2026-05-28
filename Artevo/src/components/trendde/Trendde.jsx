import enCoxBaxilanlar1 from "../../assets/trendde1.png";
import enCoxBaxilanlar2 from "../../assets/trendde2.png";
import enCoxBaxilanlar3 from "../../assets/trendde3.png";
import enCoxBaxilanlar4 from "../../assets/trendde4.png";
import enCoxBaxilanlar5 from "../../assets/trendde5.png";
import enCoxBaxilanlar6 from "../../assets/trendde6.png";
import enCoxBaxilanlar7 from "../../assets/trendde7.png";
import enCoxBaxilanlar8 from "../../assets/trendde8.png";


import HamisinaBaxButton from "../hamisina-bax-button/HamisinaBaxButton";

export default function MostViewed() {
  const productsData = [
    {
      id: 1,
      badge: "Zərgərlik",
      title: "Akrilik tablo – “Xəyallar Şəhəri”",
      oldPrice: "600 AZN",
      currentPrice: "400 AZN",
      rating: "4.8",
      imgSrc: enCoxBaxilanlar1,
    },
    {
      id: 2,
      badge: "Rəsmlər",
    title: "Akrilik tablo – “Xəyallar Şəhəri”",
      oldPrice: "600 AZN",
      currentPrice: "400 AZN",
      rating: "4.8",
      imgSrc: enCoxBaxilanlar2,
    },
    {
      id: 3,
      badge: "Toxuma",
     title: "Akrilik tablo – “Xəyallar Şəhəri”",
      oldPrice: "600 AZN",
      currentPrice: "400 AZN",
      rating: "4.8",
      imgSrc: enCoxBaxilanlar3,
    },
    {
      id: 4,
      badge: "Dekor",
     title: "Akrilik tablo – “Xəyallar Şəhəri”",
      oldPrice: "600 AZN",
      currentPrice: "400 AZN",
      rating: "4.8",
      imgSrc: enCoxBaxilanlar4,
    },
    {
      id: 5,
      badge: "Rəsmlər",
     title: "Akrilik tablo – “Xəyallar Şəhəri”",
      oldPrice: "600 AZN",
      currentPrice: "400 AZN",
      rating: "4.8",
      imgSrc: enCoxBaxilanlar5,
    },   
    {
      id: 6,
      badge: "Dekor",
     title: "Akrilik tablo – “Xəyallar Şəhəri”",
      oldPrice: "600 AZN",
      currentPrice: "400 AZN",
      rating: "4.8",
      imgSrc: enCoxBaxilanlar6,
    },
    {
      id: 7,
      badge: "Zərgərlik",
    title: "Akrilik tablo – “Xəyallar Şəhəri”",
      oldPrice: "600 AZN",
      currentPrice: "400 AZN",
      rating: "4.8",
      imgSrc: enCoxBaxilanlar7,
    },
    {
      id: 8,
      badge: "Toxuma",
      title: "Akrilik tablo – “Xəyallar Şəhəri”",
      oldPrice: "600 AZN",
      currentPrice: "400 AZN",
      rating: "4.8",
      imgSrc: enCoxBaxilanlar8,
    },
  ];

  return (
    <section className="container py-[40px] md:py-[86px]">
      <h4 className="font-inter font-medium text-[28px] md:text-[40px]">
        Trenddə
      </h4>

      <div className="w-full mx-auto grid justify-items-center grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 gap-y-10 md:gap-6 md:gap-y-15 mt-10">
        {productsData.map((product) => (
          <div  
            key={product.id}
            className="w-full lg:max-w-[402px] lg:max-h-[423px] relative hover:scale-102 transition-all duration-400 group"
          >
            {/* Şəkil Konteyneri */}
            <div className="w-full aspect-square sm:aspect-[3/4] lg:aspect-auto lg:h-[337px] overflow-hidden rounded-[16px]">
              <img 
                src={product.imgSrc} 
                alt={product.title}
                className="w-full h-full object-center object-cover"
              />
            </div>

            <span className="font-inter font-medium text-[10px] md:text-[24px] text-button-primary bg-white/40 rounded-[10px] py-1 px-3 md:py-[7.5px] md:px-[19.5px] absolute top-[19px] left-[19px] backdrop-blur-[2px]">
              {product.badge}
            </span>

            <button 
              className="absolute top-[19px] right-[19px] transition-colors cursor-pointer focus:outline-none"
              aria-label="Bəyən"
            >
              <svg 
                className="hover:text-primary text-white w-[20px] h-[20px] md:w-[40px] md:h-[40px] drop-shadow-md"
                viewBox="0 0 40 40" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35.4154 14.4824C35.4152 10.0173 31.8195 6.4164 27.3994 6.41602C24.7957 6.41602 22.4611 7.68177 21.0029 9.64518C20.7671 9.9627 20.3942 10.1497 19.9987 10.1497C19.6032 10.1497 19.2303 9.9627 18.9945 9.64518C17.5356 7.68074 15.2171 6.41602 12.598 6.41602C8.17792 6.4164 4.58217 10.0173 4.58203 14.4824C4.58203 19.9 7.08386 24.2408 10.2314 27.4658C13.1963 30.5035 16.6669 32.4773 18.9326 33.3415L19.3688 33.4994L19.6227 33.5579C19.728 33.5729 19.8556 33.5824 19.9987 33.5824C20.2839 33.5824 20.5074 33.5423 20.6156 33.5042L21.0648 33.3415C23.3305 32.4773 26.8011 30.5035 29.7659 27.4658C32.9135 24.2408 35.4154 19.9 35.4154 14.4824ZM37.9154 14.4824C37.9154 20.7315 35.017 25.6664 31.5563 29.2122C28.1106 32.7426 24.0319 34.9796 21.4359 35.8659C20.9803 36.0243 20.4586 36.0824 19.9987 36.0824C19.5383 36.0824 19.0175 36.0231 18.5615 35.8643C15.9655 34.978 11.8868 32.7426 8.44108 29.2122C4.9804 25.6664 2.08203 20.7315 2.08203 14.4824C2.08217 8.64827 6.78554 3.9164 12.598 3.91602C15.4937 3.91602 18.1056 5.09628 19.9987 6.99544C21.8958 5.09538 24.5183 3.91602 27.3994 3.91602C33.2119 3.9164 37.9152 8.64827 37.9154 14.4824Z"
                  fill="currentColor" 
                  stroke="currentColor" 
                  strokeWidth="0.5" 
                />
                <path 
                  fillRule="evenodd" 
                  clipRule="evenodd"
                  d="M27.3994 6.41602C31.8195 6.4164 35.4152 10.0173 35.4154 14.4824C35.4154 19.9 32.9135 24.2408 29.7659 27.4658C26.8011 30.5035 23.3305 32.4773 21.0648 33.3415L20.6156 33.5042C20.5074 33.5423 20.2839 33.5824 19.9987 33.5824C19.8556 33.5824 19.728 33.5729 19.6227 33.5579L19.3688 33.4994L18.9326 33.3415C16.6669 32.4773 13.1963 30.5035 10.2314 27.4658C7.08386 24.2408 4.58203 19.9 4.58203 14.4824C4.58217 10.0173 8.17792 6.4164 12.598 6.41602C15.2171 6.41602 17.5356 7.68074 18.9945 9.64518C19.2303 9.9627 19.6032 10.1497 19.9987 10.1497C20.3942 10.1497 20.7671 9.9627 21.0029 9.64518C22.4611 7.68177 24.7957 6.41602 27.3994 6.41602Z"
                  fill="currentColor" 
                />
              </svg>
            </button>
            
           
            <div className="mt-2 md:mt-6">
              <p className="font-inter font-medium text-[12px] md:text-[24px] text-center line-clamp-1">
                {product.title}
              </p>
              <div className="flex items-center gap-1 md:gap-4 justify-center text-center mt-1">
                
                
                <div className="flex items-center gap-0.5 md:gap-1">
                  <span className="font-inter text-[8px] md:text-[16px] text-text-last-price">
                    Qiymət: <span className="line-through">{product.oldPrice}</span>
                  </span>
                  <p className="font-inter font-medium text-[12px] md:text-[24px]">
                    {product.currentPrice}
                  </p>
                </div>

              
                <div className="flex items-center gap-0.5 md:gap-1">
                  <span className="font-inter font-medium text-[12px] md:text-[24px] text-text-last-price">
                    {product.rating}
                  </span>
                  <svg 
                    viewBox="0 0 21 22" 
                    fill="none" 
                    className="w-[16px] h-[17px] md:w-[21px] md:h-[22px]"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.20831 0.620635C9.31836 0.431795 9.476 0.275109 9.6655 0.166209C9.855 0.0573086 10.0697 0 10.2883 0C10.5069 0 10.7216 0.0573086 10.9111 0.166209C11.1006 0.275109 11.2583 0.431795 11.3683 0.620635L14.1633 5.41864L19.5913 6.59464C19.8048 6.64103 20.0024 6.74258 20.1645 6.88917C20.3265 7.03575 20.4473 7.22225 20.5148 7.43006C20.5823 7.63787 20.5941 7.85974 20.5491 8.07355C20.5041 8.28737 20.4038 8.48565 20.2583 8.64863L16.5583 12.7896L17.1183 18.3146C17.1404 18.5322 17.105 18.7517 17.0157 18.9513C16.9265 19.151 16.7864 19.3237 16.6094 19.4522C16.4325 19.5807 16.225 19.6606 16.0076 19.6838C15.7901 19.7071 15.5704 19.6729 15.3703 19.5846L10.2883 17.3446L5.20632 19.5846C5.00623 19.6729 4.78651 19.7071 4.56907 19.6838C4.35163 19.6606 4.1441 19.5807 3.96719 19.4522C3.79028 19.3237 3.65018 19.151 3.56088 18.9513C3.47159 18.7517 3.43622 18.5322 3.45832 18.3146L4.01832 12.7896L0.318315 8.64964C0.172543 8.48666 0.0720706 8.2883 0.026929 8.07435C-0.0182127 7.86041 -0.00644447 7.63837 0.0610588 7.43039C0.128562 7.22242 0.249439 7.03579 0.411621 6.88913C0.573804 6.74248 0.771618 6.64093 0.985315 6.59464L6.41332 5.41864L9.20831 0.620635Z"
                      fill="#FFD900"
                    />
                  </svg>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>

      
      <HamisinaBaxButton path="/trendde" />
    </section>
  );
}