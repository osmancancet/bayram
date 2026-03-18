export const SITE_NAME = "Dijital Bayram";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://dijitalbayram.com";

export const MESSAGES = {
  general: (name: string, url: string) =>
    `Bu mübarek günlerde tüm dualarınız kabul olsun, sofranız bereketli, yüzünüz güleç olsun. Ramazan Bayramınız Mübarek Olsun!\n-${name}\n\nSizin için oluşturduğum bayram kartını görmek için tıklayınız.\n${url}\n\nHayırlı bayramlar! 🤲`,
  family: (name: string, url: string) =>
    `Bu mübarek günlerde tüm dualarınız kabul olsun, sofranız bereketli, yüzünüz güleç olsun. Ramazan Bayramınız Mübarek Olsun!\n-${name}\n\nSizin için oluşturduğum bayram kartını görmek için tıklayınız.\n${url}\n\nHayırlı bayramlar! 🤲`,
  work: (name: string, url: string) =>
    `Bu mübarek günlerde tüm dualarınız kabul olsun, sofranız bereketli, yüzünüz güleç olsun. Ramazan Bayramınız Mübarek Olsun!\n-${name}\n\nSizin için oluşturduğum bayram kartını görmek için tıklayınız.\n${url}\n\nHayırlı bayramlar! 🤲`,
  bulk: (name: string, url: string) =>
    `Bu mübarek günlerde tüm dualarınız kabul olsun, sofranız bereketli, yüzünüz güleç olsun. Ramazan Bayramınız Mübarek Olsun!\n-${name}\n\nSizin için oluşturduğum bayram kartını görmek için tıklayınız.\n${url}\n\nHayırlı bayramlar! 🤲`,
  custom: (name: string, url: string, message: string) =>
    `${message}\n-${name}\n\nSizin için oluşturduğum bayram kartını görmek için tıklayınız.\n${url}\n\nHayırlı bayramlar! 🤲`,
} as const;

export const CONFETTI_COLORS = ["#f59e0b", "#fbbf24", "#fde68a", "#064e3b", "#ffffff"];

export const DEFAULT_MESSAGES = [
  "Bu mübarek günlerde tüm dualarınız kabul olsun, sofranız bereketli, yüzünüz güleç olsun.",
  "Ramazan Bayramı'nın bereket ve huzuru üzerinize olsun.",
  "Sevdiklerinizle birlikte nice güzel bayramlar geçirmeniz dileğiyle.",
  "Bayramın neşesi, mutluluğu ve bereketi daim olsun.",
  "Gönüllerin birbirine en yakın olduğu bu güzel günde bayramınız kutlu olsun.",
  "Bu bayramda yürekler bir olsun, sofralar şenlensin, dualar kabul olsun.",
  "Bayram sofranız bereketli, gülüşleriniz bol, sevdikleriniz yanınızda olsun.",
  "Allah bu bayramda kalbinizi huzurla, evinizi bereketle doldursun.",
];
