import React from "react";

export const Hero: React.FC = () => {
  // Desktop only
  const zoom = 1.45;
  const offsetX = -120;
  const offsetY = -40;
  const cropRight = 220;
  const cropBottom = 110;

  return (
    <section className="relative w-full h-[100svh] overflow-hidden bg-zairo-black">
      {/* =========================
          ✅ Mobile: Premium fallback
          ========================= */}
      <div className="absolute inset-0 md:hidden">
        {/* Base gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(900px 520px at 50% 45%, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.00) 55%)," +
              "radial-gradient(520px 520px at 30% 30%, rgba(130,110,255,0.18) 0%, rgba(130,110,255,0.00) 60%)," +
              "radial-gradient(620px 620px at 70% 55%, rgba(0,255,209,0.12) 0%, rgba(0,255,209,0.00) 62%)," +
              "linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.75) 60%, rgba(0,0,0,1) 100%)",
          }}
        />

        {/* Orb core (subtle, premium) */}
        <div className="absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2">
          <div className="relative w-[380px] h-[380px]">
            {/* outer glow */}
            <div className="absolute inset-0 rounded-full bg-zairo-accent/15 blur-[90px] opacity-80" />
            {/* mid glow */}
            <div className="absolute inset-10 rounded-full bg-white/5 blur-[60px] opacity-70" />
            {/* inner sheen */}
            <div className="absolute inset-[74px] rounded-full bg-white/6 blur-[18px] opacity-70" />
          </div>
        </div>

        {/* Vignette for contrast (keeps text readable) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(1200px 700px at 50% 40%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 62%, rgba(0,0,0,0.92) 100%)",
          }}
        />

        {/* Subtle noise 느낌(가벼운 패턴) */}
        <div
          className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(255,255,255,0.6) 0px, rgba(255,255,255,0.6) 1px, rgba(0,0,0,0) 2px, rgba(0,0,0,0) 4px)",
          }}
        />
      </div>

      {/* =========================
          ✅ Desktop: Spline
          ========================= */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          transform: `translate(${offsetX}px, ${offsetY}px) scale(${zoom})`,
          transformOrigin: "center center",
        }}
      >
        <iframe
          src="https://my.spline.design/reactiveorb-UZyPHnWq6NbM45pp7qs1yH8Z/?embed=1"
          title="ZAIRO Hero"
          allow="fullscreen; autoplay"
          allowFullScreen
          loading="lazy"
          style={{ width: "100%", height: "100%", border: 0 }}
        />
      </div>

      {/* Desktop only: hide badge */}
      <div
        className="absolute right-0 bottom-0 bg-zairo-black pointer-events-none hidden md:block"
        style={{ width: cropRight, height: cropBottom }}
      />
    </section>
  );
};
