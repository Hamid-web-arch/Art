export default function Navbar() {
    const navItems = ["Sərgilər", "Kəşf et", "Haqqımızda", "Əlaqə"];

    return (
        <nav className="hidden md:block flex-1 max-w-[450px]">
            <ul className="w-full flex items-center justify-between gap-4 lg:gap-8">
                {navItems.map((item, index) => (
                    <li key={index}>
                        <a href="#" className="font-sans text-base lg:text-lg font-medium text-black transition-colors hover:text-primary whitespace-nowrap">
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}