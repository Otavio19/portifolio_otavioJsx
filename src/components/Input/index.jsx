import "./style.css";

const Input = ({ idInpt, lblText, getText, name }) => {
  return (
    <div className="inptContainer">
      <input required id={idInpt} type="text" onChange={getText} name={name} />
      <label htmlFor={idInpt} className="lblInpt">
        {lblText}
      </label>
    </div>
  );
};

export default Input;
