const slides = document.querySelectorAll('.hero-slides .slide');
let current = 0;

setInterval(() => {
  slides[current].classList.remove('active');   // hide current slide
  current = (current + 1) % slides.length;      // move index forward, loop back at end
  slides[current].classList.add('active');       // show next slide
}, 5000); // every 5 seconds

const lightbox = GLightbox({
  touchNavigation: true,   // swipe on mobile
  loop: true,              // loops back to first after last
  autoplayVideos: true     // videos play automatically in lightbox
});

const galleryItems = document.querySelectorAll('.gallery-item');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const itemsPerLoad = 6;    // how many to show at a time
let visibleCount = 9;      // how many are currently visible

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