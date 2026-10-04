import { Product } from '../types/product';
import videoRegistry from './video-registry.json';

export const generateSlug = (name: string): string => {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
};

const rawProducts: Omit<Product, 'slug' | 'video'>[] = [
  {
    "id": "1",
    "name": "40 W Quick Charger 4.0",
    "price": 800,
    "category": "Chargers",
    "description": "Power up your devices at lightning speed with this premium 40W PD Quick Charger! It lets you safely fast-charge your compatible devices without losing a single watt of performance.",
    "imageFilename": "QuickCharger-40W-Yellow.jpg"
  },
  {
    "id": "2",
    "name": "SUPER VOOC CHARGER",
    "price": 800,
    "category": "Chargers",
    "description": "Experience true hyper-speed charging with our tested SuperVOOC fast charger brick! Built to deliver maximum, stable power safely to your compatible devices, it eliminates long waiting times so you stay connected all day.",
    "imageFilename": "Super-VOOC-White.jpg"
  },
  {
    "id": "3",
    "name": "SAMSUNG 25W ADAPTER USB-C",
    "price": 750,
    "category": "Chargers",
    "description": "Fast-charge your smartphones and other Type-C devices with this reliable 25W power adapter. Its compact design makes it perfect for travel while ensuring safe and efficient charging.",
    "imageFilename": "Samsung-25W-Adapter.jpg"
  },
  {
    "id": "4",
    "name": "CHINA 3 iN 1 ADAPTOR",
    "price": 1000,
    "category": "Adapters",
    "description": "Maximize your charging capability with this versatile 3-in-1 multi-port adapter. Designed for convenience, it allows you to connect and power multiple devices simultaneously from a single wall outlet.",
    "imageFilename": "China-3in1-Adaptor.jpg"
  },
  {
    "id": "5",
    "name": "3 iN 1 FAST DATA CABLE",
    "price": 400,
    "category": "Cables",
    "description": "Keep all your devices synced and charged with this stylish pink 3-in-1 fast data cable. Featuring multiple connectors, it provides high-speed data transfer and incredible durability for everyday use.",
    "imageFilename": "3in1-Fast-Data-Cable-Pink.jpg"
  },
  {
    "id": "6",
    "name": "DATA CABLE FIBER SUPER FAST",
    "price": 350,
    "category": "Cables",
    "description": "Experience blazing-fast charging and data syncing with this blue fiber-braided data cable. The reinforced fiber exterior ensures maximum durability and prevents frustrating tangles.",
    "imageFilename": "Fiber-Super-Fast-Cable-Blue.jpg"
  },
  {
    "id": "7",
    "name": "DATA CABLE HIGH SPEED MK",
    "price": 400,
    "category": "Cables",
    "description": "A sleek and robust black high-speed data cable designed for quick file transfers and rapid charging. Its premium build guarantees a secure connection every single time.",
    "imageFilename": "MK-High-Speed-Cable-Black.jpg"
  },
  {
    "id": "8",
    "name": "Original Air BUDS Pro",
    "price": 1800,
    "category": "Audio",
    "description": "Enjoy crystal-clear audio and seamless wireless connectivity with these minimalist white Air Buds. Ergonomically designed for a comfortable fit, they are the perfect companion for music, calls, and workouts.",
    "imageFilename": "Air-Buds-White.jpg"
  },
  {
    "id": "9",
    "name": "ANC TWS WIRELESS EARBUDS",
    "price": 1500,
    "category": "Audio",
    "description": "Immerse yourself in your favorite tunes with Active Noise Cancelling (ANC) True Wireless Stereo earbuds. Block out daily distractions and experience high-fidelity sound on the go.",
    "imageFilename": "ANC-TWS-Earbuds.jpg"
  },
  {
    "id": "10",
    "name": "ANC/ENC BUDS PRO 5 (SILVER COLOUR)",
    "price": 1800,
    "category": "Audio",
    "description": "Upgrade your listening experience with the Buds Pro 5 in a sleek silver finish. Featuring both Active and Environmental Noise Cancellation (ANC/ENC) for pristine audio clarity during calls and music playback.",
    "imageFilename": "Buds-Pro-5-Silver.jpg"
  },
  {
    "id": "11",
    "name": "GOLD SHANDE / ANC-ENC BUDS PRO 3",
    "price": 1800,
    "category": "Audio",
    "description": "Stand out with the premium Gold Shande Buds Pro 3. Equipped with advanced ANC and ENC technology, these earbuds deliver exceptional sound quality paired with a luxurious, stylish aesthetic.",
    "imageFilename": "Gold-Shande-Buds-Pro3.jpg"
  },
  {
    "id": "12",
    "name": "Air BUDS PRO 7 ANC/ENC DOUBLE DARK",
    "price": 1800,
    "category": "Audio",
    "description": "Dive into deep bass and rich acoustics with the Air Buds Pro 7 in a stunning Double Dark finish. Dual noise-cancellation tech ensures your calls and music remain completely uninterrupted in any environment.",
    "imageFilename": "Air-Buds-Pro7-Dark.jpg"
  },
  {
    "id": "13",
    "name": "Air BUDS M10 V5.3 BT WIRELESS",
    "price": 1200,
    "category": "Audio",
    "description": "Stay connected flawlessly with the latest Bluetooth 5.3 technology in the M10 Wireless Air Buds. Enjoy ultra-low latency, extended battery life, and superior sound quality for all your media.",
    "imageFilename": "Air-Buds-M10.jpg"
  },
  {
    "id": "14",
    "name": "U 39 Air BUDS",
    "price": 1500,
    "category": "Audio",
    "description": "Discover lightweight comfort and impressive audio performance with the U 39 Air Buds. Perfect for daily commutes or intense gym sessions, offering a secure fit and reliable wireless streaming.",
    "imageFilename": "U39-Air-Buds.jpg"
  },
  {
    "id": "15",
    "name": "MINI SPEAKER WS-887",
    "price": 1000,
    "category": "Audio",
    "description": "Bring the party anywhere with the ultra-portable WS-887 Mini Speaker. Despite its compact size, it delivers surprisingly loud, punchy audio and features a rugged design for outdoor adventures.",
    "imageFilename": "WS887-Mini-Speaker.jpg"
  },
  {
    "id": "16",
    "name": "DATA CABLE VIVID",
    "price": 350,
    "category": "Cables",
    "description": "Add a splash of color to your daily charging routine with the Vivid Data Cable. Engineered for fast, stable charging and secure data syncing without compromising on personal style.",
    "imageFilename": "Vivid-Data-Cable.jpg"
  },
  {
    "id": "17",
    "name": "DATE CABLE 4 iN 1 FAST SPEED BLACK COLOUR",
    "price": 450,
    "category": "Cables",
    "description": "The ultimate all-in-one charging solution! This 4-in-1 fast-speed black cable supports multiple device types simultaneously, eliminating the need to carry a tangled mess of cords in your bag.",
    "imageFilename": "4in1-Fast-Cable-Black.jpg"
  },
  {
    "id": "18",
    "name": "CHARGER QUICK G 2023",
    "price": 400,
    "category": "Chargers",
    "description": "Get back to full power swiftly with the Quick G 2023 Charger. Designed for optimal efficiency, this compact wall adapter provides stable and rapid charging for your most essential daily devices.",
    "imageFilename": "Quick-G-2023-Charger.jpg"
  },
  {
    "id": "19",
    "name": "HAND FREE UNIVERSAL B-42",
    "price": 350,
    "category": "Audio",
    "description": "Enjoy universal compatibility and crisp audio with the B-42 wired hands-free earphones. Featuring a built-in inline microphone for clear calls and a comfortable in-ear fit for prolonged use.",
    "imageFilename": "Universal-Handfree-B42.jpg"
  },
  {
    "id": "20",
    "name": "SELFI STICK OSANI TRIPOD / HOLDER",
    "price": 1200,
    "category": "Accessories",
    "description": "Capture the perfect angle every time with this versatile Osani selfie stick and tripod hybrid. Featuring a sturdy, adjustable holder, it is the ideal tool for vlogging, group photos, and hands-free video calls.",
    "imageFilename": "Osani-Selfie-Tripod.jpg"
  },
  {
    "id": "21",
    "name": "HEAD PHONE P9",
    "price": 1500,
    "category": "Audio",
    "description": "Step up your audio game with the P9 over-ear headphones. Designed for an immersive listening experience and all-day comfort, featuring plush ear cushions and a dynamic, heavy bass response.",
    "imageFilename": "P9-Headphones.jpg"
  },
  {
    "id": "22",
    "name": "SPEAKER MULTI MEDIA 2.0 HT-09A COMPUTER SPEAKER",
    "price": 1500,
    "category": "Audio",
    "description": "Enhance your desktop workstation setup with the HT-09A Multimedia 2.0 Computer Speakers. Deliver clear, room-filling stereo sound for your movies, games, and music directly from your PC or laptop.",
    "imageFilename": "HT09A-Computer-Speaker.jpg"
  },
  {
    "id": "23",
    "name": "PORTABLE WIRELESS SPEAKER KTS 2259 SOLAR CHARGING",
    "price": 1600,
    "category": "Audio",
    "description": "Take your music completely off the grid with the KTS 2259 portable speaker. Featuring integrated solar charging capability, this eco-friendly wireless speaker ensures the tunes keep playing even when you're far away from a wall outlet.",
    "imageFilename": "KTS2259-Solar-Speaker.jpg"
  },
  {
    "id": "24",
    "name": "WIRELESS SPEAKER 4\" SOLAR CHARGING KBROAD KTS-1706",
    "price": 2200,
    "category": "Audio",
    "description": "Power up your outdoor parties with the K Broad KTS-1706 4-inch wireless speaker. Boasting robust sound and a built-in solar panel on the back, it provides endless entertainment powered purely by the sun.",
    "imageFilename": "KTS1706-Solar-Speaker.jpg"
  },
  {
    "id": "25",
    "name": "HEAD PHONE P47 5.0 EDR",
    "price": 1100,
    "category": "Audio",
    "description": "Enjoy wireless freedom and punchy bass with the stylish P47 folding headphones. Equipped with Bluetooth 5.0 EDR for a highly stable connection and a space-saving foldable design for effortless transport.",
    "imageFilename": "P47-Headphones.jpg"
  },
  {
    "id": "26",
    "name": "CHARGER 3.0 BLACK QUALCOMM",
    "price": 800,
    "category": "Chargers",
    "description": "Turbocharge your smartphone with the Qualcomm Quick Charge 3.0 black wall adapter. Engineered to deliver rapid, safe, and highly efficient power to all your compatible QC 3.0 electronic devices.",
    "imageFilename": "Qualcomm-QC3-Charger-Black.jpg"
  },
  {
    "id": "27",
    "name": "Mobile Gaming Finger Sleeve",
    "price": 200,
    "category": "Gaming",
    "description": "Improve your touchscreen accuracy and reduce friction with these dedicated mobile gaming finger sleeves. The black sleeves feature a lightweight, breathable design to keep your fingers primed for intense competitive gameplay.",
    "imageFilename": "mobile-gaming-finger-sleeve.jpg"
  }
];

export const products: Product[] = rawProducts.map(p => {
  const slug = generateSlug(p.name);
  const hasVideo = (videoRegistry as string[]).includes(slug);
  return {
    ...p,
    slug,
    ...(hasVideo ? { video: `/videos/products/${slug}.mp4` } : {})
  };
});
