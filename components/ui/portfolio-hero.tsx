"use client";

/* Change 7: updated nav items, Workshops removed */
const navItems = [
  { label: "Über mich", href: "#about" },
  { label: "Referenzen", href: "#works" },
  { label: "Einblick in die Arbeit", href: "#video" },
  { label: "Kontakt", href: "#contact" },
];

const PortfolioHero = () => {
  return (
    <section
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.5))",
          pointerEvents: "none",
        }}
      />

      {/* Top bar: logo left, nav right */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "2rem 2.5rem",
        }}
      >
        <img
          src="/Dvorani_Trockenbau_Logo.png"
          alt="Dvorani Trockenbau"
          className="h-20 w-auto"
        />

        <nav style={{ display: "flex", gap: "2rem" }}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: "0.8125rem",
                fontWeight: 400,
                letterSpacing: "0.02em",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Bottom: headline left, button right */}
      <div
        style={{
          position: "absolute",
          bottom: "3rem",
          left: "2.5rem",
          right: "2.5rem",
          zIndex: 10,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
        }}
      >
        {/* Two-line headline */}
        <div>
          <p
            style={{
              color: "#ffffff",
              fontSize: "clamp(2.5rem, 5vw, 5rem)",
              fontWeight: 300,
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            Trockenbau mit Augenmaß.
          </p>
          <p
            style={{
              color: "rgba(255,255,255,0.75)",
              fontSize: "clamp(2.5rem, 5vw, 5rem)",
              fontWeight: 300,
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            Für Räume, die etwas können.
          </p>
        </div>

        {/* Change 9: Jetzt anfragen button bottom right */}
        <a
          href="#contact"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "#000000",
            color: "#E07820",
            borderRadius: "9999px",
            padding: "0.25rem 1.25rem 0.25rem 0.25rem",
            fontSize: "0.875rem",
            fontWeight: 500,
            textDecoration: "none",
            flexShrink: 0,
            marginLeft: "2rem",
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "2.25rem",
              height: "2.25rem",
              borderRadius: "9999px",
              background: "#E07820",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          Jetzt anfragen
        </a>
      </div>
    </section>
  );
};

export { PortfolioHero };
