import {
  createElement,
  choiceDefaultPosition,
  getData,
  countDown,
} from "./function.js";

const container = document.querySelector(".container");

// close button
const closeButton = document.querySelector(".close");
const choiceMenu = document.querySelector(".choice");
closeButton.addEventListener("click", function () {
  choiceDefaultPosition();
});

// choose day button
const chooseButton = document.querySelector(".choose-day");
chooseButton.addEventListener("click", function () {
  choiceMenu.style.transform = "translate(-50%, -50%)";
  setTimeout(() => {
    container.classList.add("pop-up-effect-container");
    document.body.classList.add("pop-up-effect-body");
  }, 300);
});

// Make element after threedot was clicked
const formatTimeParent = createElement("1", "div", "format");
const formatTimeChild = createElement(
  8,
  "div",
  "format-clock",
  "location-time",
  "twelve",
  "twenty-four",
  "wib",
  "wita",
  "wit",
  "apply-setting"
);

// MERGE EACH ITEM to parent
let theContent;

formatTimeChild.forEach((element) => {
  if (
    element.classList.contains("twelve") ||
    element.classList.contains("twenty-four")
  ) {
    formatTimeChild[0].append(element);

    if (element.classList.contains("twelve")) {
      theContent = "12 Hour";
      element.innerHTML = theContent;
    } else {
      theContent = "24 Hour";
      element.innerHTML = theContent;
    }
  } else if (
    element.classList.contains("wib") ||
    element.classList.contains("wita") ||
    element.classList.contains("wit")
  ) {
    formatTimeChild[1].append(element);

    if (element.classList.contains("wib")) {
      theContent = "WIB";
      element.innerHTML = theContent;
    } else if (element.classList.contains("wita")) {
      theContent = "WITA";
      element.innerHTML = theContent;
    } else {
      theContent = "WIT";
      element.innerHTML = theContent;
    }
  }
});

// append elements to main parent (div.format)
for (let i = 0; i < 2; i++) {
  formatTimeParent[0].append(formatTimeChild[i]);
}

// apply elements
formatTimeChild[7].append("apply");
formatTimeParent[0].append(formatTimeChild[7]);

// append main parent (div.format) to body
document.body.appendChild(formatTimeParent[0]);

// click listener for div.format

formatTimeParent[0].addEventListener("click", function (e) {
  if (
    e.target.classList.contains("twelve") ||
    e.target.classList.contains("twenty-four")
  ) {
    for (let i = 2; i <= 3; i++) {
      if (formatTimeChild[i].classList.contains("clicked-effect")) {
        formatTimeChild[i].classList.remove("clicked-effect");
      }
    }

    e.target.classList.add("clicked-effect");
  } else if (
    e.target.classList.contains("wib") ||
    e.target.classList.contains("wita") ||
    e.target.classList.contains("wit")
  ) {
    for (let i = 4; i <= 6; i++) {
      if (formatTimeChild[i].classList.contains("clicked-effect")) {
        formatTimeChild[i].classList.remove("clicked-effect");
      }
    }

    e.target.classList.add("clicked-effect");
  }
});

// three dot click handler
const threeDot = document.querySelector(".three-dot");
threeDot.addEventListener("click", function () {
  formatTimeParent[0].style.top = "40%";
  formatTimeParent[0].style.opacity = "1";
  formatTimeParent[0].style.pointerEvents = "all";
});

// end of three dot

// Apply button handler
formatTimeChild[7].addEventListener("click", function () {
  formatTimeChild.forEach((element) => {
    if (element.classList.contains("clicked-effect")) {
      element.classList.add("use-format");
      formatTimeParent[0].style.top = "35%";
      formatTimeParent[0].style.opacity = "0";
      formatTimeParent[0].style.pointerEvents = "none";
    } else {
      element.classList.remove("use-format");
    }
  });
});
// end of apply button handler

// CLOCK ELEMENT
const clockParent = document.querySelector(".clock");
const dateParent = document.querySelector(".date");

let dateChilds = createElement(3, "p", "month", "day", "date-number");
let clockChild = createElement(4, "p", "hour", "separated", "minute", "second");

// insert each clock element to parent
dateChilds.forEach((element) => {
  dateParent.append(element);
});

clockChild.forEach((element) => {
  clockParent.append(element);
});
clockChild[1].append(":");
// end insert each clock element

// END OF CLOCK ELEMENT

// AM / PM element
const twelveFormat = document.querySelector(".twelve-hour");
const upTwelve = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
];
// end AM / PM

