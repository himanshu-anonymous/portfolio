import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./style.css";

// Import local premium components (rebuilt from Framer blueprints)
import PixelScroll from "./components/PixelScroll";
import StackingSlider from "./components/StackingSlider";
import GlassyButton from "./components/GlassyButton";
import TypewriterEffect from "./components/TypewriterEffect";

// Import all 10 slides from localized assets
import img23 from "./assets/23.png";
import img3 from "./assets/3.png";
import imgOut from "./assets/Out on Wed, 16 Jul 1200 am (2).png";
import imgWhatsApp1 from "./assets/WhatsApp Image 2026-04-15 at 3.45.10 PM.jpeg";
import imgWhatsApp2 from "./assets/WhatsApp Image 2026-04-15 at 3.46.01 PM.jpeg";
import imgDuotone from "./assets/duotonex pro.png";
import imgGulabiras from "./assets/gulabiras.png";
import imgMankshu from "./assets/mankshu king card2.png";
import imgMavnni from "./assets/mavnni painted as van gogh.png";
import imgRando from "./assets/rando majnu.png";
import imgElemental from "./assets/Elemental Experiment.png";
import imgArrangement from "./assets/Arrangement skillography.png";
import imgAbstractEye from "./assets/Abstract eye plating.png";
import videoFallInLove from "./assets/fall in love 3.mp4";

