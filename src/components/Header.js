import { MdSettings } from "react-icons/md";
import logo from "../resources/logo1.png";
import "../styles/Header.css";

const Header = () => {
  return (
    <header>
      <div>
        <img src={logo} alt="gamestation" />
        <h1>Game Station</h1>
      </div>

      <div>
        <button>Login</button>
        <MdSettings className="settings" />
      </div>
    </header>
  );
};

export default Header;
