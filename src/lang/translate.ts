export type Lang = 'en' | 'id' | 'jp';

// Struktur bahasa
interface TranslationContent {
  title: string;
  description: string;
  socialMedia: {
    github: string;
    facebook: string;
  };
  blog: string;
  cookieMessage: string;
  cookieButton: string;
}

// Data terjemahan
export const translations: Record<Lang, TranslationContent> = {
  en: {
    title: "Fuji Halim Rabbani",
    description:
      "Hello! I am Fuji Halim Rabbani, an internet explorer who spends a lot of time in front of the screen. I enjoy learning languages with Anki and Duolingo, reading manga, watching anime, and occasionally writing and exercising.",
    socialMedia: {
      github: "GitHub",
      facebook: "Facebook",
    },
    blog: "Blog",
    cookieMessage: "Not a bakery, but here's a 'cookie' for you! 🍪 Just so you know, this site uses cookies. Enjoy!",
    cookieButton: "Okay 🍪",
  },
  id: {
    title: "Fuji Halim Rabbani",
    description:
      "Halo! Saya Fuji Halim Rabbani, seorang penjelajah internet yang menghabiskan banyak waktu di depan layar. Saya menikmati belajar bahasa dengan Anki dan Duolingo, membaca manga, menonton anime, serta sesekali menulis dan berolahraga.",
    socialMedia: {
      github: "GitHub",
      facebook: "Facebook",
    },
    blog: "Blog",
    cookieMessage: "Ini bukan toko roti, tapi ini 'cookie' untukmu! 🍪 Situs ini menggunakan cookie. Selamat menikmati!",
    cookieButton: "Oke 🍪",
  },
  jp: {
    title: "フジ ハリム ラバニ",
    description:
      "こんにちは！私はフジ・ハリム・ラバニ、インターネットの探索者で、画面の前で多くの時間を過ごしています。私はAnkiとDuolingoで言語を学ぶこと、マンガを読むこと、アニメを見ること、そして時々執筆や運動を楽しんでいます。",
    socialMedia: {
      github: "GitHub",
      facebook: "Facebook",
    },
    blog: "ブログ",
    cookieMessage: "パン屋ではありませんが、ここに「クッキー」があります！ 🍪 このサイトはクッキーを使用しています。お楽しみください！",
    cookieButton: "了解 🍪",
  },
};

export function t(lang: Lang, key: string): string {
  const keys = key.split('.');
  let result: unknown = translations[lang];

  for (const k of keys) {
    if (typeof result === "object" && result !== null && k in result) {
      result = (result as Record<string, unknown>)[k];
    } else {
      return typeof translations["en"][key as keyof TranslationContent] === "string"
        ? (translations["en"][key as keyof TranslationContent] as string)
        : key;
    }
  }

  return typeof result === "string" ? result : key;
}