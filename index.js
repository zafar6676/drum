var audio = new Audio('tom-1.mp3');

for (let i=0; i<document.querySelectorAll(".drum").length; i++) {

  document.querySelectorAll(".drum")[i].addEventListener('click', function () {

  var buttonInnerHTML = this.innerHTML;

  
   makeSound(buttonInnerHTML);


  });
}

document.addEventListener("keypress", function(e) {
  makeSound(event.key);
});

function makeSound(key) {

  switch (key) {
    case "w":
        var tom1 = new Audio('..//Drum Kit Starting Files/sounds/tom-1.mp3');
        tom1.play();
    break;
    case "a":
        var tom2 = new Audio('..//Drum Kit Starting Files/sounds/tom-2.mp3');
        tom2.play();
    break;
    case "s":
        var tom3 = new Audio('..//Drum Kit Starting Files/sounds/tom-3.mp3');
        tom3.play();
    break;
    case "d":
        var tom4 = new Audio('..//Drum Kit Starting Files/sounds/tom-4.mp3');
        tom4.play();
    break;
    case "j":
        var crash = new Audio('..//Drum Kit Starting Files/sounds/crash.mp3');
        crash.play();
    break;
    case "k":
        var snare = new Audio('..//Drum Kit Starting Files/sounds/snare.mp3');
        snare.play();
    break;
    case "l":
        var kickBass = new Audio('..//Drum Kit Starting Files/sounds/kick-bass.mp3');
        kickBass.play();
    break;
  

    default:console.log(key);
      break;
  }

  
}