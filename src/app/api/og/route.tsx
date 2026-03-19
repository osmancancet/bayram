import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import { sanitizeName, sanitizeMessage } from "@/lib/sanitize";

export const runtime = "edge";

const titles: Record<string, [string, string]> = {
  tr: ["Ramazan Bayramınız", "Mübarek Olsun"],
  en: ["Eid Mubarak", "Happy Eid al-Fitr"],
  ar: ["عيد مبارك", "عيد الفطر سعيد"],
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const rawIsim = searchParams.get("isim") || "";
  const rawMsg = searchParams.get("msg") || "";
  const isim = rawIsim ? sanitizeName(rawIsim) : "";
  const msg = rawMsg ? sanitizeMessage(rawMsg) : "";
  const locale = searchParams.get("locale") || "tr";
  const il = searchParams.get("il") || "";
  const saat = searchParams.get("saat") || "";

  const [line1, line2] = titles[locale] || titles.tr;
  const isRtl = locale === "ar";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(180deg, #020617 0%, #0a1628 40%, #071115 100%)",
          fontFamily: "sans-serif",
          padding: "40px",
          position: "relative",
          overflow: "hidden",
          direction: isRtl ? "rtl" : "ltr",
        }}
      >
        {/* Stars background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.4,
            backgroundImage:
              "radial-gradient(circle at 10% 15%, #ffffff 1px, transparent 1px), radial-gradient(circle at 25% 45%, #ffffff 0.5px, transparent 0.5px), radial-gradient(circle at 40% 10%, #ffffff 1px, transparent 1px), radial-gradient(circle at 55% 35%, #ffffff 0.5px, transparent 0.5px), radial-gradient(circle at 70% 20%, #ffffff 1px, transparent 1px), radial-gradient(circle at 85% 50%, #ffffff 0.5px, transparent 0.5px), radial-gradient(circle at 15% 70%, #ffffff 0.5px, transparent 0.5px), radial-gradient(circle at 90% 75%, #ffffff 1px, transparent 1px), radial-gradient(circle at 35% 85%, #ffffff 0.5px, transparent 0.5px), radial-gradient(circle at 60% 65%, #ffffff 1px, transparent 1px), radial-gradient(circle at 75% 90%, #ffffff 0.5px, transparent 0.5px), radial-gradient(circle at 5% 90%, #ffffff 1px, transparent 1px), radial-gradient(circle at 50% 55%, #ffffff 0.5px, transparent 0.5px), radial-gradient(circle at 95% 10%, #ffffff 1px, transparent 1px), radial-gradient(circle at 30% 25%, #ffffff 0.5px, transparent 0.5px), radial-gradient(circle at 80% 40%, #ffffff 1px, transparent 1px)",
            backgroundSize: "100% 100%",
          }}
        />

        {/* Moon emoji */}
        <div style={{ fontSize: "72px", marginBottom: "12px" }}>🌙</div>

        {/* Decorative stars */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
            marginBottom: "12px",
          }}
        >
          <div style={{ fontSize: "14px", opacity: 0.4 }}>✦</div>
          <div style={{ fontSize: "20px", color: "#f59e0b" }}>★</div>
          <div style={{ fontSize: "14px", opacity: 0.4 }}>✦</div>
        </div>

        {/* City-specific header */}
        {il && saat ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <div
              style={{
                color: "#fbbf24",
                fontSize: "52px",
                fontWeight: 800,
                textAlign: "center",
              }}
            >
              {il}
            </div>
            <div
              style={{
                color: "#f59e0b",
                fontSize: "36px",
                fontWeight: 600,
                textAlign: "center",
              }}
            >
              Bayram Namazı Saati
            </div>
            <div
              style={{
                color: "#ffffff",
                fontSize: "72px",
                fontWeight: 800,
                textAlign: "center",
                marginTop: "8px",
              }}
            >
              {saat}
            </div>
          </div>
        ) : (
          <>
            {/* Main title */}
            <div
              style={{
                color: "#fbbf24",
                fontSize: "58px",
                fontWeight: 800,
                marginBottom: "4px",
                textAlign: "center",
              }}
            >
              {line1}
            </div>
            <div
              style={{
                color: "#f59e0b",
                fontSize: "58px",
                fontWeight: 800,
                marginBottom: "16px",
                textAlign: "center",
              }}
            >
              {line2}
            </div>
          </>
        )}

        {/* Custom message */}
        {msg && (
          <div
            style={{
              color: "#ffffff",
              fontSize: "20px",
              fontWeight: 400,
              textAlign: "center",
              opacity: 0.6,
              maxWidth: "800px",
              lineHeight: 1.4,
              fontStyle: "italic",
              marginBottom: "12px",
            }}
          >
            &ldquo;{msg}&rdquo;
          </div>
        )}

        {/* Decorative line */}
        <div
          style={{
            width: "120px",
            height: "2px",
            background:
              "linear-gradient(to right, transparent, #f59e0b, transparent)",
            marginTop: "8px",
            marginBottom: "16px",
          }}
        />

        {/* Sender name — signature */}
        {isim && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "18px" }}>—</div>
            <div
              style={{
                color: "#ffffff",
                fontSize: "42px",
                fontWeight: 700,
                textAlign: "center",
              }}
            >
              {isim}
            </div>
          </div>
        )}

        {/* Bottom branding */}
        <div
          style={{
            position: "absolute",
            bottom: "24px",
            color: "rgba(255,255,255,0.2)",
            fontSize: "16px",
          }}
        >
          dijitalbayram.com
        </div>

        {/* Bottom glow */}
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            width: "600px",
            height: "300px",
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(245,158,11,0.08) 0%, transparent 70%)",
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
