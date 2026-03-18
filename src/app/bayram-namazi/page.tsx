import type { Metadata } from "next";
import Link from "next/link";
import { articleJsonLd, faqJsonLd } from "@/lib/json-ld";
import AdSlot from "@/components/AdSlot";

const FAQ_DATA = [
  {
    question: "Bayram namazı kaç rekât?",
    answer:
      "Bayram namazı 2 rekâttır. Her iki rekâtta da fazladan tekbirler alınır. Birinci rekâtta 3, ikinci rekâtta 3 fazla tekbir getirilir.",
  },
  {
    question: "Bayram namazı farz mı?",
    answer:
      "Hanefi mezhebine göre bayram namazı vaciptir. Şafii mezhebine göre ise sünnet-i müekkededir. Her iki görüşe göre de kılınması büyük sevaptır.",
  },
  {
    question: "Bayram namazı saat kaçta kılınır?",
    answer:
      "Bayram namazı güneş doğduktan yaklaşık 45-50 dakika sonra kılınır. Kesin vakit illere göre değişir. Şehrinizin bayram namazı saatini sitemizden öğrenebilirsiniz.",
  },
  {
    question: "Bayram namazı kaç kişiyle kılınır?",
    answer:
      "Hanefi mezhebine göre bayram namazı cemaatla kılınır ve en az 4 kişi (imam dahil) gerekir. Tek başına kılınmaz. Diğer mezheplere göre tek başına da kılınabilir.",
  },
  {
    question: "Kadınlar bayram namazı kılabilir mi?",
    answer:
      "Evet, kadınlar bayram namazı kılabilir. Camilerde kadınlara ayrılan bölümlerde bayram namazına katılabilirler.",
  },
  {
    question: "Bayram namazı kılmayanın günahı var mı?",
    answer:
      "Hanefi mezhebine göre bayram namazı vacip olduğundan, özürsüz terk eden kişi günah işlemiş olur. Ancak kaza edilmez.",
  },
];

export const metadata: Metadata = {
  title: "Bayram Namazı Nasıl Kılınır? | Adım Adım Rehber",
  description:
    "Bayram namazı nasıl kılınır? Kaç rekât, hangi tekbirler alınır, duaları nelerdir? Adım adım bayram namazı kılınışı rehberi.",
  keywords: [
    "bayram namazı nasıl kılınır",
    "bayram namazı kaç rekat",
    "bayram namazı kılınışı",
    "bayram namazı tekbirleri",
    "bayram namazı duası",
    "ramazan bayramı namazı",
  ],
  openGraph: {
    title: "Bayram Namazı Nasıl Kılınır? | Adım Adım Rehber",
    description:
      "Bayram namazı nasıl kılınır? Kaç rekât, tekbirler, dualar — adım adım rehber.",
    type: "article",
  },
};

