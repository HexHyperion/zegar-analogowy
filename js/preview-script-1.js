lines.innerHTML = "";
numbers.innerHTML = "";
try {
    clearInterval(timeCheck);
}
catch (err) {}
hrsHand.style.transform = `rotate(0deg)`;
minsHand.style.transform = `rotate(0deg)`;
secsHand.style.transform = `rotate(0deg)`;


for (let i = 0; i < 60; i++) {
    if (i % 5 == 0) lines.innerHTML += `<div class="line big-line" style="transform: rotate(${6*i}deg) translateY(228px);"></div>`;
    else lines.innerHTML += `<div class="line" style="transform: rotate(${6*i}deg) translateY(230px);"></div>`;
}

for (let i = 1; i < 13; i++) {
    numbers.innerHTML += `<div class="number" style="transform: rotate(${30*i}deg) translateY(-180px);"><div style="transform: rotate(-${30*i}deg);">${i}</div></div>`;
}