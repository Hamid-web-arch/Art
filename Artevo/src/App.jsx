import { useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

// Əsas komponentlərin importları
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/pages/home/Home";
import Sergiler from "./components/pages/sergiler/Sergiler";
import KesfEt from "./components/pages/kesf-et/KesfEt";
import Haqqimizda from "./components/pages/haqqimizda/Haqqimizda";
import Elaqe from "./components/pages/elaqe/Elaqe";
import NotFoundPage from "./components/pages/not-found/NotFoundPage";
import AuthLayout from "./components/auth/AuthLayout";
import DashboardPage from "./components/features/seller/dashboard/DashboardPage";
import CreateProductPage from "./components/features/seller/create-product/CreateProductPage";
import CreateExhibitionPage from "./components/features/seller/create-exhibiton/CreateExhibitionPage"
import Sergilerim from "./components/features/seller/sergilerim/SergilerimPage";

// App komponenti sadəcə Router-i saxlayır
export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

// Bütün məntiq və hook-lar burada cəmlənib
function AppContent() {
  const [isAuthPage, setIsAuthPage] = useState(false);
  const [step, setStep] = useState("sanatkar-login");

  // useLocation indi düzgün yerdədir
  const location = useLocation();
  const isSellerPage = location.pathname.startsWith("/seller");

  return (
    <div className="min-h-screen flex flex-col justify-between">

      {/* Şərt: Auth-da deyiliksə VƏ Satıcı səhifəsində deyiliksə, ana Header görünsün */}
      {!isAuthPage && !isSellerPage && (
        <Header setIsAuthPage={setIsAuthPage} setStep={setStep} />
      )}

      {isAuthPage ? (
        <AuthLayout step={step} setStep={setStep} setIsAuthPage={setIsAuthPage} />
      ) : (
        <>
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sergiler" element={<Sergiler />} />
              <Route path="/keshf-et" element={<KesfEt />} />
              <Route path="/haqqimizda" element={<Haqqimizda />} /> 
              <Route path="/elaqe" element={<Elaqe />} />

              {/* Satıcı Paneli */}
              <Route path="/seller/dashboard" element={<DashboardPage />} />
              <Route path="/seller/create-product" element={<CreateProductPage />} />
              <Route path="/seller/sergilerim" element={<Sergilerim />} />
              <Route path="/seller/create-exhibition" element={<CreateExhibitionPage />} />
              <Route path="/seller/statistika" element={<div>Statistika (hazır deyil)</div>} />
              <Route path="/seller/mesajlar" element={<div>Mesajlar (hazır deyil)</div>} />
              <Route path="/seller/cuzdan-odenisler" element={<div>Cüzdan (hazır deyil)</div>} />
              <Route path="/seller/ayarlar" element={<div>Ayarlar (hazır deyil)</div>} />

              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>

          {/* Şərt: Satıcı səhifəsində deyiliksə, ana Footer görünsün */}
          {!isSellerPage && <Footer />}
        </> 
      )}
    </div>
  );
}