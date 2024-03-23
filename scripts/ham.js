// const hamIcon = document.getElementById("ham-icon");
// const hamMenuContent = document.getElementById("ham-menu");

// // Add event listener to the hamburger icon
// hamIcon.addEventListener("click", function () {
//   // Toggle the visibility of the menu content
//   hamMenuContent.classList.toggle("hidden");
// });

const hamburgerButton = document.getElementById("ham-icon");
const lines = document.querySelectorAll(".lines div");
const hamMenu = document.getElementById("ham-menu");

const tl = gsap.timeline({ reversed: true });
const tl2 = gsap.timeline({ reversed: true });

tl.to(lines[0], {
  rotation: 45,
  x: 1,
  y: 5,
  duration: 0.2,
  ease: "power2.inOut",
})
  .to(lines[1], { opacity: 0, duration: 0.2, ease: "power2.inOut" }, "-=0.3")
  .to(
    lines[2],
    { rotation: -45, x: 0, y: -6, duration: 0.2, ease: "power2.inOut" },
    "-=0.1"
  );

hamburgerButton.addEventListener("click", () => {
  tl.reversed() ? tl.play() : tl.reverse();
  hamMenu.classList.toggle("hidden");

  gsap.to(hamMenu, {
    // clipping animation from top right cornor
    clipPath: hamMenu.classList.contains("hidden")
      ? "circle(0% at 100% 0%)"
      : "circle(400% at 100% 0%)",
    duration: 1.2,
    ease: "power2.inOut",
  });
});
