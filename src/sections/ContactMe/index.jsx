import Redirect from "../../components/Redirect";
import "./style.css";
import qrCode from "../../assets/WppQrCode.png";
import Input from "../../components/Input";
import { useState } from "react";
import Modal from "../../components/Modal";

const ContactMe = () => {
  const [email, setEmail] = useState();
  const [msg, setMsg] = useState();

  const getText = (event) => {
    const { name, value } = event.target;

    setEmail({ ...email, [name]: value });
  };

  const showMsg = (msg) => {
    setMsg(msg);
    setTimeout(() => {
      setMsg("");
    }, 2000);
  };

  const sendForm = (event) => {
    event.preventDefault();
    if (email.email == "" || email.email == undefined) {
      return showMsg({
        message: "Necessário Preencher o E-mail!",
        type: "error",
      });
    }

    showMsg({ message: "Formulário Enviado!", type: "sucess" });

    fetch("https://formsubmit.co/ajax/otavioo.dev@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(email),
    }).catch((error) => showMsg({ message: error, type: "error" }));
  };
  return (
    <div className="contactMeContainer">
      <div className="formContactBox">
        <div className="modalBox">
          <Modal text={msg?.message} type={msg?.type} />
        </div>
        <h1>Posso Entrar em Contato com Você?</h1>
        <div className="formContainer">
          <form action="" className="formContact" autoComplete="off">
            <Input
              name="name"
              lblText="Seu Nome"
              idInpt="name"
              getText={getText}
            />
            <Input
              name="email"
              lblText="Seu E-mail"
              idInpt="email"
              getText={getText}
            />
            <Input
              name="subject"
              lblText="Assunto"
              idInpt="text"
              getText={getText}
            />
            <div className="btnForm">
              <Redirect text="Contatar" event={sendForm} />
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
