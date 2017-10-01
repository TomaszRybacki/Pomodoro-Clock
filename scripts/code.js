/*jslint es6 */

// ON-OFF switch

const buttonElem = $("#switch");
const minutesElem = $(".rotatecircle-minutes");
const secondsElem = $(".rotatecircle-seconds");
let onOff;

buttonElem.on("click", function () {
    "use strict";
    if ($(this).hasClass("moveRight")) {
        $(this).toggleClass("moveRight");
        $(this).animate({left: "-=60"}, 1000);
        clearInterval(onOff);
    } else {
        $(this).toggleClass("moveRight");
        $(this).animate({left: "+=60"}, 1000);
        onOff = setInterval(update, 1000);
    }
    minutesElem.toggleClass("rotateMinutes");
    secondsElem.toggleClass("rotateSeconds");
    minutesElem.css("animation-duration", minutes * 60 + "s");

});

// Set time

const forwardElem = $("#forward");
const backwardElem = $("#backward");
const numberElem = $("#number");

const minutesDisplay = $("#minutes");
const secondsDisplay = $("#seconds");

let minutes = 5;
let seconds = 0;

forwardElem.on("click", function () {
    "use strict";
    if (minutes === 0 && seconds === 0) {
        buttonElem.css("pointer-events", "auto");
        halfcircleElem.css("background-color", "hsl(225, 13%, 10%)");
        secondsElem.css("background-color", "hsl(225, 13%, 10%)");
    }

    if (minutes < 25) {
        minutes += 1;
        seconds = 0;
        if (minutes < 10) {
            numberElem.text("0" + minutes);
            minutesDisplay.text("0" + minutes);
            secondsDisplay.text("00");
        } else {
            numberElem.text("" + minutes);
            minutesDisplay.text("" + minutes);
            secondsDisplay.text("00");
        }
    }

});

backwardElem.on("click", function () {
    "use strict";
    if (minutes > 1) {
        minutes -= 1;
        seconds = 0;
        if (minutes < 10) {
            numberElem.text("0" + minutes);
            minutesDisplay.text("0" + minutes);
            secondsDisplay.text("00");
        } else {
            numberElem.text("" + minutes);
            minutesDisplay.text("" + minutes);
            secondsDisplay.text("00");
        }
    }

});

// function

const halfcircleElem = $(".halfcircle-seconds");

function update() {
    "use strict";
    if (seconds === 0) {
        minutes -= 1;
        seconds = 60;
    }

    seconds -= 1;

    // text display

    if (minutes >= 10) {
        minutesDisplay.text("" + minutes);
    }
    if (minutes < 10) {
        minutesDisplay.text("0" + minutes);
    }
    if (seconds >= 10) {
        secondsDisplay.text("" + seconds);
    }
    if (seconds < 10) {
        secondsDisplay.text("0" + seconds);
    }

    if (minutes === 0 && seconds === 0) {
        clearInterval(onOff);
        halfcircleElem.css("background-color", "hsl(360, 88%, 50%)");
        secondsElem.css("background-color", "hsl(360, 88%, 50%)");
        minutesElem.toggleClass("rotateMinutes");
        secondsElem.toggleClass("rotateSeconds");
        buttonElem.toggleClass("moveRight");
        buttonElem.animate({left: "-=60"}, 1000);
        buttonElem.css("pointer-events", "none");
    }
}
