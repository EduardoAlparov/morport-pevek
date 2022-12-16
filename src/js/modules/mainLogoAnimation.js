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
  let gap = parseFloat(window.getComputedStyle(scaleTitle.parentElement, null).getPropertyValue('gap'));
  let top = parseFloat(window.getComputedStyle(scaleTitle.parentElement.closest('.animated-logo'), null).getPropertyValue('padding-top'));

  document.body.onresize = () => {

    style = window.getComputedStyle(scaleTitle, null).getPropertyValue('font-size');
    fontSize = parseFloat(style);

    if (window.matchMedia("(min-width: 1679px)").matches) {
      if(fontSize !== 316) {
        scaleTitle.style.fontSize = "316px";
        scaleTitle.parentElement.style.gap = 300 + "px";
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

    if (window.matchMedia("(max-width: 1199px)").matches) {
      scaleTitle.parentElement.style.gap = "0px";
    } else if(window.matchMedia("(max-width: 1350px)").matches) {
      scaleTitle.parentElement.style.gap = "60px";
    } else if(window.matchMedia("(max-width: 1500px)").matches) {
      scaleTitle.parentElement.style.gap = "200px";
    } else  {
      scaleTitle.parentElement.style.gap = "307px";
    }

    if (window.matchMedia("(max-width: 1199px)").matches) {
      scaleTitle.parentElement.closest('.animated-logo').style.paddingTop = "30px";
    } else {
      scaleTitle.parentElement.closest('.animated-logo').style.paddingTop = "88px";
    }

    style = window.getComputedStyle(scaleTitle, null).getPropertyValue('font-size');
    fontSize = parseFloat(style);
    gap = parseFloat(window.getComputedStyle(scaleTitle.parentElement, null).getPropertyValue('gap'));
    top = parseFloat(window.getComputedStyle(scaleTitle.parentElement.closest('.animated-logo'), null).getPropertyValue('top'));

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
        scaleTitle.parentElement.style.gap = gap*scaleValue + "px";
        scaleTitle.parentElement.closest('.animated-logo').style.paddingTop = top*scaleValue + "px";

        if (fontSize*scaleValue >= 111) {
          scaleTitle.style.fontSize = fontSize*scaleValue + "px";
        } else {
          scaleTitle.parentElement.style.gap = "20px";
          scaleTitle.parentElement.closest('.animated-logo').style.paddingTop = "0px";
          return;
        }

      } else if (direction < 0) {
        let scaleValue = (1 - progress).toFixed(3);
        scaleTitle.parentElement.style.gap = gap*scaleValue + "px";
        scaleTitle.parentElement.closest('.animated-logo').style.paddingTop = top*scaleValue + "px";
        if (fontSize*scaleValue >= 111) {
          scaleTitle.style.fontSize = fontSize*scaleValue + "px";
        } else {
          scaleTitle.parentElement.style.gap = "20px";
          scaleTitle.parentElement.closest('.animated-logo').style.paddingTop = "0px";
          return;
        }
      }
    }
  }

}
