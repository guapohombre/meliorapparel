const sections = document.querySelectorAll(".box,.founder-box");
const throwaway = document.querySelector(".hero-throwaway-container");

const throwawayObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view-throwaway");
        entry.target.classList.remove("not-in-view");
      } else {
        entry.target.classList.remove("in-view-throwaway");
        entry.target.classList.add("not-in-view");
      }
    });
  },
  { threshold: [0.6] }
);

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        entry.target.classList.remove("not-in-view");
      } else {
        entry.target.classList.remove("in-view");
        entry.target.classList.add("not-in-view");
      }
    });
  },
  { threshold: [0.1, 1] }
);

sections.forEach((section) => sectionObserver.observe(section));
throwawayObserver.observe(throwaway);
