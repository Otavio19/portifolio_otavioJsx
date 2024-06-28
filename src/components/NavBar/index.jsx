import { useState } from "react";
import "./style.css";
import { BiMenu } from "react-icons/bi";
import { BiMenuAltLeft } from "react-icons/bi";

const NavBar = () => {
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <input
        type="checkbox"
        name=""
        id="inptRadio"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <div className="navBarBox">
        <div className="iconMenu">
          <label htmlFor="inptRadio">
            <div className="icon">{<BiMenu />}</div>
            <div className="iconText">
              <p className="comment">
                {isChecked ? "//Abrir Menu" : "//Fechar menu"}
              </p>
            </div>
          </label>
        </div>

        <div className="listMenu">
          <ul>
            <li>Home</li>
            <li>Projetos</li>
            <li>Habilidades</li>
            <li>Contato</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
