const circle = document.getElementById("circle");

document.addEventListener("mousemove", (e) => {
  const height = circle.offsetHeight;
  const width = circle.offsetWidth;

  if (
    e.target.classList.contains("hov-card") ||
    e.target.closest(".hov-card")
  ) {
    circle.classList.add("big");
    document.body.style.cursor = "none";
  } else {
    document.body.style.cursor = "default";
    circle.classList.remove("big");
  }

  setTimeout(() => {
    circle.style.left = `${e.clientX - width / 2}px`;
    circle.style.top = `${e.clientY - height / 2}px`;
  }, 20);
});
