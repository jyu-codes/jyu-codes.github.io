import SocialLinks from "./SocialLinks";
import "./Hero.css";

const Hero = ({ id, scrollToSection }) => {
  return (
    <section id={id} className="hero" aria-label="Hero section">
      <div className="content">

        <header className="hero-header">
          <p className="hero-subtitle">
            Full Stack Developer • Spring Boot • React • Java
          </p>

          <h1 className="hero-title">
            Hi, I'm <span>Jade Louise Yu</span>
          </h1>
        </header>

        <p className="hero-description">
          I build intelligent systems and modern web applications.
        </p>

        <nav className="button-group" aria-label="Primary actions">
          <button
            className="btn btn-primary"
            onClick={() => scrollToSection("contact")}
          >
            Get In Touch
          </button>

          <button
            className="btn btn-outline"
            onClick={() => scrollToSection("projects")}
          >
            View Projects
          </button>
        </nav>

        <SocialLinks />

      </div>
    </section>
  );
};

export default Hero;