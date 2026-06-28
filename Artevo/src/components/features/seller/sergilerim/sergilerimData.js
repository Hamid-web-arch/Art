// src/features/seller/sergilerim/sergilerimData.js

export const sergiTabs = [
  { key: "hamisi", label: "Bütün sərgilər", count: 12 },
  { key: "aktiv", label: "Aktiv", count: 4 },
  { key: "gozlenilen", label: "Gözlənilən", count: 3 },
  { key: "kechmish", label: "Keçmiş", count: 5 },
];

export const featuredSergi = {
  id: 1,
  baslik: "Müasir Əks-sədalar: Rəqəmsal Reallıq",
  tarix: "12 Oktyabr - 15 Noyabr, 2023",
  sekil:
    "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=1200&q=80",
  ziyaretci: "2.4k",
  istirak: "84%",
  biletSatisi: "14.2k",
};

export const umumiBaxis = {
  boyume: "+12.5%",
  yeniKoleksionerler: 48,
};

export const digerSergiler = [
  {
    id: 2,
    ad: "Abstrakt Vizyonlar",
    sekil:
      "https://images.unsplash.com/photo-1549887534-1541e9326642?w=200&q=80",
    status: "gozlenilen",
    statusLabel: "GÖZLƏNİLƏN",
    tarix: "01 Dek, 2023",
    ziyaretci: "--",
    performans: { label: "45% Hazırlıq", color: "red" },
  },
  {
    id: 3,
    ad: "Heykəltəraşlıq İndi",
    sekil:
      "https://images.unsplash.com/photo-1554188248-986adbb73be4?w=200&q=80",
    status: "kechmish",
    statusLabel: "KEÇMİŞ",
    tarix: "15 Avq - 30 Sen, 2023",
    ziyaretci: "3,842",
    performans: { label: "Yüksək İştirak", color: "blue" },
  },
  {
    id: 4,
    ad: "Portret Ustaları",
    sekil:
      "https://images.unsplash.com/photo-1577720580479-7d839d829c73?w=200&q=80",
    status: "aktiv",
    statusLabel: "AKTİV",
    tarix: "05 Okt - 20 Dek, 2023",
    ziyaretci: "1,105",
    performans: { label: "Yüksək İştirak", color: "blue" },
  },
];

export const sergiPagination = {
  cari: 1,
  cem: 12,
  gosterilen: 3,
};
