
//  ██████   ██████  ███████ ██████  ██████   █████  ██     ██ ██  █████  ███    ███ ██    ██
//  ██   ██ ██    ██    ███  ██   ██ ██   ██ ██   ██ ██     ██ ██ ██   ██ ████  ████  ██  ██
//  ██████  ██    ██   ███   ██   ██ ██████  ███████ ██  █  ██ ██ ███████ ██ ████ ██   ████
//  ██      ██    ██  ███    ██   ██ ██   ██ ██   ██ ██ ███ ██ ██ ██   ██ ██  ██  ██    ██
//  ██       ██████  ███████ ██████  ██   ██ ██   ██  ███ ███  ██ ██   ██ ██      ██    ██
                                                                                           
                                                                                           
//  ███    ███  █████  ███    ███ ███████
//  ████  ████ ██   ██ ████  ████ ██
//  ██ ████ ██ ███████ ██ ████ ██ █████
//  ██  ██  ██ ██   ██ ██  ██  ██ ██
//  ██      ██ ██   ██ ██      ██ ███████
//                                      ██                                                  
                                                                                           
//  ███    ███ ██  ██████ ██   ██  █████  ██       █████
//  ████  ████ ██ ██      ██   ██ ██   ██ ██      ██   ██
//  ██ ████ ██ ██ ██      ███████ ███████ ████    ███████
//  ██  ██  ██ ██ ██      ██   ██ ██   ██ ██      ██   ██
//  ██      ██ ██  ██████ ██   ██ ██   ██ ███████ ██   ██
                                                                                          
//      █████  
//  ██      ██ 
//       ████  
//  ██      ██ 
//      █████ 

lines = document.getElementById("lines");
numbers = document.getElementById("numbers");
hrsHand = document.getElementById("hrs-hand");
minsHand = document.getElementById("mins-hand");
secsHand = document.getElementById("secs-hand");
lines.innerHTML = "";
numbers.innerHTML = "";
try {
    clearInterval(timeCheck);
}
catch (err) {}
hrsHand.style.transform = `rotate(0deg)`;
minsHand.style.transform = `rotate(0deg)`;
secsHand.style.transform = `rotate(0deg)`;