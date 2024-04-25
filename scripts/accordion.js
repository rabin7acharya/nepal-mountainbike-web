const accordions = document.querySelectorAll(".accordion");
const icons = document.querySelectorAll(".accordion-icon");

// Function to toggle the accordion content and rotate the icon
function toggleAccordion(index) {
  const accordion = accordions[index];
  const content = accordion.querySelector(".accordion-content");
  const icon = icons[index];

  if (content.classList.contains("hidden")) {
    gsap.from(content, {
      duration: 1,

      ease: "power2.out",
    });
    gsap.to(content, { maxHeight: "1000px", duration: 1, ease: "power2.out" });
    gsap.to(icon, { rotate: "180deg", duration: 1 });
    content.classList.remove("hidden");
  } else {
    gsap.to(content, {
      maxHeight: "0",
      duration: 0.2,
      ease: "power2.out",
      onComplete: hideContent,
    });
    gsap.to(icon, { rotate: "0deg", duration: 0.2 });
  }

  function hideContent() {
    content.style.maxHeight = "0";
    content.classList.add("hidden");
  }
}

accordions.forEach((accordion, index) => {
  const header = accordion.querySelector(".toggle-accordion");
  header.addEventListener("click", () => {
    toggleAccordion(index);
  });
});
