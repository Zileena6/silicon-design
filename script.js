// switch function

const themeToggle = document.querySelector('#switch');

const switchTheme = () => {
  const rootElem = document.documentElement;
  let dataTheme = rootElem.getAttribute('data-theme'),
    newTheme;

  newTheme = dataTheme === 'light' ? 'dark' : 'light';

  rootElem.setAttribute('data-theme', newTheme);
  themeToggle.classList.toggle('toggle-dark');
};

document.querySelector('.theme-switch').addEventListener('click', switchTheme);
