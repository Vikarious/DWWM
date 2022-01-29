window.addEventListener("load", function() {
  document.getElementById("button-start-stop").addEventListener("click",
    function() {
      isStarted = !isStarted;
      if(isStarted == true) {
        startTime();
      }
      else {
        stopTime();
      }
    }
  );
  document.getElementById("button-reset").addEventListener("click", resetTime);
  setInterval(checkActiveElement, 100);
});

var isStarted = false;
var isReset = true;

var sTime;
var elapsedTime = 0;
var lapCount = 0;

var intervalId;
var buttonIntervalId;

function startTime() {
  sTime = new Date().getTime();
  clearInterval(intervalId);
  intervalId = setInterval(displayTime, 72);
}

function stopTime() {
  clearInterval(intervalId);
  displayTime();

  elapsedTime += getDeltaTime();
}

function resetTime() {
  clearInterval(intervalId);
  isStarted = false;
  elapsedTime = 0;
  lapCount = 0;

  document.getElementById('time').innerHTML = "00:00:00";
  document.getElementById('millisec').innerHTML = "000";
  document.getElementById('lap').innerHTML = "";

  // If media matches, slide containers a little bit.
  var media = window.matchMedia("(max-width: 480px)");
  if(media.matches == true) {
    document.getElementsByClassName('button-container')[0].style.top = "55%";
    document.getElementsByClassName('container')[0].style.minHeight = "50%";
    document.getElementsByClassName('information')[0].style.minHeight = "50%";
  }
}

function recordLapTime() {
  if(isStarted == false)
    return;
      
  elapsedTime += getDeltaTime();
  var timeArr = getTimeAsString(elapsedTime);
  sTime = new Date().getTime();

  document.getElementById('lap').innerHTML =
  "<pre>#" + (++lapCount) + ((lapCount < 100) ? "\t    " : "    ") + timeArr[0] +
  "." + timeArr[1] + "</pre>" + document.getElementById('lap').innerHTML;

  var media = window.matchMedia("(max-width: 480px)");
  if(media.matches == true) {
    document.getElementsByClassName('button-container')[0].style.top = "45%";
    document.getElementsByClassName('container')[0].style.minHeight ="60%";
    document.getElementsByClassName('information')[0].style.minHeight ="40%";
  }
}

function getDeltaTime() {
  var endTime = new Date().getTime();
  return endTime - sTime;
}

function displayTime() {
  var delta = elapsedTime + getDeltaTime();
  var timeArr = getTimeAsString(delta);

  document.getElementById('time').innerHTML = timeArr[0];
  document.getElementById('millisec').innerHTML = timeArr[1];
}

function getTimeAsString(time) {
  var ms = addLeadingZeros(time % 1000, 3);
  time = parseInt(time / 1000);
  var sec = addLeadingZeros(time % 60, 2);
  time = parseInt(time / 60);
  var min = addLeadingZeros(time % 60, 2);
  time = parseInt(time / 60);
  var hour = addLeadingZeros(time % 60, 2);

  var timeArr = [];
  timeArr.push( hour + ":" + min + ":" + sec );
  timeArr.push( ms );

  return timeArr;
}

function addLeadingZeros(num, fixedLen) {
  var ret = "";
  var temp = num;
  var numLen = 0;

  while(num != 0 && temp != 0) {
    numLen++;
    temp = parseInt(temp / 10);
  }

  for(var i = 0; i < fixedLen - numLen; i++) {
    ret += "0";
  }

  if(num != 0)
    ret += num;

  return ret;
}