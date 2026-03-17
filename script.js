const slides = document.querySelectorAll('.hero-slides .slide');
let current = 0;

setInterval(() => {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}, 5000);

const lightbox = GLightbox({
  touchNavigation: true,
  loop: true,
  autoplayVideos: true
});

const galleryItems = document.querySelectorAll('.gallery-item');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const itemsPerLoad = 6;
let visibleCount = 9;

// Step 1 — hide everything beyond the first 6 on page load
galleryItems.forEach((item, index) => {
  if (index >= visibleCount) {
    item.classList.add('hidden');
  }
});

// Step 2 — on button click, reveal the next batch
loadMoreBtn.addEventListener('click', () => {
  
  // how many items to show now
  const newVisible = visibleCount + itemsPerLoad;

  // loop through items and remove .hidden up to newVisible
  galleryItems.forEach((item, index) => {
    if (index < newVisible) {
      item.classList.remove('hidden');
    }
  });

  // update the count
  visibleCount = newVisible;

  // Step 3 — hide button when all items are visible
  if (visibleCount >= galleryItems.length) {
    loadMoreBtn.style.display = 'none';
  }

});


const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', () => {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();

  // Basic validation
  if (!name || !phone || !message) {
    alert('Please fill in your name, phone number and message.');
    return;
  }

  const whatsappMessage =
`Hi Sleaq, coming straight from your website. I am interested in your furniture and would like to talk business...

*Name:* ${name}
*Email:* ${email || 'Not provided'}
*Phone:* ${phone}

*Message:*
${message}`;

  window.open(`https://wa.me/2349127164329?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
});

// Auto year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu
const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('navList');
const navOverlay = document.getElementById('navOverlay');

function openMenu() {
  hamburger.classList.add('active');
  navList.classList.add('open');
  navOverlay.classList.add('active');
}

function closeMenu() {
  hamburger.classList.remove('active');
  navList.classList.remove('open');
  navOverlay.classList.remove('active');
}

hamburger.addEventListener('click', () => {
  navList.classList.contains('open') ? closeMenu() : openMenu();
});

// Close when nav link clicked
document.querySelectorAll('.nav-list a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// Close when overlay clicked
navOverlay.addEventListener('click', closeMenu);