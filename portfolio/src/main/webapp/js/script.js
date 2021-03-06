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

async function parseJson(){

    const responseFromServer = await fetch('/randmessage');

    const messageList = await responseFromServer.json();

    const keys = Object.keys(messageList)

    const randIndex = Math.floor(Math.random() * keys.length)
    
    const randKey = keys[randIndex]





    const messageContainer = document.getElementById('rand-message');
    messageContainer.innerHTML = messageList[randKey];
}

async function randomKey(messageList){
    
// Use the key to get the corresponding name from the "names" object
return randKey;
}
