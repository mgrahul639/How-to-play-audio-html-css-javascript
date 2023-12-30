var btnLen = document.querySelectorAll('.myButton');

var audio; // Declare the audio variable outside the function to make it accessible globally

for (var i = 0; i < btnLen.length; i++) {
    document.querySelectorAll('.myButton')[i].addEventListener('click', function () {
        var ShowText = this.innerHTML;
        //*console.log(ShowText);
        AudioPlay(ShowText);

    });
}

function AudioPlay(ShowText) {
    // Pause the current audio if it's playing
    if (audio && !audio.paused) {
        audio.pause();
        audio.currentTime = 0; // Reset the audio to the beginning
    }

    switch (ShowText) {
        case 'a':
            audio = new Audio('Audio/a.mp3');
            audio.play();
            break;

        case 'b':
            audio = new Audio('Audio/b.mp3');
            audio.play();
            break;

        case 'c':
            audio = new Audio('Audio/c.mp3');
            audio.play();
            break;
    }
}

function pauseAudio() {
    if (audio) {
        audio.pause();
    }
}

function stopAudio() {
    if (audio) {
        audio.pause();
        audio.currentTime = 0; //* Reset the audio to the beginning
    }
}



/*
function playAudio() {
    audio.play();
  }
  
  function pauseAudio() {
    audio.pause();
  }
  
  function stopAudio() {
    audio.pause();
    audio.currentTime = 0;
  }
*/

