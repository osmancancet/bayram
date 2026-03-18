export const SITE_NAME = "Bayram Tebriği";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://bayram.vercel.app";

export const MESSAGES = {
  general: (name: string, url: string) =>
    `🌙 Ramazan Bayramınız Mübarek Olsun! 🌙\n\n${name} size bayram tebriği gönderiyor.\n\nBu mübarek günlerde tüm dualarınız kabul olsun, sofranız bereketli, yüzünüz güleç olsun.\n\n✨ Tebrik kartını görmek için:\n${url}\n\nHayırlı bayramlar! 🤲`,
  family: (name: string, url: string) =>
    `🌙 Canım ailem! ${name} olarak hepinizin Ramazan Bayramı'nı tebrik ediyorum! ✨\n\nSize özel hazırladığım kart: ${url}\n\nNice güzel bayramlara 🤲`,
  work: (name: string, url: string) =>
    `🌙 Değerli meslektaşlarım, ${name} olarak Ramazan Bayramınızı en içten dileklerimle kutlarım.\n\nTebrik kartım: ${url}\n\nHayırlı bayramlar.`,
  bulk: (name: string, url: string) =>
    `🌙✨ Ramazan Bayramınız Mübarek Olsun! ✨🌙\n\n${name} olarak tüm sevdiklerimin bayramını kutluyorum!\n\n🎉 Tebrik kartım: ${url}\n\n📲 Siz de kendi tebrik kartınızı oluşturun, sevdiklerinize gönderin!\n\nHayırlı bayramlar! 🤲`,
  custom: (name: string, url: string, message: string) =>
    `🌙 ${message}\n\n${name}'den bayram tebriği: ${url}`,
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
