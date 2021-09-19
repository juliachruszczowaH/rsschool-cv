document.querySelectorAll('a[href^="#"').forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelectorAll('.active_section').forEach(item=>item.classList.remove('active_section'));
    document.querySelectorAll('.active_link').forEach(item=>item.classList.remove('active_link'));
    let href = this.getAttribute('href').substring(1);

    const scrollTarget = document.getElementById(href);

    const topOffset = document.querySelector('header').clientHeight;

    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth',
    });
    document.querySelectorAll(`a[href^="#${href}"`).forEach(item=>item.classList.add('active_link'));
    scrollTarget.classList.add('active_section');
  });
});

(function() {
  const body = document.getElementsByClassName('burger-container')[0];
  const burgerMenu = document.getElementsByClassName('b-menu')[0];
  const burgerContain = document.getElementsByClassName('b-container')[0];
  const burgerNav = document.getElementsByClassName('b-nav')[0];

  burgerMenu.addEventListener('click', function toggleClasses() {
    [body, burgerContain, burgerNav].forEach(function (el) {
      el.classList.toggle('open');
    });
  }, false);
})();

document.querySelectorAll('.b-nav a').forEach((menuitem)=>menuitem.addEventListener('click',function(e){
  document.querySelectorAll('.open').forEach((item)=>item.classList.remove('open'));
}))

