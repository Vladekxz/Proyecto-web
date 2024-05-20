function checkGeo() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;
            apiGeo(lat, lon);
        });
    } else {
        alert('It seems like Geolocation, which is required for this page, is not enabled in your browser. Please use a browser which supports it.');
    }
}


function apiGeo(lat, lon) {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=f7e0f5d3c3baa8c75f675ca585940a1b&units=metric')
        .then(response => response.json())
        .then(data => {
            let temperature = Math.floor(data.main.temp);
            let weatherIcon = data.weather[0].icon;
            let weatherDescription = data.weather[0].description;


            document.getElementById("weather-icon").src = "http://openweathermap.org/img/wn/" + weatherIcon + ".png";
            document.getElementById("weather").innerHTML = temperature + "°C";

        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}


checkGeo();
