document.addEventListener("DOMContentLoaded", function () {
  // Slide show code
  let slideIndex = 0;
  showSlides();

  function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 8000);
  }

  // Navigation menu
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
      this.classList.toggle("fa-times"); // Mengubah icon saat diklik
    });

    // Tutup menu saat link diklik
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.classList.remove("fa-times");
      });
    });
  }

  // Hero background changer
  const hero = document.querySelector(".hero");
  if (hero) {
    const backgrounds = [
      'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://source.unsplash.com/random/1920x1080/?cinema")',
      'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://source.unsplash.com/random/1920x1080/?movie-theater")',
      'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://source.unsplash.com/random/1920x1080/?hollywood")',
    ];
    let current = 0;

    setInterval(() => {
      current = (current + 1) % backgrounds.length;
      hero.style.background = backgrounds[current];
      hero.style.backgroundSize = "cover";
    }, 8000);
  }
});

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

// Thank You Page Redirection
if (window.location.pathname.includes("faqsub.html")) {
  // Start countdown to redirect
  setTimeout(() => {
    // Add fade out animation before redirect
    document.querySelector(".thank-you-container").style.animation =
      "fadeOut 1.5s ease-in-out";

    // Wait for animation to complete before redirect
    setTimeout(() => {
      window.location.href = "home.html";
    }, 1500);
  }, 8000); // 8 seconds delay
}
