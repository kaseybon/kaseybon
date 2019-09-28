// Check for custom property support
const customPropertySupport = CSS.supports('color', 'var(--fake-var)');

// We only want to run the JavaScript if custom properties are supported.
// The no color theme and no JS style solutions are the same.
if (customPropertySupport) {
  // Removes the .no-js class on the HTML and replaces it with the .js class.
  // This allows us to apply specific styles for noJS solutions.
  const html = document.querySelector('html');

  html.classList.remove('no-js');
  html.classList.add('js');

  // Adds a random theme class to the page
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

  const body = document.querySelector('body');
  const themes = ['mermaid', 'pumpkin', 'tomato', 'berry', 'emerald'];
  const randomNumber = getRandomInt(0, themes.length);
  const randomTheme = themes[randomNumber];

  body.classList.add(`t-${randomTheme}`);
}
