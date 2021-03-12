$(function(){
  $('.monster').fadeIn('slow');
});

$(document).ready(function() {
    $(window).scroll( function(){
        $('.hideme').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},1500);
            }
        });
    });
});

async function showServerTime() {
  const responseFromServer = await fetch('/date');
  const textFromResponse = await responseFromServer.text();

  const dateContainer = document.getElementById('date-container');
  dateContainer.innerText = textFromResponse;
}
setInterval(function(){showServerTime();}, 1000);


//Parses JSON 
async function GetMessage(){

    const responseFromServer = await fetch('/randmessage');

    const messageList = await responseFromServer.json();

    const keys = Object.keys(messageList)

    const randIndex = Math.floor(Math.random() * keys.length)
    
    const randKey = keys[randIndex]

    const messageContainer = document.getElementById('rand-message');
    messageContainer.innerHTML = messageList[randKey];
}
// GMAP
function createMap() {
    const home = { lat: 40.83722745338909, lng:  -74.1191471082704 }
    const offset = {lat: 40.84042660141585, lng: -74.03443215073405}
    const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: offset,
    disableDefaultUI: true,
    draggable: false,
    animation: google.maps.Animation.DROP
  });

//   const marker = new google.maps.Marker({
//     position: home,
//     map: map,
//   });
}
