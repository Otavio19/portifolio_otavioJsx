import "./style.css";
import lading from "../../assets/projetoLanding.png";
import integrador from "../../assets/projetoIntegrador.png";
import CardProject from "../../components/CardProject";

const Projects = () => {
  return (
    <div className="projectsContainer">
      <p className="comment">//Principais</p>
      <h2 className="comment titleProjectSection">Projetos</h2>
      <div className="cardsContainer">
        <CardProject
          titleProject="Projeto Pedidos"
          imgProject={integrador}
          desc={
            <>
              <p className="comment">//Login: recrutador@gmail.com</p>
              <p className="comment">//Senha: 12345678</p>
            </>
          }
          urlBtn="https://integrador-front-zeta.vercel.app/"
        />

        <CardProject
          titleProject="Landing Page"
          imgProject={lading}
          urlBtn="https://primer-labs.vercel.app/"
        />
      </div>
    </div>
  );
};

export default Projects;
