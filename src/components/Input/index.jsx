import "./style.css";

const Input = ({ idInpt, lblText }) => {
  return (
    <div className="inptContainer">
      <input required id={idInpt} type="text" />
      <label htmlFor={idInpt} className="lblInpt">
        {lblText}
      </label>
    </div>
  );
};

export default Input;
