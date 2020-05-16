function initMap() {
    // The location of Uluru
    const uluru = { lat: 40.678361, lng: -73.897464 };
    // The map, centered at Uluru
    const map = new google.maps.Map(
        document.getElementById("map"), { zoom: 13, center: uluru });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
        icon: "../images/map/marker.png"
    });

}