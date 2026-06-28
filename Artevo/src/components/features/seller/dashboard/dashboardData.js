export const statsData = [
  { 
    title: "ARTIM", 
    value: "18.5k", 
    percentage: "+24.8%", 
    subText: "Ötən aya nisbətən",
    iconName: "TrendingUp",
    colorClass: "text-green-600",
    bgClass: "bg-green-100",
    percentageColor: "text-green-600 bg-green-50"
  },
  { 
    title: "GƏLİR", 
    value: "1.2K AZN", 
    percentage: "+12%", 
    subText: "Bu ayın ümumi satışı",
    iconName: "Wallet",
    colorClass: "text-orange-500",
    bgClass: "bg-orange-100",
    percentageColor: "text-orange-500 bg-orange-50"
  },
  { 
    title: "YENİ SİFARİŞLƏR", 
    value: "14", 
    percentage: "Yeni", 
    subText: "Gözləmədə olan: 4",
    iconName: "ShoppingCart",
    colorClass: "text-blue-500",
    bgClass: "bg-blue-100",
    percentageColor: "text-blue-500 bg-blue-50"
  },
  { 
    title: "AKTİV ELANLAR", 
    value: "5 / 8", 
    percentage: "", 
    subText: "Limit: 8",
    iconName: "LayoutDashboard",
    colorClass: "text-[#900B00]",
    bgClass: "bg-red-100",
    percentageColor: ""
  }
];

export const analyticsData = [
  { name: 'Yan', views: 400 },
  { name: 'Fev', views: 600 },
  { name: 'Mar', views: 450 },
  { name: 'Apr', views: 900 },
  { name: 'May', views: 700 },
  { name: 'İyun', views: 1200 },
];

import abstrakt from '../../../../assets/seller/abstrakt-gece.jpg';
import hendesi from '../../../../assets/seller/hendesi-realliq.jpg';
import qirmizi from '../../../../assets/seller/qirmizi-sukut.jpg';

export const artworkData = [
  {
    id: 1,
    name: "Qırmızı Sükut",
    category: "Yağlı boya, 2023",
    status: "AKTİV",
    views: "1,420",
    activityLevel: 4,
    image: qirmizi
  },
  {
    id: 2,
    name: "Həndəsi Reallıq",
    category: "Rəqəmsal Art, 2024",
    status: "GÖZLƏMƏDƏ",
    views: "840",
    activityLevel: 1,
    image: hendesi
  },
  {
    id: 3,
    name: "Abstrakt Gecə",
    category: "Akril, 2024",
    status: "AKTİV",
    views: "2,105",
    activityLevel: 5,
    image: abstrakt
  }
];