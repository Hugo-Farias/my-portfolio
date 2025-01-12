import "./SkillsSection.scss";
import SkillCard from "./SkillCard";

const DUMMY_DATA = [
  { name: "HTML", image: "html" },
  { name: "CSS", image: "css" },
  { name: "Javascript", image: "javascript" },
  { name: "Typescript", image: "typescript" },
  { name: "React", image: "react" },
  { name: "TailwindCSS", image: "tailwind" },
  { name: "SASS", image: "sass" },
  { name: "Python", image: "python" },
  // { name: "Git", image: "git" },
  // { name: "Bash", image: "bash" },
];

const SkillsSection = function () {
  const contentJSX = DUMMY_DATA.map((v, i) => {
    return <SkillCard key={i} data={v} />;
  });

  return (
    <>
      <section className="skills-section">
        <div className="skills-grid">{contentJSX}</div>
      </section>
    </>
  );
};

export default SkillsSection;
