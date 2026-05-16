"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight, Instagram, Mail, Phone } from "lucide-react";
import { useRef } from "react";
import { PortfolioHero } from "@/components/ui/portfolio-hero";
import Image from "next/image";

const PLACEHOLDER_IMG =
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80";

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ y: 32, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block text-xs font-sans tracking-[0.18em] uppercase mb-6"
      style={{ color: "#555555" }}
    >
      {children}
    </span>
  );
}

/* ══════════════════════════════════════════
   ÜBER MICH
══════════════════════════════════════════ */
function AboutSection() {
  return (
    <section
      id="about"
      className="w-full py-24 md:py-32"
      style={{ background: "#ffffff" }}
    >
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <FadeIn>
          <SectionLabel>Über mich</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.05}>
          {/* Change 3: Playfair Display for this heading only */}
          <h2
            className="font-playfair font-bold text-4xl sm:text-5xl md:text-6xl leading-[1.05] mb-8"
            style={{ color: "#1a1a1a" }}
          >
            Trockenbau mit&nbsp;Augenmaß.
          </h2>
        </FadeIn>
        <FadeIn delay={0.12}>
          <div
            className="font-sans font-light text-base md:text-lg leading-relaxed space-y-5"
            style={{ color: "#555555" }}
          >
            <p>
              Trockenbau sieht man meistens erst, wenn er fertig ist. Bis
              dahin entscheidet sich, ob ein Raum gut wird oder nur fertig.
            </p>
            {/* Change 6: typo fix "verklide" → "verkleide" */}
            <p>
              Ich verkleide Wände und Decken, ziehe neue Wände ein, baue
              Akustikelemente und Designlösungen. Für Privatwohnungen
              genauso wie für kleine Betriebe und Läden. Was ich zusätzlich
              mitbringe: Ich male seit Jahren Porträts und weiß, wie man
              einen Raum liest, bevor man anfängt. Proportionen, Licht, wie
              eine Decke wirkt, ob eine Wand an der richtigen Stelle sitzt.
            </p>
            <p>
              Manche Kunden wissen genau, was sie wollen. Anderen fehlt noch
              das Bild dazu. Beides passt.
            </p>
          </div>
        </FadeIn>
        {/* Change 8: black/orange pill button */}
        <FadeIn delay={0.2}>
          <a
            href="#contact"
            className="group mt-10 inline-flex items-center gap-2 rounded-full py-1 pl-5 pr-1 text-sm font-medium transition-all hover:opacity-80"
            style={{ background: "#000000", color: "#E07820" }}
          >
            Jetzt anfragen
            <span className="flex h-9 w-9 items-center justify-center rounded-full transition-transform group-hover:scale-110" style={{ background: "#E07820" }}>
              <ArrowRight className="h-4 w-4" style={{ color: "#000000" }} />
            </span>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   AUSGEWÄHLTE ARBEITEN
══════════════════════════════════════════ */
const works = [
  {
    src: "/arbeit-1.png",
    caption: "Wir arbeiten präzise — bis ins kleinste Detail",
  },
  {
    src: "/arbeit-2.png",
    caption: "So sieht das Ergebnis aus — makellos",
  },
  {
    src: "/arbeit-3.png",
    caption: "Wir schaffen Großes — professionell und strukturiert",
  },
];

function WorksSection() {
  return (
    <section
      id="works"
      className="w-full py-24 md:py-32"
      style={{ background: "#ffffff", borderTop: "1px solid #e5e5e5" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <FadeIn>
          <SectionLabel>Referenzen</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h2
            className="font-playfair font-bold text-4xl sm:text-5xl md:text-6xl leading-[1.05] mb-12"
            style={{ color: "#1a1a1a" }}
          >
            Ausgewählte&nbsp;Arbeiten
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {works.map((work, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="flex flex-col gap-3">
                <div className="relative w-full overflow-hidden rounded-2xl aspect-[4/3]">
                  <Image
                    src={work.src}
                    alt={work.caption}
                    fill
                    className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                {/* Change 12: Playfair Display for captions */}
                <p
                  className="font-playfair text-sm leading-snug"
                  style={{ color: "#555555" }}
                >
                  {work.caption}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
        {/* Change 10: Jetzt anfragen button below cards */}
        <FadeIn delay={0.25}>
          <a
            href="#contact"
            className="group mt-10 inline-flex items-center gap-2 rounded-full py-1 pl-5 pr-1 text-sm font-medium transition-all hover:opacity-80"
            style={{ background: "#000000", color: "#E07820" }}
          >
            Jetzt anfragen
            <span className="flex h-9 w-9 items-center justify-center rounded-full transition-transform group-hover:scale-110" style={{ background: "#E07820" }}>
              <ArrowRight className="h-4 w-4" style={{ color: "#000000" }} />
            </span>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   EINBLICK IN DIE ARBEIT
══════════════════════════════════════════ */
function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleClick = () => {
    const el = videoRef.current;
    if (!el) return;
    if (el.requestFullscreen) el.requestFullscreen();
  };

  return (
    <section
      id="video"
      className="w-full py-24 md:py-32"
      style={{ background: "#ffffff", borderTop: "1px solid #e5e5e5" }}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <FadeIn>
          <SectionLabel>Einblick in die Arbeit</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.06}>
          <h2
            className="font-playfair font-bold text-3xl sm:text-4xl md:text-5xl leading-[1.05] mb-10"
            style={{ color: "#1a1a1a" }}
          >
            Vorher &amp; Nachher
          </h2>
        </FadeIn>
        <div className="flex flex-col items-center gap-10">
          {/* Video 1 */}
          <FadeIn delay={0.12}>
            <div className="flex flex-col items-center gap-3">
              <video
                ref={videoRef}
                controls
                playsInline
                onClick={handleClick}
                style={{
                  width: "100%",
                  maxWidth: "480px",
                  borderRadius: "0.75rem",
                  border: "1px solid #e5e5e5",
                  display: "block",
                  cursor: "pointer",
                }}
              >
                <source src="/vorher-nachher.mov" type="video/quicktime" />
                <source src="/vorher-nachher.mov" type="video/mp4" />
              </video>
              <p className="font-sans text-xs" style={{ color: "#aaaaaa" }}>
                Zum Vergrößern klicken
              </p>
            </div>
          </FadeIn>

          {/* Change 11: second video */}
          <FadeIn delay={0.18}>
            <div className="flex flex-col items-center gap-3">
              <video
                controls
                playsInline
                onClick={(e) => {
                  const el = e.currentTarget;
                  if (el.requestFullscreen) el.requestFullscreen();
                }}
                style={{
                  width: "100%",
                  maxWidth: "480px",
                  borderRadius: "0.75rem",
                  border: "1px solid #e5e5e5",
                  display: "block",
                  cursor: "pointer",
                }}
              >
                <source src="/Bad-vorher-nachher.mov" type="video/quicktime" />
                <source src="/Bad-vorher-nachher.mov" type="video/mp4" />
              </video>
              <p className="font-sans text-xs" style={{ color: "#aaaaaa" }}>
                Zum Vergrößern klicken
              </p>
            </div>
          </FadeIn>

          {/* Change 14: third video */}
          <FadeIn delay={0.24}>
            <div className="flex flex-col items-center gap-3">
              <video
                controls
                playsInline
                onClick={(e) => {
                  const el = e.currentTarget;
                  if (el.requestFullscreen) el.requestFullscreen();
                }}
                style={{
                  width: "100%",
                  maxWidth: "480px",
                  borderRadius: "0.75rem",
                  border: "1px solid #e5e5e5",
                  display: "block",
                  cursor: "pointer",
                }}
              >
                <source src="/Halle-video.mov" type="video/quicktime" />
              </video>
              <p className="font-sans text-xs" style={{ color: "#aaaaaa" }}>
                Zum Vergrößern klicken
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   KONTAKT
══════════════════════════════════════════ */
function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full py-24 md:py-36"
      style={{ background: "#ffffff", borderTop: "1px solid #e5e5e5" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <FadeIn>
          <SectionLabel>Kontakt</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h2
            className="font-syne font-bold text-[13vw] sm:text-[10vw] md:text-[9vw] lg:text-[8vw] leading-[0.88] tracking-[-0.05em] mb-8"
            style={{ color: "#1a1a1a" }}
          >
            Ruf an.
            <br />
            Oder schreib.
          </h2>
        </FadeIn>
        <FadeIn delay={0.12}>
          <p
            className="font-sans font-light text-base md:text-lg leading-relaxed max-w-xl mb-12"
            style={{ color: "#555555" }}
          >
            Beschreib kurz, was du vorhast. Wo, was ungefähr, wann. Den Rest
            besprechen wir am Telefon oder vor Ort.
          </p>
        </FadeIn>

        {/* Change 1: black background, orange text/icons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-4">
          <FadeIn delay={0.15}>
            <a
              href="tel:017657611478"
              className="inline-flex items-center gap-3 rounded-full py-3 px-6 text-sm font-sans transition-opacity hover:opacity-80"
              style={{ background: "#000000", color: "#E07820" }}
            >
              <Phone className="h-4 w-4 flex-shrink-0" style={{ color: "#E07820" }} />
              0176 57611478
            </a>
          </FadeIn>

          <FadeIn delay={0.2}>
            <a
              href="mailto:dvorani.trockenbau@gmail.com"
              className="inline-flex items-center gap-3 rounded-full py-3 px-6 text-sm font-sans transition-opacity hover:opacity-80"
              style={{ background: "#000000", color: "#E07820" }}
            >
              <Mail className="h-4 w-4 flex-shrink-0" style={{ color: "#E07820" }} />
              dvorani.trockenbau@gmail.com
            </a>
          </FadeIn>

          <FadeIn delay={0.25}>
            <a
              href="https://www.instagram.com/dvorani_trockenbau"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full py-3 px-6 text-sm font-sans transition-opacity hover:opacity-80"
              style={{ background: "#000000", color: "#E07820" }}
            >
              <Instagram className="h-4 w-4 flex-shrink-0" style={{ color: "#E07820" }} />
              @dvorani_trockenbau
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   FOOTER VIDEO (Change 2)
══════════════════════════════════════════ */
function FooterVideo() {
  return (
    <div style={{ lineHeight: 0 }}>
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: "100%",
          display: "block",
          maxHeight: "500px",
          objectFit: "cover",
        }}
      >
        <source src="/Dvorani_Trockenbau_Video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

/* ══════════════════════════════════════════
   FOOTER
══════════════════════════════════════════ */
function Footer() {
  return (
    <footer
      className="w-full py-8"
      style={{ background: "#ffffff", borderTop: "1px solid #e5e5e5" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="font-sans text-xs" style={{ color: "#555555" }}>
          © 2025 Dvorani Trockenbau. Alle Rechte vorbehalten.
        </p>
        <p className="font-sans text-xs" style={{ color: "#aaaaaa" }}>
          Mit Sorgfalt gebaut.
        </p>
      </div>
    </footer>
  );
}

/* ══════════════════════════════════════════
   PAGE
══════════════════════════════════════════ */
export default function Home() {
  return (
    <main>
      <PortfolioHero />
      <AboutSection />
      <WorksSection />
      <VideoSection />
      <ContactSection />
      <FooterVideo />
      <Footer />
    </main>
  );
}
