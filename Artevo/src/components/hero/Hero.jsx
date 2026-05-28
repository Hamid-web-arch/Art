
import HeroInfo from "./hero-info/HeroInfo";
import HeroButtons from "./hero-buttons/HeroButtons";
import HeroImg from "./hero-img/HeroImg";

export default function Hero(){
    return(
        <section className="container  flex flex-col items-center justify-between lg:flex-row">
            <div>
                <HeroInfo/>
                <HeroButtons/>
            </div>
            <HeroImg/>
        </section>
    );
}