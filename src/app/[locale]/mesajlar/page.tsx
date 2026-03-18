import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import MesajlarClient from "./MesajlarClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    title: t("messagesTitle"),
    description: t("messagesDescription"),
  };
}

export default async function MesajlarPage() {
  const t = await getTranslations("messages");

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white">{t("pageTitle")}</h1>
          <p className="text-white/40 text-sm mt-1">
            {t("pageSubtitle")}
          </p>
        </div>

        <MesajlarClient />
      </div>
    </div>
  );
}
