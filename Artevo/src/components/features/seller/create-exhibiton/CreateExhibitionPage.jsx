import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SellerLayout from '../layout/SellerLayout';

export default function CreateProductPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        shortDescription: '',
        startDate: '',
        endDate: '',
        price: '',
        location: '',
        collaborators: [],
        coverImage: null,
        virtualGallery: '',
        isOnline: false,

    });

    const [collaboratorInput, setCollaboratorInput] = useState('');
    const [dragOver, setDragOver] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);
    const [status, setStatus] = useState("online")

    const handleStatusChange = (newStatus) => {
        setStatus(newStatus);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleCollaboratorAdd = (e) => {
        if (e.key === 'Enter' && collaboratorInput.trim()) {
            setFormData({
                ...formData,
                collaborators: [...formData.collaborators, collaboratorInput.trim()]
            });
            setCollaboratorInput('');
        }
    };

    const removeCollaborator = (index) => {
        setFormData({
            ...formData,
            collaborators: formData.collaborators.filter((_, i) => i !== index)
        });
    };

    const handleImageDrop = (e) => {
        e.preventDefault();
        setDragOver(false);
        const file = e.dataTransfer.files[0];
        if (file) {
            setImagePreview(URL.createObjectURL(file));
            setFormData({ ...formData, image: file });
        }
    };

    const handleImageSelect = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImagePreview(URL.createObjectURL(file));
            setFormData({ ...formData, image: file });
        }
    };

    const handleGallerySelect = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({ ...formData, galleryFile: file });
        }
    };

    const handleSubmit = (e)=>{
          e.preventDefault()
         const finalData= {...formData,isOnline:status==="online"}
         console.log(finalData)
    }

    const inputClass = "border border-[#9c9c9c] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#900B00] w-full bg-transparent";
    const labelClass = "text-xs font-medium text-[#9c9c9c] uppercase tracking-wider";


    return (
        <SellerLayout>
            <div className="flex flex-col gap-6">

                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Sərgi məlumatları</h1>
                        <p className="text-sm text-gray-500 mt-1">Yeni sərgi yaratmaq üçün aşağıdakı xanaları doldurun.</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <button onClick={() => handleStatusChange("offline")} className={`${status === "online" ? "bg-[#FFF0EF] text-[#900B00]" : "bg-[#900b00] text-white"} font-normal py-1 px-6 rounded-2xl`} >Offline</button>

                        <button onClick={() => handleStatusChange("online")} className={`${status === "online" ? "bg-[#900b00] text-white" : "bg-[#FFF0EF] text-[#900B00]"} font-normal py-1 px-6 rounded-2xl`} >online</button>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    {/* Məhsul adı və Kateqoriya */}
                    <div className="grid grid-cols-2 gap-8">
                        <div className="flex flex-col gap-1">
                            <label className={labelClass}>Məhsul adı</label>
                            <input
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Sərginin adını daxil edin"
                                className={inputClass}
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className={labelClass}>Kateqoriya</label>
                            <input
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                placeholder="Müasir İncəsənət"
                                className={inputClass}
                            />
                        </div>
                    </div>

                    {/* Qısa təsvir */}
                    <div className="grid grid-cols-1 gap-1">
                        <label className={labelClass}>Qısa təsvir</label>
                        <input
                            name="shortDescription"
                            value={formData.shortDescription}
                            onChange={handleChange}
                            placeholder="Sərgi haqqında ətraflı məlumat"
                            className={`${inputClass} pb-16`}
                        />

                    </div>
                     
                    {/* Start date and End date */}
                    <div className="grid grid-cols-2 gap-8">
                        <div className="flex flex-col gap-1">
                            <label className={labelClass}>Başlama tarixi</label>
                            <input
                                name="startDate"
                                value={formData.startDate}
                                onChange={handleChange}
                                placeholder="dd/mm/yyyy"
                                className={inputClass}
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className={labelClass}>Bitmə tarixi</label>
                            <input
                                name="endDate"
                                value={formData.endDate}
                                onChange={handleChange}
                                placeholder="dd/mm/yyyy"
                                className={inputClass}
                            />
                        </div>
                    </div>

                    {/* Qiymət və Məkan */}
                    <div className="grid grid-cols-2 gap-8">
                        <div className="flex flex-col gap-1">
                            <label className={labelClass}>Qiymət</label>
                            <input
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                placeholder="0.00"
                                className={inputClass}
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className={labelClass}>Məkan</label>
                            <input
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                placeholder="Qalereya və ya ünvan"
                                className={inputClass}
                            />
                        </div>
                    </div>

                    {/* Kollaboratorlar */}
                    <div className="flex flex-col gap-1">
                        <label className={labelClass}>İştirak edən sənətkarlar</label>
                        <div className="border border-gray-300 rounded-lg px-4 py-3 flex flex-wrap items-center gap-2 focus-within:border-[#900B00]">
                            {formData.collaborators.map((c, i) => (
                                <span key={i} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full flex items-center gap-1">
                                    {c}
                                    <button onClick={() => removeCollaborator(i)} className="text-gray-400 hover:text-gray-600">×</button>
                                </span>
                            ))}
                            <input
                                value={collaboratorInput}
                                onChange={(e) => setCollaboratorInput(e.target.value)}
                                onKeyDown={handleCollaboratorAdd}
                                placeholder="Sənətkar əlavə et..."
                                className="text-sm outline-none flex-1 min-w-[150px] bg-transparent"
                            />
                        </div>
                    </div>

                    {/* Qapaq Şəkil yükləmə */}
                    <div className="flex flex-col gap-1">
                        <label className={labelClass}>Qapaq şəkli</label>
                        <div
                            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                            onDragLeave={() => setDragOver(false)}
                            onDrop={handleImageDrop}
                            className={`border-2 border-dashed rounded-xl p-10 flex flex-col items-center justify-center gap-3 cursor-pointer transition-colors ${dragOver ? 'border-[#900B00] bg-red-50' : 'border-gray-200 bg-gray-50'}`}
                            onClick={() => document.getElementById('coverImageInput').click()}
                        >
                            {imagePreview ? (
                                <img src={imagePreview} alt="Preview" className="w-32 h-32 object-cover rounded-lg" />
                            ) : (
                                <>
                                    <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g filter="url(#filter0_d_865_6747)">
                                            <rect x="2" y="1" width="64" height="64" rx="32" fill="white" shapeRendering="crispEdges" />
                                            <rect x="2.5" y="1.5" width="63" height="63" rx="31.5" stroke="#E4BEBA" shapeRendering="crispEdges" />
                                            <path d="M27.125 43C25.2292 43 23.6094 42.3438 22.2656 41.0312C20.9219 39.7188 20.25 38.1146 20.25 36.2188C20.25 34.5938 20.7396 33.1458 21.7188 31.875C22.6979 30.6042 23.9792 29.7917 25.5625 29.4375C26.0833 27.5208 27.125 25.9688 28.6875 24.7812C30.25 23.5938 32.0208 23 34 23C36.4375 23 38.5052 23.849 40.2031 25.5469C41.901 27.2448 42.75 29.3125 42.75 31.75C44.1875 31.9167 45.3802 32.5365 46.3281 33.6094C47.276 34.6823 47.75 35.9375 47.75 37.375C47.75 38.9375 47.2031 40.2656 46.1094 41.3594C45.0156 42.4531 43.6875 43 42.125 43H35.25C34.5625 43 33.974 42.7552 33.4844 42.2656C32.9948 41.776 32.75 41.1875 32.75 40.5V34.0625L30.75 36L29 34.25L34 29.25L39 34.25L37.25 36L35.25 34.0625V40.5H42.125C43 40.5 43.7396 40.1979 44.3438 39.5938C44.9479 38.9896 45.25 38.25 45.25 37.375C45.25 36.5 44.9479 35.7604 44.3438 35.1562C43.7396 34.5521 43 34.25 42.125 34.25H40.25V31.75C40.25 30.0208 39.6406 28.5469 38.4219 27.3281C37.2031 26.1094 35.7292 25.5 34 25.5C32.2708 25.5 30.7969 26.1094 29.5781 27.3281C28.3594 28.5469 27.75 30.0208 27.75 31.75H27.125C25.9167 31.75 24.8854 32.1771 24.0312 33.0312C23.1771 33.8854 22.75 34.9167 22.75 36.125C22.75 37.3333 23.1771 38.3646 24.0312 39.2188C24.8854 40.0729 25.9167 40.5 27.125 40.5H30.25V43H27.125Z" fill="#900B00" />
                                        </g>
                                        <defs>
                                            <filter id="filter0_d_865_6747" x="0" y="0" width="68" height="68" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset dy="1" />
                                                <feGaussianBlur stdDeviation="1" />
                                                <feComposite in2="hardAlpha" operator="out" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_865_6747" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_865_6747" result="shape" />
                                            </filter>
                                        </defs>
                                    </svg>
                                    <p className="text-sm text-gray-500">Şəkli buraya sürün və ya fayl seçin</p>
                                    <p className="text-xs text-gray-400">PNG, JPG və ya WEBP (Max. 10MB, 1920×1080 tövsiyə olunur)</p>
                                </>
                            )}
                            <input id="coverImageInput" type="file" accept="image/*" className="hidden" onChange={handleImageSelect} />
                        </div>
                    </div>

                    {/* Virtual qalereya */}
                    <div className="flex flex-col gap-1">
                        <label className={labelClass}>Virtual qalereya</label>
                        <div
                            className="border-2 border-dashed rounded-xl p-10 flex flex-col items-center justify-center gap-3 border-gray-200 bg-gray-50 cursor-pointer"
                            onClick={() => document.getElementById('galleryFileInput').click()}
                        >
                            <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_865_6747)">
                                    <rect x="2" y="1" width="64" height="64" rx="32" fill="white" shapeRendering="crispEdges" />
                                    <rect x="2.5" y="1.5" width="63" height="63" rx="31.5" stroke="#E4BEBA" shapeRendering="crispEdges" />
                                    <path d="M27.125 43C25.2292 43 23.6094 42.3438 22.2656 41.0312C20.9219 39.7188 20.25 38.1146 20.25 36.2188C20.25 34.5938 20.7396 33.1458 21.7188 31.875C22.6979 30.6042 23.9792 29.7917 25.5625 29.4375C26.0833 27.5208 27.125 25.9688 28.6875 24.7812C30.25 23.5938 32.0208 23 34 23C36.4375 23 38.5052 23.849 40.2031 25.5469C41.901 27.2448 42.75 29.3125 42.75 31.75C44.1875 31.9167 45.3802 32.5365 46.3281 33.6094C47.276 34.6823 47.75 35.9375 47.75 37.375C47.75 38.9375 47.2031 40.2656 46.1094 41.3594C45.0156 42.4531 43.6875 43 42.125 43H35.25C34.5625 43 33.974 42.7552 33.4844 42.2656C32.9948 41.776 32.75 41.1875 32.75 40.5V34.0625L30.75 36L29 34.25L34 29.25L39 34.25L37.25 36L35.25 34.0625V40.5H42.125C43 40.5 43.7396 40.1979 44.3438 39.5938C44.9479 38.9896 45.25 38.25 45.25 37.375C45.25 36.5 44.9479 35.7604 44.3438 35.1562C43.7396 34.5521 43 34.25 42.125 34.25H40.25V31.75C40.25 30.0208 39.6406 28.5469 38.4219 27.3281C37.2031 26.1094 35.7292 25.5 34 25.5C32.2708 25.5 30.7969 26.1094 29.5781 27.3281C28.3594 28.5469 27.75 30.0208 27.75 31.75H27.125C25.9167 31.75 24.8854 32.1771 24.0312 33.0312C23.1771 33.8854 22.75 34.9167 22.75 36.125C22.75 37.3333 23.1771 38.3646 24.0312 39.2188C24.8854 40.0729 25.9167 40.5 27.125 40.5H30.25V43H27.125Z" fill="#900B00" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_865_6747" x="0" y="0" width="68" height="68" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="1" />
                                        <feGaussianBlur stdDeviation="1" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_865_6747" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_865_6747" result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                            <p className="text-sm text-gray-500">Video və ya 3D model faylı yükləyin</p>
                            <p className="text-xs text-gray-400">MP4, GLB (Max. 50MB)</p>

                            <input
                                id="galleryFileInput"
                                type="file"
                                accept="video/*,.glb,.gltf"
                                className="hidden"
                                onChange={handleGallerySelect}
                            />

                            {/* Link yazmaq istəsə, alternativ kimi ayrıca sahə */}
                            <input
                                name="virtualGallery"
                                value={formData.virtualGallery}
                                onChange={handleChange}
                                placeholder="və ya linki bura yapışdırın"
                                onClick={(e) => e.stopPropagation()}  // vacib! aşağıda izah edirəm
                                className="text-sm text-center outline-none bg-transparent w-full mt-2"
                            />
                        </div>
                    </div>

                    {/* Düymələr */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-2">
                        <button
                            type="button"
                            onClick={() => navigate('/seller/sergilerim')}
                            className="px-12 py-3 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50"
                        >
                            Ləğv et
                        </button>
                        <button 
                        type="submit" 
                        className="px-12 py-3 rounded-lg bg-[#900B00] text-white text-sm font-medium hover:bg-[#7a0900]">
                            Yadda saxla
                        </button>
                    </div>
                </form>
            </div>
        </SellerLayout>
    );
}