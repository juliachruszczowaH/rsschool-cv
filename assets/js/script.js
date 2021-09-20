document.querySelectorAll('a[href^="#"').forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    document
      .querySelectorAll('.active_section')
      .forEach((item) => item.classList.remove('active_section'));
    document
      .querySelectorAll('.active_link')
      .forEach((item) => item.classList.remove('active_link'));
    let href = this.getAttribute('href').substring(1);

    const scrollTarget = document.getElementById(href);

    const topOffset = document.querySelector('header').clientHeight;

    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth',
    });
    document
      .querySelectorAll(`a[href^="#${href}"`)
      .forEach((item) => item.classList.add('active_link'));
    scrollTarget.classList.add('active_section');
  });
});

(function () {
  const body = document.getElementsByClassName('burger-container')[0];
  const burgerMenu = document.getElementsByClassName('b-menu')[0];
  const burgerContain = document.getElementsByClassName('b-container')[0];
  const burgerNav = document.getElementsByClassName('b-nav')[0];

  burgerMenu.addEventListener(
    'click',
    function toggleClasses() {
      [body, burgerContain, burgerNav].forEach(function (el) {
        el.classList.toggle('open');
      });
    },
    false
  );
})();

document.querySelectorAll('.b-nav a').forEach((menuitem) =>
  menuitem.addEventListener('click', function (e) {
    document
      .querySelectorAll('.open')
      .forEach((item) => item.classList.remove('open'));
  })
);

console.log(
  'Score 140 (from 150 total):\n 1. layout is valid (https://validator.w3.org/ - Document checking completed. No errors or warnings to show.") +10\n 2. semantic tags (article, figcaption, figure, footer, header, main, section, h1, h2, h3, h4) +20\n 3. using styles +10n\n 4. content is in centered block, background is covering all page +10n\n 5. adaptive layout +10n\n 6. burger menu +10n\n 7. avatar +10n\n 8. ul > li for ncontacts & skills +10\n 9. CV contains contacts, skills, summary, education & language level sections +10\n 10. CV contains code example, highlighted by highlight.js +10\n 11. CV contains links to projects +10n\n 12. CV is in english +10\n 13. requirements to Pull Request +10\n 14. NO video resume 0'
);
