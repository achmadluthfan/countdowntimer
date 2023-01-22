export function createElement(x, y, ...classElement ) {
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
  return [dayLeft, hourLeft, minuteLeft, secondLeft,msToS];
};

// convert numbers date to name date
export function convertDate(day, month) {
  if (day == 1) {
    day = "Monday ";
  } else if (day == 2) {
    day = "Tuesday ";
  } else if (day == 3) {
    day = "Wednesday ";
  } else if (day == 4) {
    day = "Thursday ";
  } else if (day == 5) {
    day = "Friday ";
  } else if (day == 6) {
    day = "Saturday ";
  } else {
    day = "Sunday";
  }

  if (month == 0) {
    month = "Jan, ";
  } else if (month == 1) {
    month = "Feb, ";
  } else if (month == 2) {
    month = "Mar, ";
  } else if (month == 3) {
    month = "Apr, ";
  } else if (month == 4) {
    month = "May, ";
  } else if (month == 5) {
    month = "June, ";
  } else if (month == 6) {
    month = "July, ";
  } else if (month == 7) {
    month = "Aug,";
  } else if (month == 8) {
    month = "Sep,";
  } else if (month == 9) {
    month = "Oct,";
  } else if (month == 10) {
    month = "Nov,";
  } else {
    month = "Dec,";
  }

  return [day, month];
}

// function check bg class
export function checkClass() {
  if (document.body.closest(".bg-default-image")) {
    document.body.classList.remove("bg-default-image");
  } else if (document.body.closest(".bg-eid-image")) {
    document.body.classList.remove("bg-eid-image");
  } else if (document.body.closest(".bg-chrismas-image")) {
    document.body.classList.remove("bg-chrismas-image");
  } else if (document.body.closest(".bg-seclusion-image")) {
    document.body.classList.remove("bg-seclusion-image");
  } else if (document.body.closest(".bg-vesak-image")) {
    document.body.classList.remove("bg-vesak-image");
  } else if (document.body.closest(".bg-chinese-image")) {
    document.body.classList.remove("bg-chinese-image");
  }
}
