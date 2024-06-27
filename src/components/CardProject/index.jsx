import Redirect from "../Redirect";
import "./style.css";
const CardProject = ({ titleProject, imgProject, desc, urlBtn }) => {
  return (
    <div className="projectCard">
      <div className="titleProject">{titleProject}</div>
      <div className="imgProject">
        <img src={imgProject} alt="" />
      </div>
      <div className="desc">{desc}</div>
      <div className="buttonCard">
        <Redirect text="Acessar Projeto" url={urlBtn} />
      </div>
    </div>
  );
};

export default CardProject;
