import "../style/herosection.css";
import img1 from "../assets/Rectangle.svg";
import img2 from "../assets/Rectangle (1).svg";
import "../style/herosection.css";


const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero maintext">
        <h1>
          I AM A <span><img src={img1} alt="avatar1" /></span> FREELANCE
        </h1>
        <h1>
          DESIGNER <span><img src={img2} alt="avatar2" /></span> FROM
        </h1>
        <h1>SAN FRANCISCO</h1>
      </div>

      <div className="hero horizontal-info">
        <div className="hero-p">
          <p>doradesign</p>
          <p>wave</p>
          <p>SILAILA</p>
        </div>
        <div className="intro-text">
          <p className="intro-p">
            Welcome to my portfolio. Here, artistry meets functionality. Dive into a curated showcase
            of distinctive branding and web designs, each crafted to captivate and inspire.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;



