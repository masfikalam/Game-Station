import { BsPersonPlusFill } from "react-icons/bs";
import banner from "../resources/banner.png";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section id="hero">
      <img src={banner} alt="gamestation banner" />

      <div>
        <p>
          A computer game, in this context, will mean something that one uses
          primarily as for a hobby, a diversion from real life, and is a medium
          through which one plays. The primary reason to have a community
          centered on games is so that its' members playing experience is
          enriched.
        </p>

        <button>
          <BsPersonPlusFill />
        </button>
      </div>
    </section>
  );
};

export default Hero;
