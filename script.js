const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');

menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelector('#newsletter-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = event.currentTarget.querySelector('input');
  if (!input.value) return;
  alert('Thanks for subscribing to Trendverse by Umesh!');
  input.value = '';
});

const searchButton = document.querySelector('.search-btn');
searchButton?.addEventListener('click', () => {
  const query = prompt('What would you like to search for?');
  if (query?.trim()) {
    alert(`Search UI placeholder: ${query.trim()}`);
  }
});
