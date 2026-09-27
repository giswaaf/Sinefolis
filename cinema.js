// Mobile Menu Toggle (sama dengan home page)
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Close menu when clicking a link
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
}

// Jika ingin menambahkan fungsi khusus untuk halaman cinema
if (window.location.pathname.includes("cinema.html")) {
  // Bisa ditambahkan animasi khusus untuk halaman cinema
  const locationCards = document.querySelectorAll(".location-card");

  locationCards.forEach((card) => {
    card.addEventListener("click", () => {
      // Contoh: redirect ke halaman detail cinema
      // window.location.href = 'cinema-detail.html';
    });
  });
}
