import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default () => {
  const mapWrapper = document.getElementById('ya-map');

  if(!mapWrapper) {
    return;
  }

  const script = document.createElement('script');
  script.src = "https://api-maps.yandex.ru/2.1/?apikey=d02525f1-2a0d-4700-a5e1-e4487f06702c&?apikey=d02525f1-2a0d-4700-a5e1-e4487f06702c&load=package.full&lang=ru-RU";
  document.head.append(script);

  script.onload = function() {
    let  myMap;
    let centerCoordinates = JSON.parse("[" + mapWrapper.dataset.centerCoord + "]");
    let placemarkCoordinates = JSON.parse("[" + mapWrapper.dataset.placemarkCoord + "]");
    let mapZoom = Number(mapWrapper.dataset.zoom);
    let iconHref = mapWrapper.dataset.iconHref;
    let mapControls = mapWrapper.dataset.controls.split(', ');

    if (mapWrapper) {
      ymaps.ready(init);

      function init () {
        myMap = new ymaps.Map('ya-map', {
          center: centerCoordinates, // Pevek port
          zoom: mapZoom,
          controls: mapControls,
          behaviors: ['drag', 'scrollZoom'],
        }, {});

        myMap.geoObjects.add(
          new ymaps.Placemark( placemarkCoordinates, {
        }, {
              draggable: false,
              iconLayout: ymaps.templateLayoutFactory.createClass([
                '<div class="ya-maps-placemark"">',
                '{% include "default#image" %}',
                '</div>'
              ].join('')),
              // Своё изображение иконки метки.
              iconImageHref: iconHref,
              // Размеры метки.
              iconImageSize: [52, 52],
              // Смещение левого верхнего угла иконки относительно
              // её "ножки" (точки привязки).
              iconImageOffset: [-26, -26]
        })
        )
      }
    }

  }
}
