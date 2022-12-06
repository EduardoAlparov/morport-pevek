export default () => {
  let  myMap;
  const mapWrapper = document.getElementById('ya-map');

  if (mapWrapper) {
    ymaps.ready(init);

		function init () {
			myMap = new ymaps.Map('ya-map', {
				center: [69.703364, 170.264721], // Pevek port
				zoom: 12,
        controls: [],
        behaviors: [],
			}, {});

      myMap.geoObjects.add(
        new ymaps.Placemark([69.702974, 170.274369], {
      }, {
            draggable: false,
            iconLayout: ymaps.templateLayoutFactory.createClass([
              '<div class="ya-maps-placemark"">',
              '{% include "default#image" %}',
              '</div>'
            ].join('')),
            // Своё изображение иконки метки.
            iconImageHref: 'assets/images/map/anchor.svg',
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
