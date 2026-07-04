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
        <div class="flex flex-col gap-6">
          <div>
            <h1 class="font-inter font-medium text-2xl text-black">
              Hesabınızın təhlükəsizliyini və giriş parametrlərini idarə edin.
            </h1>
          </div>

          {/* Tab Button-ları */}
          <div class="flex flex-wrap gap-3">
            <button
              onClick={() => setActiveTab("profil")}
              class={`font-inter px-6 py-1 rounded-full text-base border border-button-primary transition-colors ${
                activeTab === "profil"
                  ? "bg-button-primary text-white"
                  : "text-[#5F5E5E] bg-[#FFF0EF]"
              }`}
            >
              Profil Məlumatları
            </button>
            <button
              onClick={() => setActiveTab("tehlukesizlik")}
              class={`font-inter px-6 py-1 rounded-full text-base border border-button-primary transition-colors ${
                activeTab === "tehlukesizlik"
                  ? "bg-button-primary text-white"
                  : "text-[#5F5E5E] bg-[#FFF0EF]"
              }`}
            >
              Təhlükəsizlik
            </button>
            <button
              onClick={() => setActiveTab("bildirisler")}
              class={`font-inter px-6 py-1 rounded-full text-base border border-button-primary transition-colors ${
                activeTab === "bildirisler"
                  ? "bg-button-primary text-white"
                  : "text-[#5F5E5E] bg-[#FFF0EF]"
              }`}
            >
              Bildirişlər
            </button>
            <button
              onClick={() => setActiveTab("odenis")}
              class={`font-inter px-6 py-1 rounded-full text-base border border-button-primary transition-colors ${
                activeTab === "odenis"
                  ? "bg-button-primary text-white"
                  : "text-[#5F5E5E] bg-[#FFF0EF]"
              }`}
            >
              Ödəniş
            </button>
          </div>
        </div>

        {/* ----------------- TAB 1: PROFIL MƏLUMATLARI ----------------- */}
        {activeTab === "profil" && (
          <div class="flex flex-col gap-8">
            <div class="flex items-center gap-8">
              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setDragOver(true);
                }}
                onDragLeave={() => setDragOver(false)}
                onDrop={handleImageDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`relative w-32 h-32 rounded-full flex items-center justify-center cursor-pointer transition
                ${dragOver ? "border-2 border-button-primary bg-red-50" : "bg-[#BCBCBC]"}`}
              >
                {imagePreview && (
                  <img
                    src={imagePreview}
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                )}

                <div className="w-8 h-8 flex justify-center items-center absolute bottom-1 right-1 bg-button-primary text-white px-[6.5px] py-[7.25px] rounded-full border-2 border-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-8 h-8"
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
              <div class="flex flex-col">
                <h3 class="font-inter font-medium text-2xl text-black mb-1">
                  Profil Şəkli
                </h3>
                <p class="font-inter text-base text-[#9C9C9C] mb-3">
                  Tövsiyə olunan ölçü 400×400px. JPG və ya PNG formatları.
                </p>
                <div class="flex gap-2">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="font-inter font-medium text-base text-black border border-[#E4BEBA] rounded-lg px-4 py-1 hover:bg-gray-50"
                  >
                    Yüklə
                  </button>

                  <button
                    onClick={removeImage}
                    disabled={!imagePreview}
                    className={`font-inter text-base font-medium px-4 py-1 ${
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

            <hr class="border-[#F0F0F0] my-1" />

            <div class="flex flex-col gap-6">
              <div class="grid grid-cols-2 gap-6">
                <div class="flex flex-col gap-2">
                  <label
                    for="name"
                    class="text-xs text-[#9c9c9c] uppercase tracking-wider"
                  >
                    Ad
                  </label>
                  <input
                    type="text"
                    id="name"
                    value="Ceyhun"
                    class="border border-[#9c9c9c] rounded-lg px-4 py-4.25 text-base focus:outline-none focus:border-button-primary w-full bg-transparent text-black"
                  />
                </div>
                <div class="flex flex-col gap-2">
                  <label
                    for="surname"
                    class="text-xs text-[#9c9c9c] uppercase tracking-wider"
                  >
                    Soyad
                  </label>
                  <input
                    type="text"
                    id="surname"
                    value="Məmmədov"
                    class="border border-[#9c9c9c] rounded-lg px-4 py-4.25 text-base focus:outline-none focus:border-button-primary w-full bg-transparent text-black"
                  />
                </div>
              </div>

              <div class="grid grid-cols-2 gap-6">
                <div class="flex flex-col gap-2">
                  <label
                    for="email"
                    class="text-xs text-[#9c9c9c] uppercase tracking-wider"
                  >
                    E-poçt ünvanı
                  </label>
                  <input
                    type="email"
                    id="email"
                    value="example@artevo.az"
                    class="border border-[#9c9c9c] rounded-lg px-4 py-4.25 text-base focus:outline-none focus:border-button-primary w-full bg-transparent text-black"
                  />
                </div>

                <div class="flex flex-col gap-2">
                  <label
                    for="phone"
                    class="text-xs text-[#9c9c9c] uppercase tracking-wider"
                  >
                    Telefon nömrəsi
                  </label>
                  <input
                    type="text"
                    id="phone"
                    value="+994 50 123 45 67"
                    class="border border-[#9c9c9c] rounded-lg px-4 py-4.25 text-base focus:outline-none focus:border-button-primary w-full bg-transparent text-black"
                  />
                </div>
              </div>

              <div class="flex flex-col gap-2">
                <label
                  for="bio"
                  class="text-xs text-[#9c9c9c] uppercase tracking-wider"
                >
                  Bioqrafiya
                </label>

                <textarea
                  id="bio"
                  rows="2"
                  class="border border-[#9c9c9c] rounded-lg p-4 text-base focus:outline-none focus:border-button-primary w-full bg-transparent text-black resize-none"
                >
                  Mən müasir incəsənət üzrə mütəxəssisəm və 10 ildən artıqdır
                  ki, beynəlxalq sərgilərin kurasiyası ilə məşğulam. ArtEvo
                  platformasında kolleksiyaların strateji inkişafına cavabdehəm.
                </textarea>
              </div>
            </div>

            <div class="flex flex-col gap-6">
              <div class="flex items-start gap-4 bg-[#FFF0EF] border border-button-primary rounded-lg p-4 py-4.25 text-button-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-5 h-5 flex-shrink-0 mt-0.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.852l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
                <p class="text-base text-[#818181]">
                  Bu məlumatlar ArtEvo satıcılar siyahısında və rəsmi hesablarda
                  görünəcək.
                </p>
              </div>

              <div class="flex gap-6 justify-center">
                <button class="w-100.5 px-43 py-4.25 rounded-lg border border-button-primary text-base font-medium text-black hover:bg-button-primary hover:text-white transition-colors">
                  Ləğv et
                </button>
                <button class="w-100.5 px-38.75 py-4.25 rounded-lg bg-button-primary text-white text-base font-medium hover:bg-[#63160B] transition-colors">
                  Yadda saxla
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ----------------- TAB 2: TƏHLÜKƏSİZLİK ----------------- */}
        {activeTab === "tehlukesizlik" && (
          <div class="flex flex-col gap-6">
            <div class="border border-[#9C9C9C] rounded-xl p-6 bg-white flex flex-col gap-4 shadow-sm">
              <div class="flex justify-between items-center">
                <div class="flex items-center gap-4">
                  <div class="w-10 h-10 flex justify-center items-center bg-[#FFF0EF] text-button-primary rounded-lg border border-button-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-2xl font-medium text-black">
                      İki-Faktorlu Autentifikasiya (2FA)
                    </h3>
                    <p class="text-base text-[#5F5E5E]">
                      Giriş zamanı əlavə təhlükəsizlik qatı təmin edin.
                    </p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="sr-only peer"
                  />

                  <div
                    className="
                      relative w-18 h-8
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
                      peer-checked:after:translate-x-10
                    "
                  />
                </label>
              </div>
              <div class="bg-[#FFF8F7] border border-[#9C9C9C] rounded-md p-4 text-base text-black">
                Hazırda{" "}
                <span class="font-bold text-gray-900">+994 55 *** ** 88</span>{" "}
                nömrəsi ilə SMS vasitəsilə 2FA aktivdir.
              </div>
            </div>

            <div class="border border-[#9C9C9C] rounded-xl p-6 bg-white flex flex-col gap-4 shadow-sm">
              <div class="flex items-center gap-4">
                <div class="w-10 h-10 flex justify-center items-center bg-[#FFF0EF] text-button-primary rounded-lg border border-button-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="text-2xl font-medium text-black">
                    Şifrəni Dəyişdir
                  </h3>
                  <p class="text-base text-[#5F5E5E]">
                    Son yenilənmə: 14 Yanvar 2024
                  </p>
                </div>
              </div>

              <div class="flex flex-col gap-6">
                <div class="flex flex-col gap-2">
                  <label
                    for="current-password"
                    class="text-xs text-[#9c9c9c] uppercase tracking-wider"
                  >
                    Cari Şifrə
                  </label>
                  <input
                    type="password"
                    id="current-password"
                    placeholder="••••••••"
                    class="border border-[#9c9c9c] rounded-lg px-4 py-4.25 text-base focus:outline-none focus:border-button-primary w-full bg-transparent text-black"
                  />
                </div>
                <div class="flex flex-col gap-2">
                  <label
                    for="new-password"
                    class="text-xs text-[#6B7280] uppercase tracking-wider"
                  >
                    Yeni Şifrə
                  </label>
                  <input
                    type="password"
                    id="new-password"
                    placeholder="Yeni şifrə daxil edin"
                    class="border border-[#6B7280] rounded-lg px-4 py-4.25 text-base focus:outline-none focus:border-button-primary w-full bg-transparent text-black"
                  />
                </div>
                <div class="flex flex-col gap-2">
                  <label
                    for="repeat-password"
                    class="text-xs text-[#6B7280] uppercase tracking-wider"
                  >
                    Yeni Şifrənin Təkrarı
                  </label>
                  <input
                    type="password"
                    id="repeat-password"
                    placeholder="Yeni şifrəni təkrar edin"
                    class="border border-[#6B7280] rounded-lg px-4 py-4.25 text-base focus:outline-none focus:border-button-primary w-full bg-transparent text-black"
                  />
                </div>
                <div class="flex justify-end mt-2">
                  <button class="w-100.5 py-4.25 rounded-lg bg-button-primary text-white text-base font-medium hover:bg-[#63160B] transition-colors">
                    Şifrəni Yenilə
                  </button>
                </div>
              </div>
            </div>

            <div class="border border-[#9C9C9C] rounded-xl p-6 bg-white flex flex-col gap-4 shadow-sm">
              <div class="flex justify-between items-center">
                <div class="flex items-center gap-4">
                  <div class="w-10 h-10 flex justify-center items-center bg-[#FFF0EF] text-button-primary rounded-lg border border-button-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-2xl font-medium text-black">
                      Aktiv Sessiyalar
                    </h3>
                    <p class="text-base text-[#5F5E5E]">
                      Sizin hesabınıza daxil olan cihazlar.
                    </p>
                  </div>
                </div>
                <button class="text-base font-bold text-button-primary transition-colors">
                  Bütün sessiyalardan çıx
                </button>
              </div>

              <div class="overflow-x-auto">
                <table class="w-full text-left text-base">
                  <thead>
                    <tr class="bg-[#F3F5F7] text-[#5F5E5E] text-base font-bold tracking-wider uppercase">
                      <th class="p-4">Cihaz</th>
                      <th class="p-4">Məkan</th>
                      <th class="p-4">Status</th>
                      <th class="p-4 text-right">Fəaliyyət</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-[#9C9C9C] text-black">
                    <tr>
                      <td class="p-4">
                        <div class="font-medium">Chrome on Windows</div>
                        <div class="text-base text-[#5F5E5E]">
                          IP: 185.156.***.***
                        </div>
                      </td>
                      <td class="p-4 text-black">Bakı, Azərbaycan</td>
                      <td class="p-4">
                        <span class="bg-[#E6F4E9] text-[#00901A] text-base">
                          Cari sessiya
                        </span>
                      </td>
                      <td class="p-4 text-right text-[#5F5E5E]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          class="w-5 h-5 inline cursor-pointer hover:text-red-600"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                          />
                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <td class="p-4">
                        <div class="font-medium">iPhone 15 Pro</div>
                        <div class="text-base text-[#5F5E5E]">
                          IArtEvo Mobile App
                        </div>
                      </td>
                      <td class="p-4 text-black">Gəncə, Azərbaycan</td>
                      <td class="p-4">
                        <span class="text-base">2 saat əvvəl</span>
                      </td>
                      <td class="p-4 text-right text-[#5F5E5E]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          class="w-5 h-5 inline cursor-pointer hover:text-red-600"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                          />
                        </svg>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="bg-[#FFF0EF] border border-[#FFF0EF] rounded-xl p-6 flex justify-between items-center">
              <div class="flex flex-col gap-1">
                <h3 class="text-2xl font-medium text-button-primary">
                  Hesabı Deaktiv Et
                </h3>
                <p class="text-base text-black leading-6 max-w-106.25">
                  Hesabınızı müvəqqəti bağlayın. Bu əməliyyat bütün aktiv
                  elanlarınızı gizlədəcək.
                </p>
              </div>
              <button class="w-100.5 py-4.25 rounded-lg border border-button-primary bg-white text-[#7A1C0E] text-base font-medium hover:bg-button-primary hover:text-white transition-colors whitespace-nowrap">
                Deaktiv Et
              </button>
            </div>
          </div>
        )}

        {/* ----------------- TAB 3: BİLDİRİŞLƏR ----------------- */}
        {activeTab === "bildirisler" && (
          <div class="flex flex-col gap-6">
            <div class="border border-[#9C9C9C] rounded-xl overflow-hidden bg-white">
              <div class="bg-[#F0F0F0] p-6 border-b border-[#E0E0E0]">
                <h3 class="font-inter font-medium text-2xl">
                  E-poçt bildirişləri
                </h3>
                <p class="text-base text-[#5F5E5E] mt-1">
                  Mühüm yenilikləri birbaşa gələn qutunuzda izləyin
                </p>
              </div>
              <div class="p-6 flex flex-col divide-y divide-[#9C9C9C]">
                <div class="flex justify-between items-center py-4">
                  <div>
                    <h4 class="text-base font-medium text-black">
                      Yeni Sifarişlər
                    </h4>
                    <p class="text-base text-[#5F5E5E] mt-1">
                      Satılan əsərlər və yeni sifariş statusları barədə anlıq
                      məlumat.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="sr-only peer"
                    />

                    <div
                      className="
                      relative w-18 h-8
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
                      peer-checked:after:translate-x-10
                    "
                    />
                  </label>
                </div>
                <div class="flex justify-between items-center py-4">
                  <div>
                    <h4 class="text-base font-medium">Rəssam yenilikləri</h4>
                    <p class="text-base text-[#5F5E5E] mt-1">
                      İzlədiyiniz rəssamların yeni kolleksiyaları və
                      fəaliyyətləri.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="sr-only peer"
                    />

                    <div
                      className="
                      relative w-18 h-8
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
                      peer-checked:after:translate-x-10
                    "
                    />
                  </label>
                </div>
                <div class="flex justify-between items-center py-4">
                  <div>
                    <h4 class="text-base font-medium">Platforma Xəbərləri</h4>
                    <p class="text-base text-[#5F5E5E] mt-1">
                      ArtEvo-da baş verən texniki dəyişikliklər və aylıq
                      bülletenlər.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="sr-only peer"
                    />

                    <div
                      className="
                      relative w-18 h-8
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
                      peer-checked:after:translate-x-10
                    "
                    />
                  </label>
                </div>
              </div>
            </div>
            <div class="border border-[#9C9C9C] rounded-xl overflow-hidden bg-white">
              <div class="bg-[#F0F0F0] p-6 border-b border-[#E0E0E0]">
                <h3 class="font-inter font-medium text-2xl">
                  Push bildirişləri
                </h3>
                <p class="text-base text-[#5F5E5E] mt-1">
                  Real vaxt rejimində cihazınıza gələn xəbərdarlıqlar
                </p>
              </div>
              <div class="p-6 flex flex-col divide-y divide-[#9C9C9C]">
                <div class="flex justify-between items-center py-4">
                  <div>
                    <h4 class="text-base font-medium text-black">
                      Anlıq Siqnallar
                    </h4>
                    <p class="text-base text-[#5F5E5E] mt-1">
                      Auksionların başlanması və təcili xatırlatmalar.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="sr-only peer"
                    />

                    <div
                      className="
                      relative w-18 h-8
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
                      peer-checked:after:translate-x-10
                    "
                    />
                  </label>
                </div>
                <div class="flex justify-between items-center py-4">
                  <div>
                    <h4 class="text-base font-medium">Söhbətlər</h4>
                    <p class="text-base text-[#5F5E5E] mt-1">
                      Rəssamlar və müştərilərdən gələn yeni mesajlar.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="sr-only peer"
                    />

                    <div
                      className="
                      relative w-18 h-8
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
                      peer-checked:after:translate-x-10
                    "
                    />
                  </label>
                </div>
              </div>
            </div>
            <div class="border border-[#9C9C9C] rounded-xl overflow-hidden bg-white">
              <div class="bg-[#F0F0F0] p-6 border-b border-[#E0E0E0]">
                <h3 class="font-inter font-medium text-2xl">SMS alerts</h3>
                <p class="text-base text-[#5F5E5E] mt-1">
                  Kritik təhlükəsizlik və maliyyə əməliyyatları üçün
                </p>
              </div>
              <div class="p-6 flex flex-col divide-y divide-[#9C9C9C]">
                <div class="flex justify-between items-center py-4">
                  <div>
                    <h4 class="text-base font-medium text-black">
                      Ödəniş Təsdiqləri
                    </h4>
                    <p class="text-base text-[#5F5E5E] mt-1">
                      Böyük məbləğli əməliyyatlar zamanı SMS kod ilə təsdiqləmə.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="sr-only peer"
                    />

                    <div
                      className="
                      relative w-18 h-8
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
                      peer-checked:after:translate-x-10
                    "
                    />
                  </label>
                </div>
                <div class="flex justify-between items-center py-4">
                  <div>
                    <h4 class="text-base font-medium">
                      Təhlükəsizlik Girişləri
                    </h4>
                    <p class="text-base text-[#5F5E5E] mt-1">
                      Yeni cihazdan daxil olduqda xəbərdarlıq göndərilməsi.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="sr-only peer"
                    />

                    <div
                      className="
                      relative w-18 h-8
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
                      peer-checked:after:translate-x-10
                    "
                    />
                  </label>
                </div>
              </div>
            </div>

            <div class="flex gap-6 justify-center">
              <button class="w-100.5 px-43 py-4.25 rounded-lg border border-button-primary text-base font-medium text-black hover:bg-button-primary hover:text-white transition-colors">
                Ləğv et
              </button>
              <button class="w-100.5 px-38.75 py-4.25 rounded-lg bg-button-primary text-white text-base font-medium hover:bg-[#63160B] transition-colors">
                Yadda saxla
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
