import Header from "./components/header/Header";
import Hero from "./components/hero/hero";
import ExhibitionSection from "./components/exhibition-section/ExhibitionSection";
import Categories from "./components/categories/Categories";
import MostViewed from "./components/most-viewed/MostViewed";
import Trendde from "./components/trendde/Trendde";
import DownloadApp from "./components/download-app/DownloadApp";
import Faq from "./components/faq/Faq";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <ExhibitionSection/>
      <Categories />   
      <MostViewed />
      <Trendde/>
      <DownloadApp/>
      <Faq/>
      <Footer/>
    </>
  );
}