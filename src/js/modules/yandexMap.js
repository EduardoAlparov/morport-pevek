export default () => {
  let  myMap;
  const mapWrapper = document.getElementById('ya-map');

  if (mapWrapper) {
    ymaps.ready(init);

		function init () {
			myMap = new ymaps.Map('ya-map', {
				center: [69.703364, 170.264721], // Москва
				zoom: 10,
        controls: [],
        behaviors: [],
			}, {});

      myMap.geoObjects.add(
        new ymaps.Placemark([69.613364, 170.284721], {
      }, {
            draggable: false,
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'assets/images/map/placemark.png',
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
