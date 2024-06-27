import "./style.css";
import { BiMenu } from "react-icons/bi";
import { BiMenuAltLeft } from "react-icons/bi";

const NavBar = () => {
  return (
    <>
      <input type="checkbox" name="" id="inptRadio" />
      <div className="navBarBox">
        <div className="iconMenu">
          <label htmlFor="inptRadio">{<BiMenu />}</label>
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
