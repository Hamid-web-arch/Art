
import Hero from "./components/hero/Hero";
import ExhibitionSection from "./components/exhibition-section/ExhibitionSection";
import Categories from "./components/categories/Categories";
import MostViewed from "./components/most-viewed/MostViewed";
import Trendde from "./components/trendde/Trendde";
import DownloadApp from "./components/download-app/DownloadApp";
import Faq from "./components/faq/Faq";

export default function Home() {

  return ( 
        <div>
          <Hero />
          <ExhibitionSection />
          <Categories />
          <MostViewed />
          <Trendde />
          <DownloadApp />
          <Faq />   
        </div>
    
  );
}