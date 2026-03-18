import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

const titles: Record<string, [string, string]> = {
  tr: ["Ramazan Bayramınız", "Mübarek Olsun"],
  en: ["Eid Mubarak", "Happy Eid al-Fitr"],
  ar: ["عيد مبارك", "عيد الفطر سعيد"],
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const isim = searchParams.get("isim") || "";
  const msg = searchParams.get("msg") || "";
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
            "linear-gradient(135deg, #020617 0%, #064e3b 50%, #020617 100%)",
          fontFamily: "sans-serif",
          padding: "40px",
          position: "relative",
          overflow: "hidden",
          direction: isRtl ? "rtl" : "ltr",
        }}
      >
        {/* Background pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.05,
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #f59e0b 1px, transparent 1px), radial-gradient(circle at 80% 20%, #f59e0b 1px, transparent 1px), radial-gradient(circle at 50% 80%, #f59e0b 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: "40px",
            display: "flex",
            gap: "12px",
          }}
        >
          <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#f59e0b" }} />
          <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#fbbf24" }} />
          <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#f59e0b" }} />
        </div>

        {/* Moon emoji */}
        <div style={{ fontSize: "64px", marginBottom: "16px" }}>🌙</div>

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
            bottom: "-50px",
            width: "400px",
            height: "200px",
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(245,158,11,0.15) 0%, transparent 70%)",
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
