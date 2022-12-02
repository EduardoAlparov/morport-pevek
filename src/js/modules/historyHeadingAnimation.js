import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default () => {
  const historyHeading = document.querySelector('.history__up-heading');

  if(!historyHeading) {
    return;
  }

  if (window.matchMedia("(min-width: 768px)").matches) {
    ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => historyTitleAnimation(self.direction)
    });

    function historyTitleAnimation(direction) {
      if(ScrollTrigger.isInViewport(historyHeading)) {
        historyHeading.parentElement.classList.add('animate-history-heading');
      } else {
        historyHeading.parentElement.classList.remove('animate-history-heading');
      }
    }
  } else {
    historyHeading.parentElement.classList.add('animate-history-heading');
  }
}
