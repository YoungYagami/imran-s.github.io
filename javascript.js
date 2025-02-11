// Navbar Toggle
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
      // Toggle Nav
      nav.classList.toggle('nav-active');

      // Animate Links
      navLinks.forEach((link, index) => {
          if (link.style.animation) {
              link.style.animation = '';
          } else {
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
          }
      });

      // Burger Animation
      burger.classList.toggle('toggle');
  });
};

navSlide();

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Tangani pengiriman pesan dengan tombol Enter
document.getElementById('message').addEventListener('keydown', function (e) {
  if (e.key === 'Enter' && !e.ctrlKey) {
      e.preventDefault(); // Mencegah penambahan baris baru
      document.getElementById('contact-form').dispatchEvent(new Event('submit')); // Kirim form
  }
});

// Tangani pengiriman form
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Mencegah pengiriman form secara default
  alert('Pesan Anda telah terkirim!');
  this.reset(); // Reset form setelah pengiriman
});