export default function MobileMenu({ isOpen, onClose }) {
  const navItems = ["Sərgilər", "Kəşf et", "Haqqımızda", "Əlaqə"];

  return (
    <div id="mobile-menu"
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}>

        <div id="mobile-menu-content"
          className={`absolute right-0 top-0 h-full w-1/2 min-w-[240px] bg-white p-6 shadow-xl transition-transform duration-300 flex flex-col justify-between font-sans ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}>
                      
          <div className="flex flex-col gap-8 pt-4">
             <div className="flex justify-end">
               <button id="menu-close" 
               onClick={onClose}
               type="button"
                   className="text-black hover:text-primary transition-colors p-1" aria-label="Menyunu bağla">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                   <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2"
                     strokeLinecap="round" strokeLinejoin="round" />
                   </svg>
               </button>
             </div>

            <ul className="flex flex-col gap-5 text-lg font-medium text-black">
               {navItems.map((item, index) => (
                   <li key={index}>
                    <a href="#" className="transition-colors hover:text-primary block py-1.5">
                         {item}
                    </a>
                   </li>
                 ))}
            </ul>
          </div>

          <div className="border-t border-gray-100 pt-4 text-center text-xs text-gray-400">
             © 2026 Bütün hüquqlar qorunur.
          </div>
        </div>
    </div>
  );
}