import Redirect from "../../components/Redirect";
import "./style.css";
import photo from "../../assets/perfil.png";

const Home = () => {
  return (
    <div className="mainContainer">
      <div className="mainText">
        <p className="comment">{"<main>"}</p>
        <h1>Olá, sou o Otávio Afonso</h1>
        <p className="comment">{"<p> Desenvolvedor Front-End Jr. </p>"}</p>
        <div className="btnHome">
          <Redirect
            text="Vamos Conversar?"
            url="https://wa.me/5515998302186?text=Olá Otávio, Tudo Bem?"
          />
        </div>

        <p className="comment">{"// Bem - Vindo :)"}</p>
        <p className="comment">{"</main>"}</p>
      </div>
      <div className="mainPhoto">
        <div className="imgContainer">
          <img src={photo} alt="" />
          <div className="moldura"></div>
        </div>
        <div className="containerContacts">
          <Redirect
            text="WhatsApp"
            url="https://wa.me/5515998302186?text=Olá Otávio, Tudo Bem?"
          />
          <Redirect text="GitHub" url="https://github.com/Otavio19" />
          <Redirect
            text="LinkedIn"
            url="https://www.linkedin.com/in/otavio-afonso-07337b177"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
