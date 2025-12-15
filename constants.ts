import { Product, Song } from './types';

export const BRAND_NAME = "Small Kitchen by Dillut";
export const WHATSAPP_NUMBER = "1234567890"; // Replace with real number in production

// NOTE: The previous Pixabay links likely expired, causing "The element has no supported sources".
// Replaced with reliable Creative Commons / Test audio files to ensure playback works.
// In production, host your actual MP3 files on your own CDN (e.g., AWS S3, Cloudinary).
export const PLAYLIST: Song[] = [
  {
    title: "Cruel Summer",
    artist: "Taylor Swift",
    // Upbeat pop-style placeholder (Stable source)
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" 
  },
  {
    title: "Lover",
    artist: "Taylor Swift",
    // Softer melodic placeholder
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
  },
  {
    title: "August",
    artist: "Taylor Swift",
    // Acoustic/Folk vibe placeholder
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"
  },
  {
    title: "Cardigan",
    artist: "Taylor Swift",
    // Piano/Melancholy placeholder
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3"
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'mochi-01',
    title: "Signature Mochi",
    subtitle: "Lembut, kenyal, sempurna. Isian ganache artisan yang lumer.",
    priceTag: "Paling Laris",
    gradient: "from-pink-200 to-rose-100",
    whatsappMessage: "Halo Small Kitchen by Dillut! Saya mau pesan Signature Mochi."
  },
  {
    id: 'seblak-01',
    title: "Premium Seblak",
    subtitle: "Pedas, gurih, bikin nagih. Cita rasa rempah asli Indonesia.",
    priceTag: "Wajib Coba",
    gradient: "from-orange-100 to-red-100",
    whatsappMessage: "Halo Small Kitchen by Dillut! Saya mau pesan Premium Seblak."
  },
  {
    id: 'cookies-01',
    title: "Soft Baked Cookies",
    subtitle: "Cokelat yang lumer di mulut bagaikan awan.",
    priceTag: "Terbatas",
    gradient: "from-amber-100 to-yellow-50",
    whatsappMessage: "Halo Small Kitchen by Dillut! Saya mau pesan Soft Baked Cookies."
  }
];

export const MARQUEE_TEXT = "OPEN PRE-ORDER 🍡 • Dibuat Segar Setiap Hari • Rasa Otentik • Bahan Berkualitas • Slot Terbatas • ";