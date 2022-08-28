import logo from "../resources/logo1.png";
import "../styles/Header.css";

const Header = () => {
  return (
    <header>
      <div>
        <img src={logo} alt="gamestation" />
        <h1>Game Station</h1>
      </div>

      <button>Login</button>
    </header>
  );
};

export default Header;
