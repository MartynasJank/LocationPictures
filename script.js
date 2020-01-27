//Globallus kintamieji
var map;
var input =  document.getElementById('userSubmit');

//SUKURIAMAS ZEMELAPIS
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: {lat: 55.409337, lng: 23.993733},
        scrollwheel: false,
        draggable: false,
        disableDoubleClickZoom: true,
        disableDefaultUI: true,
    });

    //IDEDAMAS AUTOCOMPLETE
    var input = document.getElementById('userInput');
    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo(input, map);

    //SUKURIAMAS GEOCODER OBJ
    var geocoder = new google.maps.Geocoder();

    //PAIMAMI IVESTI DUOMENYS
    document.getElementById('userSubmit').addEventListener('click', function() {
        geocodeAddress(geocoder, map);
        $('form').addClass('active');
    });

}


function geocodeAddress(geocoder, resultsMap) {
        var address = document.getElementById('userInput').value;
        var keyword = address;
        geocoder.geocode({'address': address}, function(results, status) {
            if (status === 'OK') {
                resultsMap.setCenter(results[0].geometry.location);
                resultsMap.fitBounds(results[0].geometry.viewport);
                /////////////
                var request = {
                    placeId: results[0].place_id,
                };

                var service = new google.maps.places.PlacesService(map);
                service.getDetails(request, createPhotoMarker);

                function createPhotoMarker(place) {
                    var photos = place.photos;
                    if (!photos) {
                        console.log("No photos");
                        return;
                    }
                    console.log(photos.length);
                    //IDEDA SKIRTINGAS NUOTRAUKAS KIEKVIENAM IMAGE
                    $('.img').remove();
                    $.each(photos, function(i, value){
                        var image_src = photos[i].getUrl({maxWidth: 700});
                        $('.pictures').append('<img class="img" src="'+image_src +'">');
                        //$(this).css('content', "url('" + image_src + "')");
                    });

                    //TKRINA AR NUOTRAUKA YRA PAPRASTA IR JA PADIDINA ARBA SUMAZINA
                    var isClicked = false;
                    $(".img").click(function(){
                        if(isClicked == false){
                            $('.pictures').removeClass('fullCont');
                            $('.img').removeClass('full');
                            $('.img').hide();
                            $(this).fadeIn();
                            $('.pictures').addClass('fullCont');
                            $(this).addClass('full');
                            isClicked = true;
                        } else {
                            $('.img').removeClass('full');
                            $('.pictures').removeClass('fullCont');
                            $('.img').show()
                            isClicked = false;
                        }
                    });
                }
            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
}


