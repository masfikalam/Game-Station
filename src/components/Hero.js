import { BsPersonPlusFill } from "react-icons/bs";
import "../styles/Hero.css";

const Hero = ({ hero }) => {
  const { name, banner, heroText } = hero;

  return (
    <section id="hero">
      <img src={banner} alt={name} />

      <div>
        <p>{heroText}</p>

        <button>
          <BsPersonPlusFill />
        </button>
      </div>
    </section>
  );
};

export default Hero;
