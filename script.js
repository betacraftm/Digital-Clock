window.onload = init();

function init() {
  setInterval(getTime, 50);

  function getTime() {
    const currentDate = new Date();
    const options = { weekday: "short" };
    const day = document.querySelector(".day");
    const weekDay = document.querySelector(".week-day");
    const month = document.querySelector(".month");
    const year = document.querySelector(".year");
    const hour = document.querySelector(".hour");
    const minute = document.querySelector(".minute");
    const second = document.querySelector(".second");

    //generate date

    weekDay.innerHTML = currentDate.toLocaleDateString("en-US", options);
    month.innerHTML = currentDate.getMonth() + 1;
    day.innerHTML = currentDate.getDate();
    year.innerHTML = currentDate.getFullYear();

    //generate time

    hour.innerHTML = currentDate.getHours();
    minute.innerHTML = currentDate.getMinutes();

    //adjust second
    if (currentDate.getSeconds() >= 0 && currentDate.getSeconds() < 10) {
      second.innerHTML = `0${currentDate.getSeconds()}`;
    } else {
      second.innerHTML = currentDate.getSeconds();
    }
  }
}
