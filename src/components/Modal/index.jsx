import "./style.css";

const Modal = ({ text, type }) => {
  return (
    <div className={`modalContainer`}>
      <div className="text">{text}</div>
      <div className={`bgModal ${type}`}></div>
    </div>
  );
};

export default Modal;
