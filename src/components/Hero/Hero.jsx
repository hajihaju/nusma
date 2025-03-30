import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";
import { Link } from "react-scroll"; // For smooth scrolling

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Empowering the Next Generation of Tech Innovators!</h1>
        <p>
          A dynamic learning environment that prepares you for the ever-evolving
          tech industry.
        </p>
        <Link to="programs" smooth={true} offset={-50} duration={500}>
          <button className="btn">
            Learn More <img src={dark_arrow} alt="Arrow icon" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
