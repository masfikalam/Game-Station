import { FiEdit } from "react-icons/fi";
import "../styles/Footer.css";

const Footer = ({ brand }) => {
  const { logo, name } = brand;

  return (
    <footer>
      <div>
        <img src={logo} alt="Game Station" />

        <article>
          <button>
            Edit Page <FiEdit className="icon" />
          </button>
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

      <small>
        {name} &copy; {new Date().getFullYear()}
      </small>
    </footer>
  );
};

export default Footer;
