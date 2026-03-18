export interface BayramMesaj {
  id: number;
  text: string;
  category: Category;
}

export type Category = "genel" | "aile" | "resmi" | "komik" | "dua";

export const CATEGORY_LABELS: Record<Category, string> = {
  genel: "Genel",
  aile: "Aile",
  resmi: "Resmi / İş",
  komik: "Eğlenceli",
  dua: "Dua",
};

export const CATEGORY_EMOJIS: Record<Category, string> = {
  genel: "🌙",
  aile: "👨‍👩‍👧‍👦",
  resmi: "💼",
  komik: "😄",
  dua: "🤲",
};

export const mesajlar: BayramMesaj[] = [
  // Genel (8)
  { id: 1, text: "Ramazan Bayramınız mübarek olsun. Sevdiklerinizle birlikte nice güzel bayramlar geçirmeniz dileğiyle.", category: "genel" },
  { id: 2, text: "Bu mübarek günlerde tüm dualarınız kabul olsun, sofranız bereketli, yüzünüz güleç olsun. Hayırlı bayramlar!", category: "genel" },
  { id: 3, text: "Bayramın neşesi, mutluluğu ve bereketi daim olsun. Nice güzel bayramlara.", category: "genel" },
  { id: 4, text: "Ramazan Bayramı'nın huzur, bereket ve mutluluk getirmesi dileğiyle. Bayramınız kutlu olsun!", category: "genel" },
  { id: 5, text: "Gönüllerin birbirine en yakın olduğu bu güzel günde bayramınızı en içten dileklerimle kutlarım.", category: "genel" },
  { id: 6, text: "Bayram sofranız bereketli, gülüşleriniz bol, sevdikleriniz yanınızda olsun. Mutlu bayramlar!", category: "genel" },
  { id: 7, text: "Bu güzel bayramda yürekler bir olsun, sofralar şenlensin, dualar kabul olsun. Hayırlı bayramlar!", category: "genel" },
  { id: 8, text: "Ramazan Bayramı'nın tüm İslam alemine hayırlar getirmesini diliyorum. Bayramınız mübarek olsun.", category: "genel" },

  // Aile (6)
  { id: 9, text: "Canım ailem, bu bayramda da bir arada olmanın mutluluğunu yaşıyoruz. Hepinizi çok seviyorum. İyi bayramlar!", category: "aile" },
  { id: 10, text: "Anneciğim / Babacığım, ellerinizden öper, bayramınızı kutlarım. Sağlıklı, huzurlu nice bayramlara.", category: "aile" },
  { id: 11, text: "Sevgili ailem, uzakta da olsam gönlüm sizinle. Bu bayramda tüm güzelliklerin sizlerle olmasını diliyorum.", category: "aile" },
  { id: 12, text: "Dedelerimizin, ninelerimizin ellerinden öpüyorum. Dualarınız bizimle, sevginiz kalbimizde. Hayırlı bayramlar!", category: "aile" },
  { id: 13, text: "Kardeşim, seninle büyümenin, aynı sofrada oturmanın kıymetini biliyorum. İyi ki varsın, iyi bayramlar!", category: "aile" },
  { id: 14, text: "Ailemizin neşesi, birliği ve sevgisi daim olsun. Bu bayram da gönlümüz bir, soframız bereketli olsun.", category: "aile" },

  // Resmi / İş (5)
  { id: 15, text: "Değerli meslektaşlarım, Ramazan Bayramınızı en içten dileklerimle kutlar, sağlık ve mutluluk dilerim.", category: "resmi" },
  { id: 16, text: "Bayramın iş hayatımıza da huzur ve bereket getirmesini temenni ederim. Hayırlı bayramlar.", category: "resmi" },
  { id: 17, text: "Sizinle çalışmaktan büyük mutluluk duyuyorum. Ramazan Bayramınız mübarek, ailenizle birlikte nice güzel günleriniz olsun.", category: "resmi" },
  { id: 18, text: "Saygıdeğer hocam, Ramazan Bayramınızı kutlar, sağlıklı ve huzurlu nice bayramlar geçirmenizi dilerim.", category: "resmi" },
  { id: 19, text: "Değerli müşterilerimizin ve iş ortaklarımızın Ramazan Bayramı'nı kutlar, hayırlı günler dileriz.", category: "resmi" },

  // Eğlenceli (6)
  { id: 20, text: "Bayram harçlığımı bekliyorum, haberin olsun! 😄 Şaka bir yana, bayramın kutlu olsun!", category: "komik" },
  { id: 21, text: "Bayramda kilo aldıysan üzülme, herkes aldı. Önemli olan sofradan mutlu kalkmak! Hayırlı bayramlar 🍬", category: "komik" },
  { id: 22, text: "El öpmek için sıraya giriyorum, harçlık hesabı yapmıyorum ama yapmıyorum demiyorum. İyi bayramlar! 💰", category: "komik" },
  { id: 23, text: "Bayram ziyaretinde en çok çayı mı yoksa baklavayı mı seviyorsun? Ben ikisini birden seviyorum. Bayramın kutlu olsun! 🍵", category: "komik" },
  { id: 24, text: "Ramazan bitti ama ben hâlâ iftar saatini bekliyorum alışkanlıktan. Güzel bir bayram geçir! 😅", category: "komik" },
  { id: 25, text: "Bu bayram mesajını atan ilk kişi ben olayım dedim. Geç kaldıysam da niyetim güzeldi! İyi bayramlar! 🏃", category: "komik" },

  // Dua (5)
  { id: 26, text: "Allah bu bayramda kalbini huzurla, evini bereketle, ömrünü sağlıkla doldursun. Amin. Hayırlı bayramlar.", category: "dua" },
  { id: 27, text: "Rabbim bu mübarek bayramda dualarını kabul etsin, günahlarını affetsin, seni sevdiklerinle beraber eylesin.", category: "dua" },
  { id: 28, text: "Bu bayramda dökülen her dua bir rahmet olsun, tutulan her oruç kabul olsun. Allah bayramınızı mübarek kılsın.", category: "dua" },
  { id: 29, text: "Ya Rabbi, bu bayramın ümmete birlik, beraberlik ve huzur getirmesini nasip eyle. Bayramınız mübarek olsun.", category: "dua" },
  { id: 30, text: "Allah'ım, sevdiklerimizi bizden ayırma, sofralarımızı boş bırakma, dualarımızı geri çevirme. Hayırlı bayramlar.", category: "dua" },
];
