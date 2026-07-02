// src/features/seller/sergilerim/sergilerimData.js
import bannerImage from "../../../../assets/seller/sergilerim/sergilerim-banner.png"
import AbstraktVizyonlar from "../../../../assets/seller/sergilerim/Abstrakt Vizyonlar.jpg"
import HeykelterasliqIndi from "../../../../assets/seller/sergilerim/Heykəltəraşlıq İndi.jpg"
import PortretUstalari from "../../../../assets/seller/sergilerim/Portret Ustaları.jpg"
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
  sekil:bannerImage,
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
    sekil: AbstraktVizyonlar,
    status: "gozlenilen",
    statusLabel: "GÖZLƏNİLƏN",
    tarix: "01 Dek, 2023",
    ziyaretci: "--",
    performans: { label: "45% Hazırlıq", color: "red" },
  },
  {
    id: 3,
    ad: "Heykəltəraşlıq İndi",
    sekil: HeykelterasliqIndi ,
    status: "kechmish",
    statusLabel: "KEÇMİŞ",
    tarix: "15 Avq - 30 Sen, 2023",
    ziyaretci: "3,842",
    performans: { label: "Yüksək İştirak", color: "blue" },
  },
  {
    id: 4,
    ad: "Portret Ustaları",
    sekil:PortretUstalari,
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
