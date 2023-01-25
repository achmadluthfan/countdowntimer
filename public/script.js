import { getData, convertDate, countDown, createElement } from "./function.js";

// Format & Zone event listener

// three dot & apply button
const selectFormatButton = document.querySelector(".select-format-button");
const formatZone = document.querySelector(".format-zone");
selectFormatButton.addEventListener("click", function () {
  formatZone.classList.add("format-show-style");
});

const applyButton = document.querySelector(".apply-format-zone");
applyButton.addEventListener("click", function () {
  formatZone.classList.remove("format-show-style");
});

// format & time zone that choses
const formatSection = document.querySelectorAll(".format > .format-choice *");
const zoneSection = document.querySelectorAll(
  ".time-zone > .timeZone-choice *"
);
formatZone.addEventListener("click", (e) => {
  if (e.target.classList.contains("format-choice")) {
    formatSection.forEach((element) => {
      element.classList.remove("chosen");
    });

    e.target.classList.add("chosen");
  } else if (e.target.classList.contains("timeZone-choice")) {
    zoneSection.forEach((element) => {
      element.classList.remove("chosen");
    });
    e.target.classList.add("chosen");
  }
});

// end Format & Zone event listener

// MAIN section



// clock & date section
const currentTimeSection = document.querySelector('.current-time');
// catch clock elements
const hourElement = document.querySelector(".hour");
const minuteElement = document.querySelector(".minute");
const secondElement = document.querySelector(".second");

// catch clock format
const twelveFormat = document.querySelector(".twelve-hour-format");

// catch date elements
const monthElement = document.querySelector(".month");
const dayElement = document.querySelector(".day-current");
const dateNumberElement = document.querySelector(".date-number");

