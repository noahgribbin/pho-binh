// https://developers.google.com/maps/documentation/javascript/
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'),{
        center:{lat:-34,lng:150},
        scrollwheel:false,
        zoom:8
    });
}
