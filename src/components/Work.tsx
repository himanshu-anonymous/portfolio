import { useState, useCallback, useEffect } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";


const projects = [
  {
    title: "Apex Interceptor",
    category: "6DOF Hit-to-Kill Aerospace System",
    tools: "6DOF EOM, RK4 Integration, Proportional Navigation, EKF, JIT-Backend",
    description: "Most simulations are 'dots chasing dots.' I built a system that obeys the laws of aerospace physics. Following my GTC win and multiple hackathons, I’ve architected Apex Interceptor—a high-fidelity GNC system modeled after the PAC-3 MSE and THAAD.\n\nThe system transitioned from a 'trace' to a validated 'kill' at Mach 2.4+. As a first-year CSE student and lead of #runtimeterrors, this was a masterclass in vector calculus and real-time systems architecture.",
    image: "/images/defence system.jpg",
    link: "https://github.com/himanshu-anonymous",
  },
  {
    title: "Cookmate",
    category: "CookMate is an Intelligent Cooking Operating System. We don't just teach recipes; we prevent a decade of poor health outcomes. Intelligent Cooking OS (YC Hackathon Winner)",
    tools: "Python, Azure Vision, TTS, Prediction Logics and Generative Personalities",
    image: "/images/cookmate.png.jpeg",
    link: "https://github.com/himanshu-anonymous",
  },
  {
    title: "Satark",
    category: "Collaborative Fintech Security Engine to detect and patch Financial Frauds",
    tools: "Python, FastAPI, Neo4j, Celery, React, Frame Motion",
    image: "/images/satark.png.jpg",
    link: "https://github.com/himanshu-anonymous/WelfareGuard-AI",
  },
  {
    title: "Nexus Lidar",
    category: "LiDAR program simulation that uses a camera sensor to analyze depth based on light intensity, integrated with MediaPipe for hand gestures and an interactive Three.js 3D web interface. Hardware & 3D Sensor Integration with Light Sensitivity",
    tools: "Lidar Scanning, Point Clouds, MediaPipe, Three.js",
    image: "/images/nexus.png.jpg",
    link: "https://github.com/himanshu-anonymous/NexusLidar",
  },
  {
    title: "Asha Copilot",
    category: "AI Agent Copilot",
    tools: "LLMs, System Architecture",
    image: "/images/asha.png.jpg",
    link: "https://github.com/himanshu-anonymous/Asha-Copilot-",
  },
  {
    title: "Quantum Neural Agent",
    category: "A hybrid AI system that combines Quantum Computing (Grover's Algorithm) with Deep Reinforcement Learning to navigate a non-stationary city environment. This project demonstrates how quantum intuition can be combined with neural experience to solve complex, real-time routing problems. Hybrid Quantum-Neural Architecture",
    tools: "Quantum Computing",
    image: "/images/nexus.png.jpg",
    link: "https://github.com/himanshu-anonymous/Hybrid-Quantum-Neural-City-Agent",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide, projects.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [goToNext]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="work-split-layout">
          <div className="work-details-side">
            <div className="carousel-info">
              <div className="carousel-number">
                <h3>0{currentIndex + 1}</h3>
              </div>
              <div className="carousel-details">
                <h4>{projects[currentIndex].title}</h4>
                <p className="carousel-category">
                  {projects[currentIndex].category}
                </p>
                <div className="carousel-tools">
                  <span className="tools-label">Tools & Features</span>
                  <p>{projects[currentIndex].tools}</p>
                </div>
                {projects[currentIndex].description && (
                  <div className="carousel-description" style={{ marginTop: "1rem", fontSize: "0.85rem", color: "#ccc", whiteSpace: "pre-wrap", lineHeight: 1.4, maxHeight: "150px", overflowY: "auto", paddingRight: "5px" }}>
                    {projects[currentIndex].description}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="work-stack-side">
            <div className="work-stack-instruction" style={{ textAlign: "center", marginBottom: "1rem", color: "rgba(255, 255, 255, 0.5)", fontSize: "0.85rem", letterSpacing: "1px", textTransform: "uppercase" }}>
              Click on card to view next
            </div>
            <div className="gallery-stack-container" style={{ perspective: "900px" }} onClick={goToNext} data-cursor="disable">
              {projects.map((project, index) => {
                let rel = index - currentIndex;
                const total = projects.length;
                
                // Wrap around for circular effect
                if (rel < -Math.floor(total / 2)) rel += total;
                if (rel > Math.floor(total / 2)) rel -= total;
                
                const absRel = Math.abs(rel);
                const zStep = 80;
                const scaleStep = 0.12;
                const gap = 40;
                
                const z = -absRel * zStep;
                const scale = 1 / (1 + absRel * scaleStep);
                const x = rel * gap;
                const opacity = rel === 0 ? 1 : Math.max(0, 0.7 - 0.1 * absRel);
                const y = rel * 60;
                const rotate = rel * 10;
                const zIndex = 100 - absRel;

                return (
                  <div
                    key={index}
                    className="gallery-stack-card"
                    style={{
                      zIndex: zIndex,
                      transform: `translateX(${x}px) translateY(${y}px) translateZ(${z}px) scale(${scale}) rotateZ(${rotate}deg)`,
                      opacity: opacity,
                      pointerEvents: rel === 0 ? 'auto' : 'none',
                      transition: 'transform 0.5s cubic-bezier(0.4, 2, 0.3, 1), opacity 0.4s',
                      boxShadow: rel === 0 ? "0 8px 32px rgba(0,0,0,0.18)" : "0 2px 8px rgba(0,0,0,0.08)",
                      borderRadius: "36px"
                    }}
                  >
                    <WorkImage
                      image={project.image}
                      alt={project.title}
                      link={project.link}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="carousel-dots">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to project ${index + 1}`}
              data-cursor="disable"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
