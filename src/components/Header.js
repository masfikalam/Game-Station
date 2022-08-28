import { MdSettings } from "react-icons/md";
import logo from "../resources/logo.png";
import "../styles/Header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <div>
          <img src={logo} alt="gamestation" />
          <h1>Game Station</h1>
        </div>

        <div>
          <button>Login</button>
          <MdSettings className="settings" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
