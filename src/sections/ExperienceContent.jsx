import "./ExperienceContent.css";
import { experienceData } from "../data/portfolioData";
import { FaCalendarAlt } from "react-icons/fa";

const ExperienceContent = () => {
  return (
    <section className="experience-section">
      <div className="timeline">
        {experienceData.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot" />

            <div className="timeline-content">
              <div className="timeline-header">
                <img
                  src={item.logo}
                  alt={item.company}
                  className="company-logo"
                />

                <div>
                  <h3>{item.role}</h3>
                  <span className="company"><strong>{item.company}</strong></span>
                </div>
              </div>

              <span className="period">
                <FaCalendarAlt className="period-icon" />
                {item.period}
              </span>

              <ul className="experience-list">
                {item.highlights?.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceContent;