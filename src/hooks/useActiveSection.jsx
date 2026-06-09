// hooks/useActiveSection.js
import { useEffect, useState } from "react";

/**
 * Tracks which section is currently visible.
 * Automatically ignores sections that are not in the nav (like Hero).
 */
export const useActiveSection = (sectionIds, ignoreIds = []) => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    );

    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  if (ignoreIds.includes(activeSection)) return null;

  return activeSection;
};