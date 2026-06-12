import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Kevin Roy — designer by heart, developer by hands.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
          backgroundColor: "#0a0a0a",
          fontFamily: "sans-serif",
        }}
      >
        {/* Subtle grid lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(237,237,237,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(237,237,237,0.03) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            display: "flex",
          }}
        />

        {/* Border */}
        <div
          style={{
            position: "absolute",
            inset: 40,
            border: "1px solid rgba(237,237,237,0.08)",
            borderRadius: 4,
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 24,
            zIndex: 1,
          }}
        >
          <p
            style={{
              fontSize: 96,
              fontWeight: 700,
              color: "#ededed",
              letterSpacing: "-3px",
              margin: 0,
              lineHeight: 1,
            }}
          >
            Kevin Roy
          </p>

          <p
            style={{
              fontSize: 22,
              color: "rgba(237,237,237,0.45)",
              letterSpacing: "0.12em",
              margin: 0,
              fontFamily: "monospace",
              textTransform: "lowercase",
            }}
          >
            designer by heart, developer by hands.
          </p>
        </div>
      </div>
    ),
    { ...size }
  );
}
