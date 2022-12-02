import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default () => {
  const clientsHeading = document.querySelector('.clients__title');

  if(!clientsHeading) {
    return;
  }

  ScrollTrigger.create({
    start: 0,
    end: "max",
    onUpdate: (self) => clientsTitleAnimation(self.direction)
  });

  function clientsTitleAnimation(direction) {
    if(ScrollTrigger.isInViewport(clientsHeading)) {
      clientsHeading.parentElement.classList.add('animate-clients-heading');
    } else {
      // historyHeading.parentElement.classList.remove('animate-clients-heading');
    }
  }

  clientsTitleAnimation();
}
