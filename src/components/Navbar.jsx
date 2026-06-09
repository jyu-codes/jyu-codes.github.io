import { sectionIds } from "../data/portfolioData";
import { useActiveSection } from "../hooks/useActiveSection";
import { useTheme } from "../hooks/useTheme";
import { FaMoon, FaSun } from "react-icons/fa";

const navItems = sectionIds.filter(id => id !== "hero");

const Navbar = () => {
  const activeSection = useActiveSection(sectionIds, ["hero"]);
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = id => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="navbar">
      <div className="logo">JYU</div>

      <ul>
        {navItems.map(item => (
          <li
            key={item}
            className={activeSection === item ? "active" : ""}
            onClick={() => scrollToSection(item)}
          >
            {item}
          </li>
        ))}
      </ul>

      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {theme === "light" ? <FaMoon /> : <FaSun />}
      </button>
    </nav>
  );
};

export default Navbar;