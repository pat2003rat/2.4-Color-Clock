(function(){
  "use strict";

var isHovering = false;

function clock() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

      if (hours>12){hours = hours - 12;}
      if (hours<10){hours = "0" + hours}
      if (minutes<10){minutes = "0" + minutes}
      if (seconds <10){seconds = "0" + seconds}

// document.getElementById("hours").textContent=hours+":";
// document.getElementById("minutes").textContent=minutes+":";
// document.getElementById("seconds").textContent=seconds ;

var timeLine = seconds * (1/60) * 100;

document.getElementById("timeFlies").style.width = timeLine + "%";


var colorHours= hours.toString(16);
var colorMinutes = minutes.toString(16);
var colorSeconds = seconds.toString(16);

var color = "#" + colorHours + colorMinutes + colorSeconds;

if(isHovering){
  document.getElementById("hours").textContent=colorHours + ":";
  document.getElementById("minutes").textContent=colorMinutes + ":";
  document.getElementById("seconds").textContent=colorSeconds;
}else{

  document.getElementById("hours").textContent=hours+":";
  document.getElementById("minutes").textContent=minutes+":";
  document.getElementById("seconds").textContent=seconds ;
}

document.body.style.backgroundColor = color;
}

function handleMouseOver(){
  isHovering = true;
}

function handleMouseOut(){
  isHovering = false
}

var clockFace = document.getElementById("timeclock");
clockFace.addEventListener("mouseover", handleMouseOver);
clockFace.addEventListener("mouseout", handleMouseOut);
// if(isHovering){
//   clockDisplay = clock(hours, minutes, seconds)
// }else{
//   clockDisplay = clock(hours,minutes,seconds)
// }
setInterval(clock, 20);

 }());
