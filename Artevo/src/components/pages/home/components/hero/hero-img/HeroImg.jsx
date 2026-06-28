    import heroImage from "../../../../../../assets/home/İllustration 1.png";
    export default function HeroImg(){
        return (
            <div className="w-full lg:w-auto flex justify-center lg:justify-end shrink-0">
                <img src={heroImage} alt="Sərgi İllüstrasiyası"
                    className="max-w-full h-auto object-contain lg:max-w-[500px]"/>
            </div>  
        );
    }