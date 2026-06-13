import { Link } from "react-router-dom";
export default function Navbar() {
    const navItems = [
        { label: "Sərgilər", path: "/sergiler" },
        { label: "Kəşf et", path: "/keshf-et" },
        { label: "Haqqımızda", path: "/haqqimizda" },
        { label: "Əlaqə", path: "/elaqe" }
    ];

    return (
        <nav className="hidden md:block flex-1 max-w-[450px]">
            <ul className="w-full flex items-center justify-between gap-4 lg:gap-8">
                {navItems.map((item, index) => (
                    <li key={index}>
                        <Link to={item.path} className="font-sans text-base lg:text-lg font-medium text-black transition-colors hover:text-primary whitespace-nowrap">
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}