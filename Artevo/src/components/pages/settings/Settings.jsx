import { useState, useRef } from "react";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("profil");

  const [profileImage, setProfileImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [dragOver, setDragOver] = useState(false);

  const fileInputRef = useRef(null);

  const handleImageSelect = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setProfileImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleImageDrop = (e) => {
    e.preventDefault();
    setDragOver(false);

    const file = e.dataTransfer.files[0];

    if (!file) return;

    setProfileImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const removeImage = () => {
    setProfileImage(null);
    setImagePreview(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <main class="flex-1 overflow-y-auto p-4">
      <div class="flex flex-col gap-10">
        
        {/* Başlıq və Üst Tab Naviqasiyası */}
        <div className="flex flex-col gap-6">
          {/* Title */}
          <div>
            <h1 className="font-inter font-medium text-xl sm:text-2xl lg:text-[32px] text-black leading-snug">
              Hesabınızın təhlükəsizliyini və giriş parametrlərini idarə edin.
            </h1>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <button
              onClick={() => setActiveTab("profil")}
              className={`w-full sm:w-auto px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base border border-button-primary transition-colors ${
                activeTab === "profil"
                  ? "bg-button-primary text-white"
                  : "bg-[#FFF0EF] text-[#5F5E5E]"
              }`}
            >
              Profil Məlumatları
            </button>

            <button
              onClick={() => setActiveTab("tehlukesizlik")}
              className={`w-full sm:w-auto px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base border border-button-primary transition-colors ${
                activeTab === "tehlukesizlik"
                  ? "bg-button-primary text-white"
                  : "bg-[#FFF0EF] text-[#5F5E5E]"
              }`}
            >
              Təhlükəsizlik
            </button>

            <button
              onClick={() => setActiveTab("bildirisler")}
              className={`w-full sm:w-auto px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base border border-button-primary transition-colors ${
                activeTab === "bildirisler"
                  ? "bg-button-primary text-white"
                  : "bg-[#FFF0EF] text-[#5F5E5E]"
              }`}
            >
              Bildirişlər
            </button>

            <button
              onClick={() => setActiveTab("odenis")}
              className={`w-full sm:w-auto px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base border border-button-primary transition-colors ${
                activeTab === "odenis"
                  ? "bg-button-primary text-white"
                  : "bg-[#FFF0EF] text-[#5F5E5E]"
              }`}
            >
              Ödəniş
            </button>
          </div>
        </div>

        {/* ----------------- TAB 1: PROFIL MƏLUMATLARI ----------------- */}
        {activeTab === "profil" && (
          <div className="flex flex-col gap-6 lg:gap-8">
            {/* Profile Image */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 lg:gap-8">
              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setDragOver(true);
                }}
                onDragLeave={() => setDragOver(false)}
                onDrop={handleImageDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`relative w-28 h-28 sm:w-32 sm:h-32 rounded-full flex items-center justify-center cursor-pointer transition
        ${
          dragOver ? "border-2 border-button-primary bg-red-50" : "bg-[#BCBCBC]"
        }`}
              >
                {imagePreview && (
                  <img
                    src={imagePreview}
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                )}

                <div className="w-8 h-8 flex justify-center items-center absolute bottom-1 right-1 bg-button-primary text-white rounded-full border-2 border-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039L6.827 6.175z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                    />
                  </svg>
                </div>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/png,image/jpeg,image/jpg"
                  className="hidden"
                  onChange={handleImageSelect}
                />
              </div>

              <div className="flex flex-col text-center sm:text-left flex-1">
                <h3 className="font-medium text-xl sm:text-2xl text-black mb-2">
                  Profil Şəkli
                </h3>

                <p className="text-sm sm:text-base text-[#9C9C9C] mb-4">
                  Tövsiyə olunan ölçü 400×400px. JPG və ya PNG formatları.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="border border-[#E4BEBA] rounded-lg px-5 py-2 text-base hover:bg-gray-50"
                  >
                    Yüklə
                  </button>

                  <button
                    onClick={removeImage}
                    disabled={!imagePreview}
                    className={`px-5 py-2 text-base ${
                      imagePreview
                        ? "text-button-primary hover:text-red-800"
                        : "text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    Sil
                  </button>
                </div>
              </div>
            </div>

            <hr className="border-[#F0F0F0]" />

            {/* Form */}
            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Ad */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-xs uppercase tracking-wider text-[#9c9c9c]"
                  >
                    Ad
                  </label>

                  <input
                    type="text"
                    id="name"
                    value="Ceyhun"
                    className="w-full border border-[#9c9c9c] rounded-lg px-4 py-4 text-base focus:outline-none focus:border-button-primary"
                  />
                </div>

                {/* Soyad */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="surname"
                    className="text-xs uppercase tracking-wider text-[#9c9c9c]"
                  >
                    Soyad
                  </label>

                  <input
                    type="text"
                    id="surname"
                    value="Məmmədov"
                    className="w-full border border-[#9c9c9c] rounded-lg px-4 py-4 text-base focus:outline-none focus:border-button-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-xs uppercase tracking-wider text-[#9c9c9c]"
                  >
                    E-poçt ünvanı
                  </label>

                  <input
                    type="email"
                    id="email"
                    value="example@artevo.az"
                    className="w-full border border-[#9c9c9c] rounded-lg px-4 py-4 text-base focus:outline-none focus:border-button-primary"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="phone"
                    className="text-xs uppercase tracking-wider text-[#9c9c9c]"
                  >
                    Telefon nömrəsi
                  </label>

                  <input
                    type="text"
                    id="phone"
                    value="+994 50 123 45 67"
                    className="w-full border border-[#9c9c9c] rounded-lg px-4 py-4 text-base focus:outline-none focus:border-button-primary"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="bio"
                  className="text-xs uppercase tracking-wider text-[#9c9c9c]"
                >
                  Bioqrafiya
                </label>

                <textarea
                  id="bio"
                  rows={4}
                  className="w-full border border-[#9c9c9c] rounded-lg p-4 text-base resize-none focus:outline-none focus:border-button-primary"
                >
                  Mən müasir incəsənət üzrə mütəxəssisəm və 10 ildən artıqdır
                  ki, beynəlxalq sərgilərin kurasiyası ilə məşğulam. ArtEvo
                  platformasında kolleksiyaların strateji inkişafına cavabdehəm.
                </textarea>
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-3 bg-[#FFF0EF] border border-button-primary rounded-lg p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5 flex-shrink-0 text-button-primary mt-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.852l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>

                <p className="text-sm sm:text-base text-[#818181]">
                  Bu məlumatlar ArtEvo satıcılar siyahısında və rəsmi hesablarda
                  görünəcək.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="w-full sm:w-auto lg:w-[402px] py-4 rounded-lg border border-button-primary text-base hover:bg-button-primary hover:text-white transition">
                  Ləğv et
                </button>

                <button className="w-full sm:w-auto lg:w-[402px] py-4 rounded-lg bg-button-primary text-white text-base hover:bg-[#63160B] transition">
                  Yadda saxla
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ----------------- TAB 2: TƏHLÜKƏSİZLİK ----------------- */}
        {activeTab === "tehlukesizlik" && (
          <div class="flex flex-col gap-6">
            <div className="border border-[#9C9C9C] rounded-xl p-4 sm:p-6 bg-white flex flex-col gap-4 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                <div className="flex items-start sm:items-center gap-4">
                  <div className="w-10 h-10 flex-shrink-0 flex justify-center items-center bg-[#FFF0EF] text-button-primary rounded-lg border border-button-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                      />
                    </svg>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-black">
                      İki-Faktorlu Autentifikasiya (2FA)
                    </h3>

                    <p className="text-sm sm:text-base text-[#5F5E5E] mt-1">
                      Giriş zamanı əlavə təhlükəsizlik qatı təmin edin.
                    </p>
                  </div>
                </div>

                <div className="self-start sm:self-center">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="sr-only peer"
                    />

                    <div
                      className="
            relative w-16 sm:w-18 h-8
            rounded-full
            border border-[#9C9C9C]
            bg-white
            transition-all duration-300
            peer-checked:bg-[#7A1C0E]
            peer-checked:border-[#7A1C0E]

            after:content-['']
            after:absolute
            after:top-[3px]
            after:left-[3px]
            after:w-6
            after:h-6
            after:rounded-full
            after:bg-[#9C9C9C]
            after:transition-all
            after:duration-300

            peer-checked:after:bg-white
            peer-checked:after:translate-x-8
            sm:peer-checked:after:translate-x-10
          "
                    />
                  </label>
                </div>
              </div>

              <div className="bg-[#FFF8F7] border border-[#9C9C9C] rounded-md p-4 text-sm sm:text-base text-black break-words">
                Hazırda{" "}
                <span className="font-bold text-gray-900">
                  +994 55 *** ** 88
                </span>{" "}
                nömrəsi ilə SMS vasitəsilə 2FA aktivdir.
              </div>
            </div>

            <div className="border border-[#9C9C9C] rounded-xl p-4 sm:p-6 bg-white flex flex-col gap-4 shadow-sm">
              {/* Header */}
              <div className="flex items-start sm:items-center gap-4">
                <div className="w-10 h-10 flex-shrink-0 flex justify-center items-center bg-[#FFF0EF] text-button-primary rounded-lg border border-button-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-black">
                    Şifrəni Dəyişdir
                  </h3>

                  <p className="text-sm sm:text-base text-[#5F5E5E] mt-1">
                    Son yenilənmə: 14 Yanvar 2024
                  </p>
                </div>
              </div>

              {/* Form */}
              <div className="flex flex-col gap-5 sm:gap-6">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="current-password"
                    className="text-xs uppercase tracking-wider text-[#9C9C9C]"
                  >
                    Cari Şifrə
                  </label>

                  <input
                    type="password"
                    id="current-password"
                    placeholder="••••••••"
                    className="w-full border border-[#9C9C9C] rounded-lg px-4 py-3 sm:py-4 text-base bg-transparent text-black focus:outline-none focus:border-button-primary"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="new-password"
                    className="text-xs uppercase tracking-wider text-[#9C9C9C]"
                  >
                    Yeni Şifrə
                  </label>

                  <input
                    type="password"
                    id="new-password"
                    placeholder="Yeni şifrə daxil edin"
                    className="w-full border border-[#9C9C9C] rounded-lg px-4 py-3 sm:py-4 text-base bg-transparent text-black focus:outline-none focus:border-button-primary"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="repeat-password"
                    className="text-xs uppercase tracking-wider text-[#9C9C9C]"
                  >
                    Yeni Şifrənin Təkrarı
                  </label>

                  <input
                    type="password"
                    id="repeat-password"
                    placeholder="Yeni şifrəni təkrar edin"
                    className="w-full border border-[#9C9C9C] rounded-lg px-4 py-3 sm:py-4 text-base bg-transparent text-black focus:outline-none focus:border-button-primary"
                  />
                </div>

                {/* Button */}
                <div className="flex justify-stretch sm:justify-end mt-2">
                  <button className="w-full sm:w-72 lg:w-[402px] py-3 sm:py-4 rounded-lg bg-button-primary text-white text-base font-medium hover:bg-[#63160B] transition-colors">
                    Şifrəni Yenilə
                  </button>
                </div>
              </div>
            </div>

            {/* Active Sessions */}
            <div className="border border-[#9C9C9C] rounded-xl p-4 sm:p-6 bg-white flex flex-col gap-4 shadow-sm">
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
                <div className="flex items-start sm:items-center gap-4">
                  <div className="w-10 h-10 flex-shrink-0 flex justify-center items-center bg-[#FFF0EF] text-button-primary rounded-lg border border-button-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                      />
                    </svg>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-black">
                      Aktiv Sessiyalar
                    </h3>

                    <p className="text-sm sm:text-base text-[#5F5E5E]">
                      Sizin hesabınıza daxil olan cihazlar.
                    </p>
                  </div>
                </div>

                <button className="self-start lg:self-auto text-sm sm:text-base font-bold text-button-primary hover:opacity-80 transition">
                  Bütün sessiyalardan çıx
                </button>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="min-w-[700px] w-full text-left">
                  <thead>
                    <tr className="bg-[#F3F5F7] text-[#5F5E5E] uppercase text-xs sm:text-sm font-bold">
                      <th className="p-4">Cihaz</th>
                      <th className="p-4">Məkan</th>
                      <th className="p-4">Status</th>
                      <th className="p-4 text-right">Fəaliyyət</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-[#9C9C9C] text-sm sm:text-base">
                    <tr>
                      <td className="p-4">
                        <div className="font-medium">Chrome on Windows</div>
                        <div className="text-[#5F5E5E] text-sm">
                          IP: 185.156.***.***
                        </div>
                      </td>

                      <td className="p-4">Bakı, Azərbaycan</td>

                      <td className="p-4">
                        <span className="inline-block px-3 py-1 rounded bg-[#E6F4E9] text-[#00901A] text-sm">
                          Cari sessiya
                        </span>
                      </td>

                      <td className="p-4 text-right">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="w-5 h-5 inline cursor-pointer hover:text-red-600"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                          />
                        </svg>
                      </td>
                    </tr>

                    <tr>
                      <td className="p-4">
                        <div className="font-medium">iPhone 15 Pro</div>
                        <div className="text-[#5F5E5E] text-sm">
                          IArtEvo Mobile App
                        </div>
                      </td>

                      <td className="p-4">Gəncə, Azərbaycan</td>

                      <td className="p-4">
                        <span className="text-sm sm:text-base">
                          2 saat əvvəl
                        </span>
                      </td>

                      <td className="p-4 text-right">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="w-5 h-5 inline cursor-pointer hover:text-red-600"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                          />
                        </svg>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Deactivate Account */}
            <div className="bg-[#FFF0EF] border border-[#FFF0EF] rounded-xl p-4 sm:p-6 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6">
              <div className="flex flex-col gap-2">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-button-primary">
                  Hesabı Deaktiv Et
                </h3>

                <p className="text-sm sm:text-base text-black leading-6 max-w-full lg:max-w-[425px]">
                  Hesabınızı müvəqqəti bağlayın. Bu əməliyyat bütün aktiv
                  elanlarınızı gizlədəcək.
                </p>
              </div>

              <button className="w-full sm:w-72 lg:w-[402px] py-3 sm:py-4 rounded-lg border border-button-primary bg-white text-[#7A1C0E] text-base font-medium hover:bg-button-primary hover:text-white transition-colors">
                Deaktiv Et
              </button>
            </div>
          </div>
        )}

        {/* ----------------- TAB 3: BİLDİRİŞLƏR ----------------- */}
        {activeTab === "bildirisler" && (
          <div className="flex flex-col gap-6">
            {/* Email */}
            <div className="rounded-xl border border-[#9C9C9C] overflow-hidden bg-white">
              <div className="bg-[#F0F0F0] p-4 sm:p-6 border-b border-[#E0E0E0]">
                <h3 className="text-xl sm:text-2xl font-medium">
                  E-poçt bildirişləri
                </h3>
                <p className="text-sm sm:text-base text-[#5F5E5E] mt-1">
                  Mühüm yenilikləri birbaşa gələn qutunuzda izləyin
                </p>
              </div>

              <div className="p-4 sm:p-6 divide-y divide-[#9C9C9C]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4">
                  <div>
                    <h4 className="font-medium text-base">Yeni Sifarişlər</h4>
                    <p className="text-sm sm:text-base text-[#5F5E5E] mt-1">
                      Satılan əsərlər və yeni sifariş statusları barədə anlıq
                      məlumat.
                    </p>
                  </div>

                  <label className="relative inline-flex items-center cursor-pointer shrink-0">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="sr-only peer"
                    />
                    <div
                      className="
              relative w-[72px] h-8 rounded-full
              border border-[#9C9C9C]
              bg-white
              transition-all
              peer-checked:bg-[#7A1C0E]
              peer-checked:border-[#7A1C0E]
              after:content-['']
              after:absolute
              after:top-[3px]
              after:left-[3px]
              after:w-6
              after:h-6
              after:rounded-full
              after:bg-[#9C9C9C]
              after:transition-all
              peer-checked:after:bg-white
              peer-checked:after:translate-x-10
            "
                    />
                  </label>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4">
                  <div>
                    <h4 className="font-medium text-base">
                      Rəssam yenilikləri
                    </h4>
                    <p className="text-sm sm:text-base text-[#5F5E5E] mt-1">
                      İzlədiyiniz rəssamların yeni kolleksiyaları və
                      fəaliyyətləri.
                    </p>
                  </div>

                  <label className="relative inline-flex items-center cursor-pointer shrink-0">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="sr-only peer"
                    />
                    <div className="relative w-[72px] h-8 rounded-full border border-[#9C9C9C] bg-white transition-all peer-checked:bg-[#7A1C0E] peer-checked:border-[#7A1C0E] after:content-[''] after:absolute after:top-[3px] after:left-[3px] after:w-6 after:h-6 after:rounded-full after:bg-[#9C9C9C] after:transition-all peer-checked:after:bg-white peer-checked:after:translate-x-10" />
                  </label>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4">
                  <div>
                    <h4 className="font-medium text-base">
                      Platforma Xəbərləri
                    </h4>
                    <p className="text-sm sm:text-base text-[#5F5E5E] mt-1">
                      ArtEvo-da baş verən texniki dəyişikliklər və aylıq
                      bülletenlər.
                    </p>
                  </div>

                  <label className="relative inline-flex items-center cursor-pointer shrink-0">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="sr-only peer"
                    />
                    <div className="relative w-[72px] h-8 rounded-full border border-[#9C9C9C] bg-white transition-all peer-checked:bg-[#7A1C0E] peer-checked:border-[#7A1C0E] after:content-[''] after:absolute after:top-[3px] after:left-[3px] after:w-6 after:h-6 after:rounded-full after:bg-[#9C9C9C] after:transition-all peer-checked:after:bg-white peer-checked:after:translate-x-10" />
                  </label>
                </div>
              </div>
            </div>

            {/* Push */}
            <div className="rounded-xl border border-[#9C9C9C] overflow-hidden bg-white">
              <div className="bg-[#F0F0F0] p-4 sm:p-6 border-b border-[#E0E0E0]">
                <h3 className="text-xl sm:text-2xl font-medium">
                  Push bildirişləri
                </h3>
                <p className="text-sm sm:text-base text-[#5F5E5E] mt-1">
                  Real vaxt rejimində cihazınıza gələn xəbərdarlıqlar
                </p>
              </div>

              <div className="p-4 sm:p-6 divide-y divide-[#9C9C9C]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4">
                  <div>
                    <h4 className="font-medium text-base">Anlıq Siqnallar</h4>
                    <p className="text-sm sm:text-base text-[#5F5E5E] mt-1">
                      Auksionların başlanması və təcili xatırlatmalar.
                    </p>
                  </div>

                  <label className="relative inline-flex items-center cursor-pointer shrink-0">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="sr-only peer"
                    />
                    <div className="relative w-[72px] h-8 rounded-full border border-[#9C9C9C] bg-white transition-all peer-checked:bg-[#7A1C0E] peer-checked:border-[#7A1C0E] after:content-[''] after:absolute after:top-[3px] after:left-[3px] after:w-6 after:h-6 after:rounded-full after:bg-[#9C9C9C] after:transition-all peer-checked:after:bg-white peer-checked:after:translate-x-10" />
                  </label>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4">
                  <div>
                    <h4 className="font-medium text-base">Söhbətlər</h4>
                    <p className="text-sm sm:text-base text-[#5F5E5E] mt-1">
                      Rəssamlar və müştərilərdən gələn yeni mesajlar.
                    </p>
                  </div>

                  <label className="relative inline-flex items-center cursor-pointer shrink-0">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="sr-only peer"
                    />
                    <div className="relative w-[72px] h-8 rounded-full border border-[#9C9C9C] bg-white transition-all peer-checked:bg-[#7A1C0E] peer-checked:border-[#7A1C0E] after:content-[''] after:absolute after:top-[3px] after:left-[3px] after:w-6 after:h-6 after:rounded-full after:bg-[#9C9C9C] after:transition-all peer-checked:after:bg-white peer-checked:after:translate-x-10" />
                  </label>
                </div>
              </div>
            </div>

            {/* SMS */}
            <div className="rounded-xl border border-[#9C9C9C] overflow-hidden bg-white">
              <div className="bg-[#F0F0F0] p-4 sm:p-6 border-b border-[#E0E0E0]">
                <h3 className="text-xl sm:text-2xl font-medium">SMS Alerts</h3>
                <p className="text-sm sm:text-base text-[#5F5E5E] mt-1">
                  Kritik təhlükəsizlik və maliyyə əməliyyatları üçün
                </p>
              </div>

              <div className="p-4 sm:p-6 divide-y divide-[#9C9C9C]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4">
                  <div>
                    <h4 className="font-medium text-base">Ödəniş Təsdiqləri</h4>
                    <p className="text-sm sm:text-base text-[#5F5E5E] mt-1">
                      Böyük məbləğli əməliyyatlar zamanı SMS kod ilə təsdiqləmə.
                    </p>
                  </div>

                  <label className="relative inline-flex items-center cursor-pointer shrink-0">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="sr-only peer"
                    />
                    <div className="relative w-[72px] h-8 rounded-full border border-[#9C9C9C] bg-white transition-all peer-checked:bg-[#7A1C0E] peer-checked:border-[#7A1C0E] after:content-[''] after:absolute after:top-[3px] after:left-[3px] after:w-6 after:h-6 after:rounded-full after:bg-[#9C9C9C] after:transition-all peer-checked:after:bg-white peer-checked:after:translate-x-10" />
                  </label>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4">
                  <div>
                    <h4 className="font-medium text-base">
                      Təhlükəsizlik Girişləri
                    </h4>
                    <p className="text-sm sm:text-base text-[#5F5E5E] mt-1">
                      Yeni cihazdan daxil olduqda xəbərdarlıq göndərilməsi.
                    </p>
                  </div>

                  <label className="relative inline-flex items-center cursor-pointer shrink-0">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="sr-only peer"
                    />
                    <div className="relative w-[72px] h-8 rounded-full border border-[#9C9C9C] bg-white transition-all peer-checked:bg-[#7A1C0E] peer-checked:border-[#7A1C0E] after:content-[''] after:absolute after:top-[3px] after:left-[3px] after:w-6 after:h-6 after:rounded-full after:bg-[#9C9C9C] after:transition-all peer-checked:after:bg-white peer-checked:after:translate-x-10" />
                  </label>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <button className="w-full sm:flex-1 py-4 rounded-lg border border-button-primary text-base font-medium hover:bg-button-primary hover:text-white transition">
                Ləğv et
              </button>

              <button className="w-full sm:flex-1 py-4 rounded-lg bg-button-primary text-white text-base font-medium hover:bg-[#63160B] transition">
                Yadda saxla
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
