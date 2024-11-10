import React from "react";

type SkillBarProps = {
  skill: string;
  percentage: number;
  color: string;
};

const SkillBar: React.FC<SkillBarProps> = ({ skill, percentage, color }) => {
  return (
    <div className="skill-bar">
      <h1 className="skill-title">{skill}</h1>

      <div className="skill-bar-track">
        <div
          className="skill-bar-fill"
          style={{
            width: `${percentage}%`,
            backgroundColor: color,
          }}
        ></div>
      </div>

      <h1 className="skill-percentage">{percentage}%</h1>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <div className="skills-section">
      <h1 className="skills-title">
        <span className="text-white">My</span>
        <span className="highlight">Skills</span>
      </h1>

      <div className="skills-list">
        <SkillBar skill="HTML" percentage={65} color="#F86F03" />
        <SkillBar skill="CSS" percentage={70} color="#F86F03" />
        <SkillBar skill="JavaScript" percentage={60} color="#F86F03" />
        <SkillBar skill="Typescript" percentage={65} color="#F86F03" />
        <SkillBar skill="Next.js" percentage={55} color="#F86F03" />
        <SkillBar skill="Tailwind CSS" percentage={70} color="#F86F03" />
        <SkillBar skill="Adobe Photoshop" percentage={90} color="#F86F03" />
        <SkillBar skill="Adobe Illustrator" percentage={95} color="#F86F03" />
      </div>
    </div>
  );
};

export default Skills;
