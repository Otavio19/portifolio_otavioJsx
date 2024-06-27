import "./style.css";
import Redirect from "../../components/Redirect";

const Skills = () => {
  return (
    <div className="skillsContainer">
      <h1 className="skillsTitle">Conhecimentos</h1>
      <div className="skillsBox">
        <Redirect text="Scrum" />
        <Redirect text="React" />
        <Redirect text="Angular" />
        <Redirect text="Kanban" />
        <Redirect text="NodeJs" />
        <Redirect text="HTML/ CSS / JS" />
        <Redirect text="Git / GitHub" />
        <Redirect text="PostgreSQL" />
        <Redirect text="MySQL" />
      </div>
      <div className="bgSkills">
        <h1 className="comment">SKILLS</h1>
      </div>
    </div>
  );
};

export default Skills;
