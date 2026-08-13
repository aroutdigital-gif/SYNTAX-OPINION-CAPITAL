'use client';

import { ArrowUpRight, ChevronRight, Instagram, Menu, Moon, Send, ShieldCheck, TrendingUp, Users, X, Youtube } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  { title: 'Member Community', text: 'Materi dan pembahasan lebih terstruktur. Saya jadi lebih paham bagaimana membaca konteks market sebelum mengambil keputusan.', image: '/images/reference-testimonial-1.jpg' },
  { title: 'Member Community', text: 'Bukan sekadar signal. Saya suka karena ada pembahasan tentang alasan di balik pergerakan market dan risk management.', image: '/images/reference-testimonial-2.jpg' },
];

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#home"><span>Syntax</span> Opinion <b>Capital</b></a>
        <div className={`navlinks ${open ? 'show' : ''}`}>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#program" onClick={() => setOpen(false)}>Program</a>
          <a href="#portfolio" onClick={() => setOpen(false)}>Portfolio</a>
          <a href="#testimonials" onClick={() => setOpen(false)}>Testimonials</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
        <button className="iconBtn mobile" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X/> : <Menu/>}</button>
        <a className="navCta desktop" href="#contact">Join Community <ArrowUpRight size={16}/></a>
      </nav>

      <section id="home" className="hero shell">
        <div className="heroGlow" />
        <div className="heroCopy">
          <div className="eyebrow"><span className="dot"/> TRADING COMMUNITY • EST. 2026</div>
          <h1>Decode the market.<br/><em>Build your edge.</em></h1>
          <p>Syntax Opinion Capital adalah komunitas edukasi trading yang menggabungkan fundamental, technical, geopolitics, market structure, dan risk management untuk membantu trader membangun proses yang lebih terukur.</p>
          <div className="actions">
            <a className="primary" href="#contact">Join Syntax Opinion <ArrowUpRight size={18}/></a>
            <a className="secondary" href="#portfolio">Explore Portfolio <ChevronRight size={18}/></a>
          </div>
          <div className="stats">
            <div><strong>01</strong><span>Fundamental First</span></div>
            <div><strong>02</strong><span>Technical Context</span></div>
            <div><strong>03</strong><span>Risk Discipline</span></div>
          </div>
        </div>
        <div className="heroCard">
          <div className="cardTop"><span>SYNTAX / OPINION</span><span>CAPITAL</span></div>
          <div className="orb"><div className="orbText"><b>S</b><span>OPINION<br/>CAPITAL</span></div></div>
          <div className="miniChart"><div className="chartLine"/><i/><i/><i/><i/><i/></div>
          <div className="cardBottom"><span>MARKET INTELLIGENCE</span><strong>CLARITY OVER HYPE</strong></div>
        </div>
      </section>

      <section id="about" className="section shell">
        <div className="sectionHead"><span>01 / ABOUT</span><h2>From market noise<br/><em>to market clarity.</em></h2></div>
        <div className="aboutGrid">
          <div className="aboutText"><p className="lead">Kami membangun ruang belajar untuk trader yang ingin memahami <b>mengapa</b> market bergerak, bukan hanya mengejar ke mana harga bergerak.</p><p>Framework Syntax Opinion Capital berangkat dari pembacaan kondisi makro dan fundamental, lalu dikonfirmasi dengan technical analysis. Setiap ide tetap membutuhkan validasi, plan, dan risk management.</p><div className="pillRow"><span>Fundamental</span><span>Technical</span><span>Geopolitics</span><span>Risk Management</span></div></div>
          <div className="principles"><div><ShieldCheck/><h3>Process over prediction</h3><p>Fokus pada proses yang dapat diulang, bukan janji hasil.</p></div><div><TrendingUp/><h3>Context before entry</h3><p>Memahami konteks market sebelum mencari setup.</p></div><div><Users/><h3>Learn together</h3><p>Diskusi komunitas untuk memperluas sudut pandang.</p></div></div>
        </div>
      </section>

      <section id="program" className="section darkSection"><div className="shell"><div className="sectionHead light"><span>02 / PROGRAM</span><h2>What we <em>decode.</em></h2></div><div className="programGrid">
        {[['01','Fundamental & Macro','Inflation, rates, central banks, labor data, USD, yields and macro narratives.'],['02','Technical Framework','Multi-timeframe, market structure, price action, SNR/SND, liquidity and confirmation.'],['03','Risk Management','RR, position sizing, trading plan, drawdown control and execution discipline.'],['04','Market Perspective','Geopolitics and global events translated into a structured market narrative.']].map(([n,t,d])=><article className="programCard" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p><ArrowUpRight className="arrow"/></article>)}
      </div></div></section>

      <section id="portfolio" className="section shell"><div className="sectionHead"><span>03 / PORTFOLIO</span><h2>Our work,<br/><em>our framework.</em></h2></div><div className="portfolioGrid"><div className="portfolioFeature"><div className="featureVisual"><div className="gridLines"/><div className="ticker">XAUUSD • USD • YIELDS • RISK</div><div className="bars"><b/><b/><b/><b/><b/><b/><b/><b/><b/><b/><b/><b/></div><div className="featureLabel">SYNTAX<br/><strong>MARKET MAP</strong></div></div><div className="featureText"><span>DAILY ANALYSIS</span><h3>Fundamental → Technical → Execution</h3><p>Portfolio konten edukasi dan market analysis yang dirancang untuk mengubah data menjadi kerangka berpikir yang mudah dipahami.</p></div></div><div className="linkCards"><a href="#contact"><span>COMMUNITY</span><strong>Syntax Opinion Public Group</strong><small>WhatsApp / Telegram • Join free</small><ArrowUpRight/></a><a href="#contact"><span>PREMIUM</span><strong>Syntax Opinion Capital</strong><small>Structured learning & market discussion</small><ArrowUpRight/></a><a href="#contact"><span>PARTNERSHIP</span><strong>FTM / Broker Link</strong><small>Collaboration & affiliate inquiries</small><ArrowUpRight/></a></div></div></section>

      <section id="testimonials" className="section soft"><div className="shell"><div className="sectionHead"><span>04 / TESTIMONIALS</span><h2>Built with the<br/><em>community.</em></h2></div><div className="testGrid">{testimonials.map((t,i)=><article className="testCard" key={i}><div className="testImage" style={{backgroundImage:`url(${t.image})`}}/><div className="testBody"><div className="stars">★★★★★</div><p>“{t.text}”</p><strong>{t.title}</strong><small>Syntax Opinion Community</small></div></article>)}</div><p className="disclaimer">Testimonial ditampilkan sebagai pengalaman komunitas. Tidak ada jaminan profit atau hasil trading tertentu.</p></div></section>

      <section id="contact" className="cta shell"><div><span>05 / CONNECT</span><h2>Ready to decode<br/><em>the market?</em></h2><p>Gabung ke ekosistem Syntax Opinion Capital dan bangun proses trading yang lebih terstruktur.</p></div><div className="ctaActions"><a className="primary" href="https://chat.whatsapp.com/HENFN30hQncDK2Rbo0uRmP?s=cl&p=a&ilr=4"
  target="_blank"
  rel="noopener noreferrer">WhatsApp Community <Send size={17}/></a> 
  
  <a className="secondary" href="https://www.instagram.com/ari.sesa/"
  target="_blank"
  rel="noopener noreferrer"> Instagram <Instagram size={17} /></a>
  <a  className="secondary" href="https://www.ultimamarkets-id.com/id/accounts/open-trading-account/?affid=MjI1OTkyNjc="
  target="_blank"
  rel="noopener noreferrer"
    >
  Open Trading Account <ArrowUpRight size={17} /> </a>
  </div></section>

      <footer className="footer shell"><div className="brand"><span>Syntax</span> Opinion <b>Capital</b></div><p>© 2026 Syntax Opinion Capital. Education & community only.</p><div className="social"><a href="#home"><Youtube size={18}/></a><a href="https://www.instagram.com/"><Instagram size={18}/></a><a href="https://t.me/"><Send size={18}/></a></div></footer>
    </main>
  );
}
