document.addEventListener('DOMContentLoaded', function() {

  console.log("DOM fully loaded and parsed");

var lightSwitch = document.querySelector('.plate button');
var body = document.querySelector('body');
var message = document.querySelector('.status');



function callBack() {
  console.log('Light Switch was Clicked!');

    if (lightSwitch.classList.contains('on')) {
      console.log('Light Switch is now Off')
    lightSwitch.classList.add('off');
    lightSwitch.classList.remove('on');
    body.classList.remove('light')
    body.classList.add('dark')
    message.innerText = "Hey, who turned off the lights?"
  }

   else if (lightSwitch.classList.contains('off')) {
       console.log('Light Switch is now On')
    lightSwitch.classList.add('on');
    lightSwitch.classList.remove('off');
    body.classList.remove('dark')
    body.classList.add('light')
    message.innerText = "It's so bright in here!"


  }
}


lightSwitch.addEventListener('click', callBack);




});
