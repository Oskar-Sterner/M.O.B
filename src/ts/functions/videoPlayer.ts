let playButton = document.getElementById("play_button") as HTMLButtonElement;
let video = document.getElementById("video") as HTMLVideoElement;
let pressText = document.getElementById("press") as HTMLHeadElement;
let onText = document.getElementById("on") as HTMLHeadElement;
let playText = document.getElementById("play") as HTMLHeadElement;

export function playVideo(){
    playButton.addEventListener("click", function() {
    video.volume = 0.2;
        if (video.paused == true) {
            video.play();

            pressText.classList.remove("press-visible");
            pressText.classList.add("press-non-visible");

            onText.classList.remove("on-visible");
            onText.classList.add("on-non-visible");

            playText.classList.remove("play-visible");
            playText.classList.add("play-non-visible");

            playButton.innerHTML = `<i class="fa-solid fa-pause"></i>`;
        } else {
            video.pause();

            pressText.classList.remove("press-non-visible");
            pressText.classList.add("press-visible");
            
            onText.classList.remove("on-non-visible");
            onText.classList.add("on-visible");
            
            playText.classList.remove("play-non-visible");
            playText.classList.add("play-visible"); 

            playButton.innerHTML = `<i class="fa-solid fa-play"></i>`;
        }
    });
}