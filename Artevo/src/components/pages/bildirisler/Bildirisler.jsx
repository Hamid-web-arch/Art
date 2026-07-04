export default function Bildirisler() {
  return (
    <section className="container mx-auto p-4">
      <h1 className="font-inter font-medium text-[32px] mb-6">Bildirişlər</h1>
      <div className="flex justify-between items-center mb-5.25">
        <p className="font-inter font-medium text-2xl text-black">
          Sizin üçün ən son fəaliyyət yeniləmələri.
        </p>
        <div className="flex bg-[#F3F5F7] p-1 rounded-xl w-fit">
          <button className="bg-button-primary text-white px-8 py-5 rounded-lg">
            Əməliyyatlar
          </button>
          <button className="text-[#818181] px-8 py-5">Kampaniyalar</button>
        </div>
      </div>

      <div className="flex flex-col gap-10.25">
        {/* Bugün Section */}
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

        {/* Dünən Section */}
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
    <div className="flex items-center gap-4 mb-6">
      <h2 className="font-inter font-medium text-base text-black whitespace-nowrap">
        {title}
      </h2>
      <div className="h-px bg-[#9C9C9C] flex-grow"></div>
    </div>
  );
}

function NotificationItem({ title, desc, time }) {
  return (
    <div className="flex items-center justify-between px-6 py-5 border border-[#9C9C9C] rounded-xl hover:bg-gray-50 transition">
      <div className="flex items-center gap-6">
        <div className="w-12 h-12 rounded-full bg-[#FFF0EF] flex items-center justify-center">
          {/* İkon buraya gələcək */}
        </div>
        <div>
          <h3 className="font-inter font-medium text-2xl text-black">
            {title}
          </h3>
          <p className="font-inter text-base text-[#9C9C9C]">{desc}</p>
        </div>
      </div>
      <span className="font-inter text-base text-[#9C9C9C]">{time}</span>
    </div>
  );
}
