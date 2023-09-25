window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loadingScreen');
  const content = document.getElementById('content');

  setTimeout(() => {
    loadingScreen.style.display = 'none';
    content.style.display = 'block';
  }, 3000); // Adjust the timeout duration (in milliseconds)
});


const logo = document.getElementById('logo');

window.addEventListener('load', () => {
  setTimeout(() => {
    logo.style.opacity = '1';
    logo.style.transform = 'scale(1)';
  }, 200);
});

// description of movie

var words = [
  'Loki is an American television series created by Michael Waldron for the streaming service Disney+, based on Marvel Comics.',
  'The series takes place after the events of the film Avengers: Endgame (2019). ',
];
var part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 20;

var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.movie-des').text(part);
  },speed);
};

$(document).ready(function () {
  wordflick();
});

// video cards

const videoCards = document.querySelectorAll('.video-card');

videoCards.forEach(item => {
    item.addEventListener('mouseover', () => {
        let video = item.children[1];
        video.play();
    })
    item.addEventListener('mouseleave', () => {
        let video = item.children[1];
        video.pause();
    })
})

document.getElementById("login-button").addEventListener("click", function() {
  document.getElementById("login-modal").style.display = "block";
});

document.querySelector(".close-button").addEventListener("click", function() {
  document.getElementById("login-modal").style.display = "none";
});

