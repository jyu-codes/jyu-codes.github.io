import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { socialLinks } from "../data/portfolioData";

const iconMap = {
  FaGithub: FaGithub,
  FaLinkedin: FaLinkedin,
  FaEnvelope: FaEnvelope,
};

const SocialLinks = () => {
  return (
    <div className="social-links">
      {socialLinks.map(({ icon, url, label }) => {
        const IconComponent = iconMap[icon];
        return (
          <a
            key={label}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
          >
            <IconComponent />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;