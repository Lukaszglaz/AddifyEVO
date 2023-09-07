// Active Element List
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const elementId = entry.target.getAttribute('id'); // Pobieranie ID sekcji

    if (entry.isIntersecting) {
      handleVisibleElement(elementId);
    } else {
      handleInvisibleElement(elementId);
    }
  });
}, options);

const elementIds = [
  'section-home',
  'section-product',
  'section-info',
  'section-contact',
  'section-support',
];

elementIds.forEach((elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    observer.observe(element);
  }
});

function handleVisibleElement(elementId) {
  const currentElement = document.getElementsByClassName(elementId)[0];
  currentElement.classList.add('active');
}

function handleInvisibleElement(elementId) {
  const currentElement = document.getElementsByClassName(elementId)[0];
  currentElement.classList.remove('active');
}

// Scroll Element List

// Element Click
const clickMainScroll = document.getElementById('clickHome');
const clickAddProductScroll = document.getElementById('clickProduct');
const clickInfoProduct = document.getElementById('clickInfo');
const clickContact = document.getElementById('clickContact');
const clickSupport = document.getElementById('clickSupport');
// End Element Click

// Element Click To Scroll
const scrollToAddProduct = document.getElementById('section-product');
const scrollToInfoProduct = document.getElementById('section-info');
const scrollToContact = document.getElementById('section-contact');
const scrollToSupport = document.getElementById('section-support');
// End Element Click To Scroll

// Animation Scroll
clickMainScroll.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

clickAddProductScroll.addEventListener('click', () => {
  scrollToAddProduct.scrollIntoView({ behavior: 'smooth' });
});

clickInfoProduct.addEventListener('click', () => {
  scrollToInfoProduct.scrollIntoView({ behavior: 'smooth' });
});

clickContact.addEventListener('click', () => {
  scrollToContact.scrollIntoView({ behavior: 'smooth' });
});
clickSupport.addEventListener('click', () => {
  scrollToSupport.scrollIntoView({ behavior: 'smooth' });
});
// End Animation Scroll
// End Scroll Element List