const App = () => {
  // Construct array of visual asset paths
  const slides = [
    img23,
    img3,
    imgOut,
    imgWhatsApp1,
    imgWhatsApp2,
    imgDuotone,
    imgGulabiras,
    imgMankshu,
    imgMavnni,
    imgRando,
    imgElemental,
    imgArrangement,
    imgAbstractEye,
  ];

  // Configured creative slide metadata
  const titles = [
    "a gradient texture map",
    "Experimental marathi typography of a friend of mine",
    "An album art and promotional art for @vasu raina",
    "grid photography",
    "Experimental photography",
    "painted art",
    "Modern traditional artwork",
    "Experimental card design",
    "Vangogh Starry nights",
    "Retro modern art",
    "Elemental Experiment",
    "Arrangement skillography",
    "Abstract eye plating",
  ];
  
  const subs = [
    "experimental art",
    "Experimenting textures",
    "Performed well on instagram",
    "",
    "",
    "",
    "",
    "",
    "for a friend of mine",
    "",
    "texture study",
    "compositional grid",
    "surreal digital art",
  ];

  return (
    <div className="artfolio-app">
      {/* 1. Scroll-Driven Pixel Background (Local component) */}
      <div className="pixel-backdrop">
        <PixelScroll />
      </div>

      {/* Hero Header Section (No Navigation Bar) */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-tag">VISUAL SHOWCASE & DIGITAL ART</span>
          
          {/* 2. Typewriter Effect Heading (Local component) */}
          <div className="hero-title-container">
            <TypewriterEffect 
              text="ARTFOLIO" 
              words={[{ word: "ARTFOLIO" }]} 
              textColor="#ffffff"
              font={{ fontWeight: "900", fontSize: "clamp(48px, 8vw, 76px)" }}
            />
          </div>

          <p className="hero-subtitle">
            A curated visual compilation displaying experimental typography, luxury branding layouts, and paint-styled digital portraits.
          </p>
        </div>
      </section>

      {/* Main Stacking Slider Showcase Section */}
      <main className="carousel-section">
        <div className="carousel-container">
          {/* 3. Stacking Slider (Local component with custom slide cards) */}
          <StackingSlider cardGap={24} stackOffset={36} buttonPosition="center">
            {slides.map((src, index) => (
              <div key={index} className="stack-card">
                <img src={src} alt={`Slide ${index + 1}`} className="stack-img" />
                <div className="stack-card-overlay">
                  <h3>{titles[index % titles.length]}</h3>
                  {subs[index % subs.length] && <p>{subs[index % subs.length]}</p>}
                </div>
              </div>
            ))}
          </StackingSlider>
        </div>
      </main>

      {/* 5. Introduction to Art Section */}
      <section className="intro-section">
        <div className="intro-container">
          <div className="intro-header">
            <span className="intro-tag">THE ARTIST BEHIND THE WORK</span>
            <h2 className="intro-heading">
              I’m Himanshu, also known as <span className="highlight-text">Mankshu</span>—the artistic, experimental side of me. I thrive on creativity and have built a career understanding how social media flows, shaping narratives, and amplifying brands.
            </h2>
          </div>

          <div className="intro-grid">
            <div className="intro-card">
              <div className="card-num">01</div>
              <h3>Brand Identities</h3>
              <p>Worked with leading media agencies to craft brand identities.</p>
            </div>
            <div className="intro-card">
              <div className="card-num">02</div>
              <h3>Art Films & Video Ads</h3>
              <p>Shot and post-produced art films and video ads for companies.</p>
            </div>
            <div className="intro-card">
              <div className="card-num">03</div>
              <h3>Experimental Art</h3>
              <p>Recently ventured into personal experimental art, exploring unconventional forms of expression.</p>
            </div>
            <div className="intro-card">
              <div className="card-num">04</div>
              <h3>Influential Network</h3>
              <p>Built a vast and effective network among the country’s most influential media creatives, collaborating with nearly all the big names in modern media.</p>
            </div>
          </div>

          <div className="intro-footer">
            <p className="intro-footer-text">
              At my core, I’m an extremely creative person who bridges artistry with strategy, blending innovation with impact.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive CTA buttons inside Artfolio (including Return route) */}
      <section className="gallery-actions">
        <a href="/#work" style={{ textDecoration: "none" }}>
          <GlassyButton text="Browse CGI Works">
            Browse My Other Work
          </GlassyButton>
        </a>
        <a href="/#" style={{ textDecoration: "none" }}>
          <GlassyButton text="Main Portfolio">
            Main Portfolio
          </GlassyButton>
        </a>
        <a href="/#contact" style={{ textDecoration: "none" }}>
          <GlassyButton text="Get In Touch">
            Get In Touch
          </GlassyButton>
        </a>
      </section>

      {/* 6. Cinematic Video Showcase Section */}
      <section className="video-showcase-section">
        <div className="video-showcase-container">
          <span className="video-tag">CINEMATIC PIECE</span>
          <h2 className="video-heading">FALL IN LOVE</h2>
          <div className="video-player-wrapper">
            <video
              src={videoFallInLove}
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              className="showcase-video"
            />
            <div className="video-player-overlay" />
          </div>
        </div>
      </section>

      {/* 4. Copy-Pasted Footer from Main Portfolio Website */}
      <footer className="footer-contact-wrapper">
        <div className="contact-section section-container" id="contact">
          <div className="contact-container">
            <h3>Contact</h3>
            <div className="contact-flex">
              <div className="contact-box">
                <h4>Connect</h4>
                <p>
                  <a
                    href="https://github.com/himanshu-anonymous"
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="disable"
                  >
                    GitHub — himanshu-anonymous
                  </a>
                </p>
                <h4>Accolades</h4>
                <ul className="accolades-list">
                  <li>Champion — GTC (2023–2025)</li>
                  <li>Winner — YC Hack Poona Event</li>
                  <li>Top Contender — Gemini Agentic AI Labs</li>
                  <li>Winner — Nvidia IDRIS Hackathon</li>
                  <li>Winner — Power to Fly Diversity Hackathon</li>
                </ul>
              </div>
              
              <div className="contact-box">
                <h4>Social</h4>
                <a
                  href="https://github.com/himanshu-anonymous"
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="disable"
                  className="contact-social"
                >
                  GitHub <MdArrowOutward />
                </a>
                <a
                  href="https://www.linkedin.com/in/himanshu-patil-b35552379/"
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="disable"
                  className="contact-social"
                >
                  LinkedIn <MdArrowOutward />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="disable"
                  className="contact-social"
                >
                  Twitter <MdArrowOutward />
                </a>
              </div>
              
              <div className="contact-box">
                <h2>
                  Designed and Developed <br /> by <span>Himanshu Patil</span>
                </h2>
                <h5>
                  <MdCopyright /> 2026
                </h5>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
