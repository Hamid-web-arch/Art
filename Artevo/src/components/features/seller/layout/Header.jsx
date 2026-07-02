import { useLocation, useNavigate } from 'react-router-dom';
import ProfileImage from "../../../../assets/seller/dashboard/profile-avatar.jpg"

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const isCreateProduct = location.pathname === '/seller/create-product';

  return (
    <header className="py-4 px-6 bg-white flex justify-between items-center">
      {/* Sol tərəf - Geri düyməsi */}
      <div>
        {isCreateProduct && (
          <button
            onClick={() => navigate('/seller/dashboard')}
            className="text-[#900B00] text-sm font-medium hover:underline"
          >
            ← Geri
          </button>
        )}
      </div>

      {/* Sağ tərəf - Profil */}
      <div className="flex items-center space-x-5">
        <div className="pr-4 border-r border-[#9C9C9C]">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.0983 10.7832C21.0983 7.31294 18.2551 4.46985 14.7847 4.46985C11.3023 4.46989 8.47107 7.30094 8.47107 10.7832V14.2582C8.47107 14.7337 8.37289 15.2823 8.23501 15.779C8.09706 16.276 7.89924 16.7936 7.65838 17.1976L7.65603 17.2012L6.27376 19.4982C5.97461 19.9956 5.95761 20.4585 6.08938 20.8147C6.22169 21.172 6.53856 21.5151 7.08879 21.7013H7.08762C12.0847 23.3703 17.4754 23.3708 22.4723 21.7013L22.4747 21.7002L22.6379 21.6356C23.4247 21.2688 23.7506 20.2755 23.2838 19.4971V19.4982L21.9016 17.2012L21.8922 17.1871C21.6612 16.7867 21.4679 16.2724 21.332 15.7767C21.1963 15.2819 21.0983 14.7334 21.0983 14.2582V10.7832ZM22.9022 14.2582C22.9022 14.5166 22.9604 14.8958 23.0713 15.2999C23.1818 15.7028 23.3256 16.0603 23.4553 16.2852H23.4541L24.8294 18.567L24.8305 18.5693L24.9268 18.7408C25.8634 20.5297 24.9856 22.7662 23.0431 23.4101L23.0443 23.4112C17.6756 25.2049 11.882 25.2049 6.51334 23.4112L6.50981 23.4101C5.49725 23.0672 4.73794 22.3587 4.39823 21.4418C4.05816 20.5234 4.17387 19.4895 4.72824 18.5681V18.567L6.11052 16.2711C6.24199 16.0496 6.38579 15.6966 6.49689 15.2963C6.60853 14.8942 6.66718 14.5163 6.66718 14.2582V10.7832C6.66718 6.30471 10.306 2.66606 14.7847 2.66602C19.2513 2.66602 22.9022 6.31671 22.9022 10.7832V14.2582Z" fill="black" />
            <path d="M14.7864 1.5C16.1779 1.5 17.3712 2.36229 17.8516 3.58803C17.9769 3.90797 17.9094 4.27139 17.6777 4.52517C17.4461 4.77886 17.0905 4.87914 16.7605 4.78353C16.5105 4.71094 16.2584 4.65109 16.0042 4.60855L15.7482 4.57215H15.7458C14.8363 4.45846 13.9702 4.50302 13.1586 4.69311L12.8134 4.78353C12.4834 4.87923 12.1278 4.77884 11.8961 4.52517C11.6644 4.27137 11.5969 3.90803 11.7223 3.58803C12.2027 2.36245 13.395 1.50019 14.7864 1.5Z" fill="black" />
            <path d="M12.0734 22.9902C12.0734 23.7268 12.3796 24.4144 12.8673 24.9021C13.355 25.3898 14.0426 25.696 14.7792 25.696C16.2654 25.696 17.4851 24.4763 17.4851 22.9902H19.289C19.289 25.4726 17.2616 27.4998 14.7792 27.4998C13.5436 27.4998 12.403 26.9886 11.5919 26.1775C10.7808 25.3664 10.2695 24.2258 10.2695 22.9902H12.0734Z" fill="black" />
          </svg>
        </div>
        <div className="flex items-center space-x-4">
          <div>
            <h4 className="font-inter font-medium text-[16px] text-black">Ceyhun Məmmədov</h4>
            <span className="font-inter font-normal text-[14px] text-[#5F5E5E]">Satıcı</span>
          </div>
          <div>
            <img src={ProfileImage} alt="Profile Image" className="w-10 h-10 rounded-full" />
          </div>
        </div>
      </div>
    </header>
  );
}