  document.addEventListener("DOMContentLoaded", () => {
    const glow = document.querySelector(".cursor-glow");
    const ring = document.querySelector(".cursor-ring");

    window.addEventListener("mousemove", (e) => {
      const x = e.clientX;
      const y = e.clientY;

      glow.style.transform = `translate(${x - 12}px, ${y - 12}px)`;
      ring.style.transform = `translate(${x - 30}px, ${y - 30}px)`;
    });
  });

  