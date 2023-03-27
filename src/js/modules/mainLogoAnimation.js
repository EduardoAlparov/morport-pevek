import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default () => {
  const introContainer = document.querySelector('.intro');
  const scaleTitle = document.querySelector('.logo-scale');

  if(!introContainer) {
    return;
  }

  let coefficient = parseFloat(window.getComputedStyle(document.documentElement, null).getPropertyValue('font-size')) / 10;
  let style = window.getComputedStyle(scaleTitle, null).getPropertyValue('font-size');
  let fontSize = parseFloat(style);
  let gap = parseFloat(window.getComputedStyle(scaleTitle.parentElement, null).getPropertyValue('gap'));
  let top = parseFloat(window.getComputedStyle(scaleTitle.parentElement.closest('.animated-logo'), null).getPropertyValue('padding-top'));

  document.body.onresize = () => {
    style = window.getComputedStyle(scaleTitle, null).getPropertyValue('font-size');
    fontSize = parseFloat(style);

    if (window.matchMedia("(min-width: 1679px)").matches) {
      if(fontSize !== (316 * coefficient)) {
        scaleTitle.style.fontSize = "31.6rem";
        scaleTitle.parentElement.style.gap = 30 + "rem";
      }
    } else if (window.matchMedia("(min-width: 1090px)").matches) {
      if(fontSize !== (270 * coefficient)) {
        scaleTitle.style.fontSize = "27rem";
      }
    } else if (window.matchMedia("(min-width: 991px)").matches) {

      if(fontSize !== (110 * coefficient)) {
        scaleTitle.style.fontSize = "11rem";
      }
    } else {}

    if (window.matchMedia("(max-width: 1199px)").matches) {
      scaleTitle.parentElement.style.gap = "0px";
    } else if(window.matchMedia("(max-width: 1350px)").matches) {
      scaleTitle.parentElement.style.gap = "6rem";
    } else if(window.matchMedia("(max-width: 1500px)").matches) {
      scaleTitle.parentElement.style.gap = "20rem";
    } else  {
      scaleTitle.parentElement.style.gap = "30.7rem";
    }

    if (window.matchMedia("(max-width: 1199px)").matches) {
      scaleTitle.parentElement.closest('.animated-logo').style.paddingTop = "5.2rem";
    } else {
      scaleTitle.parentElement.closest('.animated-logo').style.paddingTop = "8.8rem";
    }

    style = window.getComputedStyle(scaleTitle, null).getPropertyValue('font-size');
    fontSize = parseFloat(style);
    gap = parseFloat(window.getComputedStyle(scaleTitle.parentElement, null).getPropertyValue('gap'));
    top = parseFloat(window.getComputedStyle(scaleTitle.parentElement.closest('.animated-logo'), null).getPropertyValue('top'));
  }

  ScrollTrigger.create({
    trigger: '.intro',
    start: 0,
    endTrigger: '.intro',
    scrub: 0.5,
    invalidateOnRefresh: true,
    onUpdate: (self) => introScrollListener(self.progress, self.direction, self.isActive, self.getVelocity())
  });

  function introScrollListener(progress, direction, isActive, velocity) {
    // console.log(velocity);

    if (window.matchMedia("(min-width: 991px)").matches) {
      if(direction > 0) {
        let scaleValue = (1 - progress);

        scaleTitle.parentElement.style.gap = (gap*scaleValue).toFixed(0) + "px";
        scaleTitle.parentElement.closest('.animated-logo').style.paddingTop = (top*scaleValue).toFixed(0) + "px";

        if (fontSize*scaleValue >= 111) {
          scaleTitle.style.fontSize = (fontSize*scaleValue).toFixed(0) + "px";
        } else {
          scaleTitle.parentElement.style.gap = "20px";
          scaleTitle.parentElement.closest('.animated-logo').style.paddingTop = "0px";
          return;
        }

      } else if (direction < 0) {
        let scaleValue = (1 - progress);

        scaleTitle.parentElement.style.gap = (gap*scaleValue).toFixed(0) + "px";
        scaleTitle.parentElement.closest('.animated-logo').style.paddingTop = (top*scaleValue).toFixed(0) + "px";

        if (fontSize*scaleValue >= 111) {
          scaleTitle.style.fontSize = (fontSize*scaleValue).toFixed(0) + "px";
        } else {
          scaleTitle.parentElement.style.gap = "20px";
          scaleTitle.parentElement.closest('.animated-logo').style.paddingTop = "0px";
          return;
        }
      }
    }
  }
}
