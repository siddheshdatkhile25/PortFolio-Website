import java from "../assets/skills/java.png";
import spring from "../assets/skills/spring.png";
import react from "../assets/skills/react.png";
import mysql from "../assets/skills/mysql.png";
import node from "../assets/skills/node.png";
import cpp from "../assets/skills/cpp.png";
import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import js from "../assets/skills/js.png";
import git from "../assets/skills/git.png";


export default function Skills() {
  const skills = [
    { name: "Java", logo: java },
    { name: "Spring Boot", logo: spring },
    { name: "React", logo: react },
    { name: "MySQL", logo: mysql },
    { name: "Node.js", logo: node },
    { name: "C++", logo: cpp },
    { name: "HTML", logo: html },
    { name: "CSS", logo: css },
    { name: "JavaScript", logo: js },
    { name: "Git", logo: git }
  ];

  return (
    <section id="skills">
      <div className="container">
        <h2>Skills</h2>

        <div className="grid grid-5">
          {skills.map(skill => (
            <div key={skill.name} className="skill-card">
              <img src={skill.logo} alt={skill.name} />
              <h4>{skill.name}</h4>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
