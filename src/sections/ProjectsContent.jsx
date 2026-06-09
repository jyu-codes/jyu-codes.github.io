import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { projects } from "../data/portfolioData";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import "./ProjectsContent.css";

const ProjectsContent = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {projects.map((project, index) => (
            <div className="embla__slide" key={index}>
              <div className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-btn"
                    aria-label="View Live Project"
                  >
                    <FiExternalLink />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      <div className="embla__buttons">
        <button className="carousel-btn" onClick={scrollPrev}>
          <FaArrowLeft />
        </button>
        <button className="carousel-btn" onClick={scrollNext}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ProjectsContent;