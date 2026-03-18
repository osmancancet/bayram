// 2026 Ramazan Bayramı Namazı Saatleri — 20 Mart 2026 (Diyanet verileri)
// 81 il + tüm ilçeler

export interface Ilce {
  slug: string;
  isim: string;
}

export interface IlDetay {
  il: string;
  slug: string;
  saat: string;
  ilceler: Ilce[];
}

// --- Slugify ---
const TR_MAP: Record<string, string> = {
  ç: "c", Ç: "c",
  ğ: "g", Ğ: "g",
  ı: "i", İ: "i",
  ö: "o", Ö: "o",
  ş: "s", Ş: "s",
  ü: "u", Ü: "u",
};

export function slugify(text: string): string {
  return text
    .replace(/[çÇğĞıİöÖşŞüÜ]/g, (ch) => TR_MAP[ch] ?? ch)
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

// --- Helper to build Ilce array from string[] ---
function ilceler(...isimler: string[]): Ilce[] {
  return isimler.map((isim) => ({ slug: slugify(isim), isim }));
}

// --- Tüm iller ---
export const namazSaatleri: IlDetay[] = [
  {
    il: "Adana",
    slug: "adana",
    saat: "07:12",
    ilceler: ilceler(
      "Aladağ", "Ceyhan", "Çukurova", "Feke", "İmamoğlu",
      "Karaisalı", "Karataş", "Kozan", "Pozantı", "Saimbeyli",
      "Sarıçam", "Seyhan", "Tufanbeyli", "Yumurtalık", "Yüreğir"
    ),
  },
  {
    il: "Adıyaman",
    slug: "adiyaman",
    saat: "07:01",
    ilceler: ilceler(
      "Besni", "Çelikhan", "Gerger", "Gölbaşı", "Kahta",
      "Merkez", "Samsat", "Sincik", "Tut"
    ),
  },
  {
    il: "Afyonkarahisar",
    slug: "afyonkarahisar",
    saat: "07:32",
    ilceler: ilceler(
      "Başmakçı", "Bayat", "Bolvadin", "Çay", "Çobanlar",
      "Dazkırı", "Dinar", "Emirdağ", "Evciler", "Hocalar",
      "İhsaniye", "İscehisar", "Kızılören", "Merkez", "Sandıklı",
      "Sinanpaşa", "Sultandağı", "Şuhut"
    ),
  },
  {
    il: "Ağrı",
    slug: "agri",
    saat: "06:42",
    ilceler: ilceler(
      "Diyadin", "Doğubayazıt", "Eleşkirt", "Hamur",
      "Merkez", "Patnos", "Taşlıçay", "Tutak"
    ),
  },
  {
    il: "Aksaray",
    slug: "aksaray",
    saat: "07:18",
    ilceler: ilceler(
      "Ağaçören", "Eskil", "Gülağaç", "Güzelyurt",
      "Merkez", "Ortaköy", "Sarıyahşi", "Sultanhanı"
    ),
  },
  {
    il: "Amasya",
    slug: "amasya",
    saat: "07:12",
    ilceler: ilceler(
      "Göynücek", "Gümüşhacıköy", "Hamamözü", "Merkez",
      "Merzifon", "Suluova", "Taşova"
    ),
  },
  {
    il: "Ankara",
    slug: "ankara",
    saat: "07:23",
    ilceler: ilceler(
      "Akyurt", "Altındağ", "Ayaş", "Bala", "Beypazarı",
      "Çamlıdere", "Çankaya", "Çubuk", "Elmadağ", "Etimesgut",
      "Evren", "Gölbaşı", "Güdül", "Haymana", "Kahramankazan",
      "Kalecik", "Keçiören", "Kızılcahamam", "Mamak", "Nallıhan",
      "Polatlı", "Pursaklar", "Sincan", "Şereflikoçhisar", "Yenimahalle"
    ),
  },
  {
    il: "Antalya",
    slug: "antalya",
    saat: "07:31",
    ilceler: ilceler(
      "Akseki", "Aksu", "Alanya", "Demre", "Döşemealtı",
      "Elmalı", "Finike", "Gazipaşa", "Gündoğmuş", "İbradı",
      "Kaş", "Kemer", "Kepez", "Konyaaltı", "Kumluca",
      "Manavgat", "Muratpaşa", "Serik"
    ),
  },
  {
    il: "Ardahan",
    slug: "ardahan",
    saat: "06:44",
    ilceler: ilceler(
      "Çıldır", "Damal", "Göle", "Hanak", "Merkez", "Posof"
    ),
  },
  {
    il: "Artvin",
    slug: "artvin",
    saat: "06:48",
    ilceler: ilceler(
      "Ardanuç", "Arhavi", "Borçka", "Hopa", "Kemalpaşa",
      "Merkez", "Murgul", "Şavşat", "Yusufeli"
    ),
  },
  {
    il: "Aydın",
    slug: "aydin",
    saat: "07:42",
    ilceler: ilceler(
      "Bozdoğan", "Buharkent", "Çine", "Didim", "Efeler",
      "Germencik", "İncirliova", "Karacasu", "Karpuzlu", "Koçarlı",
      "Köşk", "Kuşadası", "Kuyucak", "Nazilli", "Söke",
      "Sultanhisar", "Yenipazar"
    ),
  },
  {
    il: "Balıkesir",
    slug: "balikesir",
    saat: "07:43",
    ilceler: ilceler(
      "Altıeylül", "Ayvalık", "Balya", "Bandırma", "Bigadiç",
      "Burhaniye", "Dursunbey", "Edremit", "Erdek", "Gömeç",
      "Gönen", "Havran", "İvrindi", "Karesi", "Kepsut",
      "Manyas", "Marmara", "Savaştepe", "Sındırgı", "Susurluk"
    ),
  },
  {
    il: "Bartın",
    slug: "bartin",
    saat: "07:26",
    ilceler: ilceler(
      "Amasra", "Kurucaşile", "Merkez", "Ulus"
    ),
  },
  {
    il: "Batman",
    slug: "batman",
    saat: "06:49",
    ilceler: ilceler(
      "Beşiri", "Gercüş", "Hasankeyf", "Kozluk", "Merkez", "Sason"
    ),
  },
  {
    il: "Bayburt",
    slug: "bayburt",
    saat: "06:54",
    ilceler: ilceler(
      "Aydıntepe", "Demirözü", "Merkez"
    ),
  },
  {
    il: "Bilecik",
    slug: "bilecik",
    saat: "07:35",
    ilceler: ilceler(
      "Bozüyük", "Gölpazarı", "İnhisar", "Merkez",
      "Osmaneli", "Pazaryeri", "Söğüt", "Yenipazar"
    ),
  },
  {
    il: "Bingöl",
    slug: "bingol",
    saat: "06:52",
    ilceler: ilceler(
      "Adaklı", "Genç", "Karlıova", "Kiğı", "Merkez",
      "Solhan", "Yayladere", "Yedisu"
    ),
  },
  {
    il: "Bitlis",
    slug: "bitlis",
    saat: "06:46",
    ilceler: ilceler(
      "Adilcevaz", "Ahlat", "Güroymak", "Hizan",
      "Merkez", "Mutki", "Tatvan"
    ),
  },
  {
    il: "Bolu",
    slug: "bolu",
    saat: "07:29",
    ilceler: ilceler(
      "Dörtdivan", "Gerede", "Göynük", "Kıbrıscık",
      "Mengen", "Merkez", "Mudurnu", "Seben", "Yeniçağa"
    ),
  },
  {
    il: "Burdur",
    slug: "burdur",
    saat: "07:33",
    ilceler: ilceler(
      "Ağlasun", "Altınyayla", "Bucak", "Çavdır",
      "Çeltikçi", "Gölhisar", "Karamanlı", "Kemer",
      "Merkez", "Tefenni", "Yeşilova"
    ),
  },
  {
    il: "Bursa",
    slug: "bursa",
    saat: "07:38",
    ilceler: ilceler(
      "Büyükorhan", "Gemlik", "Gürsu", "Harmancık", "İnegöl",
      "İznik", "Karacabey", "Keles", "Kestel", "Mudanya",
      "Mustafakemalpaşa", "Nilüfer", "Orhaneli", "Orhangazi",
      "Osmangazi", "Yenişehir", "Yıldırım"
    ),
  },
  {
    il: "Çanakkale",
    slug: "canakkale",
    saat: "07:49",
    ilceler: ilceler(
      "Ayvacık", "Bayramiç", "Biga", "Bozcaada", "Çan",
      "Eceabat", "Ezine", "Gelibolu", "Gökçeada", "Lapseki",
      "Merkez", "Yenice"
    ),
  },
  {
    il: "Çankırı",
    slug: "cankiri",
    saat: "07:20",
    ilceler: ilceler(
      "Atkaracalar", "Bayramören", "Çerkeş", "Eldivan",
      "Ilgaz", "Kızılırmak", "Korgun", "Kurşunlu",
      "Merkez", "Orta", "Şabanözü", "Yapraklı"
    ),
  },
  {
    il: "Çorum",
    slug: "corum",
    saat: "07:15",
    ilceler: ilceler(
      "Alaca", "Bayat", "Boğazkale", "Dodurga", "İskilip",
      "Kargı", "Laçin", "Mecitözü", "Merkez", "Oğuzlar",
      "Ortaköy", "Osmancık", "Sungurlu", "Uğurludağ"
    ),
  },
  {
    il: "Denizli",
    slug: "denizli",
    saat: "07:37",
    ilceler: ilceler(
      "Acıpayam", "Babadağ", "Baklan", "Bekilli", "Beyağaç",
      "Bozkurt", "Buldan", "Çal", "Çameli", "Çardak",
      "Çivril", "Güney", "Honaz", "Kale", "Merkezefendi",
      "Pamukkale", "Sarayköy", "Serinhisar", "Tavas"
    ),
  },
  {
    il: "Diyarbakır",
    slug: "diyarbakir",
    saat: "06:53",
    ilceler: ilceler(
      "Bağlar", "Bismil", "Çermik", "Çınar", "Çüngüş",
      "Dicle", "Eğil", "Ergani", "Hani", "Hazro",
      "Kayapınar", "Kocaköy", "Kulp", "Lice", "Silvan",
      "Sur", "Yenişehir"
    ),
  },
  {
    il: "Düzce",
    slug: "duzce",
    saat: "07:30",
    ilceler: ilceler(
      "Akçakoca", "Cumayeri", "Çilimli", "Gölyaka",
      "Gümüşova", "Kaynaşlı", "Merkez", "Yığılca"
    ),
  },
  {
    il: "Edirne",
    slug: "edirne",
    saat: "07:49",
    ilceler: ilceler(
      "Enez", "Havsa", "İpsala", "Keşan", "Lalapaşa",
      "Meriç", "Merkez", "Süloğlu", "Uzunköprü"
    ),
  },
  {
    il: "Elazığ",
    slug: "elazig",
    saat: "06:57",
    ilceler: ilceler(
      "Ağın", "Alacakaya", "Arıcak", "Baskil", "Karakoçan",
      "Keban", "Kovancılar", "Maden", "Merkez", "Palu", "Sivrice"
    ),
  },
  {
    il: "Erzincan",
    slug: "erzincan",
    saat: "06:56",
    ilceler: ilceler(
      "Çayırlı", "İliç", "Kemah", "Kemaliye", "Merkez",
      "Otlukbeli", "Refahiye", "Tercan", "Üzümlü"
    ),
  },
  {
    il: "Erzurum",
    slug: "erzurum",
    saat: "06:49",
    ilceler: ilceler(
      "Aşkale", "Aziziye", "Çat", "Hınıs", "Horasan",
      "İspir", "Karaçoban", "Karayazı", "Köprüköy", "Narman",
      "Oltu", "Olur", "Palandöken", "Pasinler", "Pazaryolu",
      "Şenkaya", "Tekman", "Tortum", "Uzundere", "Yakutiye"
    ),
  },
  {
    il: "Eskişehir",
    slug: "eskisehir",
    saat: "07:32",
    ilceler: ilceler(
      "Alpu", "Beylikova", "Çifteler", "Günyüzü", "Han",
      "İnönü", "Mahmudiye", "Mihalgazi", "Mihalıççık",
      "Odunpazarı", "Sarıcakaya", "Seyitgazi", "Sivrihisar", "Tepebaşı"
    ),
  },
  {
    il: "Gaziantep",
    slug: "gaziantep",
    saat: "07:04",
    ilceler: ilceler(
      "Araban", "İslahiye", "Karkamış", "Nizip", "Nurdağı",
      "Oğuzeli", "Şahinbey", "Şehitkamil", "Yavuzeli"
    ),
  },
  {
    il: "Giresun",
    slug: "giresun",
    saat: "07:01",
    ilceler: ilceler(
      "Alucra", "Bulancak", "Çamoluk", "Çanakçı", "Dereli",
      "Doğankent", "Espiye", "Eynesil", "Görele", "Güce",
      "Keşap", "Merkez", "Piraziz", "Şebinkarahisar",
      "Tirebolu", "Yağlıdere"
    ),
  },
  {
    il: "Gümüşhane",
    slug: "gumushane",
    saat: "06:57",
    ilceler: ilceler(
      "Kelkit", "Köse", "Kürtün", "Merkez", "Şiran", "Torul"
    ),
  },
  {
    il: "Hakkari",
    slug: "hakkari",
    saat: "06:39",
    ilceler: ilceler(
      "Çukurca", "Derecik", "Merkez", "Şemdinli", "Yüksekova"
    ),
  },
  {
    il: "Hatay",
    slug: "hatay",
    saat: "07:09",
    ilceler: ilceler(
      "Altınözü", "Antakya", "Arsuz", "Belen", "Defne",
      "Dörtyol", "Erzin", "Hassa", "İskenderun", "Kırıkhan",
      "Kumlu", "Payas", "Reyhanlı", "Samandağ", "Yayladağı"
    ),
  },
  {
    il: "Iğdır",
    slug: "igdir",
    saat: "06:38",
    ilceler: ilceler(
      "Aralık", "Karakoyunlu", "Merkez", "Tuzluca"
    ),
  },
  {
    il: "Isparta",
    slug: "isparta",
    saat: "07:31",
    ilceler: ilceler(
      "Aksu", "Atabey", "Eğirdir", "Gelendost", "Gönen",
      "Keçiborlu", "Merkez", "Senirkent", "Sütçüler",
      "Şarkikaraağaç", "Uluborlu", "Yalvaç", "Yenişarbademli"
    ),
  },
  {
    il: "İstanbul",
    slug: "istanbul",
    saat: "07:39",
    ilceler: ilceler(
      "Adalar", "Arnavutköy", "Ataşehir", "Avcılar", "Bağcılar",
      "Bahçelievler", "Bakırköy", "Başakşehir", "Bayrampaşa", "Beşiktaş",
      "Beykoz", "Beylikdüzü", "Beyoğlu", "Büyükçekmece", "Çatalca",
      "Çekmeköy", "Esenler", "Esenyurt", "Eyüpsultan", "Fatih",
      "Gaziosmanpaşa", "Güngören", "Kadıköy", "Kağıthane", "Kartal",
      "Küçükçekmece", "Maltepe", "Pendik", "Sancaktepe", "Sarıyer",
      "Silivri", "Sultanbeyli", "Sultangazi", "Şile", "Şişli",
      "Tuzla", "Ümraniye", "Üsküdar", "Zeytinburnu"
    ),
  },
  {
    il: "İzmir",
    slug: "izmir",
    saat: "07:45",
    ilceler: ilceler(
      "Aliağa", "Balçova", "Bayındır", "Bayraklı", "Bergama",
      "Beydağ", "Bornova", "Buca", "Çeşme", "Çiğli",
      "Dikili", "Foça", "Gaziemir", "Güzelbahçe", "Karabağlar",
      "Karşıyaka", "Kemalpaşa", "Kınık", "Kiraz", "Konak",
      "Menderes", "Menemen", "Narlıdere", "Ödemiş", "Seferihisar",
      "Selçuk", "Tire", "Torbalı", "Urla"
    ),
  },
  {
    il: "Kahramanmaraş",
    slug: "kahramanmaras",
    saat: "07:06",
    ilceler: ilceler(
      "Afşin", "Andırın", "Çağlayancerit", "Dulkadiroğlu",
      "Ekinözü", "Elbistan", "Göksun", "Nurhak",
      "Onikişubat", "Pazarcık", "Türkoğlu"
    ),
  },
  {
    il: "Karabük",
    slug: "karabuk",
    saat: "07:25",
    ilceler: ilceler(
      "Eflani", "Eskipazar", "Merkez", "Ovacık",
      "Safranbolu", "Yenice"
    ),
  },
  {
    il: "Karaman",
    slug: "karaman",
    saat: "07:21",
    ilceler: ilceler(
      "Ayrancı", "Başyayla", "Ermenek", "Kazımkarabekir",
      "Merkez", "Sarıveliler"
    ),
  },
  {
    il: "Kars",
    slug: "kars",
    saat: "06:42",
    ilceler: ilceler(
      "Akyaka", "Arpaçay", "Digor", "Kağızman",
      "Merkez", "Sarıkamış", "Selim", "Susuz"
    ),
  },
  {
    il: "Kastamonu",
    slug: "kastamonu",
    saat: "07:20",
    ilceler: ilceler(
      "Abana", "Ağlı", "Araç", "Azdavay", "Bozkurt",
      "Cide", "Çatalzeytin", "Daday", "Devrekani", "Doğanyurt",
      "Hanönü", "İhsangazi", "İnebolu", "Küre", "Merkez",
      "Pınarbaşı", "Seydiler", "Şenpazar", "Taşköprü", "Tosya"
    ),
  },
  {
    il: "Kayseri",
    slug: "kayseri",
    saat: "07:12",
    ilceler: ilceler(
      "Akkışla", "Bünyan", "Develi", "Felahiye", "Hacılar",
      "İncesu", "Kocasinan", "Melikgazi", "Özvatan", "Pınarbaşı",
      "Sarıoğlan", "Sarız", "Talas", "Tomarza", "Yahyalı",
      "Yeşilhisar"
    ),
  },
  {
    il: "Kırıkkale",
    slug: "kirikkale",
    saat: "07:20",
    ilceler: ilceler(
      "Bahşili", "Balışeyh", "Çelebi", "Delice",
      "Karakeçili", "Keskin", "Merkez", "Sulakyurt", "Yahşihan"
    ),
  },
  {
    il: "Kırklareli",
    slug: "kirklareli",
    saat: "07:46",
    ilceler: ilceler(
      "Babaeski", "Demirköy", "Kofçaz", "Lüleburgaz",
      "Merkez", "Pehlivanköy", "Pınarhisar", "Vize"
    ),
  },
  {
    il: "Kırşehir",
    slug: "kirsehir",
    saat: "07:18",
    ilceler: ilceler(
      "Akçakent", "Akpınar", "Boztepe", "Çiçekdağı",
      "Kaman", "Merkez", "Mucur"
    ),
  },
  {
    il: "Kilis",
    slug: "kilis",
    saat: "07:05",
    ilceler: ilceler(
      "Elbeyli", "Merkez", "Musabeyli", "Polateli"
    ),
  },
  {
    il: "Kocaeli",
    slug: "kocaeli",
    saat: "07:35",
    ilceler: ilceler(
      "Başiskele", "Çayırova", "Darıca", "Derince", "Dilovası",
      "Gebze", "Gölcük", "İzmit", "Kandıra", "Karamürsel",
      "Kartepe", "Körfez"
    ),
  },
  {
    il: "Konya",
    slug: "konya",
    saat: "07:24",
    ilceler: ilceler(
      "Ahırlı", "Akören", "Akşehir", "Altınekin", "Beyşehir",
      "Bozkır", "Cihanbeyli", "Çeltik", "Çumra", "Derbent",
      "Derebucak", "Doğanhisar", "Emirgazi", "Ereğli", "Güneysınır",
      "Hadim", "Halkapınar", "Hüyük", "Ilgın", "Kadınhanı",
      "Karapınar", "Karatay", "Kulu", "Meram", "Sarayönü",
      "Selçuklu", "Seydişehir", "Taşkent", "Tuzlukçu", "Yalıhüyük", "Yunak"
    ),
  },
  {
    il: "Kütahya",
    slug: "kutahya",
    saat: "07:34",
    ilceler: ilceler(
      "Altıntaş", "Aslanapa", "Çavdarhisar", "Domaniç",
      "Dumlupınar", "Emet", "Gediz", "Hisarcık",
      "Merkez", "Pazarlar", "Simav", "Şaphane", "Tavşanlı"
    ),
  },
  {
    il: "Malatya",
    slug: "malatya",
    saat: "07:01",
    ilceler: ilceler(
      "Akçadağ", "Arapgir", "Arguvan", "Battalgazi", "Darende",
      "Doğanşehir", "Doğanyol", "Hekimhan", "Kale", "Kuluncak",
      "Pütürge", "Yazıhan", "Yeşilyurt"
    ),
  },
  {
    il: "Manisa",
    slug: "manisa",
    saat: "07:44",
    ilceler: ilceler(
      "Ahmetli", "Akhisar", "Alaşehir", "Demirci", "Gölmarmara",
      "Gördes", "Kırkağaç", "Köprübaşı", "Kula", "Salihli",
      "Sarıgöl", "Saruhanlı", "Selendi", "Soma", "Şehzadeler",
      "Turgutlu", "Yunusemre"
    ),
  },
  {
    il: "Mardin",
    slug: "mardin",
    saat: "06:51",
    ilceler: ilceler(
      "Artuklu", "Dargeçit", "Derik", "Kızıltepe", "Mazıdağı",
      "Midyat", "Nusaybin", "Ömerli", "Savur", "Yeşilli"
    ),
  },
  {
    il: "Mersin",
    slug: "mersin",
    saat: "07:15",
    ilceler: ilceler(
      "Akdeniz", "Anamur", "Aydıncık", "Bozyazı", "Çamlıyayla",
      "Erdemli", "Gülnar", "Mezitli", "Mut", "Silifke",
      "Tarsus", "Toroslar", "Yenişehir"
    ),
  },
  {
    il: "Muğla",
    slug: "mugla",
    saat: "07:40",
    ilceler: ilceler(
      "Bodrum", "Dalaman", "Datça", "Fethiye", "Kavaklıdere",
      "Köyceğiz", "Marmaris", "Menteşe", "Milas", "Ortaca",
      "Seydikemer", "Ula", "Yatağan"
    ),
  },
  {
    il: "Muş",
    slug: "mus",
    saat: "06:48",
    ilceler: ilceler(
      "Bulanık", "Hasköy", "Korkut", "Malazgirt", "Merkez", "Varto"
    ),
  },
  {
    il: "Nevşehir",
    slug: "nevsehir",
    saat: "07:15",
    ilceler: ilceler(
      "Acıgöl", "Avanos", "Derinkuyu", "Gülşehir",
      "Hacıbektaş", "Kozaklı", "Merkez", "Ürgüp"
    ),
  },
  {
    il: "Niğde",
    slug: "nigde",
    saat: "07:15",
    ilceler: ilceler(
      "Altunhisar", "Bor", "Çamardı", "Çiftlik",
      "Merkez", "Ulukışla"
    ),
  },
  {
    il: "Ordu",
    slug: "ordu",
    saat: "07:03",
    ilceler: ilceler(
      "Akkuş", "Altınordu", "Aybastı", "Çamaş", "Çatalpınar",
      "Çaybaşı", "Fatsa", "Gölköy", "Gülyalı", "Gürgentepe",
      "İkizce", "Kabadüz", "Kabataş", "Korgan", "Kumru",
      "Mesudiye", "Perşembe", "Ulubey", "Ünye"
    ),
  },
  {
    il: "Osmaniye",
    slug: "osmaniye",
    saat: "07:08",
    ilceler: ilceler(
      "Bahçe", "Düziçi", "Hasanbeyli", "Kadirli",
      "Merkez", "Sumbas", "Toprakkale"
    ),
  },
  {
    il: "Rize",
    slug: "rize",
    saat: "06:53",
    ilceler: ilceler(
      "Ardeşen", "Çamlıhemşin", "Çayeli", "Derepazarı",
      "Fındıklı", "Güneysu", "Hemşin", "İkizdere",
      "İyidere", "Kalkandere", "Merkez", "Pazar"
    ),
  },
  {
    il: "Sakarya",
    slug: "sakarya",
    saat: "07:33",
    ilceler: ilceler(
      "Adapazarı", "Akyazı", "Arifiye", "Erenler", "Ferizli",
      "Geyve", "Hendek", "Karapürçek", "Karasu", "Kaynarca",
      "Kocaali", "Pamukova", "Sapanca", "Serdivan", "Söğütlü", "Taraklı"
    ),
  },
  {
    il: "Samsun",
    slug: "samsun",
    saat: "07:10",
    ilceler: ilceler(
      "Alaçam", "Asarcık", "Atakum", "Ayvacık", "Bafra",
      "Canik", "Çarşamba", "Havza", "İlkadım", "Kavak",
      "Ladik", "Ondokuzmayıs", "Salıpazarı", "Tekkeköy",
      "Terme", "Vezirköprü", "Yakakent"
    ),
  },
  {
    il: "Şanlıurfa",
    slug: "sanliurfa",
    saat: "06:58",
    ilceler: ilceler(
      "Akçakale", "Birecik", "Bozova", "Ceylanpınar",
      "Eyyübiye", "Halfeti", "Haliliye", "Harran",
      "Hilvan", "Karaköprü", "Siverek", "Suruç", "Viranşehir"
    ),
  },
  {
    il: "Siirt",
    slug: "siirt",
    saat: "06:46",
    ilceler: ilceler(
      "Baykan", "Eruh", "Kurtalan", "Merkez",
      "Pervari", "Şirvan", "Tillo"
    ),
  },
  {
    il: "Sinop",
    slug: "sinop",
    saat: "07:15",
    ilceler: ilceler(
      "Ayancık", "Boyabat", "Dikmen", "Durağan",
      "Erfelek", "Gerze", "Merkez", "Saraydüzü", "Türkeli"
    ),
  },
  {
    il: "Şırnak",
    slug: "sirnak",
    saat: "06:44",
    ilceler: ilceler(
      "Beytüşşebap", "Cizre", "Güçlükonak", "İdil",
      "Merkez", "Silopi", "Uludere"
    ),
  },
  {
    il: "Sivas",
    slug: "sivas",
    saat: "07:06",
    ilceler: ilceler(
      "Akıncılar", "Altınyayla", "Divriği", "Doğanşar",
      "Gemerek", "Gölova", "Gürün", "Hafik", "İmranlı",
      "Kangal", "Koyulhisar", "Merkez", "Suşehri",
      "Şarkışla", "Ulaş", "Yıldızeli", "Zara"
    ),
  },
  {
    il: "Tekirdağ",
    slug: "tekirdag",
    saat: "07:45",
    ilceler: ilceler(
      "Çerkezköy", "Çorlu", "Ergene", "Hayrabolu",
      "Kapaklı", "Malkara", "Marmaraereğlisi", "Muratlı",
      "Saray", "Süleymanpaşa", "Şarköy"
    ),
  },
  {
    il: "Tokat",
    slug: "tokat",
    saat: "07:08",
    ilceler: ilceler(
      "Almus", "Artova", "Başçiftlik", "Erbaa", "Merkez",
      "Niksar", "Pazar", "Reşadiye", "Sulusaray", "Turhal",
      "Yeşilyurt", "Zile"
    ),
  },
  {
    il: "Trabzon",
    slug: "trabzon",
    saat: "06:56",
    ilceler: ilceler(
      "Akçaabat", "Araklı", "Arsin", "Beşikdüzü", "Çarşıbaşı",
      "Çaykara", "Dernekpazarı", "Düzköy", "Hayrat", "Köprübaşı",
      "Maçka", "Of", "Ortahisar", "Sürmene", "Şalpazarı",
      "Tonya", "Vakfıkebir", "Yomra"
    ),
  },
  {
    il: "Tunceli",
    slug: "tunceli",
    saat: "06:56",
    ilceler: ilceler(
      "Çemişgezek", "Hozat", "Mazgirt", "Merkez",
      "Nazımiye", "Ovacık", "Pertek", "Pülümür"
    ),
  },
  {
    il: "Uşak",
    slug: "usak",
    saat: "07:36",
    ilceler: ilceler(
      "Banaz", "Eşme", "Karahallı", "Merkez", "Sivaslı", "Ulubey"
    ),
  },
  {
    il: "Van",
    slug: "van",
    saat: "06:40",
    ilceler: ilceler(
      "Bahçesaray", "Başkale", "Çaldıran", "Çatak", "Edremit",
      "Erciş", "Gevaş", "Gürpınar", "İpekyolu", "Muradiye",
      "Özalp", "Saray", "Tuşba"
    ),
  },
  {
    il: "Yalova",
    slug: "yalova",
    saat: "07:38",
    ilceler: ilceler(
      "Altınova", "Armutlu", "Çiftlikköy", "Çınarcık",
      "Merkez", "Termal"
    ),
  },
  {
    il: "Yozgat",
    slug: "yozgat",
    saat: "07:15",
    ilceler: ilceler(
      "Akdağmadeni", "Aydıncık", "Boğazlıyan", "Çandır",
      "Çayıralan", "Çekerek", "Kadışehri", "Merkez",
      "Saraykent", "Sarıkaya", "Sorgun", "Şefaatli",
      "Yenifakılı", "Yerköy"
    ),
  },
  {
    il: "Zonguldak",
    slug: "zonguldak",
    saat: "07:28",
    ilceler: ilceler(
      "Alaplı", "Çaycuma", "Devrek", "Gökçebey",
      "Kilimli", "Kozlu", "Merkez"
    ),
  },
];

// --- Helper functions ---

export function getIlBySlug(slug: string): IlDetay | undefined {
  return namazSaatleri.find((il) => il.slug === slug);
}

export function getIlceBySlug(
  ilSlug: string,
  ilceSlug: string
): { il: IlDetay; ilce: Ilce } | undefined {
  const il = getIlBySlug(ilSlug);
  if (!il) return undefined;
  const ilce = il.ilceler.find((i) => i.slug === ilceSlug);
  if (!ilce) return undefined;
  return { il, ilce };
}

export function getAllIlSlugs(): string[] {
  return namazSaatleri.map((il) => il.slug);
}

export function getAllIlceSlugs(): { il: string; ilce: string }[] {
  const result: { il: string; ilce: string }[] = [];
  for (const il of namazSaatleri) {
    for (const ilce of il.ilceler) {
      result.push({ il: il.slug, ilce: ilce.slug });
    }
  }
  return result;
}
