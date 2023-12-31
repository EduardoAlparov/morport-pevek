// eslint-disable-next-line import/no-extraneous-dependencies
import 'focus-visible';
import lazyIMages from './modules/lazyIMages';
import documenReady from './helpers/documenReady';
import initModal from './modules/initModal';

import initMainPage from './modules/initMainPage';
import { addHorizontalParallaxEffects, addVerticalParallaxEffects } from './modules/addParallaxEffect';
import yandexMap from './modules/yandexMap';
import mainLogoAnimation from './modules/mainLogoAnimation';

import searchControlOpen from './modules/searchControlOpen';
import modalLinkHover from './modules/modalLinkHover';
import galleryPopupControl from './modules/galleryPopupControl';

import technicSlidersControl from './modules/technicSlidersControl';
import historyHeadingAnimation from './modules/historyHeadingAnimation';
import clientsHeadingAnimation from './modules/clientsHeadingAnimation';
import linkHoverAnimation from './modules/linkHoverAnimation';

import customSelectControl from './modules/customSelectControl';
import infoButtonsListSlider from './modules/infoButtonsListSlider';

import schemeTextControl from './modules/schemeTextControl';
import newStoryLine from './modules/newStoryLine';

documenReady(() => {
  window.___YOUR_PROJECT___API = { };

  lazyIMages();
  initModal();

  initMainPage();

  //  search open:
  searchControlOpen();
  // ===========================================================================
  modalLinkHover();
  // ===========================================================================
  // carousel and sliders on page-technic by gsap and fancybox;
  technicSlidersControl();

  // ===========================================================================
  // add parrallax effects to div:
  addHorizontalParallaxEffects();
  addVerticalParallaxEffects('.parallax-bg');
  // ===========================================================================
  //  scale the logo title:
  mainLogoAnimation();
  // ===========================================================================
  // history heading animation:
  historyHeadingAnimation();
  // ===========================================================================
  // clients heading animation:
  clientsHeadingAnimation();
  // ===========================================================================
  // nav links hover pattern with ⚓:
  linkHoverAnimation();
  // ===========================================================================
  // ya maps:
  yandexMap();
  // ===========================================================================
  // select control
  customSelectControl();
  // ===========================================================================
  // buttons list slider control
  infoButtonsListSlider();
  // ===========================================================================
  //
  newStoryLine();
  // ===========================================================================
  //
  schemeTextControl();
  galleryPopupControl();
  // ===========================================================================
});
