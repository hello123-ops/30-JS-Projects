// Dom
const progTime = document.getElementById("progressTime");
const progBar = document.getElementById("progress");
const musicDuration = document.getElementById("duration");
const shuffleBtn = document.getElementById("shuffleBtn");
const pervBtn = document.getElementById("prevBtn");
const playBtn = document.getElementById("playBtn");
const nextBtn = document.getElementById("nextBtn");
const repeatBtn = document.getElementById("repeatBtn");
const volumeBtn = document.getElementById("volumeSlider");

playBtn.addEventListener("click", () => {
  if (playBtn.getAttribute("type") === null) {
    playBtn.setAttribute("type", "play");
  } else {
    playBtn.removeAttribute("type");
  }

    if (playBtn.getAttribute("type") === "play") {
        playBtn.innerHTML = `<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" id="playIcon">
    <path d="M8 5v14l11-7z"/>
</svg>`;
        music.play();
    } else {
        playBtn.innerHTML = `<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" id="pauseIcon">
    <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
</svg>`;
        music.pause();
    }
});
