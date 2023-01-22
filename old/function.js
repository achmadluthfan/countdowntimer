export function createElement(x, y, ...classElement) {
  let newElement = [];
  for (let i = 0; i < x; i++) {
    newElement.push(document.createElement(`${y}`));
    newElement[i].classList.add(classElement[i]);
  }

  return newElement;
}

const container = document.querySelector(".container");
const choiceMenu = document.querySelector(".choice");

// Function choice style
export function choiceDefaultPosition() {
  (choiceMenu.style.transform = "translate(-50%, -200%)"),
    container.classList.remove("pop-up-effect-container"),
    document.body.classList.remove("pop-up-effect-body");
}

// get data
export function getData() {
  let hourData = new Date().getHours();
  let minuteData = new Date().getMinutes();
  let secondData = new Date().getSeconds();

  return [hourData, minuteData, secondData];
}

export let countDown = function (
  year,
  month,
  day,
  hours,
  minutes,
  seconds,
  milliseconds
) {
  const setTime = new Date(
    year,
    month,
    day,
    hours,
    minutes,
    seconds,
    milliseconds
  );

  let now = new Date().getTime();

  let msToS = Math.round((setTime - now) / 1000);

  let secondLeft = msToS % 60;
  let minuteLeft = Math.floor((msToS / 60) % 60);
  let hourLeft = Math.floor((msToS / 3600) % 24);
  let dayLeft = Math.floor(msToS / 3600 / 24);

  return [dayLeft, hourLeft, minuteLeft, secondLeft, msToS];
};
