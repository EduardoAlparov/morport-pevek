import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function addHorizontalParallaxEffects() {
  const clientsList = document.getElementById('clients-list');
  const trigger = document.getElementById('clients');

  if(!clientsList) {
    return;
  }

  ScrollTrigger.create({
    trigger: trigger,
    end: 'max',
    fastScrollEnd: true,
    onUpdate: (self) => transitonList(self.direction, self.progress),
  });

  function transitonList(direction, progress) {

    if(ScrollTrigger.isInViewport(trigger)) {

      let step = progress.toFixed(2);

      if(direction > 0) {

        clientsList.style.transform = "translate(" + -(100 * step)  + "%," + 0 + "px)";

      } else if (direction < 0) {

        clientsList.style.transform = "translate(" + -(100 * step) + "%," + 0 + "px)";
      }
    }
  }

};


export function addVerticalParallaxEffects(querySelector) {
  if(document.querySelectorAll(querySelector).length < 1) {
    return;
  }

  if (window.matchMedia("(min-width: 1199px)").matches) {
    if (window.matchMedia("(min-width: 991px)").matches) {
      gsap.to(querySelector, {
        scrollTrigger: {
          scrub: true
        },
        y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
        ease: "none"
      });
    }
  } else {
    return
  }

};
