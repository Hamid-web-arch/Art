import { useState } from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/hero";
import ExhibitionSection from "./components/exhibition-section/ExhibitionSection";
import Categories from "./components/categories/Categories";
import MostViewed from "./components/most-viewed/MostViewed";
import Trendde from "./components/trendde/Trendde";
import DownloadApp from "./components/download-app/DownloadApp";
import Faq from "./components/faq/Faq";
import Footer from "./components/footer/Footer";
import AuthLayout from "./components/auth/AuthLayout";

export default function App() {
  const [isAuthPage, setIsAuthPage] = useState(false);
 
  const [step, setStep] = useState("sanatkar-login"); 

  return (
    <>
      {/* 1. ŞƏRT: Əgər giriş səhifəsində DEYİLİKSƏ, Header-i göstər */}
      {!isAuthPage && <Header setIsAuthPage={setIsAuthPage} setStep={setStep} />}

      {isAuthPage ? (
        /* Giriş səhifəsi açılanda loqoya klikləyib geri qayıda bilmək üçün */
        /* AuthLayout-a həm də setIsAuthPage propunu ötürürük */
        <AuthLayout step={step} setStep={setStep} setIsAuthPage={setIsAuthPage} />
      ) : (
        <>
          <Hero />
          <ExhibitionSection />
          <Categories />
          <MostViewed />
          <Trendde />
          <DownloadApp />
          <Faq />
          <Footer />
        </>
      )}
    </>
  );
}