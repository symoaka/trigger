export interface ChatMessage {
  id: string;
  sender: "buyer" | "seller";
  senderName: string;
  content: string;
  timestamp: string;
  attachment?: {
    type: "image" | "video";
    url: string;
    name: string;
  };
}

export interface OrderDetails {
  purchaseDate: string;
  staffName: string;
  goal: string;
  socialLinks: {
    twitter: string;
    discord: string;
    instagram: string;
  };
}

export interface ServiceGuide {
  id: string;
  title: string;
  icon: string;
  content: string;
}

export const mockChatMessages: ChatMessage[] = [
  {
    id: "1",
    sender: "seller",
    senderName: "Coach Ahmet",
    content: "Merhaba! Kocluk programina hosgeldiniz. Size nasil yardimci olabilirim?",
    timestamp: "2024-12-23 14:30",
  },
  {
    id: "2",
    sender: "buyer",
    senderName: "Ali",
    content: "Merhaba hocam, PC optimizasyonu hakkinda bilgi almak istiyorum.",
    timestamp: "2024-12-23 14:32",
  },
  {
    id: "3",
    sender: "seller",
    senderName: "Coach Ahmet",
    content: "Tabii ki! PC Tweak rehberimizi inceleyebilirsiniz. Size ozel bir optimizasyon plani hazirlayabilirim.",
    timestamp: "2024-12-23 14:35",
  },
  {
    id: "4",
    sender: "buyer",
    senderName: "Ali",
    content: "Cok iyi olur, tesekkur ederim!",
    timestamp: "2024-12-23 14:36",
  },
  {
    id: "5",
    sender: "seller",
    senderName: "Coach Ahmet",
    content: "Lutfen mevcut sistem ayarlarinizi ekran goruntusu olarak paylasir misiniz?",
    timestamp: "2024-12-23 14:38",
  },
];

export const mockOrderDetails: OrderDetails = {
  purchaseDate: "23 Aralik 2024",
  staffName: "Coach Ahmet",
  goal: "FPS oyunlarinda daha iyi performans almak ve sistemimi optimize etmek istiyorum. Ayrica VOD review ile gameplay analizi yapmak istiyorum.",
  socialLinks: {
    twitter: "https://twitter.com/kocluk",
    discord: "https://discord.gg/kocluk",
    instagram: "https://instagram.com/kocluk",
  },
};

