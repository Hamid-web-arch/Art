export default function HamisinaBaxButton({ path = "#" }) {
  return (
    <a 
      href={path}
      className="text-end mt-5 md:mt-10 cursor-pointer select-none group/btn inline-flex items-center justify-end float-right gap-2"
    >
     
      <span className="font-inter font-medium text-[12px] md:text-[16px] text-button-primary align-middle">
        Hamsına bax
      </span>

     
      <svg 
        className="inline-block ml-2 w-[40px] md:w-[61px] h-auto align-middle transition-transform duration-300 group-hover/btn:translate-x-1.5"
        viewBox="0 0 61 15" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M60.7071 8.07039C61.0976 7.67986 61.0976 7.0467 60.7071 6.65617L54.3432 0.292213C53.9526 -0.0983109 53.3195 -0.0983109 52.9289 0.292213C52.5384 0.682738 52.5384 1.3159 52.9289 1.70643L58.5858 7.36328L52.9289 13.0201C52.5384 13.4107 52.5384 14.0438 52.9289 14.4343C53.3195 14.8249 53.9526 14.8249 54.3432 14.4343L60.7071 8.07039ZM0 7.36328V8.36328H60V7.36328V6.36328H0V7.36328Z"
          fill="currentColor" 
          className="text-button-primary"
        />
      </svg>
    </a>
  );
}