import { ImageResponse } from "next/og";

import { siteConfig } from "@/data/site";

export const alt =
  "Felix Echavarria Software Engineering Portfolio";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#050505",
          color: "#f5f5f5",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            opacity: 0.06,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Blue glow */}
        <div
          style={{
            position: "absolute",
            width: "650px",
            height: "650px",
            borderRadius: "100%",
            top: "-330px",
            right: "-120px",
            background:
              "radial-gradient(circle, rgba(56,189,248,0.28), rgba(56,189,248,0))",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            width: "100%",
            height: "100%",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            FE
            <span
              style={{
                color: "#38bdf8",
              }}
            >
              .
            </span>
          </div>

          {/* Main */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 18,
                textTransform: "uppercase",
                letterSpacing: "5px",
                color: "#38bdf8",
                marginBottom: "24px",
              }}
            >
              Software · Automation · Data
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: 76,
                lineHeight: 0.95,
                fontWeight: 700,
                letterSpacing: "-4px",
              }}
            >
              <span>I build systems</span>

              <span>
                that turn{" "}
                <span
                  style={{
                    color: "#71717a",
                  }}
                >
                  friction
                </span>
              </span>

              <span>
                into{" "}
                <span
                  style={{
                    color: "#38bdf8",
                  }}
                >
                  flow.
                </span>
              </span>
            </div>
          </div>

          {/* Footer */}
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 18,
              color: "#71717a",
            }}
          >
            <span>{siteConfig.name}</span>

            <span>Software Engineer</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}