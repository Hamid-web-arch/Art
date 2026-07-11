import { useState } from "react";
import Logo from "../../../header/logo/Logo";
import Navbar from "../../../header/navbar/Navbar";
import LanguageIcon from "../../../header/language-icon/LanguageIcon";
import HamburgerButton from "../../../header/hamburger-button/HamburgerButton";
import MobileMenu from "../../../header/mobile-menu/MobileMenu";
import Button from "../aliciPage/components/Button";

export default function Header({ setIsAuthPage, setStep }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header id="main-header" className="sticky top-0 left-0 w-full bg-white z-50 transition-all duration-300 font-sans">
      <div className="container flex items-center justify-between py-4 relative">
       <div className="flex items-center justify-between xl:justify-start gap-4 md:gap-6 lg:gap-16">
        <Logo setIsAuthPage={setIsAuthPage} />
        <Navbar />
      </div>
      
       <div
         className="w-full max-w-[200px] sm:max-w-[316px] flex items-center justify-end gap-2 sm:gap-3 md:justify-between md:ml-2  md:gap-6">
         <LanguageIcon />
         <Button setIsAuthPage={setIsAuthPage} setStep={setStep}/>
         <HamburgerButton onClick={() => setIsOpen(true)}/>
               
      </div>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)}/>
      </div>
    </header>
  );
}