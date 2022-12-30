import Swiper, {
  Navigation,
  Pagination,
  Mousewheel,
  FreeMode,
  Parallax,
  Controller,
  Autoplay,
} from 'swiper';

Swiper.use([Navigation, Pagination, FreeMode, Mousewheel, Parallax, Controller, Autoplay ]);

import Scrollbar from 'smooth-scrollbar';

import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);


export default () => {
  const header = document.querySelector(".header");
  const historySlider = document.querySelector(".history-slider");
  const historyParallaxBack = document.querySelector(".scrolling-background__list");
  const historySliderWrapper = document.querySelector(".history-slider__wrapper");
  const titleriggers = document.querySelectorAll("._set-title-background");
  const accentTriggers = document.querySelectorAll("._set-accent-background");
  const whiteTriggers = document.querySelectorAll("._set-white-background");

  let dataParallax = historyParallaxBack.getAttribute('data-parallax');

   const scrollbar = Scrollbar.init(historySlider, {
    damping: 0.05,
    // renderByPixels: true,
    alwaysShowTracks: false
  });

  scrollbar.addListener((status) => {
    header.classList.toggle('header--hidden', (scrollbar.offset.y >= 1));

    titleriggers.forEach(tt => {
      if(isElementInViewport(tt)) {
        historySlider.classList.remove('history-slider--white-background');
        historySlider.classList.remove('history-slider--accent-background');
      }
    })

    accentTriggers.forEach(at => {
      if(isElementInViewport(at)) {
        historySlider.classList.remove('history-slider--white-background');
        historySlider.classList.add('history-slider--accent-background');
      }
    })

    whiteTriggers.forEach(wt => {
      if(isElementInViewport(wt)) {
        historySlider.classList.add('history-slider--white-background');
      }
    })
  });

  historySlider.addEventListener('wheel', (e) => {
    let rect = historySliderWrapper.getBoundingClientRect();


    if(e.deltaY > 0) {
      historyParallaxBack.style.transform = "translateY("+ dataParallax + "%)";

      setTimeout(() => {
        historyParallaxBack.style.transform = "translateY("+ 0 + "%)";
      }, 200);
    } else if (e.deltaY < 0) {
      if(Math.abs(rect.top) > 0) {
        historyParallaxBack.style.transform = "translateY("+ -dataParallax + "%)";

        setTimeout(() => {
          historyParallaxBack.style.transform = "translateY("+ 0 + "%)";
        }, 200);
      } else {
        return;
      }

    }

  })

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
}
