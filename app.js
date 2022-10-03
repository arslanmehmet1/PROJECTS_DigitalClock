const dayDisplay = document.querySelector(".day");
const timeDisplay = document.querySelector(".time");
const pmDisplay = document.querySelector(".pm");

const digitalClock = () => {
  let day = new Date().getDate();
  let month = new Date().getMonth();
  let year = new Date().getFullYear();
  let monthArr = [
    "Ocak",
    "Subat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ];

  let hour = new Date().getHours();
  let min = new Date().getMinutes();
  let second = new Date().getSeconds();
  let space = "   ";

  let amPm = hour > 12 ? "pm" : "am";
  hour = hour > 12 ? `${hour - 12}` : hour;
  hour = hour < 10 ? `0${hour}` : hour;
  min = min < 10 ? `0${min}` : min;
  second = second < 10 ? `0${second}` : second;

  day = day < 10 ? `0${day}` : day;

  dayDisplay.innerText = `--${space}${day} ${monthArr[month]} ${year}${space}--`;
  timeDisplay.innerText = `${hour}:${min}:${second}`;
  pmDisplay.innerText = `${amPm}`;
};

setInterval(digitalClock, 1000);
