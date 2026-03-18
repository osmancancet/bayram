import type { Metadata } from "next";
import MesajlarClient from "./MesajlarClient";

export const metadata: Metadata = {
  title: "Ramazan Bayramı Mesajları 2026 | En Güzel Bayram Mesajları",
  description:
    "En güzel ramazan bayramı mesajları. Aile, resmi, eğlenceli ve dua mesajları. Kopyala veya WhatsApp'tan gönder.",
  keywords: [
    "ramazan bayramı mesajları",
    "bayram mesajı",
    "bayram tebrik mesajı",
    "whatsapp bayram mesajı",
    "en güzel bayram mesajları",
  ],
  openGraph: {
    title: "Ramazan Bayramı Mesajları 2026 | En Güzel Bayram Mesajları",
    description: "En güzel ramazan bayramı mesajları. Kopyala veya WhatsApp'tan gönder.",
    type: "website",
  },
};

export default function MesajlarPage() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white">Bayram Mesajları</h1>
          <p className="text-white/40 text-sm mt-1">
            Kopyala veya WhatsApp&apos;tan gönder
          </p>
        </div>

        <MesajlarClient />
      </div>
    </div>
  );
}
