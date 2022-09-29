const timeDisplay = document.querySelector(".time");

const digitalClock = () => {
  let hour = new Date().getHours();
  let min = new Date().getMinutes();
  let second = new Date().getSeconds();

  let amPm = hour > 12 ? "pm" : "am";
  hour = hour < 10 ? `0${hour}` : hour;
  min = min < 10 ? `0${min}` : min;
  second = second < 10 ? `0${second}` : second;

  timeDisplay.innerText = `${hour}:${min}:${second} ${amPm}`;
};

setInterval(digitalClock, 1000);
