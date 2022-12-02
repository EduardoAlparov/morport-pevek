import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default () => {
  const homePage = document.querySelector('.page-home')
  // remove transitons class-blocker
  document.body.classList.remove('preload');

  // header animation on load:
  if (homePage) {
    document.querySelector('.page-wrapper').classList.add('animation-on');

    if (window.matchMedia("(max-width: 767px)").matches) {
      const historySection = document.querySelector('.history');

      ScrollTrigger.create({
        start: 0,
        end: 'max',
      });

      window.addEventListener('scroll', () => {

        if (ScrollTrigger.positionInViewport(historySection, "top").toFixed(2) > 0) {
          document.querySelector('.header').classList.remove('fixed-mobile-header');
        } else {
          document.querySelector('.header').classList.add('fixed-mobile-header');
        }
      })

      // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
      let vh = window.innerHeight * 0.01;
      // Then we set the value in the --vh custom property to the root of the document
      document.documentElement.style.setProperty('--vh', `${vh}px`);

      // We listen to the resize event
      window.addEventListener('resize', () => {
        // We execute the same script as before
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      });
    }
  }
}
