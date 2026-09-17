import type { LucideIcon } from "lucide-react";
import appleGourdsImage from "@/assets/images/apple_gourds.jpg";
import bananasImage from "@/assets/images/bananas.jpg";
import chilliesImage from "@/assets/images/chillies.jpg";
import cucumbersImage from "@/assets/images/cucumbers.jpg";
import ladysFingerImage from "@/assets/images/ladys_finger.jpg";
import mangoesImage from "@/assets/images/mangoes.jpg";
import onionsImage from "@/assets/images/onions.jpg";
import papayasImage from "@/assets/images/papayas.jpg";
import {
  Building2,
  ShieldCheck,
  Sprout,
  Store,
  Tractor,
  Truck,
} from "lucide-react";

export type Language = "en" | "ur";
export type ProductTone =
  | "gold"
  | "orange"
  | "green"
  | "deep"
  | "red"
  | "leaf"
  | "sun";
export type LocalizedText = { en: string; ur: string };

export interface LanguageProps {
  isUrdu: boolean;
}

export interface NavItem {
  id: string;
  label: LocalizedText;
}

export interface Product {
  id: string;
  name: LocalizedText;
  note: LocalizedText;
  image: string;
  tone: ProductTone;
}

export interface Pillar {
  id: string;
  icon: LucideIcon;
  title: LocalizedText;
  detail: LocalizedText;
  color: "gold" | "green" | "orange" | "deep";
}

export interface BuyerSegment {
  id: "wholesale" | "retail";
  icon: LucideIcon;
  type: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  highlights: { en: readonly string[]; ur: readonly string[] };
}

