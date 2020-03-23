const ul = document.getElementById('geo_app');
const geoIpUrl = 'https://freegeoip.app/json/';

function getGeoIP(ip) {
    fetch(geoIpUrl)
        .then( res => res.json())
        .then(geoIp => {
              ip = geoIp; 
    console.log(ip.country_code);        

const contain = document.querySelector('#contain');
const contain2 = document.querySelector('.contain2');

//  cotain and contain 2 is a div class in html but not working, need to look more.  // 

const title = document.querySelector('#title'); 
title.innerHTML = 'Greetings! Click on the link below to locate where you are on Google Maps';

const loaded = document.querySelector('#loaded');  
const linked = document.queryCommandValue('#linked'); 
linked.href = '';
linked.textContent = '';

const div = document.querySelector('.align');
div.innerHTML = 'Your <span> location </span> is coming from is <span class = "info"> ${ip[location_name]}</span>'; 

function geoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

// In the example shown the variables latitude and longitude work but not in my code // 

    status.textContent = '';
    linked.href = 'https://www.openstreetmap.org/#map=18/${latitude}/${longitude}'; 
    linked.textContent ='Coordinates are Latitude: ${latitude} and Longitude ${longitude}';
    }

function error() {
    loaded.textContent = 'Geolocation not supported on browser';
    console.log('status of ${loaded}');
}

if (!navigator.geolocation) {
    loaded.textContent = 'Geolocation not supported';
 } else {
    loaded.textContent = 'Loading Location...';
    navigator.geolocation.getCurrentPosition(geoSuccess, error);
  }
}) 

.catch(err => {
    console.log(err);
});

}

function refresh() {
    document.location.reload();
} 

const btnRefresh = document.getElementById('.Look_For_This');
    btnRefresh.textContent = 'Refresh';
    btnRefresh.addEventListener('click', refresh);
 
const btnSuccess = document.querySelector('.Look');
    btnSuccess.textContent = 'Look';
    btnSuccess.addEventListener('click', getGeoIP);    
