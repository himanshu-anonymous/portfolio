import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <div className="para" style={{ lineHeight: "1.6" }}>
          I orchestrate digital ecosystems where rigorous system architecture meets exceptional design. I approach engineering with a holistic philosophy: a robust backend is redundant without an intuitive interface, and beautiful design is hollow without resilient infrastructure. I am a Product Builder who engineers with precision from the database schema up to the final pixel.
          <br /><br />
          <b>Operational Excellence:</b><br />
          - <b>High-Stakes Execution:</b> Proven ability to deliver viable, scalable products under extreme constraints, evidenced by many Global Hackathon wins.<br />
          - <b>Consistent Performance:</b> Consecutive champion of the GTC (2023–2025) across Junior and Senior categories.<br />
          - <b>Market Strategy:</b> I bridge the gap between technical engineering and audience engagement, managing content pipelines to ensure product-market fit.<br />
          <br />
          Currently architecting high-performance backends while refining a distinct, niche design aesthetic.
        </div>
      </div>
    </div>
  );
};

export default About;