export const HOME_CONTENT = {
  brand: {
    name: "Zarkheiz Organics",
    logoUrl:
      "https://customer-assets-wrfwihn1.emergentagent.net/job_farm-to-table-pk/artifacts/3gw47ax8_horzontal_logo_optimized.png",
  },
  links: {
    phone: "tel:+923342870900",
    phoneLabel: "+92 334 2870900",
    whatsapp:
      "https://wa.me/923342870900?text=Hello%20Zarkheiz%20Organics%2C%20I%20am%20interested%20in%20direct%20farm%20produce%20supply.",
    email: "mailto:zarkheizorganics@gmail.com",
    emailLabel: "zarkheizorganics@gmail.com",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7200.452728458895!2d68.67678615806331!3d25.530835663921206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c0846544cf3f9%3A0x640516a3b96edf74!2sTando%20Soomro%2C%20Pakistan!5e0!3m2!1sen!2s!4v1789596168089!5m2!1sen!2s",
  },
  navigation: [
    { id: "hero", label: { en: "Home", ur: "صفحہ اول" } },
    { id: "about", label: { en: "About", ur: "ہمارے بارے میں" } },
    { id: "why-us", label: { en: "Why us", ur: "ہمیں کیوں" } },
    { id: "products", label: { en: "Produce", ur: "پیداوار" } },
    { id: "buyers", label: { en: "Buyers", ur: "خریدار" } },
    { id: "contact", label: { en: "Contact", ur: "رابطہ" } },
  ] as const satisfies readonly NavItem[],
  hero: {
    image:
      "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=1800&q=88",
    imageAlt: {
      en: "Lush green farm fields in warm morning light",
      ur: "صبح کی روشنی میں سرسبز کھیت",
    },
    kicker: {
      en: "Direct from our partner farms",
      ur: "ہمارے شراکت دار فارموں سے براہِ راست",
    },
    heading: {
      en: "From fertile fields to the people you serve.",
      ur: "کھیت سے اداروں تک، تازگی کے ساتھ",
    },
    tagline: {
      en: "A direct farm-to-institution supply chain for fresh fruits and vegetables, sourced with care from our partner growers.",
      ur: "زرخیز آرگنیکس — کسانوں سے براہِ راست تازہ پھل اور سبزیوں کی قابلِ اعتماد ترسیل۔",
    },
    contactButton: {
      en: "Contact Zarkheiz Organics",
      ur: "زرخیز آرگنیکس سے رابطہ کریں",
    },
    exploreButton: { en: "Explore our produce", ur: "ہماری پیداوار دیکھیں" },
    promiseEyebrow: { en: "The farmgate promise", ur: "فارم گیٹ کا وعدہ" },
    promiseTitle: {
      en: "Fewer steps. Fresher produce.",
      ur: "درمیان کے غیر ضروری واسطے ختم",
    },
    promiseStats: [
      {
        value: "01",
        label: { en: "Direct sourcing", ur: "براہِ راست سورسنگ" },
      },
      {
        value: "24/7",
        label: { en: "Grower relationships", ur: "کسانوں کے ساتھ رابطہ" },
      },
    ],
    bottomNotes: [
      {
        en: "Supplying wholesale markets & retail chains",
        ur: "ہول سیل منڈیوں اور ریٹیل چینز کے لیے",
      },
      {
        en: "Seasonal harvest, dependable supply",
        ur: "پیداوار کا موسم، آپ کی ترجیح",
      },
    ],
  },
  about: {
    image:
      "https://customer-assets-wrfwihn1.emergentagent.net/job_farm-to-table-pk/artifacts/mtenchkm_ROOT_IMAGE.jpg",
    imageAlt: {
      en: "Partner farmers working in cultivated crop rows",
      ur: "کاشت شدہ قطاروں میں کام کرتے شراکت دار کسان",
    },
    imageCaption: { en: "Partner grower farms", ur: "شراکت دار زرعی فارم" },
    stamp: {
      value: "100%",
      label: { en: "farmgate direct", ur: "کھیت سے براہ راست" },
    },
    heading: {
      eyebrow: { en: "Our roots", ur: "ہماری بنیاد" },
      title: {
        en: "Sourced with care. Supplied with purpose.",
        ur: "زرخیز زمین سے قابلِ اعتماد سپلائی",
      },
      copy: {
        en: "Zarkheiz Organics connects trusted partner growers with the wholesale and retail buyers who keep communities fed.",
        ur: "ہم کاشتکار خاندانوں اور بڑے خریداروں کے درمیان ایک شفاف، مختصر اور مضبوط تعلق بناتے ہیں۔",
      },
    },
    body: {
      en: "We source fresh fruits and vegetables directly from partner farmers, then coordinate sorting, grading and dispatch for markets and marts. Every crate starts with a real farm relationship and ends with a buyer who can count on it.",
      ur: "ہم شراکت دار کسانوں سے پھل اور سبزیاں براہِ راست حاصل کرتے ہیں، پھر منڈیوں اور مارٹس کے لیے چھانٹی، گریڈنگ اور ترسیل کا اہتمام کرتے ہیں۔ ہر کریٹ ایک حقیقی کاشتکار رشتے سے شروع ہوتا ہے اور قابلِ اعتماد خریدار تک پہنچتا ہے۔",
    },
  },
  why: {
    heading: {
      eyebrow: { en: "Why Zarkheiz", ur: "ہماری ترجیحات" },
      title: {
        en: "The standards behind every delivery.",
        ur: "تازگی، معیار اور وقت کی پابندی",
      },
      copy: {
        en: "A farm-to-buyer rhythm built on fertile soil, transparent grower relationships and a sharp understanding of institutional needs.",
        ur: "ہماری سپلائی چین زرخیز زمین، کسانوں کے ساتھ شفاف رشتے اور خریداروں کی ضرورتوں کو سمجھنے پر قائم ہے۔",
      },
    },
  },
  products: {
    heading: {
      eyebrow: { en: "Our produce", ur: "فصل سے آپ تک" },
      title: { en: "Good things grow here.", ur: "تازہ، صاف، قابلِ اعتماد" },
      copy: {
        en: "Freshly gathered from partner growers, sorted and moved for high-volume handling.",
        ur: "شراکت دار کھیتوں سے چنائی، چھانٹی اور سپلائی — بڑے آرڈرز اور مسلسل ضرورت کے لیے تیار۔",
      },
    },
    availability: { en: "Ask about availability", ur: "دستیابی پوچھیں" },
  },
  buyers: {
    heading: {
      eyebrow: { en: "Who we serve", ur: "شراکت داری" },
      title: {
        en: "Built for buyers who keep things moving.",
        ur: "بڑے خریدار، مضبوط رشتے",
      },
      copy: {
        en: "Whether it is a mandi or a modern mart, our supply is shaped around freshness, volume and timing.",
        ur: "منڈی ہو یا جدید مارٹ — ہم تازگی، مقدار اور وقت کی ضرورت کو سمجھتے ہیں۔",
      },
    },
    segments: [
      {
        id: "wholesale",
        icon: Building2,
        type: { en: "01 / Wholesale", ur: "۰۱ / تھوک" },
        title: { en: "Wholesale markets", ur: "تھوک منڈیاں" },
        description: {
          en: "Bulk crate and truckload supply planned around early-morning mandi trade and daily demand.",
          ur: "صبح کی نیلامی اور روزانہ کی بڑی ضرورت کے لیے وقت پر کریٹس اور ٹرک لوڈ سپلائی۔",
        },
        highlights: {
          en: [
            "Direct truckload shipments",
            "Consistent sizing & grading",
            "Transparent sourcing",
          ],
          ur: ["براہِ راست ٹرک لوڈ", "مسلسل سائز اور گریڈ", "شفاف خریداری"],
        },
      },
      {
        id: "retail",
        icon: Store,
        type: { en: "02 / Modern retail", ur: "۰۲ / جدید ریٹیل" },
        title: { en: "Marts & retail chains", ur: "مارٹس اور ریٹیل چینز" },
        description: {
          en: "Clean, graded, shelf-ready produce with dependable delivery cycles for modern retail.",
          ur: "صاف، گریڈ شدہ اور شیلف کے لیے تیار پیداوار، قابلِ اعتماد ری اسٹاکنگ شیڈول کے ساتھ۔",
        },
        highlights: {
          en: ["Careful handling", "Scheduled delivery", "Clean crating"],
          ur: ["احتیاط سے ہینڈلنگ", "شیڈول کے مطابق ترسیل", "صاف کریٹنگ"],
        },
      },
    ] as const satisfies readonly BuyerSegment[],
  },
  contact: {
    eyebrow: { en: "Talk to the source", ur: "براہِ راست رابطہ" },
    title: {
      en: "Let’s start a fresher supply line.",
      ur: "آئیے تازہ سپلائی کا آغاز کریں۔",
    },
    subheading: {
      en: "Direct contact and sourcing desk",
      ur: "براہِ راست رابطہ اور سورسنگ ڈیسک",
    },
    description: {
      en: "No complicated forms or call centres. Reach our sourcing desk directly for supply volumes, harvest schedules and mandi logistics.",
      ur: "کوئی پیچیدہ فارم یا کال سینٹر نہیں۔ سپلائی، فصل کے شیڈول اور لاجسٹکس کے لیے ہمارے سورسنگ ڈیسک سے براہِ راست بات کریں۔",
    },
    locationLabel: { en: "Sourcing hub", ur: "سورسنگ ہب" },
    location: {
      en: "Tando Soomro District, Sindh, Pakistan",
      ur: "ضلع ٹنڈو الہ یار، سندھ، پاکستان",
    },
    mapTitle: {
      en: "Map showing Tando Soomro, Sindh, Pakistan",
      ur: "ٹنڈو سومرو، سندھ، پاکستان کا نقشہ",
    },
  },
  footer: {
    copyrightYear: 2026,
    tagline: {
      en: "Direct farm-to-institution supply from the fertile fields of Sindh.",
      ur: "سندھ کی زرخیز مٹی سے آپ کے ادارے تک",
    },
    navigationLabel: { en: "Navigate", ur: "فوری روابط" },
    contactLabel: { en: "Direct contact", ur: "براہِ راست رابطہ" },
    whatsappLabel: { en: "WhatsApp", ur: "واٹس ایپ" },
    copyright: { en: "All rights reserved.", ur: "تمام حقوق محفوظ ہیں۔" },
    origin: {
      en: "Cultivated with pride by our partner growers",
      ur: "شراکت دار کسانوں کے ساتھ فخر سے کاشت کردہ",
    },
  },
} as const;

