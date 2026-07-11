import Categories from "../../../pages/home/components/categories/Categories";
import DownloadApp from "../../../pages/home/components/download-app/DownloadApp";
import ExhibitionSection from "../../../pages/home/components/exhibition-section/ExhibitionSection";
import Faq from "../../../pages/home/components/faq/Faq";
import Hero from "../../../pages/home/components/hero/Hero";
import MostViewed from "../../../pages/home/components/most-viewed/MostViewed";
import Trendde from "../../../pages/home/components/trendde/Trendde";
import AliciLayout from "../layout/AliciLayout";


export default function AliciPage() {

  return ( 
        <AliciLayout>
          <Hero />
          <ExhibitionSection />
          <Categories />
          <MostViewed />
          <Trendde />
          <DownloadApp />
          <Faq />   
        </AliciLayout>
    
  );
}