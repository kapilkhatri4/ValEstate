window.addEventListener('load', function () {
  document.querySelector('body').classList.add('loaded');
});

$('.autoplay').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
});

const menuBtn = document.querySelector('.menu-btn');
const navPanel = document.querySelector('.nav-ul');
document.addEventListener('click', function (e) {
  if (e.target.closest('.menu-btn')) {
    navPanel.classList.toggle('menu-active');
  } else {
    navPanel.classList.remove('menu-active');
  }
});

const sliderSec = document.querySelectorAll('.slide-in');
function sectionAnimation() {
  sliderSec.forEach(function (slider) {
    const sliderIn =
      window.scrollY + window.innerHeight - slider.clientHeight / 3;
    const secBottom = slider.clientHeight + slider.offsetTop;
    const secHalf = sliderIn > slider.offsetTop;
    const secScrollPast = window.scrollY < secBottom;
    if (secScrollPast && secHalf) {
      slider.classList.add('sec-active');
    }
  });
}
window.addEventListener('scroll', sectionAnimation);

// active class on scroll
const sections = document.querySelectorAll('.scroll');

function navLinkActive() {
  let scrollY = window.pageYOffset;

  sections.forEach(current => {
    const secHeight = current.offsetHeight;
    const secTop = current.offsetTop - 100;
    const sectionId = current.getAttribute('id');
    const getNavLink = document.querySelector(
      `.nav-ul a[href*='${sectionId}']`
    );
    if (scrollY > secTop && scrollY <= secTop + secHeight) {
      getNavLink.classList.add('nav-link-active');
    } else {
      getNavLink.classList.remove('nav-link-active');
    }
  });
}
window.addEventListener('scroll', navLinkActive);