export const CONTACT_LINKS = HOME_CONTENT.links;
export const NAV_ITEMS = HOME_CONTENT.navigation;
export const BRAND_LOGO_URL = HOME_CONTENT.brand.logoUrl;
export const HERO_IMAGE_URL = HOME_CONTENT.hero.image;
export const HARVEST_IMAGE_URL = HOME_CONTENT.about.image;
export const MAP_EMBED_URL = HOME_CONTENT.links.mapEmbed;

export const ICON_SIZE = {
  footerLeaf: 13,
  small: 14,
  compact: 15,
  navigation: 16,
  action: 17,
  medium: 18,
  menu: 20,
  card: 24,
  pillar: 25,
  hero: 32,
} as const;

export const ICON_STROKE_WIDTH = {
  hero: 1.4,
  pillar: 1.7,
} as const;

export const PRODUCT_POSITION_OFFSET = 1;
export const PRODUCT_POSITION_DIGITS = 2;
export const COPYRIGHT_YEAR = 2026;

export const PRODUCTS: readonly Product[] = [
  {
    id: "bananas",
    name: { en: "Bananas", ur: "کیلے" },
    note: { en: "Sindh Basrai & Cavendish", ur: "سندھ بصرائی اور کیونڈش" },
    image: bananasImage,
    tone: "gold",
  },
  {
    id: "mangoes",
    name: { en: "Mangoes", ur: "آم" },
    note: {
      en: "Sindhri · Chaunsa · Anwar Ratol",
      ur: "سندھڑی، چونسہ اور انور رٹول",
    },
    image: mangoesImage,
    tone: "orange",
  },
  {
    id: "apple-gourds",
    name: { en: "Apple gourds", ur: "ٹینڈے" },
    note: { en: "Tender green apple gourd", ur: "نرم سبز دیسی ٹینڈے" },
    image: appleGourdsImage,
    tone: "green",
  },
  {
    id: "lady-finger",
    name: { en: "Lady's finger", ur: "بھنڈی" },
    note: { en: "Tender pod okra", ur: "تازہ نرم بھنڈی" },
    image: ladysFingerImage,
    tone: "deep",
  },
  {
    id: "chillies",
    name: { en: "Chillies", ur: "مرچیں" },
    note: { en: "Desi hot & mild varieties", ur: "دیسی تیز اور ہلکی اقسام" },
    image: chilliesImage,
    tone: "red",
  },
  {
    id: "cucumbers",
    name: { en: "Cucumbers", ur: "کھیرے" },
    note: { en: "Crisp field cucumber", ur: "تازہ کھیتوں کے کھیرے" },
    image: cucumbersImage,
    tone: "leaf",
  },
  {
    id: "papayas",
    name: { en: "Papayas", ur: "پپیتے" },
    note: {
      en: "Red Lady & Sindh sweet",
      ur: "ریڈ لیڈی اور سندھ کا میٹھا پپیتا",
    },
    image: papayasImage,
    tone: "sun",
  },
  {
    id: "onions",
    name: { en: "Onions", ur: "پیاز" },
    note: { en: "Fresh red & brown onions", ur: "تازہ سرخ اور بھوری پیاز" },
    image: onionsImage,
    tone: "orange",
  },
];

