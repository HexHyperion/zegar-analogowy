document.querySelectorAll("input").forEach(e => {
    e.addEventListener("click", () => swap());
});

function changeStyle(cssFile){
    document.getElementById("temp-style").href = cssFile;
}
function changeScript(jsFile){
    document.getElementById("temp-script").remove();
    let script = document.createElement("script");
    script.src = jsFile;
    script.id = "temp-script";
    document.body.appendChild(script);
}

function swap(){
    if(document.querySelector("#steps label:nth-child(1) input").checked){
        document.querySelector("#code > :nth-child(1)").style.display="block";
        document.querySelectorAll("#code > :not(:nth-child(1))").forEach(e => {
            e.style.display = "none";
        });
        changeStyle("css/preview-style-0.css");
        changeScript("js/preview-script-0.js");
    }
    else if(document.querySelector("#steps label:nth-child(2) input").checked){
        document.querySelectorAll("#code > :not(:nth-child(2))").forEach(e => {
            e.style.display = "none";
        });
        document.querySelector("#code > :nth-child(2)").style.display="block";
        changeStyle("css/preview-style-1.css");
        changeScript("js/preview-script-0.js");
    }
    else if(document.querySelector("#steps label:nth-child(3) input").checked){
        document.querySelectorAll("#code > :not(:nth-child(3))").forEach(e => {
            e.style.display = "none";
        });
        document.querySelector("#code > :nth-child(3)").style.display="block";
        changeStyle("css/preview-style-2.css");
        changeScript("js/preview-script-0.js");
    }
    else if(document.querySelector("#steps label:nth-child(4) input").checked){
        document.querySelectorAll("#code > :not(:nth-child(4))").forEach(e => {
            e.style.display = "none";
        });
        document.querySelector("#code > :nth-child(4)").style.display="block";
        changeStyle("css/preview-style-3.css");
        changeScript("js/preview-script-0.js");
    }
    else if(document.querySelector("#steps label:nth-child(5) input").checked){
        document.querySelectorAll("#code > :not(:nth-child(5))").forEach(e => {
            e.style.display = "none";
        });
        document.querySelector("#code > :nth-child(5)").style.display="block";
        changeStyle("css/preview-style-4.css");
        changeScript("js/preview-script-0.js");
    }
    else if(document.querySelector("#steps label:nth-child(6) input").checked){
        document.querySelectorAll("#code > :not(:nth-child(6))").forEach(e => {
            e.style.display = "none";
        });
        document.querySelector("#code > :nth-child(6)").style.display="block";
        changeStyle("css/preview-style-4.css");
        changeScript("js/preview-script-1.js");
    }
    else if(document.querySelector("#steps label:nth-child(7) input").checked){
        document.querySelectorAll("#code > :not(:nth-child(7))").forEach(e => {
            e.style.display = "none";
        });
        document.querySelector("#code > :nth-child(7)").style.display="block";
        changeStyle("css/preview-style-5.css");
        changeScript("js/preview-script-1.js");
    }
    else if(document.querySelector("#steps label:nth-child(8) input").checked){
        document.querySelectorAll("#code > :not(:nth-child(8))").forEach(e => {
            e.style.display = "none";
        });
        document.querySelector("#code > :nth-child(8)").style.display="block";
        changeStyle("css/preview-style-5.css");
        changeScript("js/preview-script-2.js");
    }
}

function animateThings() {
    document.getElementById("clock-wrapper").style.animation = "szpin 10s cubic-bezier(1,0.01,1,1)";
    document.getElementById("flash-wrapper").style.animation = "flasz 10s cubic-bezier(1,0.06,1,1)";
    setTimeout(() => {
        document.location.href = "date.html";
    }, 9500)
}