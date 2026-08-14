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

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen || lightbox ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, lightbox]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #07080b;
          color: #f5f5f7;
          font-family:
            Inter,
            Arial,
            Helvetica,
            sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        button {
          font-family: inherit;
        }

        ::selection {
          background: #737cff;
          color: white;
        }

        .site {
          overflow: hidden;
          background: #07080b;
        }

        /* =========================
           REVEAL ANIMATION
        ========================= */

        .reveal {
          opacity: 0;
          transform: translateY(45px);
          transition:
            opacity 0.9s ease,
            transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .delay {
          transition-delay: 0.12s;
        }

        .delay2 {
          transition-delay: 0.24s;
        }

        .delay3 {
          transition-delay: 0.36s;
        }

        /* =========================
           NAV
        ========================= */

        .topbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          height: 76px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 5vw;
          background: rgba(7, 8, 11, 0.72);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 11px;
        }

        .brand img {
          width: 38px;
          height: 38px;
          object-fit: cover;
          border-radius: 50%;
        }

        .brand-text {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }

        .brand-text b {
          font-size: 13px;
          letter-spacing: 0.04em;
        }

        .brand-text small {
          margin-top: 5px;
          color: #777b88;
          font-size: 9px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 34px;
        }

        .desktop-nav a {
          color: #9699a5;
          font-size: 12px;
          transition: color 0.25s ease;
        }

        .desktop-nav a:hover {
          color: white;
        }

        .menu-button {
          display: none;
          width: 46px;
          height: 46px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(15,16,21,0.92);
          color: white;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
        }

        .menu-button span {
          width: 18px;
          height: 1px;
          background: white;
        }

        /* =========================
           MOBILE MENU
        ========================= */

        .drawer {
          position: fixed;
          z-index: 200;
          top: 0;
          right: 0;
          width: min(86vw, 390px);
          height: 100vh;
          padding: 30px;
          background: #0b0c11;
          border-left: 1px solid rgba(255,255,255,0.08);
          transform: translateX(100%);
          transition: transform 0.45s cubic-bezier(0.22,1,0.36,1);
        }

        .drawer.open {
          transform: translateX(0);
        }

        .drawer-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 50px;
          color: #777b88;
          font-size: 10px;
          letter-spacing: 0.2em;
        }

        .drawer-head button {
          width: 40px;
          height: 40px;
          border: 0;
          border-radius: 50%;
          background: #171820;
          color: white;
          font-size: 25px;
          cursor: pointer;
        }

        .drawer a {
          display: block;
          padding: 19px 0;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          color: white;
          font-size: 18px;
        }

        .backdrop {
          position: fixed;
          inset: 0;
          z-index: 150;
          background: rgba(0,0,0,0.65);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .backdrop.open {
          opacity: 1;
          pointer-events: auto;
        }

        /* =========================
           GENERAL
        ========================= */

        .section {
          position: relative;
          padding: 140px 5vw;
        }

        .kicker {
          margin-bottom: 45px;
          color: #777cff;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.22em;
        }

        .eyebrow {
          display: flex;
          align-items: center;
          gap: 9px;
          margin: 0 0 25px;
          color: #858995;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.18em;
        }

        .eyebrow span {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #777cff;
          box-shadow: 0 0 12px #777cff;
        }

        h1,
        h2,
        h3,
        p {
          margin-top: 0;
        }

        h1,
        h2 {
          letter-spacing: -0.055em;
        }

        h1 em,
        h2 em {
          color: #7b80ff;
          font-style: normal;
        }

        /* =========================
           HERO
        ========================= */

        .hero {
          min-height: 100vh;
          padding-top: 150px;
          display: flex;
          align-items: center;
        }

        .hero-grid {
          width: 100%;
          max-width: 1400px;
          margin: auto;
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 7vw;
          align-items: center;
        }

        .hero-copy h1 {
          max-width: 760px;
          margin-bottom: 30px;
          font-size: clamp(55px, 7vw, 105px);
          line-height: 0.91;
          font-weight: 800;
        }

        .lead {
          max-width: 650px;
          color: #9b9eaa;
          font-size: 15px;
          line-height: 1.9;
        }

        .actions {
          display: flex;
          gap: 10px;
          margin-top: 34px;
          flex-wrap: wrap;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 48px;
          padding: 0 22px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 700;
          transition:
            transform 0.25s ease,
            background 0.25s ease;
        }

        .btn:hover {
          transform: translateY(-3px);
        }

        .btn.light {
          color: #08090c;
          background: white;
        }

        .btn.outline {
          color: white;
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.02);
        }

        .hero-points {
          display: flex;
          gap: 45px;
          margin-top: 42px;
          padding-top: 22px;
          border-top: 1px solid rgba(255,255,255,0.08);
        }

        .hero-points div {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .hero-points b {
          color: #777cff;
          font-size: 9px;
        }

        .hero-points span {
          color: #8d909c;
          font-size: 10px;
          line-height: 1.5;
        }

        .hero-visual {
          position: relative;
          min-height: 550px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .orb {
          position: absolute;
          width: 470px;
          height: 470px;
          border-radius: 50%;
          background:
            radial-gradient(
              circle at 35% 30%,
              rgba(102,112,255,0.7),
              rgba(30,34,75,0.25) 35%,
              transparent 67%
            );
          filter: blur(12px);
          animation: floatOrb 7s ease-in-out infinite;
        }

        @keyframes floatOrb {
          0%,100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-18px) scale(1.04);
          }
        }

        .logo-card {
          position: relative;
          z-index: 2;
          width: min(480px, 80%);
          aspect-ratio: 0.8;
          padding: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 28px;
          background:
            linear-gradient(
              145deg,
              rgba(20,22,32,0.95),
              rgba(8,9,13,0.82)
            );
          box-shadow:
            0 35px 90px rgba(0,0,0,0.5),
            inset 0 1px rgba(255,255,255,0.06);
          overflow: hidden;
        }

        .logo-card img {
          width: 70%;
          height: 70%;
          object-fit: contain;
          border-radius: 50%;
          filter: drop-shadow(0 0 50px rgba(100,110,255,0.35));
        }

        .scan {
          position: absolute;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(120,128,255,0.8),
            transparent
          );
          animation: scan 4s ease-in-out infinite;
        }

        @keyframes scan {
          0% {
            top: 15%;
            opacity: 0;
          }
          25% {
            opacity: 1;
          }
          75% {
            opacity: 1;
          }
          100% {
            top: 85%;
            opacity: 0;
          }
        }

        .floating-label {
          position: absolute;
          z-index: 3;
          padding: 12px 15px;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 9px;
          background: rgba(9,10,14,0.86);
          color: #aaaeba;
          font-size: 8px;
          line-height: 1.6;
          letter-spacing: 0.15em;
          backdrop-filter: blur(12px);
        }

        .floating-label.a {
          top: 17%;
          left: 0;
        }

        .floating-label.b {
          right: 0;
          bottom: 18%;
        }

        /* =========================
           ABOUT
        ========================= */

        .split {
          max-width: 1400px;
          margin: auto;
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 8vw;
          align-items: start;
        }

        .split h2,
        .framework-head h2,
        .testimonials-head h2,
        .join-box h2 {
          margin-bottom: 0;
          font-size: clamp(48px, 5.5vw, 82px);
          line-height: 0.95;
          font-weight: 800;
        }

        .big {
          max-width: 680px;
          color: #e6e6ea;
          font-size: clamp(20px, 2vw, 27px);
          line-height: 1.55;
        }

        .big strong {
          color: white;
        }

        .mini-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-top: 45px;
        }

        .mini-grid article {
          padding-top: 18px;
          border-top: 1px solid rgba(255,255,255,0.1);
        }

        .mini-grid b {
          color: #777cff;
          font-size: 9px;
        }

        .mini-grid h3 {
          margin: 15px 0 8px;
          font-size: 15px;
        }

        .mini-grid p {
          color: #777b87;
          font-size: 11px;
          line-height: 1.6;
        }

        /* =========================
           PROGRAM
        ========================= */

        .program {
          background: #0b0c10;
          border-top: 1px solid rgba(255,255,255,0.05);
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .framework-head {
          max-width: 1400px;
          margin: 0 auto 60px;
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 40px;
        }

        .framework-head p {
          max-width: 400px;
          color: #818591;
          line-height: 1.8;
          font-size: 13px;
        }

        .framework-grid {
          max-width: 1400px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }

        .framework-card {
          min-height: 300px;
          padding: 25px;
          position: relative;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 18px;
          background: rgba(255,255,255,0.015);
          transition:
            transform 0.35s ease,
            border-color 0.35s ease;
        }

        .framework-card:hover {
          transform: translateY(-8px);
          border-color: rgba(120,128,255,0.35);
        }

        .framework-card > b {
          color: #777cff;
          font-size: 9px;
        }

        .framework-icon {
          margin-top: 75px;
          color: #777cff;
          font-size: 25px;
        }

        .framework-card h3 {
          margin: 16px 0 10px;
          font-size: 20px;
        }

        .framework-card p {
          color: #777b87;
          font-size: 11px;
          line-height: 1.7;
        }

        /* =========================
           PORTFOLIO
        ========================= */

        .portfolio {
          background: #07080b;
        }

        .portfolio-head {
          max-width: 1400px;
          margin: auto auto 50px;
        }

        .portfolio-head h2 {
          max-width: 700px;
          font-size: clamp(48px, 5.5vw, 82px);
          line-height: 0.95;
          margin: 0;
        }

        .portfolio-grid {
          max-width: 1400px;
          margin: auto;
          display: grid;
          grid-template-columns: 1.7fr 0.9fr;
          gap: 12px;
        }

        .market-card {
          min-height: 480px;
          position: relative;
          padding: 22px;
          border-radius: 22px;
          border: 1px solid rgba(255,255,255,0.08);
          background: #0d0f14;
          overflow: hidden;
        }

        .market-card-top {
          color: #777b87;
          font-size: 8px;
          letter-spacing: 0.15em;
        }

        .market-map {
          height: 250px;
          margin-top: 45px;
          display: flex;
          align-items: end;
          justify-content: space-around;
          gap: 9px;
          padding: 0 25px;
          background-image:
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        .bar {
          width: 7%;
          min-width: 14px;
          border-radius: 4px 4px 0 0;
          background: linear-gradient(
            to top,
            #31389c,
            #7d86ff
          );
          box-shadow: 0 0 20px rgba(95,105,255,0.2);
          animation: barPulse 3s ease-in-out infinite alternate;
        }

        @keyframes barPulse {
          from {
            transform: scaleY(0.96);
          }
          to {
            transform: scaleY(1.03);
          }
        }

        .market-title {
          position: absolute;
          right: 28px;
          top: 255px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.14em;
        }

        .market-info {
          margin-top: 40px;
        }

        .market-info small {
          color: #777cff;
          font-size: 8px;
          letter-spacing: 0.18em;
        }

        .market-info h3 {
          margin: 10px 0;
          font-size: 22px;
        }

        .market-info p {
          max-width: 600px;
          color: #777b87;
          font-size: 11px;
          line-height: 1.7;
        }

        .portfolio-side {
          display: grid;
          gap: 12px;
        }

        .portfolio-link {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 150px;
          padding: 24px;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 18px;
          background: #0d0f14;
          transition:
            transform 0.3s ease,
            border-color 0.3s ease;
        }

        .portfolio-link:hover {
          transform: translateX(6px);
          border-color: rgba(120,128,255,0.3);
        }

        .portfolio-link small {
          color: #777cff;
          font-size: 8px;
          letter-spacing: 0.16em;
        }

        .portfolio-link strong {
          margin-top: 25px;
          font-size: 14px;
        }

        .portfolio-link span {
          margin-top: 7px;
          color: #70737e;
          font-size: 9px;
        }

        /* =========================
           TESTIMONIALS
        ========================= */

        .testimonials {
          background: #f2f3f8;
          color: #111217;
        }

        .testimonials .kicker {
          color: #656bdf;
        }

        .testimonials-head {
          max-width: 1400px;
          margin: auto auto 55px;
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 40px;
        }

        .testimonials-head h2 {
          max-width: 650px;
        }

        .testimonials-head p {
          max-width: 420px;
          color: #737580;
          font-size: 12px;
          line-height: 1.8;
        }

        .testimonial-grid {
          max-width: 1400px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
        }

        .testimonial-card {
          border-radius: 20px;
          overflow: hidden;
          background: white;
          border: 1px solid rgba(0,0,0,0.08);
          cursor: pointer;
          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 60px rgba(0,0,0,0.12);
        }

        .testimonial-image {
          position: relative;
          aspect-ratio: 16 / 10;
          background: #e7e8ed;
          overflow: hidden;
        }

        .testimonial-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }

        .testimonial-card:hover img {
          transform: scale(1.04);
        }

        .image-number {
          position: absolute;
          top: 18px;
          left: 18px;
          color: white;
          font-size: 10px;
          font-weight: 700;
          text-shadow: 0 2px 10px rgba(0,0,0,0.5);
        }

        .image-overlay {
          position: absolute;
          right: 18px;
          bottom: 18px;
          padding: 8px 12px;
          border-radius: 999px;
          color: white;
          background: rgba(0,0,0,0.55);
          backdrop-filter: blur(10px);
          font-size: 8px;
          letter-spacing: 0.12em;
        }

        .card-meta {
          display: flex;
          justify-content: space-between;
          gap: 15px;
          padding: 18px 20px;
          font-size: 10px;
        }

        .card-meta span {
          color: #777cff;
        }

        .card-meta b {
          color: #292b32;
        }

        /* =========================
           JOIN
        ========================= */

        .join {
          padding-top: 170px;
          padding-bottom: 170px;
        }

        .join-box {
          max-width: 1400px;
          margin: auto;
          min-height: 480px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 60px;
          padding: 70px;
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 28px;
          background:
            radial-gradient(
              circle at 75% 50%,
              rgba(70,78,220,0.18),
              transparent 35%
            ),
            #0d0f14;
          overflow: hidden;
        }

        .join-box h2 {
          max-width: 760px;
        }

        .join-box > div > p:not(.eyebrow) {
          max-width: 620px;
          margin-top: 30px;
          color: #898d99;
          font-size: 13px;
          line-height: 1.8;
        }

        .join-logo {
          position: relative;
          width: 280px;
          height: 280px;
          object-fit: contain;
          border-radius: 50%;
          filter: drop-shadow(0 0 60px rgba(95,105,255,0.28));
          animation: logoFloat 5s ease-in-out infinite;
        }

        @keyframes logoFloat {
          0%,100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        .join-note {
          display: block;
          margin-top: 12px;
          color: #60636d;
          font-size: 9px;
        }

        /* =========================
           FLOATING BUTTON
        ========================= */

        .join-float {
          position: fixed;
          right: 24px;
          bottom: 24px;
          z-index: 90;
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 8px 9px 8px 19px;
          border-radius: 999px;
          background: white;
          color: #111217;
          font-size: 10px;
          font-weight: 800;
          box-shadow: 0 15px 40px rgba(0,0,0,0.3);
        }

        .join-float b {
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: white;
          background: #111217;
          font-size: 16px;
        }

        /* =========================
           FOOTER
        ========================= */

        footer {
          padding: 30px 5vw;
          display: flex;
          justify-content: space-between;
          gap: 20px;
          color: #666a76;
          border-top: 1px solid rgba(255,255,255,0.07);
          font-size: 9px;
          letter-spacing: 0.1em;
        }

        /* =========================
           LIGHTBOX
        ========================= */

        .lightbox {
          position: fixed;
          inset: 0;
          z-index: 500;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 30px;
          background: rgba(0,0,0,0.92);
          backdrop-filter: blur(15px);
        }

        .lightbox img {
          max-width: min(1100px, 95vw);
          max-height: 90vh;
          object-fit: contain;
          border-radius: 10px;
          box-shadow: 0 30px 100px rgba(0,0,0,0.6);
        }

        .lightbox-close {
          position: fixed;
          top: 25px;
          right: 25px;
          z-index: 501;
          width: 48px;
          height: 48px;
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 50%;
          background: rgba(255,255,255,0.08);
          color: white;
          font-size: 28px;
          cursor: pointer;
        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 900px) {
          .topbar {
            height: 64px;
            padding: 0 18px;
          }

          .desktop-nav {
            display: none;
          }

          .menu-button {
            display: flex;
          }

          .section {
            padding: 95px 15px;
          }

          .hero {
            min-height: auto;
            padding-top: 120px;
          }

          .hero-grid,
          .split,
          .portfolio-grid {
            grid-template-columns: 1fr;
            gap: 50px;
          }

          .hero-copy h1 {
            font-size: clamp(50px, 14vw, 82px);
          }

          .lead {
            font-size: 13px;
            line-height: 1.8;
          }

          .hero-visual {
            min-height: 430px;
          }

          .orb {
            width: 330px;
            height: 330px;
          }

          .logo-card {
            width: 75%;
          }

          .floating-label.a {
            left: 0;
          }

          .floating-label.b {
            right: 0;
          }

          .mini-grid {
            grid-template-columns: 1fr;
          }

          .framework-head,
          .testimonials-head {
            display: block;
          }

          .framework-head p,
          .testimonials-head p {
            margin-top: 30px;
          }

          .framework-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .framework-card {
            min-height: 260px;
          }

          .market-card {
            min-height: 430px;
          }

          .join-box {
            min-height: auto;
            padding: 40px 25px;
            flex-direction: column;
            align-items: flex-start;
          }

          .join-logo {
            width: 210px;
            height: 210px;
            align-self: center;
          }

          .testimonial-grid {
            grid-template-columns: 1fr;
          }

          footer {
            flex-direction: column;
          }
        }

        @media (max-width: 560px) {
          .brand img {
            width: 34px;
            height: 34px;
          }

          .hero-points {
            gap: 20px;
          }

          .hero-points span {
            font-size: 8px;
          }

          .framework-grid {
            grid-template-columns: 1fr;
          }

          .framework-card {
            min-height: 220px;
          }

          .framework-icon {
            margin-top: 45px;
          }

          .market-map {
            padding: 0 8px;
            gap: 5px;
          }

          .market-title {
            top: 255px;
            right: 20px;
          }

          .join-float {
            right: 14px;
            bottom: 14px;
          }

          .join-box h2,
          .split h2,
          .framework-head h2,
          .portfolio-head h2,
          .testimonials-head h2 {
            font-size: 46px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }

          .reveal {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>

      <div className="site">

        {/* =========================
            NAVIGATION
        ========================= */}

        <header className="topbar">

          <a
            href="#home"
            className="brand"
            onClick={closeMenu}
          >
            <img
              src="/logo.jpg"
              alt="Syntax Opinion"
            />

            <span className="brand-text">
              <b>Syntax Opinion</b>
              <small>Capital</small>
            </span>
          </a>

          <nav className="desktop-nav">
            <a href="#about">About</a>
            <a href="#program">Framework</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#join">Join</a>
          </nav>

          <button
            className="menu-button"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>

        </header>


        {/* =========================
            MOBILE DRAWER
        ========================= */}

        <div
          className={`backdrop ${menuOpen ? "open" : ""}`}
          onClick={closeMenu}
        />

        <aside className={`drawer ${menuOpen ? "open" : ""}`}>

          <div className="drawer-head">
            <span>MENU</span>

            <button
              onClick={closeMenu}
              aria-label="Close menu"
            >
              ×
            </button>
          </div>

          <a href="#home" onClick={closeMenu}>
            01 / Home
          </a>

          <a href="#about" onClick={closeMenu}>
            02 / About
          </a>

          <a href="#program" onClick={closeMenu}>
            03 / Framework
          </a>

          <a href="#portfolio" onClick={closeMenu}>
            04 / Portfolio
          </a>

          <a href="#testimonials" onClick={closeMenu}>
            05 / Testimonials
          </a>

          <a href="#join" onClick={closeMenu}>
            06 / Join Syntax Opinion
          </a>

        </aside>


        <main>

          {/* =========================
              HERO
          ========================= */}

          <section
            className="section hero"
            id="home"
          >

            <div className="hero-grid">

              <div className="hero-copy reveal">

                <p className="eyebrow">
                  <span />
                  TRADING COMMUNITY · EST. 2026
                </p>

                <h1>
                  Decode the market.
                  <br />
                  Build <em>your edge.</em>
                </h1>

                <p className="lead">
                  Syntax Opinion Capital adalah komunitas edukasi trading
                  yang menggabungkan fundamental, technical, geopolitics,
                  market structure, dan risk management untuk membantu trader
                  membangun proses yang lebih terukur.
                </p>

                <div className="actions">

                  <a
                    className="btn light"
                    href="#join"
                  >
                    Join Syntax Opinion ↗
                  </a>

                  <a
                    className="btn outline"
                    href="#portfolio"
                  >
                    Explore Portfolio ›
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

                <div className="orb" />

                <div className="logo-card">

                  <img
                    src="/logo.jpg"
                    alt="Syntax Opinion Capital"
                  />

                  <div className="scan" />

                </div>

                <div className="floating-label a">
                  PROCESS
                  <br />
                  OVER PREDICTION
                </div>

                <div className="floating-label b">
                  FUNDAMENTAL
                  <br />
                  → TECHNICAL
                </div>

              </div>

            </div>

          </section>


          {/* =========================
              ABOUT
          ========================= */}

          <section
            className="section"
            id="about"
          >

            <div className="kicker reveal">
              01 / ABOUT
            </div>

            <div className="split">

              <h2 className="reveal">
                From market noise
                <br />
                to market <em>clarity.</em>
              </h2>

              <div className="reveal delay">

                <p className="big">
                  Kami membangun ruang belajar untuk trader yang ingin
                  memahami <strong>kenapa</strong> harga bergerak, bukan
                  sekadar mengejar ke mana harga bergerak.
                </p>

                <p
                  style={{
                    color: "#777b87",
                    fontSize: "12px",
                    lineHeight: 1.8,
                    maxWidth: "650px",
                  }}
                >
                  Framework Syntax Opinion Capital berangkat dari pembacaan
                  kondisi macro dan fundamental, lalu dikonfirmasi dengan
                  technical analysis. Setiap ide tetap membutuhkan validasi,
                  plan, dan risk management.
                </p>

                <div className="mini-grid">

                  <article>
                    <b>01</b>
                    <h3>Process</h3>
                    <p>
                      Alur analisis yang dapat diulang.
                    </p>
                  </article>

                  <article>
                    <b>02</b>
                    <h3>Context</h3>
                    <p>
                      Macro, geopolitics, dan price action.
                    </p>
                  </article>

                  <article>
                    <b>03</b>
                    <h3>Discipline</h3>
                    <p>
                      Risk management dalam keputusan.
                    </p>
                  </article>

                </div>

              </div>

            </div>

          </section>


          {/* =========================
              PROGRAM
          ========================= */}

          <section
            className="section program"
            id="program"
          >

            <div className="kicker reveal">
              02 / PROGRAM
            </div>

            <div className="framework-head reveal">

              <h2>
                What we <em>decode.</em>
              </h2>

              <p>
                Fundamental sebagai konteks utama, technical sebagai alat
                membaca struktur dan timing.
              </p>

            </div>


            <div className="framework-grid">

              <article className="framework-card reveal">
                <b>01</b>

                <div className="framework-icon">
                  ◎
                </div>

                <h3>
                  Fundamental & Macro
                </h3>

                <p>
                  Inflation, rates, central banks, labor data, USD, yields,
                  dan macro narratives.
                </p>
              </article>


              <article className="framework-card reveal delay">
                <b>02</b>

                <div className="framework-icon">
                  ⌁
                </div>

                <h3>
                  Technical Framework
                </h3>

                <p>
                  Multi-timeframe, market structure, price action, SNR/SND,
                  liquidity dan confirmation.
                </p>
              </article>


              <article className="framework-card reveal delay2">
                <b>03</b>

                <div className="framework-icon">
                  ↗
                </div>

                <h3>
                  Risk Management
                </h3>

                <p>
                  RR, position sizing, trading plan, drawdown control dan
                  execution discipline.
                </p>
              </article>


              <article className="framework-card reveal delay3">
                <b>04</b>

                <div className="framework-icon">
                  ◌
                </div>

                <h3>
                  Market Perspective
                </h3>

                <p>
                  Geopolitics dan global events diterjemahkan menjadi market
                  narrative yang lebih terstruktur.
                </p>
              </article>

            </div>

          </section>


          {/* =========================
              PORTFOLIO
          ========================= */}

          <section
            className="section portfolio"
            id="portfolio"
          >

            <div className="portfolio-head reveal">

              <div className="kicker">
                03 / PORTFOLIO
              </div>

              <h2>
                Our work,
                <br />
                our <em>framework.</em>
              </h2>

            </div>


            <div className="portfolio-grid">

              <article className="market-card reveal">

                <div className="market-card-top">
                  XAUUSD · USD · YIELDS · RISK
                </div>

                <div className="market-map">

                  <span className="bar" style={{ height: "34%" }} />
                  <span className="bar" style={{ height: "43%" }} />
                  <span className="bar" style={{ height: "38%" }} />
                  <span className="bar" style={{ height: "57%" }} />
                  <span className="bar" style={{ height: "48%" }} />
                  <span className="bar" style={{ height: "70%" }} />
                  <span className="bar" style={{ height: "61%" }} />
                  <span className="bar" style={{ height: "78%" }} />
                  <span className="bar" style={{ height: "55%" }} />
                  <span className="bar" style={{ height: "73%" }} />
                  <span className="bar" style={{ height: "64%" }} />
                  <span className="bar" style={{ height: "83%" }} />

                </div>

                <div className="market-title">
                  MARKET MAP
                </div>

                <div className="market-info">

                  <small>
                    DAILY ANALYSIS
                  </small>

                  <h3>
                    Fundamental → Technical → Execution
                  </h3>

                  <p>
                    Portofolio konten edukasi dan market analysis yang
                    dirancang untuk mengubah data menjadi kerangka berpikir
                    yang mudah dipahami.
                  </p>

                </div>

              </article>


              <div className="portfolio-side">

                <a
                  href="#join"
                  className="portfolio-link reveal delay"
                >
                  <small>
                    COMMUNITY
                  </small>

                  <strong>
                    Syntax Opinion Public Group
                  </strong>

                  <span>
                    WhatsApp / Telegram · Join free
                  </span>

                  <span>
                    ↗
                  </span>
                </a>


                <a
                  href="#join"
                  className="portfolio-link reveal delay2"
                >
                  <small>
                    PREMIUM
                  </small>

                  <strong>
                    Syntax Opinion Capital
                  </strong>

                  <span>
                    Structured learning & market discussion
                  </span>

                  <span>
                    ↗
                  </span>
                </a>


                <a
                  href="#join"
                  className="portfolio-link reveal delay3"
                >
                  <small>
                    PARTNERSHIP
                  </small>

                  <strong>
                    ULTIMA / Broker Link
                  </strong>

                  <span>
                    Collaboration & affiliate inquiries
                  </span>

                  <span>
                    ↗
                  </span>
                </a>

              </div>

            </div>

          </section>


          {/* =========================
              TESTIMONIALS
          ========================= */}

          <section
            className="section testimonials"
            id="testimonials"
          >

            <div className="kicker reveal">
              04 / TESTIMONIALS
            </div>

            <div className="testimonials-head reveal">

              <h2>
                Built with the
                <br />
                <em>community.</em>
              </h2>

              <p>
                Dokumentasi diskusi, outlook, analisis, dan hasil pembelajaran
                dari komunitas. Ditampilkan sebagai dokumentasi komunitas,
                bukan jaminan hasil trading.
              </p>

            </div>


            <div className="testimonial-grid">

              {testimonials.map((item, index) => (

                <article
                  key={item.image}
                  className={`testimonial-card reveal ${
                    index % 2 === 1 ? "delay" : ""
                  }`}
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
                      VIEW IMAGE ↗
                    </div>

                  </div>

                  <div className="card-meta">

                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <b>
                      {item.title}
                    </b>

                  </div>

                </article>

              ))}

            </div>

          </section>


          {/* =========================
              JOIN
          ========================= */}

          <section
            className="section join"
            id="join"
          >

            <div className="join-box reveal">

              <div>

                <p className="eyebrow">
                  <span />
                  SYNTAX OPINION CAPITAL
                </p>

                <h2>
                  Ready to decode
                  <br />
                  the <em>market?</em>
                </h2>

                <p>
                  Gabung ke ekosistem Syntax Opinion Capital dan bangun
                  proses trading yang lebih terstruktur.
                </p>

                <div className="actions">

                  <a
                    className="btn light"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();

                      /*
                       * GANTI LINK DI SINI
                       *
                       * Contoh:
                       * https://chat.whatsapp.com/XXXXXXXX
                       *
                       * atau Telegram:
                       * https://t.me/XXXXXXXX
                       */

                      window.open(
                      "https://chat.whatsapp.com/GlNJ4cfGPHtDjhWV7h8Bpf",
                      "_blank"
);
                    }}
                  >
                    WhatsApp Community ↗
                  </a>

                  <a
                    className="btn outline"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();

                      window.open(
                        "https://instagram.com/",
                        "_blank"
                      );
                    }}
                  >
                    Instagram ↗
                  </a>

                </div>

                <small className="join-note">
                  Ganti link WhatsApp dan Instagram dengan link asli Anda.
                </small>

              </div>


              <img
                className="join-logo"
                src="/logo.jpg"
                alt="Syntax Opinion Capital"
              />

            </div>

          </section>

        </main>


        {/* =========================
            FLOATING JOIN
        ========================= */}

        <a
          href="#join"
          className="join-float"
        >
          JOIN SYNTAX OPINION
          <b>
            ↗
          </b>
        </a>


        {/* =========================
            LIGHTBOX
        ========================= */}

        {lightbox && (

          <div
            className="lightbox"
            onClick={() => setLightbox(null)}
          >

            <button
              className="lightbox-close"
              onClick={() => setLightbox(null)}
              aria-label="Close image"
            >
              ×
            </button>

            <img
              src={lightbox}
              alt="Testimonial"
              onClick={(e) => e.stopPropagation()}
            />

          </div>

        )}


        {/* =========================
            FOOTER
        ========================= */}

        <footer>

          <span>
            SYNTAX OPINION CAPITAL
          </span>

          <span>
            NO ERROR. ONLY TRUE CODE.
          </span>

          <span>
            © 2026
          </span>

        </footer>

      </div>
    </>
  );
}
