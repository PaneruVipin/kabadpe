export const scrollToParam = (location, name) => {
  const params = new URLSearchParams(location.search);
  const sectionName = params.get(name);
  if (sectionName) {
    const sectionElement = document.getElementById(sectionName);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  }
};
export const scrollToSection = (sectionName) => {
    if (sectionName) {
      const sectionElement = document.getElementById(sectionName);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
