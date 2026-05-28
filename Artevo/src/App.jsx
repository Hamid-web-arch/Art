import Header from "./components/header/Header";
import Hero from "./components/hero/hero";
import ExhibitionSection from "./components/exhibition-section/ExhibitionSection";
import Categories from "./components/categories/Categories";
import MostViewed from "./components/most-viewed/MostViewed";
import Trendde from "./components/trendde/Trendde";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <ExhibitionSection/>
      <Categories />   
      <MostViewed />
      <Trendde/>
    </>
  );
}