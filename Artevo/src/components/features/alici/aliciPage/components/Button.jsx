import { useState } from "react";
import profileImage from "../../../../../assets/alici/profileImage.png"; // Öz şəklin

export default function Button({ setIsAuthPage, setStep }) {
  const [isOpen, setIsOpen] = useState(false);

  // Sonradan API-dən gələcək
  const user = {
    fullName: "Ceyhun Məmmədov",
    role: "Alıcı",
    image: profileImage,
  };

  const handleAuthClick = (targetStep) => {
    setIsAuthPage(true);
    setStep(targetStep);
    setIsOpen(false);
  };

  const handleMainButtonClick = () => {
    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    if (isMobile && !isOpen) {
      setIsOpen(true);
      return;
    }

    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-[250px] h-[56px] font-sans">
      {/* Profil Button */}
      <button
        type="button"
        onClick={handleMainButtonClick}
        className="w-full h-full border-l border-[#9C9C9C] pl-4"
      >
        <div className="flex items-center justify-end gap-4">
          <div className="flex flex-col items-end">
            <h3 className="text-[18px] font-medium whitespace-nowrap">
              {user.fullName}
            </h3>

            <span className="text-[#7C7C7C] text-[16px]">{user.role}</span>
          </div>

          <img
            src={user.image}
            alt={user.fullName}
            className="w-[56px] h-[56px] rounded-full object-cover flex-shrink-0"
          />
        </div>
      </button>
    </div>
  );
}
