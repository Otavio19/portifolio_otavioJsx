import Redirect from "../../components/Redirect";
import "./style.css";
import qrCode from "../../assets/WppQrCode.png";
import Input from "../../components/Input";

const ContactMe = () => {
  return (
    <div className="contactMeContainer">
      <div className="formContactBox">
        <h1>Posso Entrar em Contato com Você?</h1>
        <div className="formContainer">
          <form action="" className="formContact">
            <Input lblText="Seu Nome" idInpt="name" />
            <Input lblText="Seu E-mail" idInpt="email" />
            <div className="btnForm">
              <Redirect text="Contatar" />
            </div>
          </form>
        </div>
      </div>
      <div className="socialContact">
        <h1>Minhas Redes ;</h1>
        <Redirect
          text="WhatsApp"
          url="https://wa.me/5515998302186?text=Olá Otávio, Tudo Bem?"
        />
        <Redirect text="GitHub" url="https://github.com/Otavio19" />
        <Redirect
          text="LinkedIn"
          url="https://www.linkedin.com/in/otavio-afonso-07337b177"
        />
        <img src={qrCode} alt="" />
        <p className="comment">//Leia o Qr-Code Para Entrar em Chat Comigo</p>
      </div>
    </div>
  );
};

export default ContactMe;
