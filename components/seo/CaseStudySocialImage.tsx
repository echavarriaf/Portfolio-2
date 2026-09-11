import type { CaseStudy } from "@/data/caseStudies";

type CaseStudySocialImageProps = {
  caseStudy: CaseStudy;
};

export default function CaseStudySocialImage({
  caseStudy,
}: CaseStudySocialImageProps) {
  const technologies = caseStudy.technologies.slice(0, 6);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        background: "#050505",
        color: "#ffffff",
        fontFamily: "sans-serif",
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          width: 700,
          height: 700,
          top: -300,
          right: -200,
          borderRadius: "9999px",
          background:
            "radial-gradient(circle, rgba(56,189,248,0.18) 0%, rgba(34,211,238,0.07) 35%, transparent 70%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          bottom: -350,
          left: -250,
          borderRadius: "9999px",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.13) 0%, transparent 70%)",
        }}
      />

      {/* Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.035,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* Border */}
      <div
        style={{
          position: "absolute",
          inset: 28,
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 30,
        }}
      />

      <div
        style={{
          position: "relative",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "70px 80px 62px",
        }}
      >
        {/* Top */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: "-1px",
            }}
          >
            <span>FE</span>

            <span
              style={{
                color: "#38bdf8",
              }}
            >
              .
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              fontSize: 17,
              color: "#71717a",
            }}
          >
            <span>{caseStudy.number}</span>

            <span
              style={{
                width: 34,
                height: 1,
                background: "rgba(255,255,255,0.15)",
              }}
            />

            <span
              style={{
                color: "#38bdf8",
                textTransform: "uppercase",
                letterSpacing: "2px",
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              Case Study
            </span>
          </div>
        </div>

        {/* Main */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
            maxWidth: 1000,
          }}
        >
          <div
            style={{
              display: "flex",
              color: "#71717a",
              fontSize: 17,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "2.5px",
              marginBottom: 25,
            }}
          >
            {caseStudy.category}
          </div>

          <div
            style={{
              display: "flex",
              fontSize: caseStudy.title.length > 32 ? 64 : 74,
              lineHeight: 1,
              fontWeight: 750,
              letterSpacing: "-4px",
              maxWidth: 1040,
            }}
          >
            {caseStudy.title}
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 26,
              maxWidth: 850,
              color: "#a1a1aa",
              fontSize: 24,
              lineHeight: 1.35,
            }}
          >
            {caseStudy.subtitle}
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              maxWidth: 850,
            }}
          >
            {technologies.map((technology) => (
              <div
                key={technology}
                style={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid rgba(255,255,255,0.09)",
                  background: "rgba(255,255,255,0.035)",
                  borderRadius: 9999,
                  padding: "8px 14px",
                  color: "#a1a1aa",
                  fontSize: 14,
                }}
              >
                {technology}
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontSize: 16,
                fontWeight: 600,
                color: "#f4f4f5",
              }}
            >
              Felix Echavarria
            </span>

            <span
              style={{
                marginTop: 5,
                fontSize: 13,
                color: "#52525b",
              }}
            >
              Software · Automation · Data
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
