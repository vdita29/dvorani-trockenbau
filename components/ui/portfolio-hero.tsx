"use client";

import { useState } from "react";

const navItems = [
  { label: "Über mich", href: "#about" },
  { label: "Referenzen", href: "#works" },
  { label: "Einblick in die Arbeit", href: "#video" },
  { label: "Kontakt", href: "#contact" },
];

const PortfolioHero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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

      {/* Top bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1.25rem 1.5rem",
        }}
      >
        {/* Logo — smaller on mobile */}
        <img
          src="/Dvorani_Trockenbau_Logo.png"
          alt="Dvorani Trockenbau"
          style={{ height: "clamp(2.5rem, 6vw, 5rem)", width: "auto" }}
        />

        {/* Desktop nav — hidden on mobile */}
        <nav className="hidden md:flex" style={{ gap: "2rem", display: "flex" }}>
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

        {/* Hamburger — visible on mobile only */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.25rem",
            color: "#ffffff",
            fontSize: "1.75rem",
            lineHeight: 1,
          }}
          aria-label="Menü öffnen"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "5rem",
            left: 0,
            right: 0,
            zIndex: 20,
            background: "rgba(0,0,0,0.92)",
            display: "flex",
            flexDirection: "column",
            padding: "1rem 0",
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "rgba(255,255,255,0.85)",
                fontSize: "1rem",
                fontWeight: 400,
                letterSpacing: "0.02em",
                textDecoration: "none",
                padding: "0.85rem 1.5rem",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
                transition: "color 0.2s",
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}

      {/* Bottom: headline left, button right */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "1.5rem",
          right: "1.5rem",
          zIndex: 10,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        {/* Headline — responsive font sizes */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <p
            style={{
              color: "#ffffff",
              fontSize: "clamp(1.75rem, 5vw, 5rem)",
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
              fontSize: "clamp(1.3rem, 3.5vw, 5rem)",
              fontWeight: 300,
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            Für Räume, die etwas können.
          </p>
        </div>

        {/* Jetzt anfragen button — responsive */}
        <a
          href="#contact"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            background: "#000000",
            color: "#E07820",
            borderRadius: "9999px",
            padding: "0.2rem 0.875rem 0.2rem 0.2rem",
            fontSize: "clamp(0.7rem, 1.5vw, 0.875rem)",
            fontWeight: 500,
            textDecoration: "none",
            flexShrink: 0,
            whiteSpace: "nowrap",
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "clamp(1.75rem, 4vw, 2.25rem)",
              height: "clamp(1.75rem, 4vw, 2.25rem)",
              borderRadius: "9999px",
              background: "#E07820",
              flexShrink: 0,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
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
