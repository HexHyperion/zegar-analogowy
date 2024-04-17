lines = document.getElementById("lines");
hrsHand = document.getElementById("hrs-hand");
minsHand = document.getElementById("mins-hand");
secsHand = document.getElementById("secs-hand");
lines.innerHTML = "";
try {
    clearInterval(timeCheck);
}
catch (err) {}
hrsHand.style.transform = `rotate(0deg)`;
minsHand.style.transform = `rotate(0deg)`;
secsHand.style.transform = `rotate(0deg)`;

lines.innerHTML = "";
try {
    clearInterval(timeCheck);
}
catch (err) {}

for (let i = 0; i < 60; i++) {
    if (i % 5 == 0) lines.innerHTML += `<div class="line big-line" style="transform: rotate(${6*i}deg) translateY(228px);"></div>`;
    else lines.innerHTML += `<div class="line" style="transform: rotate(${6*i}deg) translateY(230px);"></div>`;
}

// for (let i = 1; i < 13; i++) {
//     numbers.innerHTML += `<div class="number" style="transform: rotate(${30*i}deg) translateY(-180px);"><div style="transform: rotate(-${30*i}deg);">${i}</div></div>`;
// }

function setDate(){
    const now = new Date();
    const hrs = now.getHours();
    const mins = now.getMinutes();
    const secs = now.getSeconds();
    
    const hrsDeg = hrs * 30 + mins * 0.5;
    const minsDeg = mins * 6 + secs * 0.1;
    const secsDeg = secs * 6;

    hrsHand.style.transform = `rotate(${hrsDeg}deg)`;
    minsHand.style.transform = `rotate(${minsDeg}deg)`;
    secsHand.style.transform = `rotate(${secsDeg}deg)`;
}

var timeCheck = setInterval(setDate, 100);