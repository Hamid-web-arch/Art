export default function Bildirisler() {
  return (
    <section className="container mx-auto px-4 py-4 lg:py-6">
      <h1 className="font-inter font-medium text-2xl md:text-3xl mb-6">
        Bildirişlər
      </h1>

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between mb-8">
        <p className="font-inter font-medium text-lg md:text-xl lg:text-2xl text-black">
          Sizin üçün ən son fəaliyyət yeniləmələri.
        </p>

        <div className="flex bg-[#F3F5F7] p-1 rounded-xl w-full sm:w-fit">
          <button className="flex-1 sm:flex-none bg-button-primary text-white px-4 md:px-8 py-3 md:py-5 rounded-lg transition">
            Əməliyyatlar
          </button>

          <button className="flex-1 sm:flex-none text-[#818181] px-4 md:px-8 py-3 md:py-5 transition">
            Kampaniyalar
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-8 md:gap-10">
        {/* Bugün */}
        <div>
          <SectionHeader title="Bugün" />

          <div className="space-y-4">
            <NotificationItem
              title="Sifarişiniz gümüş boyunbağı uğurla qəbul edildi"
              desc="Sifariş nömrəsi: #AE-20394"
              time="12:25"
            />

            <NotificationItem
              title="Sifarişin statusu dəyişdi: Gözləmədə - Hazırlanır"
              desc="Əsər kuryerə təhvil verilmək üçün hazırlanır."
              time="11:45"
            />

            <NotificationItem
              title="Ödəniş uğurla təsdiqləndi"
              desc="Ödəniş qəbzini profildən yükləyə bilərsiniz."
              time="10:52"
            />
          </div>
        </div>

        {/* Dünən */}
        <div>
          <SectionHeader title="Dünən" />

          <div className="space-y-4">
            <NotificationItem
              title="Sevimli satıcınız yeni kolleksiya əlavə edib"
              desc='"Modern Echoes" kolleksiyasına nəzər salın.'
              time="12:25"
            />

            <NotificationItem
              title="Sifarişiniz gümüş boyunbağı uğurla qəbul edildi"
              desc="#AE-20392 nömrəli sifariş."
              time="Dünən 18:30"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ title }) {
  return (
    <div className="flex items-center gap-3 md:gap-4 mb-6">
      <h2 className="font-inter font-medium text-sm md:text-base text-black whitespace-nowrap">
        {title}
      </h2>

      <div className="flex-1 h-px bg-[#9C9C9C]" />
    </div>
  );
}

function NotificationItem({ title, desc, time }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-4 md:px-6 py-4 md:py-5 border border-[#9C9C9C] rounded-xl hover:bg-gray-50 transition">
      <div className="flex items-start md:items-center gap-4 md:gap-6">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#FFF0EF] flex items-center justify-center shrink-0">
          {/* İkon buraya gələcək */}
        </div>

        <div>
          <h3 className="font-inter font-medium text-base sm:text-lg md:text-xl lg:text-2xl text-black">
            {title}
          </h3>

          <p className="font-inter text-sm md:text-base text-[#9C9C9C] mt-1">
            {desc}
          </p>
        </div>
      </div>

      <span className="self-end md:self-auto whitespace-nowrap font-inter text-sm md:text-base text-[#9C9C9C]">
        {time}
      </span>
    </div>
  );
}