setInterval(() => {
  // source data
  let clockData = getData();
  let month = new Date().getMonth();
  let day = new Date().getDay();
  let date = new Date().getDate();

  // inner clock data to html element
  if (clockData[0] < 10) {
    hourElement.innerHTML = "0" + clockData[0];
  } else {
    hourElement.innerHTML = clockData[0];
  }

  if (clockData[1] < 10) {
    minuteElement.innerHTML = "0" + clockData[1];
  } else {
    minuteElement.innerHTML = clockData[1];
  }

  secondElement.innerHTML = clockData[2];
  // convert number's day & month to name
  let convertedDate = convertDate(day, month);

  // inner date data to HTML
  monthElement.innerHTML = convertedDate[1];
  dayElement.innerHTML = convertedDate[0];
  dateNumberElement.innerHTML = date;

  // check format that chosen

  // check time zone that chosen
  if (zoneSection[1].classList.contains("chosen")) {
    clockData[0] += 1;
  } else if (zoneSection[2].classList.contains("chosen")) {
    clockData[0] += 2;
  }

  const convertHour = [
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

  // twelve format
  if (formatSection[0].classList.contains("chosen")) {
    if (clockData[0] < 12) {
      twelveFormat.innerHTML = "AM";
    } else {
      if (clockData[0] === 12) {
        clockData[0] = "00";
        hourElement.innerHTML = clockData[0];
      } else if (clockData[0] === 13) {
        clockData[0] = convertHour[0];
        hourElement.innerHTML = clockData[0];
      } else if (clockData[0] === 14) {
        clockData[0] = convertHour[1];
        hourElement.innerHTML = clockData[0];
      } else if (clockData[0] === 15) {
        clockData[0] = convertHour[2];
        hourElement.innerHTML = clockData[0];
      } else if (clockData[0] === 16) {
        clockData[0] = convertHour[3];
        hourElement.innerHTML = clockData[0];
      } else if (clockData[0] === 17) {
        clockData[0] = convertHour[4];
        hourElement.innerHTML = clockData[0];
      } else if (clockData[0] === 18) {
        clockData[0] = convertHour[5];
        hourElement.innerHTML = clockData[0];
      } else if (clockData[0] === 19) {
        clockData[0] = convertHour[6];
        hourElement.innerHTML = clockData[0];
      } else if (clockData[0] === 20) {
        clockData[0] = convertHour[7];
        hourElement.innerHTML = clockData[0];
      } else if (clockData[0] === 21) {
        clockData[0] = convertHour[8];
        hourElement.innerHTML = clockData[0];
      } else if (clockData[0] === 22) {
        clockData[0] = convertHour[9];
        hourElement.innerHTML = clockData[0];
      } else if (clockData[0] === 23) {
        clockData[0] = convertHour[10];
        hourElement.innerHTML = clockData[0];
      }
      twelveFormat.innerHTML = "PM";
    }
  } else {
    twelveFormat.innerHTML = "";
    hourElement.innerHTML = clockData[0];
  }

  // end of clock & date section
}, 1000);

// end of MAIN section

// back button event listener
const back = document.querySelector(".back");
back.addEventListener("click", function () {
  document.body.removeAttribute("style");
  currentTimeSection.classList.remove("hidden");
  countDownSection.classList.add("hidden");

  countDownChild.forEach(child => {
    if (!child.classList.contains("hidden")) {
      child.classList.add("hidden");
    };
  });
});

// end of back button event listener


// Day event listener
const days = document.querySelector(".days"),
eachDay = days.querySelectorAll(".day");

// CATCH COUNTDOWN PARENT
const countDownSection = document.querySelector('.countdown-section');
const countDownChild = document.querySelectorAll('.countdown-section > div')

let newyearYear = 2024, eidYear = 2023,chrismasYear = 2023, seclusionYear = 2023, vesakYear = 2023, chineseYear = 2023;

// CATCH NEW YEAR SECTION
const newYearLeftChild = document.querySelectorAll('.newyear-left > span');

// CATCH IN EID SECTION
const eidParent = document.querySelector('.eid-left'),
eidDayLeft = eidParent.querySelector('.eidDayLeft'),
eidHourLeft = eidParent.querySelector('.eidHourLeft'),
eidMinuteLeft = eidParent.querySelector('.eidMinuteLeft'),
eidSecondLeft = eidParent.querySelector('.eidSecondLeft');

// CATCH CHRISMAS SECTION
const chrismasLeftChild = document.querySelectorAll('.chrismas-left > span');

// CATCH SECLUSION SECTION
const seclusionLeftChild = document.querySelectorAll('.seclusion-left > span');

// CATCH VESAK SECTION
const vesakLeftChild = document.querySelectorAll('.vesak-left > span');

// CATCH CHINESE SECTION
const chineseLeftChild = document.querySelectorAll('.chinese-left > span');

// CATCH DATE CHOSEN SECTION
const dateChosen = document.querySelectorAll('.dateChosen > span.date-chosen');

days.addEventListener("click", function (e) {

  eachDay.forEach((eachDay) => {
    if (eachDay.classList.contains("day-chosen")) {
      eachDay.classList.remove("day-chosen");
    }
  });


  if (e.target.closest("#newyear") || e.target.textContent == " New Year ") {
    e.target.parentElement.classList.add("day-chosen");
    document.body.style.backgroundImage =
      "url('./image/image/final image/new-year.jpg')";
    document.body.style.backgroundPosition = "center";
    currentTimeSection.classList.add("hidden");
    countDownSection.classList.remove("hidden");

    countDownChild.forEach(child => {
      if (!child.classList.contains("hidden")) {
        child.classList.add("hidden");
      };
    });

    countDownChild[0].classList.remove("hidden");

  } else if (
    e.target.closest("#eid") ||
    e.target.textContent == " Eid Mubarak "
  ) {
    e.target.parentElement.classList.add("day-chosen");
    document.body.style.backgroundImage =
      "url('./image/image/final image/eid-mubarak-1.jpg')";
    document.body.style.backgroundPosition = "center";
    currentTimeSection.classList.add("hidden");
    countDownSection.classList.remove("hidden");

    countDownChild.forEach(child => {
      if (!child.classList.contains("hidden")) {
        child.classList.add("hidden");
      };
    });

    countDownChild[1].classList.remove("hidden");

  } else if (
    e.target.closest("#christmas") ||
    e.target.textContent == " Christmas "
  ) {
    e.target.parentElement.classList.add("day-chosen");
    document.body.style.backgroundImage =
      "url('./image/image/final image/chrismas.jpg')";
    document.body.style.backgroundPosition = "center";
    currentTimeSection.classList.add("hidden");
    countDownSection.classList.remove("hidden");

    countDownChild.forEach(child => {
      if (!child.classList.contains("hidden")) {
        child.classList.add("hidden");
      };
    });

    countDownChild[2].classList.remove("hidden");

  } else if (
    e.target.closest("#seclusion") ||
    e.target.textContent == " Seclusion "
  ) {
    e.target.parentElement.classList.add("day-chosen");
    document.body.style.backgroundImage =
      "url('./image/image/final image/prambanan.jpg')";
    document.body.style.backgroundPosition = "center";
    currentTimeSection.classList.add("hidden");
    countDownSection.classList.remove("hidden");

    countDownChild.forEach(child => {
      if (!child.classList.contains("hidden")) {
        child.classList.add("hidden");
      };
    });

    countDownChild[3].classList.remove("hidden");

  } else if (e.target.closest("#vesak") || e.target.textContent == " Vesak ") {
    e.target.parentElement.classList.add("day-chosen");
    document.body.style.backgroundImage =
      "url('./image/image/final image/borobudur.jpg')";
    document.body.style.backgroundPosition = "left";
    currentTimeSection.classList.add("hidden");
    countDownSection.classList.remove("hidden");

    countDownChild.forEach(child => {
      if (!child.classList.contains("hidden")) {
        child.classList.add("hidden");
      };
    });

    countDownChild[4].classList.remove("hidden");

  } else if (
    e.target.closest("#chinese") ||
    e.target.textContent == " Chinese New Year "
  ) {
    e.target.parentElement.classList.add("day-chosen");
    document.body.style.backgroundImage =
      "url('./image/image/final image/chinese.jpg')";
    document.body.style.backgroundPosition = "center";
    currentTimeSection.classList.add("hidden");
    countDownSection.classList.remove("hidden");

    countDownChild.forEach(child => {
      if (!child.classList.contains("hidden")) {
        child.classList.add("hidden");
      };
    });

    countDownChild[5].classList.remove("hidden");

  }
});

let countDownData;

setInterval(() => {
    eachDay.forEach(day => {
        if (day.classList.contains('new-year') && day.classList.contains('day-chosen')) {
            countDownData = countDown(newyearYear,0,1,0,0,0,0);
            
            if (countDownData[4] < 0) {
              newyearYear++
            }

            for (let i = 0; i < newYearLeftChild.length; i++) {
              newYearLeftChild[i].innerHTML = countDownData[i];
            };

            dateChosen[0].innerHTML = 1;
            dateChosen[1].innerHTML = 1;
            dateChosen[2].innerHTML = newyearYear;

            

        } else if(day.classList.contains('eid') && day.classList.contains('day-chosen')) {
          countDownData = countDown(eidYear,3, 21, 0, 0, 0, 0);
          
          dateChosen[0].innerHTML = 21;
          dateChosen[1].innerHTML = 4;
          dateChosen[2].innerHTML = eidYear;

          let dataNumber = countDownData.join('');
          
          let dayLeft = String(countDownData[0]).split("");
          let hourLeft = String(countDownData[1]).split("");
          let minuteLeft = String(countDownData[2]).split("");
          let secondLeft = String(countDownData[3]).split("");

          let eidElement = createElement(dataNumber.length, 'span');


          eidDayLeft.innerHTML = '';
          eidHourLeft.innerHTML = '';
          eidMinuteLeft.innerHTML = '';
          eidSecondLeft.innerHTML = '';

          let hourIndex = 0;
          let minuteIndex = 0;
          let secondIndex = 0;
          for (let i = 0; i <= eidElement.length; i++) {
            
            eidElement[i].classList.add('eid-span-style');

            if (i < dayLeft.length) {

              if (dayLeft.length == 1) {
                let zero = createElement(1, 'span', 'eid-span-style');
                zero[0].innerHTML = '0';
                eidDayLeft.append(zero, eidElement[i])
              }

              eidElement[i].innerHTML = dayLeft[i];
              eidDayLeft.append(eidElement[i])
            } else if(i < (dayLeft.length + hourLeft.length)) {

              if (hourLeft.length == 1) {
                let zero = createElement(1, 'span', 'eid-span-style');
                zero[0].innerHTML = '0';
                eidHourLeft.append(zero[0], eidElement[i]);
              }

              eidElement[i].innerHTML = hourLeft[hourIndex];
              hourIndex++;
              eidHourLeft.append(eidElement[i])
            } else if(i < (dayLeft.length + hourLeft.length + minuteLeft.length)) {

              if (minuteLeft.length == 1) {
                let zero = createElement(1, 'span', 'eid-span-style');
                zero[0].innerHTML = '0';
                eidMinuteLeft.append(zero[0], eidElement[i]);
              }

              eidElement[i].innerHTML = minuteLeft[minuteIndex];
              minuteIndex++;
              eidMinuteLeft.append(eidElement[i])
            } else if(i < (dayLeft.length + hourLeft.length + minuteLeft.length + secondLeft.length)) {

              if (secondLeft.length == 1) {
                let zero = createElement(1, 'span', 'eid-span-style');
                zero[0].innerHTML = '0';
                eidSecondLeft.append(zero[0], eidElement[i]);
              }

              eidElement[i].innerHTML = secondLeft[secondIndex];
              secondIndex++;
              eidSecondLeft.append(eidElement[i])
            }

          }
        
        } else if(day.classList.contains('christmas') && day.classList.contains('day-chosen')) {
          countDownData = countDown(chrismasYear, 11, 25, 0, 0, 0, 0);
          
          dateChosen[0].innerHTML = 25;
          dateChosen[1].innerHTML = 12;
          dateChosen[2].innerHTML = chrismasYear;

          for (let i = 0; i < chrismasLeftChild.length; i++) {
            chrismasLeftChild[i].innerHTML = countDownData[i];            
          };

          if (countDownData[4] < 0) {
            chrismasYear++;
          }

        } else if(day.classList.contains('seclusion') && day.classList.contains('day-chosen')) {
          countDownData = countDown(seclusionYear,2, 22, 0, 0, 0, 0);
          
          dateChosen[0].innerHTML = 22;
          dateChosen[1].innerHTML = 3;
          dateChosen[2].innerHTML = seclusionYear;

          for (let i = 0; i < seclusionLeftChild.length; i++) {
            seclusionLeftChild[i].innerHTML = countDownData[i];            
          };

          if (countDownData[4] < 0) {
            seclusionYear++;
          }

        } else if(day.classList.contains('vesak') && day.classList.contains('day-chosen')) {
          countDownData = countDown(vesakYear,5 ,4 ,0 ,0 ,0 ,0);
          
          dateChosen[0].innerHTML = 4;
          dateChosen[1].innerHTML = 6;
          dateChosen[2].innerHTML = vesakYear;

          for (let i = 0; i < vesakLeftChild.length; i++) {
            vesakLeftChild[i].innerHTML = countDownData[i];            
          };

          if (countDownData[4] < 0) {
            vesakYear++;
          }

        } else if(day.classList.contains('chinese') && day.classList.contains('day-chosen')) {
          countDownData = countDown(chineseYear,0, 22, 0, 0, 0, 0);
          
          if (countDownData[4] < 0) {
            chineseYear++;
          }

          dateChosen[0].innerHTML = 22;
          dateChosen[1].innerHTML = 1;
          dateChosen[2].innerHTML = chineseYear;

          for (let i = 0; i < chineseLeftChild.length; i++) {
            chineseLeftChild[i].innerHTML = countDownData[i];            
          };

          

        }
  });

}, 1000);

// END Day event listener