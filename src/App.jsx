import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sections from "./components/Sections";

function App() {

  const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
  });
};

  return (
    <>
      <Navbar />

      <Hero id="hero" scrollToSection={scrollToSection} />

      <Sections />
    </>
  );
}

export default App;