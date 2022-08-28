import logo from "../resources/logo.png";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={logo} alt="Game Station" />

        <article>
          <h3>Game Station</h3>
          <p>
            Powered by :{" "}
            <a href="https://pensil.in" target="_blank">
              Pensil
            </a>
          </p>
          <p>
            Developed by :{" "}
            <a href="https://masfikul-alam.web.app" target="_blank">
              Masfik
            </a>
          </p>
        </article>
      </div>
      <small>Game Station &copy; {new Date().getFullYear()}</small>
    </footer>
  );
};

export default Footer;