// Logic clock
function clock() {
  let clockData = getData();

  // lOCATION TIME
  if (formatTimeChild[4].classList.contains("use-format")) {
    clockChild[0].innerHTML = clockData[0];
  } else if (formatTimeChild[5].classList.contains("use-format")) {
    clockData[0] = clockData[0] + 1;
    clockChild[0].innerHTML = clockData[0];
  } else if (formatTimeChild[6].classList.contains("use-format")) {
    clockData[0] = clockData[0] + 2;
    clockChild[0].innerHTML = clockData[0];
  }

  // 12 HOUR FORMAT
  if (formatTimeChild[2].classList.contains("use-format")) {
    if (clockData[0] < 12) {
      twelveFormat.innerHTML = "AM";

      if (clockData[0] < 10) {
        clockChild[0].innerHTML = "0" + clockData[0];
      }

      clockChild[2].innerHTML = clockData[1];
      clockChild[3].innerHTML = clockData[2];
    } else if (clockData[0] >= 12) {
      if (clockData[0] === 12) {
        clockData[0] = "00";
        clockChild[0].innerHTML = clockData[0];
      } else if (clockData[0] === 13) {
        clockData[0] = upTwelve[0];
        clockChild[0].innerHTML = clockData[0];
      } else if (clockData[0] === 14) {
        clockData[0] = upTwelve[1];
        clockChild[0].innerHTML = clockData[0];
      } else if (clockData[0] === 15) {
        clockData[0] = upTwelve[2];
        clockChild[0].innerHTML = clockData[0];
      } else if (clockData[0] === 16) {
        clockData[0] = upTwelve[3];
        clockChild[0].innerHTML = clockData[0];
      } else if (clockData[0] === 17) {
        clockData[0] = upTwelve[4];
        clockChild[0].innerHTML = clockData[0];
      } else if (clockData[0] === 18) {
        clockData[0] = upTwelve[5];
        clockChild[0].innerHTML = clockData[0];
      } else if (clockData[0] === 19) {
        clockData[0] = upTwelve[6];
        clockChild[0].innerHTML = clockData[0];
      } else if (clockData[0] === 20) {
        clockData[0] = upTwelve[7];
        clockChild[0].innerHTML = clockData[0];
      } else if (clockData[0] === 21) {
        clockData[0] = upTwelve[8];
        clockChild[0].innerHTML = clockData[0];
      } else if (clockData[0] === 22) {
        clockData[0] = upTwelve[9];
        clockChild[0].innerHTML = clockData[0];
      } else if (clockData[0] === 23) {
        clockData[0] = upTwelve[10];
        clockChild[0].innerHTML = clockData[0];
      }

      if (clockData[1] < 10) {
        clockChild[2].innerHTML = "0" + clockData[1];
      } else {
        clockChild[2].innerHTML = clockData[1];
      }

      clockChild[3].innerHTML = clockData[2];
      twelveFormat.innerHTML = "PM";
    }
  } else {
    // 24 HOUR FORMAT
    twelveFormat.innerHTML = "";
    if (clockData[0] < 10) {
      clockChild[0].innerHTML = "0" + clockData[0];
    } else {
      clockChild[0].innerHTML = clockData[0];
    }

    if (clockData[1] < 10) {
      clockChild[2].innerHTML = "0" + clockData[1];
    } else {
      clockChild[2].innerHTML = clockData[1];
    }

    clockChild[3].innerHTML = clockData[2];
  }

  // DATE SECTION
  let month = new Date().getMonth();
  let day = new Date().getDay();
  let date = new Date().getDate();

  // convert number's day & month to name
  if (day == 1) {
    day = "Monday";
  } else if (day == 2) {
    day = "Tuesday";
  } else if (day == 3) {
    day = "Wednesday";
  } else if (day == 4) {
    day = "Thursday";
  } else if (day == 5) {
    day = "Friday";
  } else if (day == 6) {
    day = "Saturday";
  } else {
    day = "Sunday";
  }

  if (month == 0) {
    month = "Jan,";
  } else if (month == 1) {
    month = "Feb,";
  } else if (month == 2) {
    month = "Mar,";
  } else if (month == 3) {
    month = "Apr,";
  } else if (month == 4) {
    month = "May";
  } else if (month == 5) {
    month = "June,";
  } else if (month == 6) {
    month = "July,";
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

  dateChilds[0].innerHTML = month;
  dateChilds[1].innerHTML = day;
  dateChilds[2].innerHTML = date;
}

let functionX = clock;

const days = document.querySelector(".days");

// catch countdown parent & children
const countDownParent = document.querySelector(".countdown-parent");
const countDownChildren = countDownParent.querySelectorAll(".remaining-time");
// console.log(countDownParent.className.)
document.body.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("new-year") ||
    e.target.textContent == " New Year "
  ) {
    choiceDefaultPosition();
    document.body.style.backgroundImage = "url(../image/image/new-year.jpg)";
    functionX = countDown;
    for (let i = 0; i < 6; i++) {
      if (
        days.children[i].classList.contains("count-use") ||
        countDownParent.classList.contains("new-year-style")
      ) {
        days.children[i].classList.remove("count-use");
      }
    }
    countDownParent.classList.add("new-year-style");
    days.children[0].classList.add("count-use");
    countDownParent.style.display = "flex";

    countDownChildren.forEach((element) => {
      element.classList.remove("eid-style");
      element.classList.remove("chrismas-style");
      element.classList.remove("chinese-style");
      element.classList.remove("seclusion-style");
      element.classList.remove("vesak-style");
    });
  } else if (
    e.target.classList.contains("eid") ||
    e.target.textContent == " Eid Mubarak "
  ) {
    choiceDefaultPosition();
    document.body.style.backgroundImage = `url(../image/image/eid-mubarak-1.jpg)`;
    functionX = countDown;
    for (let i = 0; i < 6; i++) {
      if (days.children[i].classList.contains("count-use")) {
        days.children[i].classList.remove("count-use");
      }
    }

    days.children[1].classList.add("count-use");
    countDownParent.style.display = "flex";

    countDownParent.classList.remove("new-year-style");
    countDownChildren.forEach((element) => {
      element.classList.add("eid-style");
      element.classList.remove("chrismas-style");
      element.classList.remove("chinese-style");
      element.classList.remove("seclusion-style");
      element.classList.remove("vesak-style");
    });
  } else if (
    e.target.classList.contains("christmas") ||
    e.target.textContent == " Christmas "
  ) {
    choiceDefaultPosition();
    document.body.style.backgroundImage = `url(../image/image/chrismas.jpg)`;
    functionX = countDown;
    for (let i = 0; i < 6; i++) {
      if (days.children[i].classList.contains("count-use")) {
        days.children[i].classList.remove("count-use");
      }
    }

    days.children[2].classList.add("count-use");
    countDownParent.style.display = "flex";

    countDownParent.classList.remove("new-year-style");
    countDownChildren.forEach((element) => {
      element.classList.add("chrismas-style");
      element.classList.remove("seclusion-style");
      element.classList.remove("vesak-style");
      element.classList.remove("eid-style");
      element.classList.remove("chinese-style");
    });
  } else if (
    e.target.classList.contains("seclusion") ||
    e.target.textContent == " Seclusion "
  ) {
    choiceDefaultPosition();
    document.body.style.backgroundImage = `url(../image/image/prambanan.jpg)`;
    functionX = countDown;
    for (let i = 0; i < 6; i++) {
      if (days.children[i].classList.contains("count-use")) {
        days.children[i].classList.remove("count-use");
      }
    }

    days.children[3].classList.add("count-use");
    countDownParent.style.display = "flex";

    countDownParent.classList.remove("new-year-style");
    countDownChildren.forEach((element) => {
      element.classList.add("seclusion-style");
      element.classList.remove("chrismas-style");
      element.classList.remove("vesak-style");
      element.classList.remove("eid-style");
      element.classList.remove("chinese-style");
    });
  } else if (
    e.target.classList.contains("vesak") ||
    e.target.textContent == " Vesak "
  ) {
    choiceDefaultPosition();
    document.body.style.backgroundImage = `url(../image/image/borobudur.jpg)`;
    functionX = countDown;
    for (let i = 0; i < 6; i++) {
      if (days.children[i].classList.contains("count-use")) {
        days.children[i].classList.remove("count-use");
      }
    }

    days.children[4].classList.add("count-use");
    countDownParent.style.display = "flex";

    countDownParent.classList.remove("new-year-style");
    countDownChildren.forEach((element) => {
      element.classList.add("vesak-style");
      element.classList.remove("seclusion-style");
      element.classList.remove("chrismas-style");
      element.classList.remove("eid-style");
      element.classList.remove("chinese-style");
    });
  } else if (
    e.target.classList.contains("chinese") ||
    e.target.textContent == " Chinese New Year "
  ) {
    choiceDefaultPosition();
    document.body.style.backgroundImage = `url(../image/image/chinese.jpg)`;
    functionX = countDown;
    for (let i = 0; i < 6; i++) {
      if (days.children[i].classList.contains("count-use")) {
        days.children[i].classList.remove("count-use");
      }
    }

    days.children[5].classList.add("count-use");
    countDownParent.style.display = "flex";

    countDownParent.classList.remove("new-year-style");
    countDownChildren.forEach((element) => {
      element.classList.add("chinese-style");
      element.classList.remove("chrismas-style");
      element.classList.remove("eid-style");
      element.classList.remove("seclusion-style");
      element.classList.remove("vesak-style");
    });
  } else if (e.target.classList.contains("back")) {
    document.body.style.backgroundImage = `url(../image/image/indonesia.jpg)`;

    for (let i = 0; i < 6; i++) {
      if (days.children[i].classList.contains("count-use")) {
        days.children[i].classList.remove("count-use");
      }
    }

    functionX = clock;
    clockParent.style.display = "flex";
    dateParent.style.display = "flex";
    countDownParent.style.display = "none";
  }
});

