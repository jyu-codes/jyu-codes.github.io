
import "./AboutContent.css";
import { aboutData } from "../data/portfolioData";
import { FaBirthdayCake, FaEnvelope, FaDownload, FaPhone, FaGraduationCap } from "react-icons/fa";

const AboutContent = () => {
    return (
        <section className="about-section">
            <div className="about-inner">
                <img
                    src={aboutData.avatar}
                    alt={aboutData.name}
                    className="avatar-image"
                    />

                <article className="about-text">
                    <header>
                        <h1>Hi! I'm { aboutData.name }</h1>
                    </header>

                    <p>{aboutData.description1}</p>
                    <p>{aboutData.description2}</p>

                    <ul className="about-icons">
                        <li className="icon-item">
                            <FaBirthdayCake className="about-icon" />
                            <span>{aboutData.birthday}</span>
                        </li>
                        <li className="icon-item">
                            <FaEnvelope className="about-icon" />
                            <span>{aboutData.email}</span>
                        </li>
                        <li className="icon-item">
                            <FaPhone className="about-icon" />
                            <span>{aboutData.phone}</span>
                        </li>
                        <li className="icon-item graduation">
                            <FaGraduationCap className="about-icon" />
                            <span>{aboutData.education}</span>
                        </li>
                        <li className="icon-item">
                            <a href={aboutData.resume} download className="download-btn">
                                <FaDownload className="info-icon" />
                                <span>Download Resume</span>
                            </a>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    );
};

export default AboutContent;