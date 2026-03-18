import { SITE_URL, SITE_NAME } from "./constants";

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: "Ramazan Bayramı tebriği oluştur, bayram mesajları, namaz saatleri",
    inLanguage: "tr",
  };
}

export function articleJsonLd(title: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${SITE_URL}${url}`,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    inLanguage: "tr",
    datePublished: "2026-03-15",
    dateModified: "2026-03-18",
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function eventJsonLd(locale: string = "tr") {
  const names: Record<string, string> = {
    tr: "Ramazan Bayramı 2026",
    en: "Eid al-Fitr 2026",
    ar: "عيد الفطر 2026",
  };
  const descriptions: Record<string, string> = {
    tr: "2026 Ramazan Bayramı — 81 il bayram namazı saatleri, bayram mesajları ve dijital tebrik kartları",
    en: "Eid al-Fitr 2026 — Prayer times for 81 Turkish cities, greeting messages and digital cards",
    ar: "عيد الفطر 2026 — مواعيد صلاة العيد في 81 مدينة تركية، رسائل التهنئة والبطاقات الرقمية",
  };

  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: names[locale] || names.tr,
    description: descriptions[locale] || descriptions.tr,
    startDate: "2026-03-20",
    endDate: "2026-03-22",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Country",
      name: "Türkiye",
    },
    organizer: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    image: `${SITE_URL}/api/og?locale=${locale}`,
    url: SITE_URL,
    inLanguage: locale,
  };
}

export function collectionPageJsonLd(title: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    url: `${SITE_URL}${url}`,
    inLanguage: "tr",
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function breadcrumbJsonLd(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}
