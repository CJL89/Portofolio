
// Creating variable map to save it in it.
var map;

// Function to load the Google Maps API.
function initMap() {

    // Styling the maps so the neighborhoods get highlighted.
    // Styles takes from: "https://snazzymaps.com/style/2709/local-neighborhoods"
    var styles = [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"},{"visibility":"on"}]},{"featureType":"administrative.neighborhood","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f1f0f0"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"landscape.natural.landcover","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#03b7b0"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.school","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#cccccc"},{"lightness":"0"}]},{"featureType":"poi.school","elementType":"geometry.fill","stylers":[{"color":"#fcce61"}]},{"featureType":"poi.school","elementType":"labels.icon","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#f1f0f0"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#cccccc"},{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"geometry.fill","stylers":[{"color":"#fcce61"}]},{"featureType":"transit.line","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"transit.station.bus","elementType":"geometry.fill","stylers":[{"hue":"#ffb300"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#2ab6de"},{"lightness":"0"},{"gamma":"1.00"}]},{"featureType":"water","elementType":"labels.text","stylers":[{"visibility":"simplified"},{"color":"#ffffff"}]}],

    // Initializing map and saving in variable and inputing in the "maps" ID.
    map = new google.maps.Map(document.getElementById('map'), {
        //Central Park is the center of the map.
        center: {lat: 40.7728, lng: -73.9759},
        zoom: 13,
        // Initializing the style that saved in the variable "styles".
        styles: styles,
        // Disabled the feature of changing between earth and other types.
        mapTypeControl: false
    });

    // Creation of location variables and hardcoded different neighborhoods.
    var locations = [
        {title: "Battery Park City", location: {lat: 40.7033, lng: -74.0170}},
        {title: "Carnegie Hill", location: {lat: 40.7845, lng: -73.9551}},
        {title: "Central Park", location: {lat: 40.7829, lng: -73.9654}},
        {title: "East Village", location: {lat: 40.7265, lng: -73.9815}},
        {title: "Financial District", location: {lat: 40.7075, lng: -74.0113}},
        {title: "Garment District", location: {lat: 40.7547, lng: -73.9916}},
        {title: "Gramercy Park", location: {lat: 40.7368, lng: -73.9845}},
        {title: "Greenwich Village", location: {lat: 40.7336, lng: -74.0027}},
        {title: "Harlem", location: {lat: 40.8116, lng: -73.9465}},
        {title: "Hell's Kitchen", location: {lat: 40.7638, lng: -73.9918}},
        {title: "Inwood", location: {lat: 40.8677, lng: -73.9212}},
        {title: "Kips Bay", location: {lat: 40.7423, lng: -73.9801}},
        {title: "Lenox Hill", location: {lat: 40.7662, lng: -73.9602}},
        {title: "Midtown", location: {lat: 40.7549, lng: -73.9840}},
        {title: "Morning Heights", location: {lat: 40.8090, lng: -73.9624}},
        {title: "Nolita", location: {lat: 40.7229, lng: -73.9955}},
        {title: "SoHo", location: {lat: 40.7233, lng: -74.0030}},
        {title: "Tribeca", location: {lat: 40.7163, lng: -74.0086}},
        {title: "Tudor City", location: {lat: 40.7488, lng: -73.9716}},
        {title: "Upper East Side", location: {lat: 40.7736, lng: -73.9566}},
        {title: "Upper West Side", location: {lat: 40.7870, lng: -73.9754}},
        {title: "Washington Heights", location: {lat: 40.8417, lng: -73.9394}},
        {title: "Yorkville", location: {lat: 40.7762, lng: -73.9492}}
    ];

    // Creation of variable "infowindow" so we can dislay the names of the neighborhoods.
    var infowindow = new google.maps.InfoWindow();

    // For loop that iterates through the different locations.
    for (var i = 0; i < locations.length; i++) {

        // Create variable "position" within the scope of the for loop to get the lat & lng.
        var position = locations[i].location;

        // Create the variable "titles" within the scope of the for loop to get the name of the neighborhood.
        var titles = locations[i].title;

        // Create the variable "marker" within the scope of the for loop.
        var marker = new google.maps.Marker({
            position: position,
            title: titles,
            animation: google.maps.Animation.DROP,
            map: map
        });

        marker.addListener('click', function() {
            infowindowDescription(this, infowindow);
        });
    };

    // Function that populates the infowindow with the appropiate text.
    function infowindowDescription(marker, infowindow) {
        // Checking if infowindow is open.
        if (infowindow != marker) {
            // Setting infowindow to equate to marker.
            infowindow.marker = marker;
            // Setting the location of where the infowindow will open.
            infowindow.open(map, marker);
            // Setting the text content that appears within the infowindo.
            infowindow.setContent(marker.title);
            // Setting the event listener to clear when the infowindow is closed.
            infowindow.addListener("closeclick", function(){
                infowindow.marker = null;
            });
        }
    }
}