export default function BayramNamaziPage() {
  const article = articleJsonLd(
    "Bayram Namazı Nasıl Kılınır?",
    "Bayram namazı kılınışı, tekbirleri ve duaları — adım adım rehber.",
    "/bayram-namazi"
  );
  const faq = faqJsonLd(FAQ_DATA);

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
        />

        {/* Hero */}
        <div className="text-center mb-10">
          <p className="text-gold/60 text-xs uppercase tracking-widest mb-2">
            Rehber
          </p>
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Bayram Namazı Nasıl Kılınır?
          </h1>
          <p className="text-white/40 text-sm">
            Adım adım bayram namazı kılınışı, tekbirler ve dualar
          </p>
        </div>

        {/* Section: Nedir? */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-gold mb-3">
            Bayram Namazı Nedir?
          </h2>
          <p className="text-white/70 text-sm leading-relaxed">
            Bayram namazı, Ramazan Bayramı ve Kurban Bayramı&apos;nın birinci
            günü sabah kılınan 2 rekâtlık bir namazdır. Hanefi mezhebine göre
            vacip, diğer mezheplere göre sünnet-i müekkededir. Bayram namazı
            camilerde cemaatle kılınır ve hutbe okunur.
          </p>
        </section>

        {/* Section: Kaç rekât? */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-gold mb-3">
            Bayram Namazı Kaç Rekât?
          </h2>
          <p className="text-white/70 text-sm leading-relaxed">
            Bayram namazı <strong className="text-white">2 rekâttır</strong>.
            Normal namazlardan farkı, her rekâtta fazladan tekbir (zâit tekbir)
            alınmasıdır. Birinci rekâtta 3, ikinci rekâtta 3 olmak üzere toplam
            6 fazla tekbir getirilir.
          </p>
        </section>

        <AdSlot slotId="bayram-namazi-1" format="horizontal" className="mb-8" />

        {/* Section: Adım adım kılınışı */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-gold mb-4">
            Bayram Namazı Kılınışı (Adım Adım)
          </h2>

          <div className="space-y-4">
            <Step
              num={1}
              title="Niyet ve İftitah Tekbiri"
              desc={`İmam ile birlikte "Niyet ettim Allah rızası için bayram namazı kılmaya" diye niyet edilir. Eller kaldırılarak "Allahu Ekber" denilerek iftitah tekbiri alınır ve namaza başlanır.`}
            />
            <Step
              num={2}
              title="Sübhaneke Okunur"
              desc="Iftitah tekbirinden sonra Sübhaneke duası okunur."
            />
            <Step
              num={3}
              title="Birinci Rekât — 3 Fazla Tekbir"
              desc={`Sübhaneke'den sonra imam 3 defa "Allahu Ekber" der. Her tekbirde eller kulaklara kaldırılır ve yanlara bırakılır. Üçüncü tekbirden sonra eller bağlanır.`}
            />
            <Step
              num={4}
              title="Fatiha ve Sure Okunur"
              desc="İmam Fatiha suresini ve ardından bir sure okur. Sonra normal namaz gibi rükûya gidilir, secdelere varılır. Birinci rekât tamamlanır."
            />
            <Step
              num={5}
              title="İkinci Rekât — Kıyam"
              desc="İkinci rekâta kalkılır. İmam önce Fatiha ve bir sure okur."
            />
            <Step
              num={6}
              title="İkinci Rekât — 3 Fazla Tekbir"
              desc={`Sure okunduktan sonra imam 3 defa "Allahu Ekber" der. Her tekbirde eller kaldırılır ve bırakılır. Üçüncü tekbirden sonra doğrudan rükûya gidilir (eller bağlanmaz).`}
            />
            <Step
              num={7}
              title="Namaz Tamamlanır"
              desc="Rükû ve secdelerden sonra oturulur, Ettehiyyatu, Allahümme Salli, Allahümme Barik ve Rabbena duaları okunur. Selam verilerek namaz bitirilir."
            />
            <Step
              num={8}
              title="Hutbe Dinlenir"
              desc="Bayram namazında hutbe namazdan sonra okunur (cuma namazının aksine). Hutbe dinlenmesi sünnettir."
            />
          </div>
        </section>

        <AdSlot slotId="bayram-namazi-2" format="horizontal" className="mb-8" />

        {/* Section: Dua */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-gold mb-3">
            Bayram Namazı Duası
          </h2>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-4">
            <div>
              <p className="text-gold/70 text-xs uppercase tracking-wider mb-1">
                Tekbir
              </p>
              <p className="text-white/90 text-sm leading-relaxed font-medium">
                Allahu Ekber, Allahu Ekber. Lâ ilâhe illallahu vallahu Ekber.
                Allahu Ekber ve lillâhi&apos;l-hamd.
              </p>
            </div>
            <div>
              <p className="text-gold/70 text-xs uppercase tracking-wider mb-1">
                Bayram Namazı Sonrası Dua
              </p>
              <p className="text-white/90 text-sm leading-relaxed font-medium">
                Allah&apos;ım! Bu mübarek bayram gününde dualarımızı kabul eyle.
                Ümmet-i Muhammed&apos;e birlik, beraberlik ve huzur nasip eyle.
                Bayramımızı mübarek kıl. Amin.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Vakit CTA */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-gold mb-3">
            Bayram Namazı Saat Kaçta?
          </h2>
          <p className="text-white/70 text-sm leading-relaxed mb-4">
            Bayram namazı vakti güneş doğduktan yaklaşık 45-50 dakika sonradır
            ve şehirlere göre değişir. Şehrinizi seçerek bayram namazı saatini
            öğrenin:
          </p>
          <Link
            href="/namaz-saatleri"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gold/10 border border-gold/20 text-gold font-medium text-sm hover:bg-gold/20 transition-all duration-200"
          >
            🕌 Bayram Namazı Saatlerini Gör
          </Link>
        </section>

        <AdSlot slotId="bayram-namazi-3" format="horizontal" className="mb-8" />

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-gold mb-4">
            Sık Sorulan Sorular
          </h2>
          <div className="space-y-3">
            {FAQ_DATA.map((item, i) => (
              <details
                key={i}
                className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer text-white/90 text-sm font-medium hover:bg-white/[0.03] transition-colors">
                  {item.question}
                  <span className="text-white/30 group-open:rotate-180 transition-transform duration-200 ml-2">
                    ▾
                  </span>
                </summary>
                <p className="px-5 pb-4 text-white/60 text-sm leading-relaxed">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold/20" />
            <span className="text-gold/40 text-[10px] uppercase tracking-widest">
              bayram kartı
            </span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold/20" />
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-800 to-emerald-600 text-white font-bold text-sm border border-emerald-500/30 shadow-lg shadow-emerald-900/30 hover:scale-[1.02] active:scale-95 transition-all duration-200"
          >
            🌙 Sen de tebrik kartı oluştur
          </Link>
        </div>
      </div>
    </div>
  );
}

function Step({
  num,
  title,
  desc,
}: {
  num: number;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold text-xs font-bold">
        {num}
      </div>
      <div>
        <h3 className="text-white/90 text-sm font-semibold mb-1">{title}</h3>
        <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
