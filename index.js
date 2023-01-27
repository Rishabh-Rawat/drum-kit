var buttons = document.querySelectorAll(".drum");

function play_audio(letter) {
  var audio;
  switch (letter) {
    case "w":
      audio = new Audio("sounds/tom-1.mp3");
      break;
    case "a":
      audio = new Audio("sounds/tom-2.mp3");
      break;
    case "s":
      audio = new Audio("sounds/tom-3.mp3");
      break;
    case "d":
      audio = new Audio("sounds/tom-4.mp3");
      break;
    case "j":
      audio = new Audio("sounds/snare.mp3");
      break;
    case "k":
      audio = new Audio("sounds/crash.mp3");
      break;
    case "l":
      audio = new Audio("sounds/kick-bass.mp3");
      break;
    default:
      console.log(letter);
      break;
  }

  audio.play();
}

function animation(letter) {
  var button = "." + letter;
  document.querySelector(button).classList.add("pressed");

  setTimeout(function () {
    document.querySelector(button).classList.remove("pressed");
  }, 100);
}

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var letter = this.textContent;
    play_audio(letter);
    animation(letter);
  });
}

document.addEventListener("keydown", function (event) {
  var letter = event.key;
  play_audio(letter);
  animation(letter);
});
