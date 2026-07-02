const items = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const filterBtns = document.querySelectorAll('.filter-btn');

let currentIndex = 0;
let visibleItems = [...items];

// ✅ Filter Logic
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // UI Update
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filterValue = btn.getAttribute('data-filter');

    items.forEach(item => {
      const category = item.getAttribute('data-category');
      if (filterValue === 'all' || category === filterValue) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });

    // Update the list of items available for the lightbox
    visibleItems = Array.from(items).filter(i => !i.classList.contains('hidden'));
  });
});

// ✅ Open Lightbox
items.forEach((item) => {
  item.addEventListener('click', () => {
    currentIndex = visibleItems.indexOf(item);
    if (currentIndex !== -1) {
      openLightbox(currentIndex);
    }
  });
});

function openLightbox(index) {
  const img = visibleItems[index].querySelector('img');
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
  lightbox.classList.add('active');
}

// ✅ Navigation & Close
document.getElementById('closeBtn').addEventListener('click', () => lightbox.classList.remove('active'));

document.getElementById('nextBtn').addEventListener('click', (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex + 1) % visibleItems.length;
  openLightbox(currentIndex);
});

document.getElementById('prevBtn').addEventListener('click', (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length;
  openLightbox(currentIndex);
});

// Close on background click
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) lightbox.classList.remove('active');
});

// Keyboard Support
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('active')) return;
  if (e.key === 'ArrowRight') currentIndex = (currentIndex + 1) % visibleItems.length;
  if (e.key === 'ArrowLeft') currentIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length;
  if (e.key === 'Escape') lightbox.classList.remove('active');
  
  openLightbox(currentIndex);
});