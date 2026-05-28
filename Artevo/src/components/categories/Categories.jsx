import category1 from "../../assets/category1.png";
import category2 from "../../assets/category2.png";
import category3 from "../../assets/category3.png";
import category4 from "../../assets/category4.png";

import HamisinaBaxButton from "../hamisina-bax-button/HamisinaBaxButton";

export default function Categories() {
  const categoriesData = [
    {
      id: 1,
      title: "Rəsm və illustrasiya",
      imgSrc: category1,
    },
    {
      id: 2,
      title: "Heykəltaraşlıq və keramika",
      imgSrc: category2,
    },
    {
      id: 3,
      title: "Zərgərlik və aksesuar",
      imgSrc: category3,
    },
    {
      id: 4,
      title: "Əl işləri və dekor",
      imgSrc: category4,
    },
  ];

  return (
    <section className="container pt-10 md:pt-20 clearfix">
      <h4 className="font-inter font-medium text-[28px] md:text-[40px]">
        Kateqoriyalar
      </h4>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 mt-6 md:mt-10">
        {categoriesData.map((category) => (
          <div
            key={category.id}
            className="w-full lg:max-w-[402px] cursor-pointer overflow-hidden transition-all duration-400 hover:scale-102 group"
          >
            <div className="w-full aspect-square md:aspect-[402/351] border-2 border-[var(--secondary-text-color)] group-hover:border-black transition-colors duration-400 rounded-[15px] overflow-hidden">
              <img
                src={category.imgSrc} 
                alt={category.title}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="font-inter font-medium text-[16px] lg:text-[24px] text-center mt-3 lg:mt-6">
              {category.title}
            </p>
          </div>
        ))}
      </div>

      <HamisinaBaxButton path="/categories" />
    </section>
  );
}