export const serviceGuides: ServiceGuide[] = [
  {
    id: "pc-tweak",
    title: "PC Tweak Guide",
    icon: "Monitor",
    content: `# PC Tweak Rehberi

## 1. Sistem Optimizasyonu

### Windows Ayarlari
- Gorsel efektleri kapatarak performans artisi saglayabilirsiniz
- Gereksiz baslangic programlarini devre disi birakin
- Windows Defender taramalarini oyun saatlerinin disinda planlayin

### Grafik Karti Ayarlari
- NVIDIA Control Panel veya AMD Radeon Settings uzerinden oyun profillerini optimize edin
- V-Sync ayarlarini oyuna gore yapilandirin
- Shader cache boyutunu artirin

## 2. Network Optimizasyonu

- DNS sunucularini Google (8.8.8.8) veya Cloudflare (1.1.1.1) olarak degistirin
- QoS ayarlarini yapilandirin
- Gereksiz arka plan uygulamalarini kapatın

## 3. Donanim Tavsiyeleri

- SSD kullanimi oyun yukleme surelerini onemli olcude kisaltir
- En az 16GB RAM oneriyoruz
- Monitör yenileme hizinizi kontrol edin`,
  },
  {
    id: "vod-review",
    title: "VOD Review Info",
    icon: "Video",
    content: `# VOD Review Hizmeti

## Nasil Calisir?

### 1. Kayit Gonderme
- Oyun kaydınızı MP4 formatinda yukleyin
- Minimum 720p cozunurluk oneriyoruz
- 15-30 dakikalik kayitlar ideal uzunluktadir

### 2. Analiz Sureci
- Profesyonel koclarimiz kaydınızı detayli inceleyecek
- Hata analizleri ve gelisim alanlari belirlenecek
- Kisisellestirilmis geri bildirim hazirlanacak

### 3. Geri Bildirim
- Video uzerinde isaretlemeler ile detayli analiz
- Yazili rapor ve oneriler
- 1-1 gorusme imkani

## Fiyatlandirma
- Tek seferlik: 150 TL
- Aylik paket (4 video): 450 TL`,
  },
  {
    id: "coaching-sessions",
    title: "1-1 Coaching",
    icon: "Users",
    content: `# 1-1 Kocluk Seanslari

## Seans Tipleri

### Baslangic Seansi (60 dk)
- Mevcut seviyenizi degerlendirme
- Hedef belirleme
- Kisisel gelisim plani olusturma

### Haftalik Takip (45 dk)
- Ilerleme degerlendirmesi
- Yeni stratejiler ve taktikler
- Soru-cevap

### Yogun Calisma (90 dk)
- Derinlemesine oyun analizi
- Canli oyun incelemeleri
- Pratik egzersizler

## Randevu Alma
Discord uzerinden musait saatleri gorebilir ve randevu alabilirsiniz.`,
  },
  {
    id: "settings-guide",
    title: "Oyun Ayarlari",
    icon: "Settings",
    content: `# Oyun Ici Ayarlar Rehberi

## Grafik Ayarlari

### Dusuk-Orta Sistem
- Cozunurluk: Native veya %80 scale
- Texture Quality: Medium
- Shadows: Low
- Anti-Aliasing: FXAA

### Yuksek Sistem
- Cozunurluk: Native
- Texture Quality: High
- Shadows: Medium
- Anti-Aliasing: TAA

## Mouse Ayarlari
- DPI: 400-800 arasi oneriyoruz
- In-game sens: Kisisel tercihe gore
- Mouse acceleration: Kapali

## Ses Ayarlari
- Master Volume: %80
- Effect Volume: %100
- Music: %20-30
- Spatial Sound: Acik`,
  },
];

export const SHOPIER_PAYMENT_URL = "https://shopier.com/kocluk-hizmeti";

export interface Coach {
  id: string;
  name: string;
  avatar: string;
  specialization: string;
  tagline: string;
}

export interface StaffMember {
  id: string;
  name: string;
  avatar: string;
  roles: string[];
}

export const coaches: Coach[] = [
  {
    id: "coach-1",
    name: "Ahmet",
    avatar: "A",
    specialization: "Tracking Specialist",
    tagline: "Master your tracking aim with precision drills",
  },
  {
    id: "coach-2",
    name: "Mehmet",
    avatar: "M",
    specialization: "Flick Expert",
    tagline: "Lightning-fast reactions and flick shots",
  },
  {
    id: "coach-3",
    name: "Emre",
    avatar: "E",
    specialization: "Game Sense Coach",
    tagline: "Strategic positioning and map control",
  },
  {
    id: "coach-4",
    name: "Burak",
    avatar: "B",
    specialization: "VOD Analyst",
    tagline: "Deep gameplay analysis and improvement plans",
  },
];

export const staffMembers: StaffMember[] = [
  { id: "staff-1", name: "Ahmet", avatar: "A", roles: ["Coach", "Pro Player"] },
  { id: "staff-2", name: "Mehmet", avatar: "M", roles: ["Coach"] },
  { id: "staff-3", name: "Emre", avatar: "E", roles: ["Coach", "Tweaker"] },
  { id: "staff-4", name: "Burak", avatar: "B", roles: ["Coach", "VOD Analyst"] },
  { id: "staff-5", name: "Kaan", avatar: "K", roles: ["Tweaker"] },
  { id: "staff-6", name: "Arda", avatar: "AR", roles: ["Community Manager"] },
  { id: "staff-7", name: "Deniz", avatar: "D", roles: ["Pro Player"] },
  { id: "staff-8", name: "Yusuf", avatar: "Y", roles: ["Admin"] },
  { id: "staff-9", name: "Baris", avatar: "BA", roles: ["Tweaker", "Coach"] },
  { id: "staff-10", name: "Can", avatar: "C", roles: ["Community Manager"] },
];
