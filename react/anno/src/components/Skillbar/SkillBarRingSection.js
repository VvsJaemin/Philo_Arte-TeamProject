import React from "react";
import SkillbarRing from "./SkillbarRing";
import imgBg from "../../assets/images/background/stars-bg-4.png";

const SkillBarRingSection = ({ data }) => {
  return (
    <section
      style={{ background: `url(${imgBg}) center center no-repeat #fff` }}
    >
      <div className="container">
        <div className="row chart-style-03 text-center">
          {data.map((skill) => (
            <SkillbarRing key={skill.id} title={skill.title} value={skill.value} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillBarRingSection;
