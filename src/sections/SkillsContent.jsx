import "./SkillsContent.css";
import { skills } from "../data/portfolioData";

const Stars = ({ level }) => {
  return (
    <div className="stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < level ? "star filled" : "star"}>
          ★
        </span>
      ))}
    </div>
  );
};

const SkillsContent = () => {
  return (
    <section className="skills-section">
      <div className="skills-grid">
        {skills.map((group, i) => (
          <div key={i} className="skills-card">
            <h3>{group.category}</h3>

            <ul className="skills-list">
              {group.items.map((skill, j) => (
                <li key={j} className="skills-item">
                  <span className="skill-name">{skill.name}</span>
                  <Stars level={skill.level} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="skills-legend">
        <span>⭐ 5 = Advanced</span>
        <span>⭐ 4 = Strong</span>
        <span>⭐ 3 = Intermediate</span>
        <span>⭐ 2 = Beginner</span>
        <span>⭐ 1 = Basic</span>
      </div>
    </section>
  );
};

export default SkillsContent;