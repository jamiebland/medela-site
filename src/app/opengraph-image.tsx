import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Medela Learning Support";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const logoPromise = readFile(
  join(process.cwd(), "public/images/brand/Medela Logo Icon.png")
).then((data) => `data:image/png;base64,${data.toString("base64")}`);

export default async function OgImage() {
  const logoSrc = await logoPromise;

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(140deg, #1e3a6e 0%, #0e2248 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Subtle decorative circle */}
        <div
          style={{
            position: "absolute",
            width: 520,
            height: 520,
            borderRadius: "50%",
            border: "1px solid rgba(128,168,235,0.08)",
            top: 55,
            left: -60,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 380,
            height: 380,
            borderRadius: "50%",
            border: "1px solid rgba(128,168,235,0.06)",
            bottom: -80,
            right: -40,
          }}
        />

        {/* Logo */}
        <img
          src={logoSrc}
          width={120}
          height={120}
          style={{ marginBottom: 32, opacity: 0.95 }}
        />

        {/* Site name */}
        <div
          style={{
            fontSize: 52,
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            textAlign: "center",
          }}
        >
          Medela Learning Support
        </div>

        {/* Divider */}
        <div
          style={{
            width: 48,
            height: 3,
            background: "#80a8eb",
            borderRadius: 2,
            marginTop: 24,
            marginBottom: 24,
          }}
        />

        {/* Tagline */}
        <div
          style={{
            fontSize: 24,
            color: "rgba(255,255,255,0.5)",
            textAlign: "center",
            lineHeight: 1.5,
            maxWidth: 600,
          }}
        >
          Educational Therapy for Children with Learning Differences
        </div>

        {/* Location */}
        <div
          style={{
            fontSize: 16,
            color: "rgba(255,255,255,0.3)",
            marginTop: 20,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          Lisbon, Portugal
        </div>
      </div>
    ),
    { ...size }
  );
}
