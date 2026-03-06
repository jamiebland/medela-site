import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Medela Learning Support";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(140deg, #1e3a6e 0%, #0e2248 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: "rgba(255,255,255,0.4)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            fontWeight: 700,
            marginBottom: 20,
          }}
        >
          Medela Learning Support
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.15,
            maxWidth: 800,
          }}
        >
          Educational Therapy for Children with Learning Differences
        </div>
        <div
          style={{
            fontSize: 24,
            color: "rgba(255,255,255,0.55)",
            marginTop: 24,
            lineHeight: 1.5,
            maxWidth: 700,
          }}
        >
          Specialist one-to-one support in Lisbon and across Portugal
        </div>
      </div>
    ),
    { ...size }
  );
}
