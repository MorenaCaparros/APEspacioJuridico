import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Arana Postigo Estudio Jurídico";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
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
          background: "linear-gradient(135deg, #1A1A2E 0%, #2E1124 50%, #431A34 100%)",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Decorative circle top right */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(114, 47, 87, 0.3)",
          }}
        />
        {/* Decorative circle bottom left */}
        <div
          style={{
            position: "absolute",
            bottom: -60,
            left: -60,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(138, 61, 107, 0.2)",
          }}
        />

        {/* Logo badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 96,
            height: 96,
            borderRadius: 20,
            background: "#722F57",
            marginBottom: 32,
          }}
        >
          <span
            style={{
              color: "white",
              fontSize: 36,
              fontWeight: 800,
              letterSpacing: "-1px",
            }}
          >
            AP
          </span>
        </div>

        {/* Name */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span
            style={{
              color: "white",
              fontSize: 56,
              fontWeight: 700,
              letterSpacing: "-2px",
              lineHeight: 1.1,
            }}
          >
            Arana Postigo
          </span>
          <span
            style={{
              color: "rgba(201, 143, 186, 0.9)",
              fontSize: 22,
              fontWeight: 500,
              letterSpacing: "6px",
              textTransform: "uppercase",
            }}
          >
            Estudio Jurídico
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            marginTop: 40,
            padding: "12px 32px",
            borderRadius: 100,
            border: "1px solid rgba(114, 47, 87, 0.5)",
            background: "rgba(114, 47, 87, 0.15)",
          }}
        >
          <span
            style={{
              color: "rgba(240, 232, 237, 0.8)",
              fontSize: 18,
              fontWeight: 400,
            }}
          >
            Registro de marcas · Contratos IT · Derecho laboral · Sucesiones
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
