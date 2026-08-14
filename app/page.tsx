"use client";

import { useEffect, useState } from "react";

const testimonials = [
  {
    image: "/testimonial-01.jpg",
    title: "Outlook & Technical Context",
  },
  {
    image: "/testimonial-02.jpg",
    title: "Global Market & Fundamental",
  },
  {
    image: "/testimonial-03.jpg",
    title: "Geopolitics & Monetary Context",
  },
  {
    image: "/testimonial-04.jpg",
    title: "DXY Structure & Gold Context",
  },
  {
    image: "/testimonial-05.jpg",
    title: "Multi-Timeframe Analysis",
  },
  {
    image: "/testimonial-06.jpg",
    title: "Fundamental Update",
  },
  {
    image: "/testimonial-07.jpg",
    title: "Trade Execution",
  },
  {
    image: "/testimonial-08.jpg",
    title: "Geopolitical Market Update",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight - window.innerHeight;

      setScrollProgress(height > 0 ? (scrollTop / height) * 100 : 0);
    };

    window.addEventListener("scroll", handleScroll);

    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div
        className="progress"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="noise" />

      {/* NAVIGATION */}
      <header className="topbar">
        <a href="#home" className="brand" onClick={closeMenu}>
          <img src="/logo.jpg" alt="Syntax Opinion" />

          <span>
            <b>Syntax Opinion</b>
            <small>Capital</small>
          </span>
        </a>

        <nav className="desktop-nav">
          <a href="#about">About</a>
          <a href="#framework">Framework</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#join">Join</a>
        </nav>

        <button
          className={`menu-button ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <div className="mobile-menu-inner">
          <div className="mobile-menu-title">
            <span>MENU</span>

            <button onClick={closeMenu}>×</button>
          </div>

          <a href="#home" onClick={closeMenu}>
            <small>01</small>
            Home
          </a>

          <a href="#about" onClick={closeMenu}>
            <small>02</small>
            About
          </a>

          <a href="#framework" onClick={closeMenu}>
            <small>03</small>
            Framework
          </a>

          <a href="#testimonials" onClick={closeMenu}>
            <small>04</small>
            Testimonials
          </a>

          <a href="#join" onClick={closeMenu}>
            <small>05</small>
            Join Syntax Opinion
          </a>
        </div>
      </div>

      <main>
        {/* HERO */}
        <section className="hero section" id="home">
          <div className="hero-grid">
            <div className="hero-copy reveal">
              <div className="eyebrow">
                <span />
                TRADING COMMUNITY · EST. 2026
              </div>

              <h1>
                Decode
                <br />
                the market.
                <br />
                <em>
                  Build
                  <br />
                  your edge.
                </em>
              </h1>

              <p className="lead">
                Syntax Opinion Capital adalah komunitas edukasi trading
                yang menggabungkan fundamental, technical, geopolitics,
                market structure, dan risk management untuk membantu
                trader membangun proses yang lebih terukur.
              </p>

              <div className="actions">
                <a className="btn primary" href="#join">
                  Join Syntax Opinion <span>↗</span>
                </a>

                <a className="btn secondary" href="#testimonials">
                  Explore Proof <span>›</span>
                </a>
              </div>

              <div className="hero-points">
                <div>
                  <b>01</b>
                  <span>
                    Fundamental
                    <br />
                    First
                  </span>
                </div>

                <div>
                  <b>02</b>
                  <span>
                    Technical
                    <br />
                    Context
                  </span>
                </div>

                <div>
                  <b>03</b>
                  <span>
                    Risk
                    <br />
                    Discipline
                  </span>
                </div>
              </div>
            </div>

            <div className="hero-visual reveal delay">
              <div className="orb orb-one" />
              <div className="orb orb-two" />

              <div className="grid-lines" />

              <div className="logo-card">
                <img
                  src="/logo.jpg"
                  alt="Syntax Opinion Capital"
                />

                <div className="scan-line" />
              </div>

              <div className="floating-label label-one">
                PROCESS
                <br />
                <strong>OVER PREDICTION</strong>
              </div>

              <div className="floating-label label-two">
                FUNDAMENTAL
                <br />
                <strong>→ TECHNICAL</strong>
              </div>

              <div className="floating-number">01</div>
            </div>
          </div>

          <div className="scroll-indicator">
            <span>SCROLL TO EXPLORE</span>
            <i />
          </div>
        </section>

        {/* ABOUT */}
        <section className="section about" id="about">
          <div className="section-number reveal">01 / ABOUT</div>

          <div className="split">
            <div className="reveal">
              <h2>
                From market
                <br />
                noise to market
                <br />
                <em>clarity.</em>
              </h2>
            </div>

            <div className="about-content reveal delay">
              <p className="big">
                Kami membangun ruang belajar untuk trader yang ingin
                memahami <strong>kenapa</strong> harga bergerak, bukan
                sekadar mengejar ke mana harga bergerak.
              </p>

              <div className="mini-grid">
                <article>
                  <span>01</span>
                  <h3>Process</h3>
                  <p>
                    Alur analisis yang dapat diulang dan
                    dikembangkan.
                  </p>
                </article>

                <article>
                  <span>02</span>
                  <h3>Context</h3>
                  <p>
                    Macro, geopolitics, dan price action sebagai
                    konteks.
                  </p>
                </article>

                <article>
                  <span>03</span>
                  <h3>Discipline</h3>
                  <p>
                    Risk management dalam setiap pengambilan
                    keputusan.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* FRAMEWORK */}
        <section className="section framework" id="framework">
          <div className="section-number reveal">02 / FRAMEWORK</div>

          <div className="framework-head">
            <div className="reveal">
              <h2>
                One market.
                <br />
                <em>Multiple lenses.</em>
              </h2>
            </div>

            <p className="reveal delay">
              Fundamental sebagai konteks utama, technical sebagai
              alat membaca struktur dan timing.
            </p>
          </div>

          <div className="framework-grid">
            <article className="framework-card reveal">
              <div className="card-top">
                <span>01</span>
                <strong>◎</strong>
              </div>

              <div className="card-line" />

              <h3>Fundamental</h3>

              <p>
                Macro data, central bank, liquidity, rates, USD,
                dan geopolitics.
              </p>

              <div className="card-arrow">↗</div>
            </article>

            <article className="framework-card reveal delay">
              <div className="card-top">
                <span>02</span>
                <strong>⌁</strong>
              </div>

              <div className="card-line" />

              <h3>Technical</h3>

              <p>
                Market structure, price action, multi-timeframe,
                SNR/SND, dan SMC.
              </p>

              <div className="card-arrow">↗</div>
            </article>

            <article className="framework-card reveal delay2">
              <div className="card-top">
                <span>03</span>
                <strong>↗</strong>
              </div>

              <div className="card-line" />

              <h3>Risk Discipline</h3>

              <p>
                RR, position sizing, invalidation, dan eksekusi
                tanpa overtrade.
              </p>

              <div className="card-arrow">↗</div>
            </article>
          </div>
        </section>

        {/* COMMUNITY */}
        <section className="section community">
          <div className="section-number reveal">
            03 / COMMUNITY PROOF
          </div>

          <div className="proof-banner reveal">
            <div>
              <div className="eyebrow">
                <span />
                REAL DISCUSSION · REAL PROCESS
              </div>

              <h2>
                Bukan sekadar call.
                <br />
                <em>Bangun cara berpikir.</em>
              </h2>
            </div>

            <div className="proof-logo">
              <img
                src="/logo.jpg"
                alt="Syntax Opinion"
              />
            </div>

            <div className="proof-decoration">S/O</div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section
          className="section testimonials"
          id="testimonials"
        >
          <div className="section-number reveal">
            04 / TESTIMONIALS
          </div>

          <div className="testimonials-head">
            <div className="reveal">
              <h2>
                Inside the
                <br />
                <em>community.</em>
              </h2>
            </div>

            <p className="reveal delay">
              Dokumentasi diskusi, outlook, analisis, dan hasil
              pembelajaran dari grup. Ditampilkan sebagai
              dokumentasi komunitas, bukan jaminan hasil trading.
            </p>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((item, index) => (
              <article
                className={`testimonial-card reveal ${
                  index % 2 === 1 ? "delay" : ""
                }`}
                key={item.image}
                onClick={() => setLightbox(item.image)}
              >
                <div className="testimonial-image">
                  <img
                    src={item.image}
                    alt={`Dokumentasi komunitas ${index + 1}`}
                    loading="lazy"
                  />

                  <div className="image-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="image-overlay">
                    VIEW IMAGE <span>↗</span>
                  </div>
                </div>

                <div className="card-meta">
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <b>{item.title}</b>

                  <span className="meta-arrow">↗</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* JOIN */}
        <section className="section join" id="join">
          <div className="join-box reveal">
            <div className="join-content">
              <div className="eyebrow">
                <span />
                SYNTAX OPINION CAPITAL
              </div>

              <h2>
                Build your edge.
                <br />
                <em>Not your hype.</em>
              </h2>

              <p>
                Masuk ke komunitas dan pelajari proses analisis yang
                lebih terstruktur — fundamental, technical,
                geopolitics, dan risk management dalam satu
                framework.
              </p>

              {/* GANTI LINK DI BAWAH */}
              <a
                className="btn primary large"
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                Join Syntax Opinion <span>↗</span>
              </a>

              <small>
                Ganti link tombol di atas dengan link
                WhatsApp/Telegram/grup Anda.
              </small>
            </div>

            <div className="join-visual">
              <div className="join-ring ring-one" />
              <div className="join-ring ring-two" />

              <img
                src="/logo.jpg"
                alt="Syntax Opinion Capital"
              />
            </div>
          </div>
        </section>
      </main>

      {/* FLOATING JOIN */}
      <a className="join-float" href="#join">
        <span>JOIN SYNTAX OPINION</span>
        <b>↗</b>
      </a>

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          className="lightbox"
          onClick={() => setLightbox(null)}
        >
          <button
            className="lightbox-close"
            onClick={() => setLightbox(null)}
          >
            ×
          </button>

          <img
            src={lightbox}
            alt="Testimonial preview"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* FOOTER */}
      <footer>
        <span>SYNTAX OPINION CAPITAL</span>
        <span>NO ERROR. ONLY TRUE CODE.</span>
        <span>© 2026</span>
      </footer>

      <style jsx global>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          background: #07080b;
          color: #f2f2f2;
          font-family: Inter, Arial, sans-serif;
          overflow-x: hidden;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        button {
          font: inherit;
        }

        .progress {
          position: fixed;
          top: 0;
          left: 0;
          height: 2px;
          background: #ffffff;
          z-index: 9999;
          transition: width 0.1s linear;
        }

        .noise {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 999;
          opacity: 0.035;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.7'/%3E%3C/svg%3E");
        }

        .section {
          position: relative;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 140px 6vw;
        }

        /* NAV */

        .topbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 82px;
          padding: 0 5vw;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(7, 8, 11, 0.7);
          backdrop-filter: blur(18px);
          border-bottom: 1px solid rgba(255,255,255,0.08);
          z-index: 1000;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .brand img {
          width: 38px;
          height: 38px;
          object-fit: cover;
          border-radius: 50%;
        }

        .brand span {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }

        .brand b {
          font-size: 14px;
          letter-spacing: -0.3px;
        }

        .brand small {
          margin-top: 5px;
          color: #888;
          font-size: 9px;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 36px;
        }

        .desktop-nav a {
          color: #9b9b9b;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          transition: color 0.3s ease;
        }

        .desktop-nav a:hover {
          color: #fff;
        }

        .menu-button {
          display: none;
          border: 0;
          background: transparent;
          width: 42px;
          height: 42px;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          cursor: pointer;
        }

        .menu-button span {
          display: block;
          width: 24px;
          height: 1px;
          background: white;
          transition: 0.3s;
        }

        .menu-button.open span:nth-child(1) {
          transform: translateY(6px) rotate(45deg);
        }

        .menu-button.open span:nth-child(2) {
          opacity: 0;
        }

        .menu-button.open span:nth-child(3) {
          transform: translateY(-6px) rotate(-45deg);
        }

        .mobile-menu {
          position: fixed;
          inset: 0;
          background: rgba(5,6,8,0.97);
          backdrop-filter: blur(20px);
          z-index: 999;
          transform: translateX(100%);
          transition: transform 0.55s cubic-bezier(.77,0,.18,1);
        }

        .mobile-menu.show {
          transform: translateX(0);
        }

        .mobile-menu-inner {
          padding: 110px 8vw 40px;
          display: flex;
          flex-direction: column;
        }

        .mobile-menu-title {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 25px;
          border-bottom: 1px solid #222;
          margin-bottom: 20px;
        }

        .mobile-menu-title span {
          font-size: 10px;
          letter-spacing: 3px;
          color: #777;
        }

        .mobile-menu-title button {
          border: 0;
          background: transparent;
          color: white;
          font-size: 35px;
          cursor: pointer;
        }

        .mobile-menu a {
          display: flex;
          align-items: center;
          gap: 18px;
          padding: 22px 0;
          border-bottom: 1px solid #1c1c1c;
          font-size: 24px;
          font-weight: 500;
        }

        .mobile-menu a small {
          color: #555;
          font-size: 10px;
          letter-spacing: 2px;
        }

        /* HERO */

        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 150px;
          overflow: hidden;
        }

        .hero:before {
          content: "";
          position: absolute;
          width: 600px;
          height: 600px;
          right: -250px;
          top: 15%;
          background: radial-gradient(
            circle,
            rgba(255,255,255,0.09),
            transparent 65%
          );
          filter: blur(20px);
          pointer-events: none;
        }

        .hero-grid {
          width: 100%;
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          align-items: center;
          gap: 60px;
        }

        .eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #777;
          font-size: 10px;
          letter-spacing: 2.5px;
          font-weight: 600;
        }

        .eyebrow span {
          width: 25px;
          height: 1px;
          background: #aaa;
          display: block;
        }

        .hero h1 {
          margin-top: 28px;
          font-size: clamp(58px, 7.2vw, 112px);
          line-height: 0.86;
          letter-spacing: -5px;
          font-weight: 700;
        }

        h1 em,
        h2 em {
          font-style: normal;
          color: #777;
        }

        .lead {
          max-width: 590px;
          margin-top: 38px;
          color: #999;
          font-size: 15px;
          line-height: 1.9;
        }

        .actions {
          display: flex;
          gap: 12px;
          margin-top: 38px;
          flex-wrap: wrap;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          min-height: 52px;
          padding: 0 22px;
          font-size: 11px;
          letter-spacing: 1px;
          text-transform: uppercase;
          transition: all 0.3s ease;
        }

        .btn.primary {
          color: #050505;
          background: #fff;
        }

        .btn.primary:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 40px rgba(255,255,255,0.12);
        }

        .btn.secondary {
          border: 1px solid #333;
          color: #aaa;
        }

        .btn.secondary:hover {
          color: white;
          border-color: #777;
        }

        .btn span {
          font-size: 16px;
        }

        .hero-points {
          display: flex;
          gap: 45px;
          margin-top: 65px;
        }

        .hero-points div {
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }

        .hero-points b {
          color: #555;
          font-size: 9px;
          letter-spacing: 1px;
        }

        .hero-points span {
          color: #888;
          font-size: 10px;
          line-height: 1.5;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .hero-visual {
          position: relative;
          height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .grid-lines {
          position: absolute;
          width: 470px;
          height: 470px;
          background-image:
            linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.045) 1px, transparent 1px);
          background-size: 47px 47px;
          transform: perspective(500px) rotateX(50deg) rotateZ(-20deg);
          mask-image: radial-gradient(circle, black 10%, transparent 70%);
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(50px);
        }

        .orb-one {
          width: 300px;
          height: 300px;
          background: rgba(255,255,255,0.06);
          animation: float 6s ease-in-out infinite;
        }

        .orb-two {
          width: 180px;
          height: 180px;
          background: rgba(255,255,255,0.04);
          transform: translate(120px,-100px);
          animation: float 8s ease-in-out infinite reverse;
        }

        .logo-card {
          position: relative;
          width: 340px;
          height: 340px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(15,16,20,0.8);
          border: 1px solid rgba(255,255,255,0.14);
          box-shadow:
            0 50px 100px rgba(0,0,0,0.5),
            inset 0 0 80px rgba(255,255,255,0.025);
          transform: rotate(-4deg);
          animation: cardFloat 7s ease-in-out infinite;
          overflow: hidden;
        }

        .logo-card:before {
          content: "";
          position: absolute;
          inset: 12px;
          border: 1px solid rgba(255,255,255,0.06);
        }

        .logo-card img {
          position: relative;
          width: 190px;
          height: 190px;
          object-fit: contain;
          filter: grayscale(1);
        }

        .scan-line {
          position: absolute;
          left: 0;
          width: 100%;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,.7),
            transparent
          );
          animation: scan 4s linear infinite;
        }

        .floating-label {
          position: absolute;
          padding: 13px 16px;
          background: rgba(10,11,14,.8);
          border: 1px solid #292929;
          color: #777;
          font-size: 8px;
          line-height: 1.6;
          letter-spacing: 1.5px;
          backdrop-filter: blur(12px);
        }

        .floating-label strong {
          color: #ddd;
          font-weight: 500;
        }

        .label-one {
          top: 90px;
          right: 0;
          animation: float 5s ease-in-out infinite;
        }

        .label-two {
          bottom: 110px;
          left: 0;
          animation: float 6s ease-in-out infinite reverse;
        }

        .floating-number {
          position: absolute;
          right: 60px;
          bottom: 30px;
          color: #333;
          font-size: 80px;
          font-weight: 800;
        }

        .scroll-indicator {
          position: absolute;
          left: 6vw;
          bottom: 30px;
          display: flex;
          align-items: center;
          gap: 15px;
          color: #555;
          font-size: 8px;
          letter-spacing: 2px;
        }

        .scroll-indicator i {
          width: 50px;
          height: 1px;
          background: #333;
          position: relative;
          overflow: hidden;
        }

        .scroll-indicator i:after {
          content: "";
          position: absolute;
          left: 0;
          width: 20px;
          height: 1px;
          background: white;
          animation: lineMove 2s ease-in-out infinite;
        }

        /* SECTIONS */

        .section-number {
          color: #555;
          font-size: 10px;
          letter-spacing: 3px;
          margin-bottom: 70px;
        }

        .split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 100px;
        }

        h2 {
          font-size: clamp(46px, 5vw, 78px);
          line-height: .95;
          letter-spacing: -4px;
        }

        .big {
          color: #999;
          font-size: 19px;
          line-height: 1.8;
          max-width: 600px;
        }

        .big strong {
          color: #fff;
        }

        .mini-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
          margin-top: 60px;
        }

        .mini-grid article {
          padding: 22px 0;
          border-top: 1px solid #292929;
        }

        .mini-grid span {
          color: #555;
          font-size: 9px;
        }

        .mini-grid h3 {
          margin-top: 25px;
          font-size: 15px;
        }

        .mini-grid p {
          color: #777;
          font-size: 11px;
          line-height: 1.7;
          margin-top: 10px;
        }

        /* FRAMEWORK */

        .framework-head {
          display: flex;
          justify-content: space-between;
          gap: 50px;
          align-items: flex-end;
          margin-bottom: 70px;
        }

        .framework-head p {
          max-width: 400px;
          color: #777;
          font-size: 13px;
          line-height: 1.8;
        }

        .framework-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
        }

        .framework-card {
          min-height: 370px;
          position: relative;
          padding: 30px;
          background: linear-gradient(
            145deg,
            #111216,
            #090a0d
          );
          border: 1px solid #222;
          transition: transform .5s ease, border-color .5s ease;
          overflow: hidden;
        }

        .framework-card:hover {
          transform: translateY(-10px);
          border-color: #555;
        }

        .framework-card:after {
          content: "";
          position: absolute;
          width: 160px;
          height: 160px;
          right: -80px;
          bottom: -80px;
          border-radius: 50%;
          background: rgba(255,255,255,.04);
          filter: blur(20px);
        }

        .card-top {
          display: flex;
          justify-content: space-between;
          color: #555;
        }

        .card-top strong {
          font-size: 30px;
          font-weight: 400;
          color: #777;
        }

        .card-line {
          width: 100%;
          height: 1px;
          background: #222;
          margin-top: 25px;
        }

        .framework-card h3 {
          margin-top: 100px;
          font-size: 24px;
        }

        .framework-card p {
          margin-top: 15px;
          color: #777;
          line-height: 1.8;
          font-size: 12px;
          max-width: 320px;
        }

        .card-arrow {
          position: absolute;
          right: 30px;
          bottom: 28px;
          color: #555;
          font-size: 20px;
        }

        /* COMMUNITY */

        .proof-banner {
          position: relative;
          min-height: 430px;
          padding: 70px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background:
            radial-gradient(
              circle at 80% 50%,
              rgba(255,255,255,.08),
              transparent 30%
            ),
            #101115;
          border: 1px solid #252525;
          overflow: hidden;
        }

        .proof-banner h2 {
          margin-top: 30px;
        }

        .proof-logo {
          width: 230px;
          height: 230px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid #292929;
          transform: rotate(7deg);
          animation: cardFloat 8s ease-in-out infinite;
        }

        .proof-logo img {
          width: 130px;
          height: 130px;
          object-fit: contain;
          filter: grayscale(1);
        }

        .proof-decoration {
          position: absolute;
          right: -30px;
          bottom: -90px;
          font-size: 220px;
          font-weight: 800;
          color: rgba(255,255,255,.02);
        }

        /* TESTIMONIALS */

        .testimonials-head {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: end;
          margin-bottom: 70px;
        }

        .testimonials-head p {
          color: #777;
          max-width: 450px;
          font-size: 13px;
          line-height: 1.9;
        }

        .testimonial-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 50px 18px;
        }

        .testimonial-card {
          cursor: pointer;
        }

        .testimonial-image {
          position: relative;
          overflow: hidden;
          aspect-ratio: 16 / 10;
          background: #111;
          border: 1px solid #222;
        }

        .testimonial-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          filter: grayscale(.15);
          transition:
            transform .8s cubic-bezier(.2,.7,.2,1),
            filter .5s ease;
        }

        .testimonial-card:hover img {
          transform: scale(1.06);
          filter: grayscale(0);
        }

        .image-number {
          position: absolute;
          top: 18px;
          left: 18px;
          font-size: 10px;
          letter-spacing: 2px;
          color: white;
          text-shadow: 0 2px 10px #000;
        }

        .image-overlay {
          position: absolute;
          inset: auto 0 0 0;
          padding: 25px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: linear-gradient(
            transparent,
            rgba(0,0,0,.85)
          );
          color: white;
          font-size: 9px;
          letter-spacing: 2px;
          opacity: 0;
          transform: translateY(10px);
          transition: .4s;
        }

        .testimonial-card:hover .image-overlay {
          opacity: 1;
          transform: translateY(0);
        }

        .card-meta {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 18px 0;
          border-bottom: 1px solid #222;
        }

        .card-meta > span:first-child {
          color: #555;
          font-size: 9px;
        }

        .card-meta b {
          font-size: 11px;
          font-weight: 500;
        }

        .meta-arrow {
          margin-left: auto;
          color: #555;
        }

        /* JOIN */

        .join {
          padding-bottom: 100px;
        }

        .join-box {
          position: relative;
          min-height: 550px;
          padding: 75px;
          display: grid;
          grid-template-columns: 1.2fr .8fr;
          align-items: center;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 75% 50%,
              rgba(255,255,255,.08),
              transparent 35%
            ),
            #111216;
          border: 1px solid #272727;
        }

        .join-content h2 {
          margin-top: 30px;
        }

        .join-content p {
          max-width: 570px;
          margin-top: 30px;
          color: #888;
          font-size: 14px;
          line-height: 1.9;
        }

        .large {
          margin-top: 35px;
        }

        .join-content small {
          display: block;
          margin-top: 12px;
          color: #555;
          font-size: 9px;
        }

        .join-visual {
          position: relative;
          height: 330px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .join-visual img {
          width: 180px;
          height: 180px;
          object-fit: contain;
          filter: grayscale(1);
          position: relative;
          z-index: 2;
          animation: float 6s ease-in-out infinite;
        }

        .join-ring {
          position: absolute;
          border: 1px solid #292929;
          border-radius: 50%;
        }

        .ring-one {
          width: 290px;
          height: 290px;
          animation: rotate 20s linear infinite;
        }

        .ring-two {
          width: 210px;
          height: 210px;
          border-style: dashed;
          animation: rotate 14s linear infinite reverse;
        }

        /* FLOAT BUTTON */

        .join-float {
          position: fixed;
          right: 25px;
          bottom: 25px;
          z-index: 800;
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 14px 18px;
          background: white;
          color: #050505;
          font-size: 9px;
          letter-spacing: 1.5px;
          box-shadow: 0 10px 40px rgba(0,0,0,.4);
          transition: .3s;
        }

        .join-float:hover {
          transform: translateY(-5px);
        }

        .join-float b {
          font-size: 16px;
        }

        /* LIGHTBOX */

        .lightbox {
          position: fixed;
          inset: 0;
          z-index: 2000;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 40px;
          background: rgba(0,0,0,.94);
          backdrop-filter: blur(15px);
          animation: fadeIn .3s ease;
        }

        .lightbox img {
          max-width: 95vw;
          max-height: 90vh;
          object-fit: contain;
          animation: zoomIn .4s cubic-bezier(.2,.7,.2,1);
        }

        .lightbox-close {
          position: absolute;
          top: 25px;
          right: 30px;
          border: 0;
          background: transparent;
          color: white;
          font-size: 40px;
          font-weight: 200;
          cursor: pointer;
          z-index: 5;
        }

        /* FOOTER */

        footer {
          max-width: 1400px;
          margin: 0 auto;
          padding: 35px 6vw;
          border-top: 1px solid #1c1c1c;
          display: flex;
          justify-content: space-between;
          gap: 20px;
          color: #444;
          font-size: 8px;
          letter-spacing: 2px;
        }

        /* REVEAL */

        .reveal {
          opacity: 0;
          transform: translateY(45px);
          transition:
            opacity .9s ease,
            transform .9s cubic-bezier(.2,.7,.2,1);
        }

        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }

        .delay {
          transition-delay: .15s;
        }

        .delay2 {
          transition-delay: .3s;
        }

        /* ANIMATION */

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes cardFloat {
          0%, 100% {
            transform: rotate(-4deg) translateY(0);
          }

          50% {
            transform: rotate(-2deg) translateY(-12px);
          }
        }

        @keyframes scan {
          0% {
            top: -10%;
            opacity: 0;
          }

          15% {
            opacity: 1;
          }

          80% {
            opacity: 1;
          }

          100% {
            top: 110%;
            opacity: 0;
          }
        }

        @keyframes lineMove {
          0% {
            transform: translateX(-20px);
          }

          50% {
            transform: translateX(50px);
          }

          100% {
            transform: translateX(-20px);
          }
        }

        @keyframes rotate {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(.9);
          }

          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* TABLET */

        @media (max-width: 900px) {
          .desktop-nav {
            display: none;
          }

          .menu-button {
            display: flex;
          }

          .hero-grid,
          .split,
          .join-box {
            grid-template-columns: 1fr;
          }

          .hero-visual {
            height: 450px;
          }

          .hero-copy {
            text-align: left;
          }

          .framework-grid {
            grid-template-columns: 1fr;
          }

          .framework-card {
            min-height: 300px;
          }

          .testimonials-head {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .join-visual {
            display: none;
          }
        }

        /* MOBILE */

        @media (max-width: 600px) {
          .section {
            padding: 95px 6vw;
          }

          .topbar {
            height: 70px;
            padding: 0 5vw;
          }

          .hero {
            min-height: 100svh;
            padding-top: 110px;
            padding-bottom: 100px;
          }

          .hero h1 {
            font-size: clamp(52px, 15vw, 78px);
            letter-spacing: -4px;
          }

          .lead {
            font-size: 13px;
            line-height: 1.8;
            margin-top: 30px;
          }

          .actions {
            flex-direction: column;
            align-items: stretch;
          }

          .btn {
            width: 100%;
          }

          .hero-points {
            gap: 15px;
            justify-content: space-between;
            margin-top: 45px;
          }

          .hero-points div {
            gap: 7px;
          }

          .hero-points span {
            font-size: 8px;
          }

          .hero-visual {
            height: 330px;
            margin-top: 15px;
          }

          .logo-card {
            width: 230px;
            height: 230px;
          }

          .logo-card img {
            width: 125px;
            height: 125px;
          }

          .grid-lines {
            width: 300px;
            height: 300px;
          }

          .floating-label {
            font-size: 7px;
            padding: 10px;
          }

          .label-one {
            top: 25px;
            right: 0;
          }

          .label-two {
            bottom: 25px;
            left: 0;
          }

          .floating-number {
            right: 10px;
            bottom: 0;
            font-size: 55px;
          }

          .scroll-indicator {
            display: none;
          }

          .section-number {
            margin-bottom: 45px;
          }

          h2 {
            font-size: 45px;
            letter-spacing: -3px;
          }

          .split {
            gap: 45px;
          }

          .big {
            font-size: 16px;
          }

          .mini-grid {
            grid-template-columns: 1fr;
            margin-top: 40px;
          }

          .mini-grid article {
            padding: 18px 0;
          }

          .framework-head {
            display: block;
            margin-bottom: 45px;
          }

          .framework-head p {
            margin-top: 25px;
          }

          .framework-card h3 {
            margin-top: 65px;
          }

          .proof-banner {
            min-height: 420px;
            padding: 40px 25px;
            display: block;
          }

          .proof-logo {
            width: 150px;
            height: 150px;
            margin: 50px auto 0;
          }

          .proof-logo img {
            width: 85px;
            height: 85px;
          }

          .proof-decoration {
            font-size: 130px;
            bottom: -40px;
          }

          .testimonial-grid {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .testimonial-image {
            aspect-ratio: 4 / 3;
          }

          .image-overlay {
            opacity: 1;
            transform: translateY(0);
          }

          .join-box {
            padding: 45px 25px;
            min-height: auto;
          }

          .join-content h2 {
            font-size: 43px;
          }

          .join-float {
            right: 15px;
            bottom: 15px;
            padding: 12px 14px;
          }

          footer {
            padding: 30px 6vw;
            flex-direction: column;
            gap: 10px;
          }

          .lightbox {
            padding: 15px;
          }

          .lightbox-close {
            top: 15px;
            right: 20px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            scroll-behavior: auto !important;
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: .01ms !important;
          }

          .reveal {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </>
  );
}
