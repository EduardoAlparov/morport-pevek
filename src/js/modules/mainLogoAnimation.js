import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default () => {
  const introContainer = document.querySelector('.intro');
  const scaleTitle = document.querySelector('.logo-scale');

  if(!introContainer) {
    return;
  }

  let style = window.getComputedStyle(scaleTitle, null).getPropertyValue('font-size');
  let fontSize = parseFloat(style);

  document.body.onresize = () => {

    style = window.getComputedStyle(scaleTitle, null).getPropertyValue('font-size');
    fontSize = parseFloat(style);

    if (window.matchMedia("(min-width: 1679px)").matches) {

      if(fontSize !== 416) {
        scaleTitle.style.fontSize = "416px";
      }

    } else if (window.matchMedia("(min-width: 1501px)").matches) {

      if(fontSize !== 342) {
        scaleTitle.style.fontSize = "342px";
      }

    } else if (window.matchMedia("(min-width: 1360px)").matches) {

      if(fontSize !== 310) {
        scaleTitle.style.fontSize = "310px";
      }
    } else if (window.matchMedia("(min-width: 1090px)").matches) {
      if(fontSize !== 270) {
        scaleTitle.style.fontSize = "270px";
      }
    } else if (window.matchMedia("(min-width: 991px)").matches) {

      if(fontSize !== 110) {
        scaleTitle.style.fontSize = "110px";
      }
    } else {}

    style = window.getComputedStyle(scaleTitle, null).getPropertyValue('font-size');
    fontSize = parseFloat(style);
  }

  ScrollTrigger.create({
    scrub: 1,
    trigger: '.intro',
    start: 0,
    endTrigger: '.intro',
    fastScrollEnd: true,
    onUpdate: (self) => introScrollListener(self.progress, self.direction, self.isActive)
  });

  function introScrollListener(progress, direction, isActive) {
    if (window.matchMedia("(min-width: 991px)").matches) {
      if(direction > 0) {
        let scaleValue = ((1 - progress).toFixed(3));

        if (fontSize*scaleValue >= 111) {
          scaleTitle.style.fontSize = fontSize*scaleValue + "px";

        } else {
          return;
        }

      } else if (direction < 0) {
        let scaleValue = (1 - progress).toFixed(3);

        if (fontSize*scaleValue >= 111) {
          scaleTitle.style.fontSize = fontSize*scaleValue + "px";
        } else {
          return;
        }
      }
    }
  }

}
