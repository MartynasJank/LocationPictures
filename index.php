<!DOCTYPE html>
<html>
    <head>
        <title>Puslapio antraste</title>
        <meta charset="UTF-8">
        <link rel="stylesheet" type="text/css" href="style.css">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="jquery-3.1.0.min.js"></script>
        <script src="https://www.google.com/jsapi"></script>
        <script src="script.js"></script>
    </head>
    <body>
        <div class="container">
            <div id="map"></div>
            <div class="pictures">

            </div>
            <form method="POST" action="<?php echo dirname(__FILE__) ?>">
                <input id="userInput" type="textbox" placeholder="Object">
                <button id="userSubmit" type="submit">Seach</button>
            </form>
        </div>
        <script async defer
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBjPelaSJeq1nO5BBSXFjm0_aykknnVPfc&callback=initMap&libraries=places">
        </script>
    </body>
</html>
