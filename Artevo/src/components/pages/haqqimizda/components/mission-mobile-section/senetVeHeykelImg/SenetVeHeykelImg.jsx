import senetVeHeykelImg from "../../../../../../assets/haqqimizda/senetVeHeykelImg.png";
export default function SenetVeHeykelImg() {
  return (
    <div className="w-full lg:w-auto flex justify-center lg:justify-end shrink-0">
      <img
        src={senetVeHeykelImg}
        alt="Iphone Mobil tətbiq image"
        className="w-full h-full object-contain"
      />
    </div>
  );
}