function applyContents(day, hour, minute, second) {
  countDownChildren[0].innerHTML = day;
  countDownChildren[1].innerHTML = hour;
  countDownChildren[2].innerHTML = minute;
  countDownChildren[3].innerHTML = second;
}

let newYearArgument = 2022;
let eidYearArgument = 2023;
let chrismasYearArgument = 2023;
let seclusionYearArgument = 2023;
let vesakYearArgument = 2023;
let chineseYearArgument = 2023;

setInterval(() => {
  if (days.children[0].classList.contains("count-use")) {
    let temporary = functionX(`${newYearArgument}`, 0, 1, 0, 0, 0, 0);
    if (temporary[4] < 0) {
      newYearArgument = newYearArgument + 1;
    }

    let [day, hour, minute, second] = functionX(
      `${newYearArgument}`,
      0,
      1,
      0,
      0,
      0,
      0
    );

    if (day < 10) {
      day = "0" + day;
    }

    if (hour < 10) {
      hour = "0" + hour;
    }

    if (minute < 10) {
      minute = "0" + minute;
    }

    applyContents(day, hour, minute, second);
    clockParent.style.display = "none";
    dateParent.style.display = "none";
  } else if (days.children[1].classList.contains("count-use")) {
    let temporary = functionX(`${eidYearArgument}`, 3, 21, 0, 0, 0, 0);
    if (temporary[4] < 0) {
      eidYearArgument + 1;
    }

    let [day, hour, minute, second] = functionX(
      `${eidYearArgument}`,
      3,
      21,
      0,
      0,
      0,
      0
    );

    applyContents(day, hour, minute, second);
    clockParent.style.display = "none";
    dateParent.style.display = "none";
  } else if (days.children[2].classList.contains("count-use")) {
    let temporary = functionX(`${chrismasYearArgument}`, 11, 25, 0, 0, 0, 0);
    if (temporary[4] < 0) {
      chrismasYearArgument = chrismasYearArgument + 1;
    }

    let [day, hour, minute, second] = functionX(
      `${chrismasYearArgument}`,
      11,
      25,
      0,
      0,
      0,
      0
    );

    applyContents(day, hour, minute, second);
    clockParent.style.display = "none";
    dateParent.style.display = "none";
  } else if (days.children[3].classList.contains("count-use")) {
    let temporary = functionX(`${seclusionYearArgument}`, 2, 22, 0, 0, 0, 0);
    if (temporary[4] < 0) {
      seclusionYearArgument = seclusionYearArgument + 1;
    }

    let [day, hour, minute, second] = functionX(
      `${seclusionYearArgument}`,
      2,
      22,
      0,
      0,
      0,
      0
    );
    applyContents(day, hour, minute, second);
    clockParent.style.display = "none";
    dateParent.style.display = "none";
  } else if (days.children[4].classList.contains("count-use")) {
    let temporary = functionX(`${vesakYearArgument}`, 5, 4, 0, 0, 0, 0);
    if (temporary[4] < 0) {
      vesakYearArgument = vesakYearArgument + 1;
    }

    let [day, hour, minute, second] = functionX(
      `${vesakYearArgument}`,5,4,0,0,0,0
      );

    applyContents(day, hour, minute, second);
    clockParent.style.display = "none";
    dateParent.style.display = "none";
  } else if (days.children[5].classList.contains("count-use")) {
    let temporary = functionX(`${chineseYearArgument}`, 0, 22, 0, 0, 0, 0);
    if (temporary[4] < 0) {
      chineseYearArgument = chineseYearArgument + 1;
    }

    let [day, hour, minute, second] = functionX(
      `${chineseYearArgument}`,
      0,
      22,
      0,
      0,
      0,
      0
    );

    applyContents(day, hour, minute, second);
    clockParent.style.display = "none";
    dateParent.style.display = "none";
  } else {
    functionX();
  }
}, 1000);
