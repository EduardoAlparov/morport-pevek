import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default () => {
  const historyHeading = document.querySelector('.history__up-heading');
  const historyDownContent = document.querySelector('.history__down-content');

  if(!historyHeading) {
    return;
  }

  if (window.matchMedia("(min-width: 1199px)").matches) {
    ScrollTrigger.create({
      start: "#history",
      end: "max",
      onUpdate: (self) => historyTitleAnimation(self.direction)
    });

    function historyTitleAnimation(direction) {
      if(ScrollTrigger.positionInViewport(historyHeading, "center").toFixed(2) < 0.8) {
        historyHeading.parentElement.classList.add('animate-history-heading');
      } else {
        historyHeading.parentElement.classList.remove('animate-history-heading');
      }

      console.log(ScrollTrigger.positionInViewport(historyDownContent, "center").toFixed(2));
      if (ScrollTrigger.positionInViewport(historyDownContent, "center").toFixed(2) < 1) {
        historyDownContent.classList.remove('animate-history-down');
      } else {
        historyDownContent.classList.add('animate-history-down');
      }
    }
  } else {
    historyHeading.parentElement.classList.add('animate-history-heading');
  }
}
