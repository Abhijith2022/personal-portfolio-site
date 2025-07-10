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
  function toggleMenu() {
    const nav = document.getElementById("navMenu");
    nav.classList.toggle("active");
  }

  // Wait for DOM to load
  window.addEventListener("DOMContentLoaded", function () {
    const nav = document.getElementById("navMenu");
    const links = nav.querySelectorAll("a");

    links.forEach((link) => {
      link.addEventListener("click", function () {
        // Remove 'active' from all links
        links.forEach((l) => l.classList.remove("active"));

        // Add 'active' to clicked link
        this.classList.add("active");

        // Hide the nav (remove active class from nav)
        nav.classList.remove("active");
      });
    });
  });