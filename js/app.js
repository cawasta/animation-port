function scrollAppear1() {
  var aboutText1 = document.querySelector(".about-appear-one_off");
  var aboutPosition1 = aboutText1.getBoundingClientRect().top;
  var screenPosition1 = window.innerHeight / 1.6;

  if (aboutPosition1 < screenPosition1) {
    aboutText1.classList.add("about-appear_on");
  }
}

function scrollAppear2() {
  var aboutText2 = document.querySelector(".about-appear-two_off");
  var aboutPosition2 = aboutText2.getBoundingClientRect().top;
  var screenPosition2 = window.innerHeight / 2.4;

  if (aboutPosition2 < screenPosition2) {
    aboutText2.classList.add("about-appear_on");
  }
}

function splitScroll() {
  const controller = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
    duration: "100%",
    triggerElement: ".about-title",
    triggerHook: 0
  })
    .setPin(".about-title")
    .addTo(controller);
}

splitScroll();
window.addEventListener("scroll", scrollAppear1);
window.addEventListener("scroll", scrollAppear2);
