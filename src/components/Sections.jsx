import { sections } from "../data/portfolioData";
import ScrollReveal from "../components/ScrollReveal";

const Sections = () => (
  <>
    {sections.map((section) => {
      const Component = section.component;

      return (
        <section key={section.id} id={section.id} className="section">
          <ScrollReveal>
              <h2>{section.title}</h2>
              <Component />
          </ScrollReveal>
        </section>
      );
    })}
  </>
);

export default Sections;