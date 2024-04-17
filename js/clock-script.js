// 2, 4, 7 overflow
// na pilocie PageDown dalej, PageUp wstecz, F5 lewy fn, . prawy fn
// wyłączenie odświeżania na F5
document.addEventListener("keydown", (e) => {if (e.key == "F5") e.preventDefault();});

function pageControl(event){
    let key = event.key;
    if (key == "PageUp" || key == "ArrowLeft"){
        if (document.querySelector("#steps label:nth-child(1) input").checked) {
            window.location.href = "date.html";
        }
        else {
            let inputs = document.querySelectorAll("#steps label input");
            let inputIndex;
            for (let i = 0; i < inputs.length; i++){
                if (inputs[i].checked) {
                    inputIndex = i+1;
                    break;
                }
            }
            document.querySelector(`#steps label:nth-child(${inputIndex}) input`).checked = false;
            document.querySelector(`#steps label:nth-child(${inputIndex-1}) input`).checked = true;
            swap();
        }
    }
    else if (key == "PageDown" || key == "ArrowRight"){
        if (document.querySelector("#steps label:last-child input").checked) {
            window.location.href = "bye.html";
        }
        else {
            let inputs = document.querySelectorAll("#steps label input");
            let inputIndex;
            for (let i = 0; i < inputs.length; i++){
                if (inputs[i].checked) {
                    inputIndex = i+1;
                    break;
                }
            }
            document.querySelector(`#steps label:nth-child(${inputIndex}) input`).checked = false;
            document.querySelector(`#steps label:nth-child(${inputIndex+1}) input`).checked = true;
            swap();
        }
    }
    else if (key == "F5"){
        let elemIndex
        if (document.querySelector("#steps label:nth-child(2) input").checked) elemIndex = 2;
        else if (document.querySelector("#steps label:nth-child(4) input").checked) elemIndex = 4;
        else if (document.querySelector("#steps label:nth-child(7) input").checked) elemIndex = 7;
        document.querySelector(`#code pre:nth-child(${elemIndex})`).scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    else if (key == "."){
        let elemIndex
        if (document.querySelector("#steps label:nth-child(2) input").checked) elemIndex = 2;
        else if (document.querySelector("#steps label:nth-child(4) input").checked) elemIndex = 4;
        else if (document.querySelector("#steps label:nth-child(7) input").checked) elemIndex = 7;
        document.querySelector(`#code pre:nth-child(${elemIndex})`).scrollTo({
            top: document.querySelector(`#code pre:nth-child(${elemIndex})`).scrollHeight,
            behavior: "smooth"
        })
    }
}
