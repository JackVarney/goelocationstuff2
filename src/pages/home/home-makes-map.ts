var userPosition;
export class MakesMap {    

    getPosition() {
        navigator.geolocation.getCurrentPosition(geoValueReturned, geoValueNotReturned)
        function geoValueReturned(position) {
            userPosition = { lat: position.coords.latitude, lng: position.coords.longitude }
        }
        function geoValueNotReturned() {
            var userPosition = { lat: 0, lng: 0 }
        }
    }

    showMap() {
        var mapCenter = getCenter();
        let map = new google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: mapCenter
        });

        function getCenter() {
            mapCenter = { lat: userPosition.coords.latitude, lng: userPosition.coords.longitude };
            console.log(mapCenter);
            return mapCenter;
        };
    }
}