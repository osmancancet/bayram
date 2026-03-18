import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { articleJsonLd, faqJsonLd } from "@/lib/json-ld";
import AdSlot from "@/components/AdSlot";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    title: t("prayerGuideTitle"),
    description: t("prayerGuideDescription"),
  };
}

export default async function BayramNamaziPage() {
  const t = await getTranslations("prayerGuide");
  const tCta = await getTranslations("cta");
  const tPt = await getTranslations("prayerTimes");

  const faqData = [
    { question: t("faq1Q"), answer: t("faq1A") },
    { question: t("faq2Q"), answer: t("faq2A") },
    { question: t("faq3Q"), answer: t("faq3A") },
    { question: t("faq4Q"), answer: t("faq4A") },
    { question: t("faq5Q"), answer: t("faq5A") },
    { question: t("faq6Q"), answer: t("faq6A") },
  ];

  const article = articleJsonLd(t("title"), t("subtitle"), "/bayram-namazi");
  const faq = faqJsonLd(faqData);

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
            {t("badge")}
          </p>
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            {t("title")}
          </h1>
          <p className="text-white/40 text-sm">
            {t("subtitle")}
          </p>
        </div>

        {/* Section: Nedir? */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-gold mb-3">
            {t("whatIs")}
          </h2>
          <p className="text-white/70 text-sm leading-relaxed">
            {t("whatIsDesc")}
          </p>
        </section>

        {/* Section: Kaç rekât? */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-gold mb-3">
            {t("howMany")}
          </h2>
          <p
            className="text-white/70 text-sm leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t("howManyDesc").replace(/<strong>/g, '<strong class="text-white">') }}
          />
        </section>

        <AdSlot slotId="bayram-namazi-1" format="horizontal" className="mb-8" />

        {/* Section: Adım adım kılınışı */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-gold mb-4">
            {t("stepByStep")}
          </h2>

          <div className="space-y-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <Step
                key={num}
                num={num}
                title={t(`step${num}Title`)}
                desc={t(`step${num}Desc`)}
              />
            ))}
          </div>
        </section>

        <AdSlot slotId="bayram-namazi-2" format="horizontal" className="mb-8" />

        {/* Section: Dua */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-gold mb-3">
            {t("duaTitle")}
          </h2>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-4">
            <div>
              <p className="text-gold/70 text-xs uppercase tracking-wider mb-1">
                {t("tekbirLabel")}
              </p>
              <p className="text-white/90 text-sm leading-relaxed font-medium">
                {t("tekbirText")}
              </p>
            </div>
            <div>
              <p className="text-gold/70 text-xs uppercase tracking-wider mb-1">
                {t("afterPrayerLabel")}
              </p>
              <p className="text-white/90 text-sm leading-relaxed font-medium">
                {t("afterPrayerText")}
              </p>
            </div>
          </div>
        </section>

        {/* Section: Vakit CTA */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-gold mb-3">
            {tPt("whatTime")}
          </h2>
          <p className="text-white/70 text-sm leading-relaxed mb-4">
            {tPt("whatTimeDesc")}
          </p>
          <Link
            href="/namaz-saatleri"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gold/10 border border-gold/20 text-gold font-medium text-sm hover:bg-gold/20 transition-all duration-200"
          >
            {tPt("seeTimesButton")}
          </Link>
        </section>

        <AdSlot slotId="bayram-namazi-3" format="horizontal" className="mb-8" />

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-gold mb-4">
            {t("faqTitle")}
          </h2>
          <div className="space-y-3">
            {faqData.map((item, i) => (
              <details
                key={i}
                className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer text-white/90 text-sm font-medium hover:bg-white/[0.03] transition-colors">
                  {item.question}
                  <span className="text-white/30 group-open:rotate-180 transition-transform duration-200 ms-2">
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
              {tCta("bayramCard")}
            </span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold/20" />
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-800 to-emerald-600 text-white font-bold text-sm border border-emerald-500/30 shadow-lg shadow-emerald-900/30 hover:scale-[1.02] active:scale-95 transition-all duration-200"
          >
            {tCta("createCard")}
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
