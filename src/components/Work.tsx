import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

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
    category: "Intelligent Cooking OS (YC Hackathon Winner)",
    tools: "AI Computer Vision, Voice Mentor, Generative Personas",
    image: "/images/cookmate.png.jpeg",
    link: "https://github.com/himanshu-anonymous",
  },
  {
    title: "Satark",
    category: "Collaborative Fintech Security Engine",
    tools: "FastAPI, Neo4j, Celery, React, Frame Motion",
    image: "/images/satark.png.jpg",
    link: "https://github.com/himanshu-anonymous/WelfareGuard-AI",
  },
  {
    title: "Nexus Lidar",
    category: "Hardware & 3D Sensor Integration",
    tools: "Lidar Scanning, Point Clouds",
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
    category: "Hybrid Quantum-Neural Architecture",
    tools: "Quantum Computing, Agentic AI",
    image: "/images/quantum.png",
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

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                        {project.description && (
                          <div className="carousel-description" style={{ marginTop: "1rem", fontSize: "0.85rem", color: "#ccc", whiteSpace: "pre-wrap", lineHeight: 1.4, maxHeight: "150px", overflowY: "auto", paddingRight: "5px" }}>
                            {project.description}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
