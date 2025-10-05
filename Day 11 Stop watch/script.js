// DOM
let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");
let pauseBtn = document.getElementById("pauseBtn");
let resetBtn = document.getElementById("resetBtn");
let lapBtn = document.getElementById("lapBtn");
let lapList = document.getElementById("lapsList");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let hours = document.getElementById("hours");

let watchRunning = false;

let startWatch = () => {
  if (!watchRunning) {
    watchRunning = true;
    startBtn.disabled = true;
    resetBtn.disabled = false;
    lapBtn.disabled = false;
    stopBtn.disabled = false;
    timerCycle();
  }
};

let resetWatch = () => {
  watchRunning = false;
  seconds.innerText = "00";
  minutes.innerText = "00";
  hours.innerText = "00";
  startBtn.disabled = false;
  resetBtn.disabled = true;
  stopBtn.disabled = true;
  lapBtn.disabled = true;
  lapList.innerHTML = "";
};

//  1 sec delay bug

let stopWatch = () => {
  watchRunning = false;
  startBtn.disabled = false;
  resetBtn.disabled = false;
  lapBtn.disabled = true;
};

let lapWatch = () => {
    let lapItem = document.createElement("li");
    lapItem.classList.add("lap-item");
    lapItem.innerText = `${hours.innerText}:${minutes.innerText}:${seconds.innerText}`;
    lapList.appendChild(lapItem);
}

let timerCycle = () => {
  if (watchRunning === true) {
    setTimeout(() => {
      let currentSeconds = parseInt(seconds.innerText);
      let currentMinutes = parseInt(minutes.innerText);
      let currentHours = parseInt(hours.innerText);

      currentSeconds++;

      if (currentSeconds <= 9) {
        seconds.innerText = "0" + currentSeconds;
      } else if (currentSeconds > 9 && currentSeconds <= 59) {
        seconds.innerText = currentSeconds;
      } else if (currentSeconds > 59) {
        currentMinutes++;
        seconds.innerText = "00";
        currentSeconds = 0;

        if (currentMinutes <= 9) {
          minutes.innerText = "0" + currentMinutes;
        } else if (currentMinutes > 9 && currentMinutes <= 59) {
          minutes.innerText = currentMinutes;
        } else if (currentMinutes > 59) {
          currentHours++;
          minutes.innerText = "00";
          currentMinutes = 0;

          if (currentHours <= 9) {
            hours.innerText = "0" + currentHours;
          } else {
            hours.innerText = currentHours;
          }
        }
      }

      if (watchRunning === true) {
        timerCycle();
      }
    }, 1000);
  }
};

startBtn.addEventListener("click", startWatch);
resetBtn.addEventListener("click", resetWatch);
stopBtn.addEventListener("click", stopWatch);
lapBtn.addEventListener("click", lapWatch);