var mode = document.querySelector("#button-mode");

var more_examples = document.querySelector(".button-more-examples");

var songs = document.querySelector("#btn-songs")

var counter = 0;

var music = 0;

mode.addEventListener("click", function() {

  var card = document.querySelectorAll(".card");
  var i;

  for (i = 0; i < card.length; i++) {
    card[i].classList.toggle("bg-dark");
    card[i].classList.toggle("text-white");
  }
  document.querySelector(".btn-nav").classList.toggle("btn-warning");

  changeIcon();
});

function changeIcon() {

  var classes_icon = document.querySelector(".fa-mode").classList;

  classes_icon.toggle("fa-moon");
  classes_icon.toggle("fa-sun");

  classes_icon.toggle("text-white");
  classes_icon.toggle("text-dark");

  changeIconBackground();
  changeNavBar();
}

function changeIconBackground() {

  if (mode.classList.contains("btn-dark")) {
    mode.classList.remove("btn-dark");
    mode.classList.add("btn-light");
  } else {
    mode.classList.add("btn-dark");
    mode.classList.remove("btn-light");
  }
}

function changeNavBar() {
  var nav_bar = document.querySelector(".navbar");
  nav_bar.classList.toggle("navbar-dark");
  nav_bar.classList.toggle("navbar-light");
  nav_bar.classList.toggle("bg-dark");
  nav_bar.classList.toggle("bg-light");
}

more_examples.addEventListener("click", function() {

  var more_examples_tab = document.querySelector(".more-examples");
  if (counter%2 === 0){
    more_examples_tab.style.display = "block";
  }else{
    more_examples_tab.style.display = "none";
  }
  counter++;
});

songs.addEventListener("click", function(){

  var song_file = document.getElementById("myAudio");
  console.log(music);
  if(music%2 == 0){
    song_file.play();
  }else{
      song_file.pause();
  }
  document.querySelector(".fa-song").classList.toggle("fa-pause");
  document.querySelector(".fa-song").classList.toggle("fa-play");
  music++;
});