export const PILLARS: readonly Pillar[] = [
  {
    id: "fresh-produce",
    icon: Sprout,
    title: { en: "Fresh produce", ur: "تازہ ترین پیداوار" },
    detail: {
      en: "Harvested at the right moment and moved quickly from field to receiving point.",
      ur: "کھیت سے تازہ چنائی، بغیر غیر ضروری تاخیر کے آپ تک۔",
    },
    color: "gold",
  },
  {
    id: "quality-assured",
    icon: ShieldCheck,
    title: { en: "Quality assured", ur: "معیاری کوالٹی" },
    detail: {
      en: "Careful sorting and grading prepared for wholesale and modern retail standards.",
      ur: "ہول سیل اور جدید ریٹیل کے معیار کے مطابق چھانٹی اور گریڈنگ۔",
    },
    color: "green",
  },
  {
    id: "direct-from-farmers",
    icon: Tractor,
    title: { en: "Direct from farmers", ur: "کسانوں سے براہِ راست" },
    detail: {
      en: "Direct farmgate relationships create a shorter, clearer supply chain.",
      ur: "کسانوں سے براہِ راست تعلق ایک شفاف اور مختصر سپلائی چین بناتا ہے۔",
    },
    color: "orange",
  },
  {
    id: "on-time-delivery",
    icon: Truck,
    title: { en: "On-time delivery", ur: "وقت پر ترسیل" },
    detail: {
      en: "Reliable dispatch planning for mandi openings and store restocking cycles.",
      ur: "منڈی اور اسٹور کے شیڈول کے مطابق منظم اور بروقت ترسیل۔",
    },
    color: "deep",
  },
];

export function localize(isUrdu: boolean, text: LocalizedText): string {
  return isUrdu ? text.ur : text.en;
}
