import iphoneImg from "../../../../../../assets/haqqimizda/iphone.png";
export default function IphoneImg() {
  return (
    <div className="w-full lg:w-auto flex justify-center lg:justify-end shrink-0">
      <img
        src={iphoneImg}
        alt="Artevo mobil tətbiq"
        className="max-w-full h-auto object-contain"
      />
    </div>
  );
}
