import dayjs from "https://cdn.jsdelivr.net/npm/dayjs@1.11.10/+esm";

window.addEventListener("DOMContentLoaded", () => {
  setInterval(getTime, 50);
  function getTime() {
    const currentTime = document.querySelector(".current-time");
    const currentDay = document.querySelector(".current-day");
    currentDay.innerHTML = dayjs().format("dddd DD-MM-YYYY");
    currentTime.innerHTML = dayjs().format("HH:mm:ss");
  }
});

// BUTTON INTERACTIVE
const timezoneOverlay = document.querySelector(".timezone-overlay");
const timezoneBtn = document.querySelector(".btn");
const closeBtn = document.querySelector(".close-btn");
timezoneBtn.addEventListener("click", () => {
  timezoneOverlay.classList.add("show");
});
closeBtn.addEventListener("click", () => {
  timezoneOverlay.classList.remove("show");
});

