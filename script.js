// theme toggle function

const themeToggle = document.querySelector('#switch');
const rootElem = document.documentElement;

rootElem.dataset.theme ||= window.matchMedia('(prefers-color-scheme: dark)')
  .matches
  ? 'dark'
  : 'light';

themeToggle.addEventListener('click', () => {
  rootElem.dataset.theme =
    rootElem.dataset.theme === 'light' ? 'dark' : 'light';
  themeToggle.classList.toggle('toggle-dark');
});

// accordion toggle function

const accordions = document.querySelectorAll('.accordion input');

accordions.forEach((radio) => {
  radio.addEventListener('click', function () {
    if (this.previousChecked) {
      this.checked = false;
    }

    accordions.forEach((r) => (r.previousChecked = r.checked));
  });
});
