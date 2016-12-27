ymaps.ready(init);
      var myMap,
          myPlacemark;

      function init(){
        myMap = new ymaps.Map("map", {
                center: [59.938631, 30.323055],
                zoom: 15
        });

        myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {
                    hintContent: 'Pink',
                    balloonContent: 'Pink',
        },
        {
          iconLayout: 'default#image',
          iconImageHref: '../images/icons/icon-map-marker.svg',
          iconImageSize: [36, 36],
          iconImageOffset: [0, 0]
        });
        myMap.behaviors.disable(['scrollZoom']);
        myMap.geoObjects.add(myPlacemark);
    }
