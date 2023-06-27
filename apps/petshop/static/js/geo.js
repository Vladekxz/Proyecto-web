function checkGeo(){
    if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(function(position){
             var lat = position.coords.latitude;
             var lon = position.coords.longitude;
             apiGeo(lat,lon);
         });
     } else {
         alert('It seems like Geolocation, which is required for this page, is not enabled in your browser. Please use a browser which supports it.');
     }
 }

 function apiGeo(lat,lon){
     fetch('https://api.openweathermap.org/data/2.5/weather?lat='+ lat +'&lon='+ lon +'&appid=f7e0f5d3c3baa8c75f675ca585940a1b&units=metric')
     .then(response => response.json())
     .then(data => {

        let grados = document.getElementById("weather");
         grados.innerHTML ="Temperatura: " + Math.floor(data.main.temp) +"°C";
     })
 }

checkGeo();