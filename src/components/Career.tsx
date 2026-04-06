import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>High-Performance Engineering Team</h5>
              </div>
              <h3>RECENT</h3>
            </div>
            <p>
              Operating within the engineering team to build high-performance internal tools and optimize development workflows. I applied my background in backend architecture to streamline processes for senior engineering teams.
              <br /><br />
              <b>Pipeline Optimization:</b> Engineered robust Python automation scripts to accelerate data ingestion and testing workflows, reducing manual processing time.<br />
              <b>Internal Tooling:</b> Architected and built a web-based dashboard for visualizing real-time hardware system performance metrics.<br />
              <b>System Reliability:</b> Maintained CI/CD pipelines and debugged backend infrastructure to ensure stability across environments.<br />
              <br />
              <i>Gained immersive experience in writing production-grade code at scale, understanding the rigorous standards required for high-performance computing.</i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
