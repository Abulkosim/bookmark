const spans = Array.from(document.querySelectorAll('.menu span'));
const tabs = document.querySelectorAll('.tabs');
const questions = Array.from(document.querySelectorAll('.question'));
const images = Array.from(document.querySelectorAll('.question img'));
const answers = Array.from(document.querySelectorAll('.answer'));

const hamburger = document.querySelector('.hamburger');
const hamburgerClose = document.querySelector('.hamburger-close');
const page = document.querySelector('.page');

const mediaQuery = window.matchMedia('(max-width: 600px)')

if (window.innerWidth < 600) {
  hamburger.addEventListener("click", () => {
    page.style.display = 'block'
  })

  hamburgerClose.addEventListener("click", () => {
    page.style.display = 'none'
  })
}

spans.forEach(item => item.addEventListener("click", () => {
  spans.forEach(elem => elem.classList.remove('chosen'));
  item.classList.add('chosen');
  tabs.forEach(tab => tab.classList.add('none'));
  tabs[spans.indexOf(item)].classList.remove('none');
}))

questions.forEach(item => item.addEventListener("click", () => {
  images.forEach(image => image.classList.remove('transform'));
  answers.forEach(answer => answer.classList.add('none'));
  images.forEach(img => img.src = '/images/icon-arrow.svg');
  answers[questions.indexOf(item)].classList.remove('none');
  images[questions.indexOf(item)].classList.add('transform');
}))