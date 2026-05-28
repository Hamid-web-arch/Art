export default function HamburgerButton({onClick}){
    return(
         <button id="menu-toggle"
          onClick={onClick}
          type="button"
                    className="block md:hidden text-black hover:text-primary transition-colors cursor-pointer p-1"
                    aria-label="Menyunu aç">
                    <svg id="hamburger-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                        className="w-[16px] h-[16px] sm:w-[24px] sm:h-[24px]">
                        <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                            strokeLinejoin="round" />
                    </svg>
                </button>
    );

}